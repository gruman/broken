import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import { Container, Spinner } from 'react-bootstrap';

import countries from './json/countries';
import firstNames from './json/firstNames';
import hobbies from './json/hobbies';


function App() {
  const [firstName, setFirstName] = useState(0);
  const [country, setCountry] = useState(0);
  const [hobby1, setHobby1] = useState(0);
  const [hobby2, setHobby2] = useState(0);
  const [hobby3, setHobby3] = useState(0);
  const [loading, setLoading] = useState(true);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  useEffect(() => {
    if (!localStorage.getItem("firstName")) {
      let randFirstName = getRandomInt(0, firstNames.length);
      let randCountry = getRandomInt(0, countries.length);
      let randHobby1 = getRandomInt(0, hobbies.length);
      let randHobby2 = getRandomInt(0, hobbies.length);
      let randHobby3 = getRandomInt(0, hobbies.length);
      setFirstName(randFirstName);
      setCountry(randCountry);
      setHobby1(randHobby1);
      setHobby2(randHobby2);
      setHobby2(randHobby3);

      localStorage.setItem("firstName", randFirstName);
      localStorage.setItem("country", randCountry);
      localStorage.setItem("hobby1", randHobby1);
      localStorage.setItem("hobby2", randHobby2);
      localStorage.setItem("hobby3", randHobby3);
    }
    else
    {
      setFirstName(localStorage.getItem("firstName"));
      setCountry(localStorage.getItem("country"));
      setHobby1(localStorage.getItem("hobby1"));
      setHobby2(localStorage.getItem("hobby2"));
      setHobby2(localStorage.getItem("hobby3"));
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <>
      <Container style={{minHeight: "100vh"}}>
        <h1>Broken Identifier</h1>
        {
          loading ?
          <div style={{minHeight: "75vh", flexDirection: "column"}} className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" />
          <p class="lead">Analysing...</p>
          </div>
          :
          <div>
        <p class="lead">Your name is {firstNames[firstName]}.</p>
        <p class="lead">You live in {countries[country].name}.</p>
        <p class="lead">You enjoy {hobbies[hobby1].title}, {hobbies[hobby2].title}, and {hobbies[hobby3].title}.</p>
        </div>
        }
      </Container>
    </>
  );
}

export default App;
