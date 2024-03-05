import React from 'react';
import classes from './FormikInput.module.scss';
import { Field, ErrorMessage } from 'formik';

const FormikInput = ({ label, name }) => {
  return (
    <div className={classes.formik_input}>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        type={name}
        autoComplete={'current-password'}
      />
      <ErrorMessage className={classes.error} name={name} component="div" />
    </div>
  );
};

export default FormikInput;
