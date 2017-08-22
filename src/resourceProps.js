import PropTypes from 'prop-types'

const actionProps = {
  index: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
  updateFilters: PropTypes.func.isRequired
}

const baseProps = {
  ...actionProps,
  loading: PropTypes.bool.isRequired,
  loadingError: PropTypes.string
}

const baseMember = {
  id: PropTypes.number,
  attributes: PropTypes.object
}

const member = PropTypes.shape({
  ...baseProps,
  ...baseMember
})

const collection = PropTypes.shape({
  ...baseProps,
  models: PropTypes.arrayOf(PropTypes.shape(baseMember))
})

export default {
  member,
  collection
}
