import { mount } from 'enzyme'
import resource from '../resource'
import React from 'react'
import { Provider }  from 'react-redux'
import { createStore } from 'redux'

const SampleComponent = () => {
  return <div>Test</div>
}

const baseCollectionState = {
  loading: false,
  loadingError: null,
  models: []
}

const renderComponent = (name) => {
  const WrappedComponent = resource(name)(SampleComponent)

  const startingState = {
    resources: {
      items: {
        ...baseCollectionState
      }
    }
  }
  const store = createStore(state => state, startingState)
  return mount(
    <Provider store={store} >
      <WrappedComponent />
    </Provider>
  )
}

describe('resouce', () => {
  const resourceName = 'items'
  const component = renderComponent(resourceName)
  const props = component.find('SampleComponent').props()
  const resourceProps = props[resourceName]

  it('pass down props scoped to the resource name', () => {
    expect(resourceProps).toBeDefined()
  })

  it('pass down scoped rails actions', () => {
    const propKeys = ['index', 'update', 'create', 'destroy', 'updateFilters']
    const expectedKeys = expect.arrayContaining(propKeys)
    expect(Object.keys(resourceProps)).toEqual(expectedKeys)
  })

  it('pass down resource redux state', () => {
    const propKeys = Object.keys(baseCollectionState)
    const expectedKeys = expect.arrayContaining(propKeys)
    expect(Object.keys(resourceProps)).toEqual(expectedKeys)
  })
})
