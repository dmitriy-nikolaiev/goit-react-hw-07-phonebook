import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onDelete }) => (
  <li className="contact-list-item">
    <span className="contact-name">{name}:</span>
    <span className="contact-number"> {number}</span>
    <button className="contact-delete-btn" onClick={onDelete}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactListItem;
