[resource-hoc](https://instacart.github.io/Snacks/)
=========================
[![license](https://img.shields.io/npm/l/ic-snacks.svg?style=flat-square)](https://github.com/instacart/Snacks/blob/master/LICENSE)
[![CircleCI](https://circleci.com/gh/instacart/resource-hoc.svg?style=shield&circle-token=6636e6a2f92ba1b5d0dbfd048f1690da7495e5bf)](https://circleci.com/gh/instacart/resource-hoc)

Convenient Higher Order Component for React elements utilizing the Redux-Rails middleware
## Examples

#### Collection React Component
```javascript
import { resource, resourceProps } from 'resource-hoc'

@resource('comments')
class CommentSection extends Component {
  static propTypes = {
    comments: resourceProps.collection
  }

  componentDidMount() {
    this.props.comments.index({ queryParams: { deleted: false } })
  }

  handleCreate = (commentAttributes) => {
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
import { resource, resourceProps } from 'resource-hoc'

@resource('user')
class UserProfile extends Component {
  static propTypes = {
    user: resourceProps.member
  }

  handleChangeName = (name) => {
    const { id } = this.comments.attributes

    this.props.comments.update(id, { name })
  }

  render() {
    const { name, company } = this.props.comments.attributes

    return (
      <div>
        <NameField onSave={this.handleChangeName} />
        <CompanyDisplay company={company} />
      </div>
    )
  }
}
```
