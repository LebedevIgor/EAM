import React from 'react';
import classes from './FormikInput.module.scss';
import { Field, ErrorMessage } from 'formik';

const FormikInput = ({ label, name, onChange }) => {
  return (
    <div className={classes.formik_input}>
      <label htmlFor={name}>{label}</label>
      {onChange && (
        <Field
          id={name}
          name={name}
          type={name}
          autoComplete={'current-password'}
          onChange={onChange}
        />
      )}
      {!onChange && (
        <Field
          id={name}
          name={name}
          type={name}
          autoComplete={'current-password'}
        />
      )}

      <ErrorMessage className={classes.error} name={name} component="div" />
    </div>
  );
};

export default FormikInput;
