import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";
   
export const MyCard = ({title,description,price,thumbnail, id})=> {
    const [hide,setHide] = useState(true)
    return (
      <Card className="mx-auto mt-6 w-[95%]">
        <CardHeader color="white" className="relative h-56">
          <img
            src={thumbnail}
            alt="card-image"
            className=" w-[100%] h-[100%] object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography className={hide ? "line-clamp-2" : ""}>
            {description}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Rs {price}$
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={()=> setHide(!hide)}>{hide ? "Read More" : "Read Less"}</Button>
        </CardFooter>
      </Card>
    );
  }
