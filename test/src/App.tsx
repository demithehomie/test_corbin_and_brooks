import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { render } from 'react-dom';

function App() {
  
  const people = [
    {
      name: "Albert",
      last_name: "Einstein",
      timeout: 10
    },
    {
      name: "Elon",
      last_name: "Musk",
      timeout: 15
    },
    {
      name: "Erwin",
      last_name: "Schrödinger",
      timeout: 12
    },
    {
      name: "Isaac",
      last_name: "Newton",
      timeout: 18
    },
    {
      name: "Nikola",
      last_name: "Tesla",
      timeout: 20
    },
    {
      name: "Marie",
      last_name: "Curie",
      timeout: 14
    },
    {
      name: "Werner",
      last_name: "Heisenberg",
      timeout: 16
    },
    {
      name: "Niels",
      last_name: "Bohr",
      timeout: 19
    },
    {
      name: "Robert",
      last_name: "Oppenheimer",
      timeout: 20
    },
  ];

  
 
   people.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

  
function test01() { 
  
  const show = people.forEach((e) => {
  console.log(`${e.name} ${e.last_name}`);
});





 
  return (
    <div className="App">
      <div>
        <h1>{show.map(({ name, last_name, timeout }) => (
        <p key={name}> {name}'s birthday is on {last_name} </p>
      ))}</h1>
    </div>
    </div>
  )
 
}

}

export default App
