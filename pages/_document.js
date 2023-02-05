import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        {/* <!-- Favicons --> */}
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

        

      </Head>
      <body>
        <Main />
        <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        <NextScript />
        {/* <!-- Vendor JS Files --> */}
        < Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" async></Script >
        <Script src="/assets/vendor/aos/aos.js" async></Script>
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" async></Script>
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" async></Script>
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" async></Script>
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" async></Script>
        <Script src="/assets/vendor/php-email-form/validate.js"></Script>

        {/* <!-- Template Main JS File --> */}
        <Script src="/assets/js/main.js" async></Script>
      </body>
    </Html>
  )
}
