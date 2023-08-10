import React from 'react';
import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Row from './components/row_1';
import Search from './components/row_2';
function App() {
  //const [count, setCount] = useState(0)
  
  const YOUR_APP_KEY = 'c38589f9a63ab2190d77a10b36fe20b0';
  const YOUR_APP_ID = '1e078c8e';

  const recipeURL = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
                      &health=alcohol-free`

  const [recipeData, setRecipeData] = useState([])

  React.useEffect(() => {
    async function getRecipeData() {
      const response = await fetch(recipeURL)
      const data = await response.json()
      setRecipeData(data)
    }
    getRecipeData();
  }, []);
  

  const [query, setQuery] = useState([])


  return (
    <>
      <div>
        <Navbar/>
        <Row/>
        <Search/>
      </div>
     
    </>
  )
}

export default App
