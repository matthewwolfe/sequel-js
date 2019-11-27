import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import { useField } from 'formik';
import PropTypes from 'prop-types';

function TextField({ label, type = 'text', ...props }) {
  const [field] = useField(props);
  console.log(field);

  return (
    <MaterialTextField fullWidth label={label} margin="normal" type={type} />
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TextField;
