import React from 'react';
import classes from './FormikInputType.module.scss';
import { Field, ErrorMessage } from 'formik';

const FormikInputDate = ({ label, name, type }) => {
  return (
    <div className={classes.formik_input_type}>
      <label htmlFor={name}>{label}</label>
      {type === 'number' ? (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Field
            id={name}
            name={name}
            type={type}
            autoComplete={'current-password'}
            min="0"
            max="100"
            className="percentage-input"
          />
          <span>%</span>
        </div>
      ) : (
        <Field
          id={name}
          name={name}
          type={type}
          autoComplete={'current-password'}
        />
      )}

      <ErrorMessage className={classes.error} name={name} component="div" />
    </div>
  );
};

export default FormikInputDate;
