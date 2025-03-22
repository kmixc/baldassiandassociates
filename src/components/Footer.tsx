import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-serif mb-2">Baldassi & Associates</h3>
          <p className="text-sm text-gray-600">
            A boutique law firm providing legal solutions to<br />
            individuals and businesses in need of<br />
            experienced legal and strategic expertise.
          </p>
        </div>
        <div className="text-right">
          <h3 className="text-xl font-serif mb-2">Josephine Baldassi</h3>
          <p className="text-sm text-gray-600">
            Tel: (555) 444-3333<br />
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