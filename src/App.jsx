import React from 'react';
import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Row from './components/row_1';
import Search from './components/row_2';
import Card from './components/food_card';

function App() {
  
  // Query state which is modified by the child component "Card"
  const [query, setQuery] = useState([""])

  const YOUR_APP_KEY = 'c38589f9a63ab2190d77a10b36fe20b0';
  const YOUR_APP_ID = '1e078c8e';

  const recipeURL = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
                      &health=alcohol-free`

  const [recipeData, setRecipeData] = useState([])

  // Re renders every time the user input for search changes
  React.useEffect(() => {
    async function getRecipeData() {
      const response = await fetch(recipeURL)
      const data = await response.json()
      setRecipeData(data.hits)
      console.log(data.hits)
    }
    getRecipeData();
  }, [query]);
  
  // Maps over each indidual index within the Recipe array
  const card = recipeData.map(recipe => {
    return (
      <Card
        label={recipe['recipe']['label']}
        calories={recipe['recipe']['calories']}
        image={recipe['recipe']['image']}
        totalTime={recipe['recipe']['totalTime']}
        url={recipe['recipe']['url']}
      > 
      </Card>
    )
  })
  return (
    <>
      <div>
        <Navbar/>
        <Row/>
        <Search
          query={query}
          setQuery={setQuery}
        />
        <section className='card_list'>
          {card}
        </section>
      </div>
     
    </>
  )
}

export default App
