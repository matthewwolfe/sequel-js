import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

function Form({ children, ...props }) {
  return <Formik {...props}>{children}</Formik>;
}

Form.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Form;
