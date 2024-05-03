import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
