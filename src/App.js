import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PirateTheme from './themes/PirateTheme';
import { ToastProvider } from 'react-toast-notifications';
import useStyles from './themes/theme';

export default function App () {

  const classes = useStyles();

    return (
      <ThemeProvider theme={PirateTheme}>
        <ToastProvider placement={'bottom-center'}>
          <Router>
            <Route path="/" exact>
            </Route>
          </Router>
        </ToastProvider>
      </ThemeProvider>
    );
}