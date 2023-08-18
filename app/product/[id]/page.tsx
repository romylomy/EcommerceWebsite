import { SearchParamTypes } from "@/Type/SearchParamsType"
import Image from "next/image"
import formatPrice from "@/util/PriceFormat"

export default async function Product({searchParams}:SearchParamTypes){
    return(
        <div className="Flex justify-between gap-24 p-12 text-gray-700">
             <Image src={searchParams.image} 
                    alt={searchParams.name} 
                    width={400} 
                    height= {400} 
                    className="w-full h-90 object-cover rounded-lg" />
            <div>
                <h1>{searchParams.name}</h1>
                <h1>{formatPrice(searchParams.unit_amount)}</h1>
                <p>{searchParams.description}</p>
                
            </div>
        </div>
    )
}