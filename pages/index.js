import Head from 'next/head'
import { createClient } from "next-sanity";

// components 
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Aboutus from '../components/Aboutus';
import Statuscounter from '../components/Statuscounter';
import OurServices from '../components/OurServices';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Faq from '../components/Faq';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import CallToAction from '../components/CallToAction';
import Clients from '../components/Clients';

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ pets }) {
  return (
    <>
      <Head>
        <title>Ekonopro</title>
        <meta charset="utf-8" />
        <meta name="description" content="Economics handles the world behind the scene, from a coin to world bank" />
        <meta content="economics" name="keywords" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- Favicons --> */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

        {/* <!-- Vendor CSS Files --> */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        {/* <!-- Template Main CSS File --> */}
        <link href="assets/css/main.css" rel="stylesheet" />

        {/* <!-- =======================================================
        * Template Name: Impact - v1.1.1
        * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
        * Author: BootstrapMade.com
        * License: https://bootstrapmade.com/license/
        ======================================================== --> */}

      </Head>
      <div >

        <Header />
        <Hero />


        <main id="main">
          <Aboutus />

          <Clients />

          <Statuscounter />

          <CallToAction />

          <OurServices />

          <Testimonials />

          <Team />

          <Faq />

          <Blogs />

          <Contact />

        </main>
        {/* <!-- End #main --> */}

        <Footer />
      </div >

      {/* <!-- Vendor JS Files --> */}
      < script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" ></script >
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      {/* <!-- Template Main JS File --> */}
      <script src="assets/js/main.js"></script>
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


