import React from 'react';
import Head from 'next/head';
import HeroSectionContainer from '@/containers/herosectioncontainer';
import Highlights from '@/components/highlights';
import BenefitsHighlight from '@/containers/benefitsHighlight';
import GetPaid from '@/components/getPaid';
import SecurityContainer from '@/containers/securitycontainer';
import Layout from '@/layout/layout';


export default function Home (){
  return (
    <>
      <Head>
        <title>StreamBank | Online Banking</title>
        <link rel="icon" href="/bank.png" type="image/png" />
        <meta name="description" content="Welcome to Your Banking Website. Secure and reliable banking services." />
        <meta name="keywords" content="banking, finance, secure, online banking" />
        <meta property="og:title" content="StreamBank | Banking Website" />
        <meta property="og:description" content="Welcome to Your Banking Website. Secure and reliable banking services." />
        <meta property="og:type" content="website" />
      </Head>
      {/*Components of Home Page*/ }
     
   <Layout>
      <HeroSectionContainer/>
      <Highlights header="It’s Your Money  
Stop paying fees" paragraph='Fee Free Banking is possible'/>
      <BenefitsHighlight/>
    <GetPaid/>
    <SecurityContainer/>
    <Highlights header="A powerful routing
and payout engine" paragraph='Fee Free Banking is possible'/>
    </Layout>
   
    </>
  )
}
export async function getStaticProps() {
  
  return {
    props: {
    }
  };
}

