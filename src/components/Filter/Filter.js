import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as contactsAction from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onChange }) => (
  <label className="filter-label">
    Find contacts by name:
    <input className="filter-input" name="name" value={filter} onChange={onChange} />
  </label>
);

const mapStateToProps = ({ contacts: { filter } }) => ({ filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsAction.changeFilter(e.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
