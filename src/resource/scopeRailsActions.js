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

const updateFilters = ({ stateProps = {}, dispatchProps, baseScoping }) => (queryParams) => {
  const lastQueryParam = stateProps.queryParams || {}

  return dispatchProps.index({
    ...baseScoping,
    queryParams: {
      ...lastQueryParam,
      ...queryParams
    }
  })
}

const scopeRailsActions = ({ stateProps, dispatchProps, resource, controller }) => {
  const baseScoping = {
    resource,
    controller
  }

  return {
    index: index({ baseScoping, dispatchProps }),
    show: show({ baseScoping, dispatchProps }),
    create: create({ baseScoping, dispatchProps }),
    update: update({ baseScoping, dispatchProps }),
    destroy: destroy({ baseScoping, dispatchProps }),
    updateFilters: updateFilters({ stateProps, baseScoping, dispatchProps })
  }
}

export default scopeRailsActions
