import React ,{useState,useEffect}from 'react';
import axios from 'axios';

const Pokemon = () => {
const [num , setNum] = useState();
const [name , setName] =useState();
const [moves , setMoves] = useState();
const ChangeEvent =(e)=>{
    setNum(e.target.value);
}
useEffect(()=>{
    // alert('hai');
    async function getData(){
        const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res);
        setName(res.data.name);
        setMoves(res.data.moves.length);
    }
    getData();
});
  return (
    <div>
    <h1>You Have selected <span style={{color:'red'}}>{num}</span> Value</h1>
    <h1>My Name is : <span style={{color:'green'}}>"{name}"</span>  </h1>
    <h1>I Have moves <span style={{color:'blue'}}>{moves} moves</span>  </h1>
    
      <select value={num} onChange={ChangeEvent}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="37">37</option>
      </select>
    </div>
  )
}

export default Pokemon; 
