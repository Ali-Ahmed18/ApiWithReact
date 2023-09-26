// import React, { useEffect, useState } from 'react';
// import { MyNavbar } from './Components/Navbar';
// import "./App.css";
// import { Route, Routes } from 'react-router-dom';
// import Item from './Pages/Item';


// function App(){
 

//   return (
//     <>
//       <div className="bg-gray-200 py-4 min-h-[100vh]">
//         <MyNavbar />
//           <Routes>
//               <Route index path='/' element={<Item/>} />
//               <Route path='/id:' />
//           </Routes>
          
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { MyNavbar } from './Components/Navbar';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/home';
import Item from './Pages/Item';
import ErrorPage from './Pages/ErrorPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
 

  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="bg-gray-200 py-4 min-h-[100vh]">
       
        <MyNavbar onSearch={handleSearch} />
        <Routes>
          <Route index path="/" element={<Home />} />
         <Route path='/item/:productid' element={<Item/>}/>
         <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
