import Products from "../model/products_schema.js"

export const getProducts=async(req,res)=>{
     try{
        const products=await Products.find({})
        console.log(products)
        res.status(200).json(products);
     } catch(error){
          res.status(400).json({msg:error.message})
     }
}