// import { createClient } from "next-sanity";
import { useInfoContext } from '../context/info'
import client from '../client'
import groq from 'groq'

// components 
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Aboutus from '../components/Aboutus';
// import Statuscounter from '../components/Statuscounter';
import OurServices from '../components/OurServices';
// import Team from '../components/Team';
// import Faq from '../components/Faq';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import News from '../components/News'
import Quizes from '../components/Quizes'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts, quizes }) {
  const {info} = useInfoContext();
  return (
    <>
    <title>{info.siteName}</title>
    
      <div >
        <Header />

        <Hero />

        <main id="main">
          <Aboutus />

          {/* <Statuscounter /> */}

          <OurServices />

          {/* <Team /> */}

          {/* <Faq /> */}

          <Blogs posts={posts} />

          {/* <News /> */}

          <Quizes quizes={quizes} />

          <Contact />

        </main>
        {/* <!-- End #main --> */}

        <Footer />
        
      </div >

      
    </>
  )
}

// const client = createClient({
//   projectId: "iuvwtgif",
//   dataset: "production",
//   apiVersion: "2022-03-25",
//   useCdn: false
// });

export async function getStaticProps() {
  const posts = await client.fetch(
    groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)`
    );
    const quizes = await client.fetch(
      groq`*[_type == "quiz" && publishedAt < now()] | order(publishedAt desc)`
      );

  return {
    props: {
      posts,
      quizes
    }
  };
}


