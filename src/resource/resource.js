import { connect }      from 'react-redux'
import { railsActions } from 'redux-rails'

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

    return resourceData
  }

  const mapDispatchToProps = railsActions

  const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    [resourceName]: {
      ...getScopedActions(stateProps, dispatchProps, resourceName, getController(resourceName, resourceOptions, ownProps)),
      ...stateProps
    },
    ...ownProps
  })


  return WrappedComponent => (
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent)
  )
}

export default resource
