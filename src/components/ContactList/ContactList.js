import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as contactsAction from '../../redux/contacts/contacts-actions';
import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts, filter, onDeleteContact }) => (
  <ul className="contact-list">
    {contacts
      .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
      .map((contact) => {
        return (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => onDeleteContact(contact.id)}
          />
        );
      })}
  </ul>
);

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: items,
  filter: filter,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsAction.deleteContact(id)),
});

ContactList.defaultProps = {
  filter: '',
};

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
