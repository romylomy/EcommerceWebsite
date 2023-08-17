import { ProductType } from "@/Type/ProductType"
import Image from "next/image"
import formatPrice from "@/util/PriceFormat"

export default function Product({image, name, price}: ProductType){
    return (
        <div>
            <Image src={image} alt="image" width={400} height= {400} />
            <h1>{name}</h1>
            { price !== null ? formatPrice(price) : 'N/A'}
        </div>
    )
}