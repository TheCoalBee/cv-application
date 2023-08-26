import { useState } from 'react'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'

function App() {
  return (
    <>
      <Header className="header" name="Colby Ricks" phone="(951) 834-3085" address="12345 Fake Address, Murrieta, CA"/>
      <Section className="section" id='educational-experience' label='Educational Experience'/>
      <Section className="section" id='practical-experience' label='Practical Experience'/>
    </>
  );
}

export default App
