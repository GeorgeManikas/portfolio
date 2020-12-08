import { CssBaseline } from '@material-ui/core'
import Head from 'next/head'
import Initials from '../components/Initials'
import ProfilePic from '../components/ProfilePic'
import Socials from '../components/Socials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio site</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="George Manikas Personal portofolio website" />
        
      </Head>
      <Socials /> 
      <ProfilePic /> 
      <Initials /> 
  </>
  )
}
