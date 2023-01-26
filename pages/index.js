import Head from 'next/head'
import { createClient } from "next-sanity";

// components 
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Aboutus from '../components/Aboutus';
import Statuscounter from '../components/Statuscounter';
import OurServices from '../components/OurServices';
import Team from '../components/Team';
import Faq from '../components/Faq';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ pets }) {
  return (
    <>
     
      <div >

        <Header />
        <Hero />


        <main id="main">
          <Aboutus />

          <Statuscounter />

          <OurServices />

          <Team />

          <Faq />

          <Blogs />

          <Contact />

        </main>
        {/* <!-- End #main --> */}

        <Footer />
        
      </div >

      
    </>
  )
}

const client = createClient({
  projectId: "lqz08o01",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "pet"]`);

  return {
    props: {
      pets
    }
  };
}


