import User from "../model/user-schema.js";
// call back funtion of Router
export const userSignup=async(req,res)=>{
    try{
        const isUserExist=await User.findOne({username:req.body.username});
        if(isUserExist){
            console.log(req.body);
            return res.status(401).json({msg:"user is already exit"})
        }
        const data=req.body;
       const newUser= new User(data);
        await newUser.save();
       return res.status(200).json({msg:'registration is successfull'})
       
    } catch(error){
        res.status(500).json({msg:"internal user server error"})
    }

}

export const  userLogin=async(req,res)=>{
try{
    const {username,password}=req.body;
    console.log(username,password)
    const isUserExist=await User.findOne({username:username,password:password});
    if(isUserExist){
        return res.status(200).json({data:isUserExist})
    }
    else{
        return res.status(401).json({msg:'invalid user'})
    }
}catch(error){
    res.status(500).json({msg:"internal user server error"})
   

}
}