import {
  Navbar,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import logo from "../assets/images-removebg-preview.png"
import { useEffect, useState } from "react";

export const MyNavbar = ({filterItem}) => {
  const [search, setSearch] = useState("")


    const filterProducts = ()=>{
        search ? fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res)=> res.json()
        .then((json)=> filterItem(json.products)))
        .catch((err)=> console.log(err))
         : false
    }
    


  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">

        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 flex items-center gap-2"
        >
          <img src={logo} className="w-[40px]" />
          ReactMart
        </Typography>



        <div className="relative flex w-full md:w-max">
          <Input
            type="search"
            label="Search here..."
            className="pr-24"
            value={search}
            containerProps={{
              className: "min-w-[288px]",
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded" onClick={filterProducts}>
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
}