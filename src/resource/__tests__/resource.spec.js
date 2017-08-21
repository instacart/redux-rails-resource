import { mount } from 'enzyme'
import resource from '../resource'
import React from 'react'
import { Provider }  from 'react-redux'
import { createStore } from 'redux'

const SampleComponent = () => {
  return <div>Test</div>
}

const renderComponent = (name) => {
  const WrappedComponent = resource(name)(SampleComponent)
  const baseCollectionState = {
    loading: false,
    loadingError: null,
    models: []
  }

  return mount(
    <Provider store={createStore(state => state,{ resources: {
      items: {
        ...baseCollectionState
      }
    } })}>
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
    const propKeys = ['loading', 'loadingError', 'models']
    const expectedKeys = expect.arrayContaining(propKeys)
    expect(Object.keys(resourceProps)).toEqual(expectedKeys)
  })
})
