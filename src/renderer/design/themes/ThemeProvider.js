import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { light } from './light';

function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={light}>{children}</MuiThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
