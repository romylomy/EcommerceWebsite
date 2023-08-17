import Stripe from "stripe"
import Product from "./components/Product"


const fetchProduct = async () =>{
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {apiVersion:'2022-11-15'})
  const product = await stripe.products.list()

  const objectPrices = await Promise.all(
    product.data.map( async (product) =>{
      const prices = await stripe.prices.list({product: product.id})
      return{
        id: product.id,
        image: product.images[0],
        price: prices.data[0].unit_amount,
        name: product.name,
        currency: prices.data[0].currency 
      }
    })
  )
  return objectPrices;
}


export default async function Home() {
  const Products = await fetchProduct()
  console.log(Products)
  return (
    <main className ="grid grid-cols-fluid gap-16">
      {
        Products.map( product => (
         <Product 
         name = {product.name}
         price ={product.price}
         image = {product.image}
         id = {product.id}
         />
        ))
      }
    </main>
  )
}
