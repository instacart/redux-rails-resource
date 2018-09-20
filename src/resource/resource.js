import { connect } from 'react-redux'
import { railsActions } from 'redux-rails'
import React, { Component } from 'react'
import scopeRailsActions from './scopeRailsActions'

const getController = (resourceName, defaultController, ownProps) => {
  if (!defaultController) { return resourceName }
  if (typeof defaultController === 'function') { return defaultController(ownProps) }
  return defaultController
}

/**
 * Higher order component meant to wrap a react component.
 * Passes down a single prop which name spaces the corresponding state
 * and scoped actions.
 *
 * @param {string} resourceName - The key of the corresponding resource in the redux state.
 * @param {object} options - Configs, all are optional
 */
function resource (resourceName, {
  autoload,
  queryParams: initialQueryParams,
  onlyActions,
  propWrapper: defaultPropWrapper,
  controller: defaultController
} = {}) {
  const mapStateToProps = () => {
    let lastResourceData
    let lastResult
    
    return (state) => {
      const resourceData =  state.resources[resourceName]
      if (lastResourceData === resourceData) { return lastResult }

      if (!resourceData) {
        throw new Error(`${resourceName} is not registered in rails-redux resource config`)
      }
      lastResourceData = resourceData
      lastResult = { ...resourceData }

      if (lastResult.models) {
        lastResult.models = resourceData.models.map(({attributes, ...meta}) => ({ ...meta, ...attributes }))
      }

      return lastResult
    }
  }

  const mapDispatchToProps = railsActions

  const mergeProps = (stateProps = {}, dispatchProps, ownProps) => {
    const propWrapper = defaultPropWrapper || resourceName
    const controller = getController(resourceName, defaultController, ownProps)
    const scopedActions = scopeRailsActions({stateProps, dispatchProps, resource: resourceName, controller})

    return {
      [propWrapper]: {
        ...stateProps,
        ...scopedActions
      },
      ...ownProps
    }
  }

  return WrappedComponent => {

    class Resource extends Component {
      static WrappedComponent = WrappedComponent.WrappedComponent
        ? WrappedComponent.WrappedComponent
        : WrappedComponent

      componentDidMount() {
        if(autoload) {
          // Defer execution to allow component to be rendered while action is dispatched
          setTimeout(() => {
            this.props[resourceName].index(initialQueryParams)
          }, 0)
        }
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    }

    return connect(
      onlyActions ? null : mapStateToProps,
      mapDispatchToProps,
      mergeProps
    )(Resource)
  }
}

export default resource
