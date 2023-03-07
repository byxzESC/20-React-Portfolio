import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => {
    console.log(page)
    setCurrentPage(page);
  }
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='page'>
      {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
