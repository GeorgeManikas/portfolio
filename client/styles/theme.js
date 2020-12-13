import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  
  palette: {
    
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#353535',
    },
    text:{
        primary: '#f0f5ff',
        title:'#fff'
        
    }
  },
  overrides:{ 
    MuiInput:{
      root:{
        marginBottom:'2em',
        "$focused":{
          "background":'#eee'
        }

      },
      
    },
    MuiButton:{
      root:{
        background:'#353535'
      }
    },
    MuiTypography:{
      h5:{
        fontFamily:'Open Sans Condensed'
      }
    },
    
    MuiCssBaseline: {
      "@global":{
        "body":{
          textRendering: `optimizeLegibility`,
          fontFamily:'Open Sans Condensed, DM Sans , Big Shoulders Stencil Display !important' 
          
        }
      }

    }
  }

  
});

export default theme;