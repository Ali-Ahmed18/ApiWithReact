import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

function CardSkeleton() {
  return (
    <Card className="mx-auto mt-6 w-[95%]">
        <CardHeader className="max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 relative h-56"> </CardHeader>
        <CardBody>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[95%] mb-1 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-[75%] mb-2 animate-pulse"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[95%] mb-3 animate-pulse"></div>
        <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-[30%] animate-pulse"></div>
        </CardBody>
        <CardFooter className="pt-0">
        <div className="h-10 bg-gray-300 rounded dark:bg-gray-600 w-32 animate-pulse"></div>
        </CardFooter>
      </Card>
  )
}

export default CardSkeleton