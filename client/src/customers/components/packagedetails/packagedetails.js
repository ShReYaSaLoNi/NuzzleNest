import {Rating} from '@mui/material';
import {Grid} from '@mui/material';
import { RadioGroup } from '@headlessui/react'
import ProductReviewCard from './packagereviewcard';
import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { findPackagesById } from '../../../State/Package/action';
import { store } from '../../../State/store';
import { useSelector } from 'react-redux';
import { addItemToBooking } from '../../../State/Booking/action';

const product = {
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    }
  ],specialists: [
    { name: 'Profile1', available: true },
    { name: 'Profile2', available: true },
    { name: 'Profile3', available: true },
    { name: 'Profile4', available: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PackageDetails(){
  const [selectedPerson, setSelectedPerson] = useState("")
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const packageState = useSelector(store => store.package);

  const handleBooking = () =>{
    const data = {packageId: params.packageId}
    dispatch(addItemToBooking(data))
    console.log("data: ", data);
    navigate("/bookings")
  }

  useEffect(()=>{

    const data = {packageId: params.packageId}

    dispatch(findPackagesById(data))
  },[params.packageId])

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
        {/* Image gallery */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
            <img
              src={packageState.package?.imageURL}
              alt= "Package Display"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
          <div className="lg:col-span-2">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{packageState.package?.title}</h1>
            <h1 className='text-lg lg-text-xl text-gray-900 opacity-60 pt-1'>Description</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6 '>
            <p className='font-semibold'>
                ${packageState.package?.price}
            </p>
            <p className='text-green-600 font-semibold'>
            ${packageState.package?.discountedPrice}
            </p>
            </div>

            {/* Reviews */}
            <div className='mt-6'>
                <div className='flex items-center space-x-3'>
                <Rating name="read-only" value={3} readOnly />
                <p className='opacity-50 text-sm'>4000</p>
                <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>200 review</p>  
                </div>
            </div>

            <form className="mt-10">
              <button
                type="submit" onClick={handleBooking}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                style={{backgroundColor:"#333A73"}}>
                Book Now
              </button>
            </form>
          </div>
          
          <form className="mt-10">
              {/* Specialists */}
              <div className="mt-10">
              <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Specialists</h3>
                </div>
                <RadioGroup value={selectedPerson} onChange={setSelectedPerson} className="mt-4">
                  <RadioGroup.Label className="sr-only">Make your choice</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.specialists.map((person) => (
                      <RadioGroup.Option
                        key={person.name}
                        value={person}
                        disabled={!person.available}
                        className={({ active }) =>
                          classNames(
                            person.available
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-small hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-4'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{person.name}</RadioGroup.Label>
                            {person.available ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                onClick={handleBooking}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                style={{backgroundColor:"#333A73"}}>
                Add to bag
              </button>
          </form>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section style={{color:"#333A73"}}>
            <h1 className='font-semibold text-lg pb-4'>
                    Recent reviews & Rating
            </h1>
            <div className='border p-5' style={{backgroundColor:"#FFDD95", borderRadius:"25px"}}>
                    <Grid container spacing={4}>
                    <Grid item xs={4}>
                    <div className='space-y-5'>
                        {[1,1].map((item)=><ProductReviewCard />)}
                    </div>
                   </Grid>
                 </Grid>
            </div>
        </section>
      </div>
    </div>
  )
}
