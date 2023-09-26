import React from 'react'
import {
    Card,
    CardBody,
} from "@material-tailwind/react";


function ItemSkeleton() {
    return (
        <>
            <Card className="mx-auto mt-6 w-[95%]">
                <div className="w-[95%] mx-auto mt-2 bg-gray-300 animate-pulse dark:bg-gray-700 h-96"> </div>
                <CardBody>
                    <div className="h-40 bg-gray-300 rounded-xl dark:bg-gray-600 w-[100%]  mb-3 animate-pulse p-4">
                        <div className="h-10 bg-white rounded-xl dark:bg-gray-600 w-[30%]  mb-3 "></div>
                        <div className="h-3.5 bg-white rounded-xl dark:bg-gray-600 w-[20%]  mb-1 "></div>
                        <div className="h-3.5 bg-white rounded-xl dark:bg-gray-600 w-[25%]  mb-3 "></div>
                        <div className="h-4 bg-white rounded-xl dark:bg-gray-600 w-[15%]  mb-3 "></div>
                    </div>

                    <div className="h-32 bg-gray-300 rounded-xl dark:bg-gray-600 w-[100%] mb-3 p-4 animate-pulse">
                        <div className="h-10 bg-white rounded-xl dark:bg-gray-600 w-[30%]  mb-3 "></div>
                        <div className='flex gap-3 flex-wrap'>
                            <div className="h-3.5 bg-white rounded-xl dark:bg-gray-600 w-[20%]  mb-1 "></div>
                            <div className="h-3.5 bg-white rounded-xl dark:bg-gray-600 w-[25%]  mb-3 "></div>
                            <div className="h-3.5 bg-white rounded-xl dark:bg-gray-600 w-[20%]  mb-1 "></div>
                            <div className="h-3.5 bg-white rounded-xl dark:bg-gray-600 w-[25%]  mb-3 "></div>
                        </div>

                    </div>
                    <div className="h-32 bg-gray-300 rounded-xl dark:bg-gray-600 w-[100%] mb-3 p-4 animate-pulse">
                    <div className="h-10 bg-white rounded-xl dark:bg-gray-600 w-[30%]  mb-3 "></div>

                        <div className="h-3.5 bg-white rounded-xl dark:bg-gray-600 w-[100%]  mb-1 "></div>
                        <div className="h-3.5 bg-white rounded-xl dark:bg-gray-600 w-[80%]  mb-3 "></div>
                    </div>

                </CardBody>

            </Card>
        </>
    )
}

export default ItemSkeleton