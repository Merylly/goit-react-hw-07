import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

const contactsSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("This field is required!")
    .matches(/^[0-9]+$/, "Numbers only!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  const onAddContact = (formData) => {
    const finalContactCard = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addContact(finalContactCard));
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactsSchema}
      onSubmit={onHandleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formItem}>
          <p className={css.formTitle}>Name</p>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Mary Bayers"
          />
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <label className={css.formItem}>
          <p className={css.formTitle}>Number</p>
          <Field
            className={css.formInput}
            type="text"
            name="number"
            placeholder="655-17-79"
          />
          <ErrorMessage className={css.error} component="p" name="number" />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
