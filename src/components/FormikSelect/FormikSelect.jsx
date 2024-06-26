import { ErrorMessage, Field } from 'formik';
import React from 'react';
import classes from './FormikSelect.module.scss';

const FormikSelect = ({ label, options, name, isMulti }) => {
  return (
    <div className={classes.formik_select}>
      <div className={classes.wrapper}>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} as="select" defaultValue={options[1]}>
          {options.map((option) => (
            <option
              value={option.value}
              key={option.value}
              disabled={option.disabled}
            >
              {option.label || option.value}
            </option>
          ))}
        </Field>
      </div>
      <ErrorMessage className={classes.error} name={name} component="div" />
    </div>
  );
};

export default FormikSelect;
