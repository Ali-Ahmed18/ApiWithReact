import React, { useEffect, useState } from 'react';
import { MyCard } from './Components/card';
import { MyNavbar } from './Components/Navbar';
import "./App.css";
import { Button } from '@material-tailwind/react';
import CardSkeleton from './Components/CardSkeleton';

function App() {
  const [data, setData] = useState(null); 
  const [limit, setLimit] = useState(16);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=&limit=${limit}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
      })
      .catch((err) => console.log(err));
  }, [limit]);

  const search = (elem) => {
    setData(elem);
  };

  return (
    <>
      <div className="bg-gray-200 py-4 min-h-[100vh]">
        <MyNavbar filterItem={search} />
        <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-20 mt-9 relative">
          {data !== null && data.length !== 0 ? (
            data.map((value) => {
              const { title, description, price, thumbnail, id } = value;
              return (
                <MyCard
                 key={id}
                  title={title}
                  description={description}
                  price={price}
                  thumbnail={thumbnail}
                />
              );
            })
          ) : (
            <>
              {data === null ? (
                [...Array(limit - 8)].map((x,y)=> <CardSkeleton key={y}/>)
              ) 
              : <h1 className='absolute left-[50%] translate-x-[-50%] text-center'>Your search did not match any Products.</h1>}
           </>
          )}
        </div>
        {limit > (data ? data.length : 0) || data === null ? (
          ""
        ) : (
          <Button className='block mx-auto mt-6' onClick={() => setLimit(limit + 6)}>
            Load more
          </Button>
        )}
      </div>
    </>
  );
}

export default App;
