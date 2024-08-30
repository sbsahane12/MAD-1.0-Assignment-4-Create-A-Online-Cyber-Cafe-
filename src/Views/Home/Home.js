import React from 'react';
import DocumentCard from '../../Components/DocumentCard/DocumentCard';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { DOCUMENTS } from '../../Config/Data';
import './Home.css';


function Home() {
  return (
    <div>
      <Navbar />
      <div className="document-container">
        {DOCUMENTS.map(document => (
          <DocumentCard
            title={document.title}
            img={document.img}
            price={document.price}
            description={document.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
