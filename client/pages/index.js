import Head from 'next/head'
import ButtonMenu from '../components/ButtonMenu'
import {NextSeo} from 'next-seo'

export default function Home({menu}) {
  return (
    <>
      <Head>
       
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="George Manikas Personal portofolio website" />
        
      </Head>
      <NextSeo title="George Manikas Personal Page" description="George Manikas personal portfolio page" /> 
      
      <ButtonMenu menu={menu}/> 
  </>
  )
}

export const getStaticProps = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/menus`)
  const data = await res.json()

  return {
    props: {
      menu : data 
    }
  }
}