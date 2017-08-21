const index =  ({ dispatchProps, baseScoping }) => queryParams => (
  dispatchProps.index({
    ...baseScoping,
    queryParams
  })
)

const show = ({ dispatchProps, baseScoping }) => (id, queryParams) => (
  dispatchProps.show({
    ...baseScoping,
    id,
    queryParams
  })
)

const update = ({ dispatchProps, baseScoping }) => (id, attributes) => (
  dispatchProps.update({
    ...baseScoping,
    id,
    attributes
  })
)

const create = ({ dispatchProps, baseScoping }) => attributes => (
  dispatchProps.create({
    ...baseScoping,
    attributes
  })
)

const destroy = ({ dispatchProps, baseScoping }) => id => (
  dispatchProps.destroy({
    ...baseScoping,
    id
  })
)

const updateFilters = ({ stateProps, dispatchProps, baseScoping }) => (queryParams) => {
  const lastQueryParam = stateProps.queryParams || {}

  return dispatchProps.index({
    ...baseScoping,
    queryParams: {
      ...lastQueryParam,
      ...queryParams
    }
  })
}

const scopeRailsActions = ({ stateProps, dispatchProps, resourceName, controller }) => {
  const baseScoping = {
    resource: resourceName,
    controller
  }

  return {
    index: index({ baseScoping, dispatchProps }),
    show: show({ stateProps, dispatchProps, resourceName, controller }),
    create: create({stateProps, dispatchProps, resourceName, controller}),
    update: update({stateProps, dispatchProps, resourceName, controller}),
    destroy: destroy({stateProps, dispatchProps, resourceName, controller}),
    updateFilters: updateFilters({stateProps, dispatchProps, resourceName, controller})
  }
}

export default scopeRailsActions
