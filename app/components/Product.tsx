import { ProductType } from "@/Type/ProductType"
import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import Link from "next/link" 

export default function Product({image, name, price, id}: ProductType){
    return (
        <Link href={`/product/${id}`}>
            <div className="text-gray-700">
                <Image src={image} alt="image" width={400} height= {400} className="w-full h-90 object-cover rounded-lg" />
                
                <div className="font-medium py-2">
                    <h1 >{name}</h1>
                    <h1 className="text-sm text-teal-700 "> { price !== null ? formatPrice(price) : 'N/A'}</h1>
                </div> 
                
           </div>
        
        </Link> 
    )
}