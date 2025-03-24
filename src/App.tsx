import React from 'react';
import ImageSlider from './components/ImageSlider';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

//IMAGES
import BannerImageOne from './img/background1.jpg';
import BannerImageTwo from './img/background2.jpg';
import BannerImageThree from './img/background3.jpg';
import BannerImageFour from './img/background4.jpg';
import BannerImageFive from './img/background5.jpg';
import BannerImageSix from './img/background6.jpg';
import BannerImageSeven from './img/background7.jpg';
import BannerImageEight from './img/background8.jpg';
import BannerImageNine from './img/background9.jpg';
import BannerImageTen from './img/background10.jpg';

function App() {
  const images = [
    BannerImageOne,
    BannerImageTwo,
    BannerImageThree,
    BannerImageFour,
    BannerImageFive,
    BannerImageSix,
    BannerImageSeven,
    BannerImageEight,
    BannerImageNine,
    BannerImageTen
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-screen">
        <ImageSlider images={images} />
        <div className="title-section absolute inset-0 flex items-center justify-center z-10">
          <h1 className="title text-center leading-tight">
            BALDASSI &<br />ASSOCIATES
            <div className="sub-title text-base mt-2 font-light">Criminal Defense Firm</div>
          </h1>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;