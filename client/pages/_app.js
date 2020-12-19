import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MuiThemeProvider, makeStyles  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import Socials from '../components/Socials';
import Initials from '../components/Initials'
import ProfilePic from '../components/ProfilePic'
import { Hidden } from '@material-ui/core';
import Footer from '../components/Footer';
import Router from 'next/router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const useStyle = makeStyles( theme => ({
  divStyle : {
    '&::before':{
      content:"''",
      position: 'fixed',
    top: 0,
     left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/18/18/37/programming-1836330_960_720.png") ',
    // backgroundSize:'cover',
    backgroundRepeat:'repeat-y',
    backgroundPosition:'center bottom',
    filter: 'grayscale(100%) blur(2px)',
    opacity:'0.2',
    zIndex:'-100'

    }
  }
}))



export default function MyApp(props) {
  // bind events for loader *nprogress (npm i nprogress)
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

  const { Component, pageProps } = props;
  const classes = useStyle()
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        
      </Head>
      
      <MuiThemeProvider theme={theme}>
      
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Hidden smDown>
        <Socials />
        </Hidden>
        <div className={classes.divStyle}>
          <ProfilePic />
          <Initials /> 
        </div>
        <div>
        <DefaultSeo {...SEO} /> 
        <Component {...pageProps} />
        </div>
        <Footer /> 
      </MuiThemeProvider>
    </React.Fragment>
  );
}



MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};