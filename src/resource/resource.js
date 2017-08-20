import { connect }      from 'react-redux'
import { railsActions } from 'redux-rails'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const getScopedActions = (stateProps, dispatchProps, resourceName, controller) => {
  const baseScoping = {
    resource: resourceName,
    controller
  }

  const update = (id, attributes) => (
    dispatchProps.update({
      ...baseScoping,
      id,
      attributes
    })
  )

  const create = attributes => (
    dispatchProps.create({
      ...baseScoping,
      attributes
    })
  )

  const destroy = id => (
    dispatchProps.destroy({
      ...baseScoping,
      id
    })
  )

  const index = queryParams => (
    dispatchProps.index({
      ...baseScoping,
      queryParams
    })
  )

  const show = (id, queryParams) => (
    dispatchProps.show({
      ...baseScoping,
      id,
      queryParams
    })
  )

  const lastQueryParam = stateProps.queryParams || {}
  const updateFilters = (queryParams) => {
    dispatchProps.index({
      ...baseScoping,
      queryParams: {
        ...lastQueryParam,
        ...queryParams
      }
    })
  }

  return {
    index,
    show,
    create,
    update,
    destroy,
    updateFilters
  }
}

const getController = (resourceName, { controller }, ownProps) => {
  if (!controller) { return resourceName }
  if (typeof controller === 'function') { return controller(ownProps) }
  return controller
}

const resource = (resourceName, resourceOptions = {}) => {
  const mapStateToProps = (state) => {
    const resourceData = state.resources[resourceName]
    if (!resourceData) {
      throw new Error(`${resourceName} is not registered in rails-redux resource config`)
    }

    if (resourceData.models) {
      resourceData.models = resourceData.models.map(({attributes, ...meta}) => ({ ...meta, ...attributes }))
    }
    return resourceData
  }

  const mapDispatchToProps = railsActions

  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const propWrapper = resourceOptions.propWrapper || resourceName
    return {
      [propWrapper]: {
        ...getScopedActions(stateProps, dispatchProps, resourceName, getController(resourceName, resourceOptions, ownProps)),
        ...stateProps
      },
      ...ownProps
    }
  }

  return WrappedComponent => {
    class Resource extends Component {
      componentDidMount() {
        if(resourceOptions.autoload) {
          // Defer execution to allow component to be painted and rendered
          setTimeout(() => {
            this.props[resourceName].index(resourceOptions.queryParams)
          }, 0)
        }
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    }

    const connectedComponent = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Resource)

    connectedComponent.WrappedComponent = WrappedComponent.WrappedComponent
      ? WrappedComponent.WrappedComponent
      : WrappedComponent

    return connectedComponent
  }
}

export default resource
