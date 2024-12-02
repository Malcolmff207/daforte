import React from 'react';
import NavBar from './components/NavBar'; // Adjust path based on your folder structure
import HomeSection from './components/HomeSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css'; // Optional CSS for general app styling
import './fontAwesomeSetup'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;


