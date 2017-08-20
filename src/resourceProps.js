import PropTypes from 'prop-types'

const baseProps = {
  loading: PropTypes.bool.isRequired,
  loadingError: PropTypes.bool
}

const member = {
  ...baseProps,
  id: PropTypes.number,
  attributes: PropTypes.object
}

const collection = {
  ...baseProps,
  models: PropTypes.arrayOf(memberProps)
}

export default {
  member,
  collection
}
