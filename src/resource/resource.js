import { connect }      from 'react-redux'
import { railsActions } from 'redux-rails'

const getScopedActions = (dispatchProps, resourceName, controller) => {
  const baseScoping = {
    resource: resourceName,
    controller
  }

  const update = (id, attributes) => (
    dispatchProps.update({
      ...baseScoping,
      id
    })
  )

  const create = attributes => (
    dispatchProps.update({
      ...baseScoping,
      attributes
    })
  )

  const destroy = id => (
    dispatchProps.update({
      ...baseScoping,
      id
    })
  )

  const fetch = type => queryParams => (
    dispatchProps[type]({
      ...baseScoping,
      queryParams
    })
  )

  return {
    index: fetch('index'),
    show: fetch('show'),
    create,
    update,
    destroy
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
      ...getScopedActions(dispatchProps, resourceName, getController(resourceName, resourceOptions, ownProps)),
      ...stateProps
    },
    ...ownProps
  })


  return WrappedComponent => (
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent)
  )
}

export default resource
