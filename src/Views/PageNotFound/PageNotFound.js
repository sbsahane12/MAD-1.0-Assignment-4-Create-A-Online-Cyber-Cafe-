import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div>
      <Navbar />
    <div className="page-not-found">
      <div className="content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="back-home">
          Go Back Home
        </Link>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default PageNotFound;
