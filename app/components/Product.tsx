import { ProductType } from "@/Type/ProductType"
import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import Link from "next/link" 

export default function Product({image, name, unit_amount, id }: ProductType){
    return (
        <Link href={{pathname:`/product/${id}`, query:{name, image, unit_amount, id}}}>
            <div className="text-gray-700">
                <Image src={image} 
                       alt="image" 
                       width={400} 
                       height= {400} 
                       className="w-full h-90 object-cover rounded-lg" />
                
                <div className="font-medium py-2">
                    <h1 >{name}</h1>
                    <h1 className="text-sm text-teal-700 "> { unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}</h1>
                </div> 
                
           </div>
        
        </Link> 
    )
}