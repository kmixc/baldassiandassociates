import React from 'react';
import ImageSlider from './components/ImageSlider';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const images = [
    'https://images.unsplash.com/photo-1504615755583-2916b52192a3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80',
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-screen">
        <ImageSlider images={images} />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-6xl font-serif text-red-900 text-center leading-tight">
            BALDASSI &<br />ASSOCIATES
            <div className="text-base mt-2 font-light">THE LAW OFFICE FIRM</div>
          </h1>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;