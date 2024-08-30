import React from 'react';
import DocumentCard from '../../Components/DocumentCard/DocumentCard';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

function Home() {
  const DOCUMENTS = [
    {
      title: 'Pan Card',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 200,
      description:
        'The Permanent Account Number (PAN) card is a unique identifier issued to taxpayers in India. It is essential for financial transactions, filing taxes, and serves as a valid proof of identity.',
    },
    {
      title: 'Aadhar Card',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 150,
      description:
        'The Aadhar card is a biometric-based unique identification card issued by the Indian government. It contains demographic and biometric data, and is used for various services and welfare schemes.',
    },
    {
      title: 'Passport',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 1000,
      description:
        "A passport is an official document issued by a government, certifying the holder's identity and citizenship, and entitling them to travel under its protection to and from foreign countries.",
    },
    {
      title: 'Driving License',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 500,
      description:
        'The Driving License is an official document certifying that a person is authorized to drive a motor vehicle. It serves as proof of identity and age, and is mandatory for legal driving.',
    },
    {
      title: 'Voter ID Card',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 100,
      description:
        'The Voter ID card is issued by the Election Commission of India to adults of India, enabling them to vote in local, state, and national elections. It also serves as a proof of identity and address.',
    },
    {
      title: 'Ration Card',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 80,
      description:
        'The Ration Card is a document issued by the government for obtaining food grains and other essential commodities at subsidized rates. It also acts as a valid proof of identity and address.',
    },
    {
      title: 'Income Certificate',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 120,
      description:
        "An Income Certificate is an official document issued by the government, certifying a person's income. It is required for various government schemes, subsidies, and educational admissions.",
    },
    {
      title: 'Birth Certificate',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 200,
      description:
        'A Birth Certificate is an official document issued by the government that records the birth of a child. It serves as proof of age, identity, and nationality, and is required for various purposes.',
    },
    {
      title: 'Marriage Certificate',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 250,
      description:
        'The Marriage Certificate is an official document issued by the government that certifies the marriage of a couple. It is essential for legal recognition of marriage and various social benefits.',
    },
    {
      title: 'Property Registration Document',
      img: 'https://img.freepik.com/premium-photo/identity-card_540426-2717.jpg',
      price: 1500,
      description:
        'The Property Registration Document is an official record of the ownership of a property. It includes details like the property’s location, size, and the legal owner, and is vital for legal ownership.',
    },
  ];

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
