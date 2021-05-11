import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      // default: '#F4F6F8',
      default: '#555555',
      // paper: colors.common.white
      paper: '#9c9c9c'
    },
    primary: {
      contrastText: '#ffffff',
      // main: '#5664d2'
      main: '#2d2d34'
    },
    text: {
      primary: '#fff',
      // primary: '#172b4d',
      secondary: '#4c4c4c'
    }
  },
  shadows,
  typography
});

export default theme;
