[redux-rails-resource](https://instacart.github.io/redux-rails-resource/)
=========================

<strong>Convenient Higher Order Component for React elements utilizing [the Redux-Rails middleware](https://github.com/instacart/redux-rails/)</strong>

[![CircleCI](https://circleci.com/gh/instacart/Snacks.svg?style=shield)](https://circleci.com/gh/instacart/redux-rails-resource)
## Usage
`resource(resourceName: string, resourceOptions: object)(CustomComponent: ReactComponent)`

#### resourceName
The key of the corresponding resource in the redux state defined by the `redux-rails` config.

This will be used as both `resource` and `controller` when dispatching `railsAction`s
from `redux-rails`. (NOTE: `controller` can be explicitly set via `resourceOptions`)

The argument will also be the name of the key which will wrap everything passed down from
the `resource` hoc to the wrapped component.

#### resourceOptions

- autoload <bool>
  - Will dispatch an `index` call on `componentDidMount`. The sibling `queryParams`     attribute will be passed as an argument if defined
- queryParams <hash>
  - The optional argument to be passed to the `index` call if `autoload` is true
- controller <string | Function(props) => string>
  - Explicitly set the `controller` for `railsActions`.
    - If set to a function, it must take the component's props as an argument and return a string
- propWrapper
  - Explicitly set the name of the key which will wrap `resource` props
- onlyActions
  - Do not pass redux state, only the corresponding `railsActions`. This may be more performant if the component does not need access to state.

## Examples

#### Collection React Component
```javascript
import { resource, resourceProps } from 'redux-rails-resource'

@resource('comments')
class CommentSection extends Component {
  static propTypes = {
    comments: resourceProps.collection
  }

  componentDidMount() {
    // GET request to /comments?deleted=false
    // Stores the result in redux and updates this component's models
    this.props.comments.index({ queryParams: { deleted: false } })
  }

  handleCreate = (commentAttributes) => {
    // POST request to /comments
    // The body of the post request will be JSON string of commentAttributes
    this.props.comments.create(commentAttributes)
  }

  render() {
    const { models } = this.props.comments

    return (
      <div>
        <NewCommentForm onCreate={this.handleCreate} />
        <CommentList comments={models} />
      </div>
    )
  }
}
```

#### Member React Component
```javascript
import { resource, resourceProps } from 'redux-rails-resource'

@resource('user')
class UserProfile extends Component {
  static propTypes = {
    user: resourceProps.member
  }

  handleChangeName = (name) => {
    const { id } = this.comments.attributes

    // PUT request to /comments/:id
    // Second argument will be body of post request
    this.props.comments.update(id, { name })
  }

  render() {
    const { name, company } = this.props.comments.attributes

    return (
      <div>
        <NameField value={name} onSave={this.handleChangeName} />
        <CompanyDisplay company={company} />
      </div>
    )
  }
}
```

#### Paginated React Component
```javascript
import { resource, resourceProps } from 'redux-rails-resource'

@resource('posts', { autoload: true })
class PaginatedPosts extends Component {
  static propTypes = {
    posts: resourceProps.collection
  }

  handlePageChange = (page) => {
    this.props.comments.updateFilters({ page })
  }

  handleFilterSelect = (filter, value) => {
    this.props.comments.updateFilters({ [filter]: value })
  }

  render() {
    return (
      <div>
        <PaginationControl onPageChange={this.handlePageChange}
        <Filters onFilterSelect={this.handleFilterSelect}
        <PostList posts={this.posts.models} />
      </div>
    )
  }
}
```

## Actions
The `resource` hoc will pass down 5 functions as top level keys in the prop passed to the wrapped component: `index`, `update`, `create`, `destroy`, and `updateFilters`.

### index
`index(queryParams: object)`

### update
`update(id: number, queryParams: object)`

### create
`create(objectAttributes: object)`

### destroy
`destroy(id: number)`

### updateFilters
`updateFilters(partialQueryParams: object)`

updateFilter will merge the existing queryParams of the corresponding resource with
the `partialQueryParams` argument.
