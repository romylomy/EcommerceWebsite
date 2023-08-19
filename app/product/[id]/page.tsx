import { SearchParamTypes } from "@/Type/SearchParamsType"
import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import AddCart from "./AddCart"

export default async function Product({searchParams}:SearchParamTypes){
    return(
        <div className="flex justify-between gap-24 p-12 text-gray-700">
             <Image src={searchParams.image} 
                    alt={searchParams.name} 
                    width={800} 
                    height= {800} 
                    className="w-full h-96 object-cover rounded-lg" />
            <div className=" font-medium text-gray-700"> 
                
                <h1 className="text-2xl">{searchParams.name}</h1>
                <p className="py-2">{searchParams.description}</p>
                
                <div className="flex gap-2">
                    <p className="font-bold text-teal-700">{formatPrice(searchParams.unit_amount)}</p>
                   
                </div>
<<<<<<< HEAD
                <AddCart/> 
=======
                <button className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700 ">Add to cart</button> 
>>>>>>> 8e2a78a9704c602c56702649f4aca54fdc0c9fd0
            </div>
          
        </div>
    )
}