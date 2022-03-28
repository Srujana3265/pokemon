// import logo from './logo.svg';
import React,{Fragment} from 'react';
import './App.css';
import Pokemon from './pokemon/Pokemon';



let App= () => {
  return (
  <Fragment>
   <h1>Welcome App component </h1>
   <Pokemon />
  </Fragment>
 
  );
}

export default App;
