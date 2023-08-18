import Stripe from "stripe"
import Product from "./components/Product"


const fetchProduct = async () =>{
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {apiVersion:'2022-11-15'})
  const product = await stripe.products.list()

  const objectPrices = await Promise.all(
    product.data.map( async (product) =>{
      const prices = await stripe.prices.list({product: product.id})
      const features = product.metadata.features || ""
      return{
        id: product.id,
        image: product.images[0],
        unit_amount: prices.data[0].unit_amount,
        name: product.name,
        description: product.description,
        currency: prices.data[0].currency,
        metadata:{ features }, 
      }
    })
  )
  return objectPrices;
}


export default async function Home() {
  const products = await fetchProduct()
  console.log(products)
  return (
    <main className ="grid grid-cols-fluid gap-16">
       {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </main>
  )
}
