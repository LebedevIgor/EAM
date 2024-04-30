import React from 'react';
import classes from './FormikTextArea.module.scss';
import { Field, ErrorMessage } from 'formik';

const FormikTextArea = ({ label, name, onChange }) => {
  return (
    <div className={classes.formik_text_area}>
      <label htmlFor={name}>{label}</label>
      {onChange && (
        <Field
          contenteditable
          as="textarea"
          id={name}
          name={name}
          autoComplete={'current-password'}
          onChange={onChange}
        />
      )}
      {!onChange && (
        <Field
          as="textarea"
          id={name}
          name={name}
          autoComplete={'current-password'}
        />
      )}

      <ErrorMessage className={classes.error} name={name} component="div" />
    </div>
  );
};

export default FormikTextArea;
