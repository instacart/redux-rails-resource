import scopeRailsActions from '../scopeRailsActions'
import { spy } from 'sinon'

describe('scopeRailsActions', () => {
  const baseScoping = {
    resource: 'foo',
    controller: 'base'
  }

  const stateProps = {
    queryParams: { new: 'bax' }
  }

  const itDispatchesCorrectly = (type, dispatchArgs, expectedPayload)  => {
    const spyFn = spy()
    const formattedType = type === 'updateFilters' ? 'index' : type
    const dispatchProps = {
      [formattedType]: spyFn
    }
    const scopedActions = scopeRailsActions({stateProps, dispatchProps, ...baseScoping })
    const railsAction = scopedActions[type]

    Array.isArray(dispatchArgs) ? railsAction(...dispatchArgs) : railsAction(dispatchArgs)

    it('dispatches correctly', () => {
      expect(spyFn.lastCall.args[0]).toEqual(expectedPayload)
    })
  }

  describe('index', () => {
    const queryParams = { foo: 'bar' }
    itDispatchesCorrectly('index', queryParams, { ...baseScoping, queryParams })
  })

  describe('show', () => {
    const queryParams = { foo: 'bar' }
    const id = 4
    itDispatchesCorrectly('show', [id, queryParams], { ...baseScoping, queryParams, id })
  })

  describe('create', () => {
    const attributes = { bax: 'baz' }
    itDispatchesCorrectly('create', attributes, { ...baseScoping, attributes })
  })

  describe('update', () => {
    const attributes = { bax: 'baz' }
    const id = 2
    itDispatchesCorrectly('update', [id, attributes], { ...baseScoping, attributes, id })
  })

  describe('destroy', () => {
    const id = 9
    itDispatchesCorrectly('destroy', id, { ...baseScoping, id })
  })

  describe('updateFilters', () => {
    const partialQueryParam = { foo: 'bar' }
    const reduxQueryParams = stateProps.queryParams

    itDispatchesCorrectly('updateFilters', partialQueryParam, {
      ...baseScoping,
      queryParams: {
        ...reduxQueryParams,
        ...partialQueryParam
      }
    })
  })
})
