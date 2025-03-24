import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-serif mb-2">Baldassi & Associates</h3>
          <p className="text-sm text-gray-600">
            A criminal law firm dedicated to strong, fearless, effective advocacy.
          </p>
        </div>
        <div className="text-right">
          <h3 className="text-xl font-serif mb-2">Josephine Baldassi</h3>
          <p className="text-sm text-gray-600">
            M: 1 (647) 302-8232<br />
            O: 1 (416) 977-7100<br />
            EFax: 1 (437) 222-3500<br />
            Toll Free: 1 (877) 444-3434<br />
            Email: josephine@jbassociates.com
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-200">
        <div className="flex justify-center space-x-6 text-sm text-gray-500">
          <a href="https://www.instagram.com/baldassibaldassi/" className="hover:text-gray-700">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;