import jest from 'jest'

const railsActions = jest.genMockFromModule('railsActions')

railsActions.index = jest.fn()
railsActions.show = jest.fn()
railsActions.create = jest.fn()
railsActions.update = jest.fn()
railsActions.destroy = jest.fn()
railsActions.updateFilters = jest.fn()

export {
  railsActions
}
