import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
   
export const MyCard = ({title,description,price,thumbnail, id})=> {

    return (

    <NavLink to={`./item/${id}`}>
      <Card className="mx-auto mt-6 w-[95%]">
        <CardHeader color="white" className="relative h-56">
          <img
            src={thumbnail}
            alt="card-image"
            className=" w-[100%] h-[100%] object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 line-clamp-1">
            {title}
          </Typography>
          <Typography className="line-clamp-2">
            {description}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Rs {price}$
          </Typography>
        </CardBody>
      </Card>
      </NavLink>

    );
  }
