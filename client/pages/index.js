import Head from 'next/head'
import ButtonMenu from '../components/ButtonMenu'


export default function Home({menu}) {
  return (
    <>
      <Head>
        <title>Portfolio site</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="George Manikas Personal portofolio website" />
        
      </Head>
      
       {/* <pre> {JSON.stringify(menu,null,4)} </pre> */}
      <ButtonMenu menu={menu}/> 
  </>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/menus`)
  const data = await res.json()

  return {
    props: {
      menu : data 
    }
  }
}