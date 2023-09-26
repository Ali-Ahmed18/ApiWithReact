import { Card, CardBody, Typography} from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'
import { Link, json, useParams } from 'react-router-dom'
import { FaHeart, FaStar } from 'react-icons/fa';
import ErrorPage from './ErrorPage';
import CardSkeleton from '../Components/CardSkeleton';
import ItemSkeleton from '../Components/ItemSkeleton';


function Item() {
  const { productid} = useParams();
  const [productData, setProductData] = useState(null);
  const [relatedproductData, setRelatedProductData] = useState(null);
  const [error,setError] = useState(null)
  const topRef = useRef(null);

  useEffect(() => {
    if(!productid){
        return
    }
        try{
          (async ()=>{
             const data = await fetch(`https://dummyjson.com/products/${productid}`).then((req)=> req.json())
             
             if(data.message){
                setError(true)
             }
              setProductData(data)
          })()

        }catch(err){
              console.log(err);
        }
    
  }, [productid]);
  
  useEffect(() => {
    if (productData) {
      fetch(`https://dummyjson.com/products?skip=&limit=4`)
        .then((res) => res.json())
        .then((json) => {
          setRelatedProductData(json.products);
        })
        .catch((err) => console.log(err));
    }
  }, [productData]);
  return (
    <>
    {!error ? <div className='flex mt-5 px-5' ref={topRef} id='top'>
        <div className=' w-[70%]'>

          {productData ? <div >
            <div className='bg-gray-800'>
              <img
                src={productData.thumbnail}
                alt="card-image"
                className=" w-[100%] h-[400px] object-contain"
              />
            </div>

            <CardBody className='border border-gray-400 rounded-lg mt-3'>
              <Typography variant="h2" color="black" className=" flex justify-between items-center">
                {productData.price}$
                <FaHeart size={"20px"} fill='transparent' strokeWidth={"10"} stroke='black' />
              </Typography>

              <small><span className='line-through text-gray-600'>{Math.floor(productData.price / (1 - (Math.floor(productData.discountPercentage) / 100)))}$</span><span> -{Math.floor(productData.discountPercentage)}%</span></small>

              <div className='flex gap-2'>
                <div className='flex items-center gap-[2px]'>
                  {[1, 2, 3, 4, 5].map((x,) => {
                    return <FaStar stroke='#d9870d' strokeWidth={"10px"} key={x} fill={`${Math.round(productData.rating) >= x ? "#FFDF00" : "transparent"}`} />
                  })}
                </div>
                <Typography className='text-sm'>
                  {Math.round(productData.rating)} Rating
                </Typography>
              </div>


              <Typography variant='h4' color="blue-gray" className=" line-clamp-2">
                {productData.title}
              </Typography>

            </CardBody>

            <CardBody className='border border-gray-400 rounded-lg mt-3'>
              <Typography variant="h4" color="black" className="mb-2">
                Details
              </Typography>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-3'>

                <span >Brand</span>
                <span className='font-bold'>{productData.brand}</span>


                <span >Price</span>
                <span className='font-bold'>{productData.price}$</span>



              </div>
            </CardBody>

            <CardBody className='border border-gray-400 rounded-lg mt-3'>
              <Typography variant="h4" color="black" className="mb-2">
                Description
              </Typography>
              <span>{productData.description}</span>
            </CardBody>
          </div> : <ItemSkeleton/>}



        </div>
        <div className='px-2 w-[30%]'>
          <h1 className='text-2xl'>Related Ad</h1>
          {relatedproductData && productData ? relatedproductData.map((value)=>{
            return (
              <Link onClick={() => topRef.current.scrollIntoView({ behavior: 'unset' })} to={`/item/${value.id}`} key={value.id}>
                <Card className='mb-3'>
            <div className="h-40">
              <img
                src={value.thumbnail}
                alt="card-image"
                className=" w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className='p-2'>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                {value.title}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Rs {value.price}$
              </Typography>
              <div className='flex gap-2'>
                <div className='flex items-center gap-[2px]'>
                  {[1, 2, 3, 4, 5].map((x,) => {
                    return <FaStar stroke='#d9870d' strokeWidth={"10px"} key={x} fill={`${Math.round(value.rating) >= x ? "#FFDF00" : "transparent"}`} />
                  })}
                </div>
              </div>
            </div>
          </Card></Link>)
          }) :
           <>
            {[...Array(3)].map((_,index)=>{        
                  return <CardSkeleton key={index}/>
            })}
           </>}

        </div>
      </div>
      :
      <ErrorPage/>}
      

    </>
  )
}

export default Item