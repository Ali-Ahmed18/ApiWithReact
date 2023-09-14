import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MyCard } from './Components/card'
import { MyNavbar } from './Components/Navbar'
import "./App.css"
import { Button } from '@material-tailwind/react'

function App() {
  const [data , setData] = useState([])
  const [limit , setLimit] = useState(16)
  useEffect(()=>{   

      fetch(`https://dummyjson.com/products?skip=5&limit=${limit}`)
      .then(res => res.json())
      .then(json => setData(json.products))
      .catch((err)=> console.log(err))
  },[limit])
  
  return (
    <>
    <div className="bg-gray-200 py-4 min-h-[100vh]">
    <MyNavbar/>
      <div className="grid mx-auto  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-20 mt-9">
      {data && data.map((value)=>{
        const {title,description,price,thumbnail, id} = value
        return <MyCard key={id} title={title} description={description} price={price} thumbnail={thumbnail}/>
      })}
      </div>
      {limit > data.length || data == [] ? "" : <Button className='block mx-auto mt-6' onClick={()=> setLimit(limit + 6)}>Load more</Button>}
    </div>

    </>
  )
}

export default App
