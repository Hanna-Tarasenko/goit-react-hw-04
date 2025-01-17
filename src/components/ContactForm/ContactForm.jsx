import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const addSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("This field cannot be empty"),
    number: Yup.string().min(3).max(50).required("This field cannot be empty"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={addSchema}
      >
        {() => (
          <Form className={s.formAdd}>
            <label className={s.labelAdd} htmlFor="name">
              <span className={s.spanAdd}>Name</span>
              <Field
                type="text"
                name="name"
                id="name"
                className={s.fieldAdd}
              ></Field>
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>
            <label htmlFor="number" className={s.labelAdd}>
              <span className={s.spanAdd}>Number</span>
              <Field
                type="number"
                name="number"
                className={s.fieldAdd}
                id="number"
              ></Field>
              <ErrorMessage name="number" component="div" className={s.error} />
            </label>
            <button type="submit" className={s.btnAdd}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
