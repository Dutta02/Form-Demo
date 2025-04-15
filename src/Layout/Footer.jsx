import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} By Dutta </p>
        <small>Built with using React and Bootstrap</small>
      </div>
    </footer>
  );
}

export default Footer;
