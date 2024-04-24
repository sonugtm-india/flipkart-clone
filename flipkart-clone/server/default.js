import { products } from "./constants/data.js";
import Products from "./model/products_schema.js";


const DefaultData=async()=>{
    try{
      
      await Products.insertMany(products)
      console.log("data is imported successfully")
    }
    catch(error){
        console.log('Error while insert default data',error.message)
    }
}
export default DefaultData;