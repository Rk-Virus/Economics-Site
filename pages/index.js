// import { createClient } from "next-sanity";
import client from '../client'

// components 
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Aboutus from '../components/Aboutus';
// import Statuscounter from '../components/Statuscounter';
// import OurServices from '../components/OurServices';
// import Team from '../components/Team';
// import Faq from '../components/Faq';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts, authors, categories }) {
  // console.log(authors)
  return (
    <>
      <div >
        <Header />
        <Hero />


        <main id="main">
          <Aboutus />

          {/* <Statuscounter /> */}

          {/* <OurServices /> */}

          {/* <Team /> */}

          {/* <Faq /> */}

          <Blogs posts={posts} authors={authors} categories={categories} />

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
  const posts = await client.fetch(`*[_type == "post"]`);
  const authors = await client.fetch(`*[_type == "author"]`);
  const categories = await client.fetch(`*[_type == "category"]`);

  return {
    props: {
      posts,
      authors,
      categories
    }
  };
}


