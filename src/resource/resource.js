import { connect }      from 'react-redux'
import { railsActions } from 'redux-rails'

const getScopedActions = (dispatchProps, controller) => {
  const baseScoping = {
    resource: controller,
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

const resource = (resourceName, resourceOptions) => {
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
      ...getScopedActions(dispatchProps, resourceName),
      ...stateProps
    },
    ...ownProps
  })


  return WrappedComponent => (
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent)
  )
}

export default resource
