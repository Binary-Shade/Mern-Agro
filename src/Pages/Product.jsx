import { useState } from "react"
import { Product1, Product2, Product3, Product4 } from "../assets/images";
import ProductCard from "./ProductCard";

const products = [
    {
      id: 1,
      name: 'Country eggs',
      off: '67',
      desc:'this is a quality natural prduct from direct farmers. natural fresh and pure product from vendors',
      img: Product1,
      imageAlt: "eggs",
      price: '$1.2',
      material: 'eggs',
    },
    {
      id: 2,
      name: 'Natural Milk',
      off: '67',
      desc:'this is a quality natural prduct from direct farmers. natural fresh and pure product from vendors',
      img: Product2,
      imageAlt: "milk ",
      price: '$12',
      material: 'Milk',
    },
    {
      id: 3,
      name: 'Vegetables',
      off: '67',
      desc:'this is a quality natural prduct from direct farmers. natural fresh and pure product from vendors',
      img: Product3,
      imageAlt: "vegetables",
      price: '$20',
      material: 'vegetable',
    },
    {
      id: 4,
      name: 'Pea Nuts',
      off: '67',
      desc:'this is a quality natural prduct from direct farmers. natural fresh and pure product from vendors',
      img: Product4,
      imageAlt: "natural peanuts",
      price: '$9',
      material: 'Ground nuts',
    },{
      id: 5,
      name: 'Country eggs',
      off: '67',
      desc:'this is a quality natural prduct from direct farmers. natural fresh and pure product from vendors',
      img: Product1,
      imageAlt: "eggs",
      price: '$1.2',
      material: 'eggs',
    },
    
  ]
  
  export default function Product() {
    const [visible, setVisible] = useState(4);

    const showMore = () =>{
      setVisible((preVisible)=> preVisible + 4)
    }

    return (
      <>
        <p className="font-bold text-2xl ml-3">Merchandise Products :</p>
        <div className="flex flex-wrap justify-between my-10">
        {
          products.map(item=>(
            <ProductCard key={item.id} item={item}/>
          ))
        }
      </div>
      </>
    )
  }
  
  
      // {
      //   visible < products.length && (
      //     <div className="mt-6 flex justify-center">
      // <button
      //   onClick={showMore}
      //   className="bg-emerald-700 text-white py-2 px-4 rounded hover:bg-emerald-600 focus:outline-none"
      // >
      //   View More
      // </button>
      // </div>
      //   )
      // }