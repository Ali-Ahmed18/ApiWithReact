import {
    Navbar,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
  import logo from "../assets/images-removebg-preview.png"
   
  export const MyNavbar = ()=> {
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
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button size="sm" className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    );
  }