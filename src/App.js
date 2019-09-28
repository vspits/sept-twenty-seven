import React from 'react';
import './App.css';
import Footer from './Components/Footer'
import Header from './Components/Header'
import ContactCard from './Components/ContactCard';
// import MainContent from './Components/MainContent'
// import ToDoItem from './Components/ToDoItem';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactCard name="Mr. Whiskerson" phone="999-999-9999" email="mr.whiskers@gmail.com"/>
      <Footer />
    </div>
  )
}

export default App;
