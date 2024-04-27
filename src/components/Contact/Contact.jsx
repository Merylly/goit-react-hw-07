import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactItem}>
      <div className={css.contactWrap}>
        <div className={css.contactWrapper}>
          <BiSolidUser size="25" color="black" />
          <p className={css.contactText}>{contact.name}</p>
        </div>
        <div className={css.contactWrapper}>
          <BiSolidPhone size="25" color="black" />
          <p className={css.contactText}>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
