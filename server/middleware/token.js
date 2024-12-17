import jwt from "jsonwebtoken"

export const generateToken = async function(res,user, message){
  try 
  {
    const token = jwt.sign({
      user_id : user._id
    }, process.env.JWT_USER_SECRET,{expiresIn:"1D"})

    return res.status(200).cookie("tokenName", token, {httpOnly:true, sameSite:"strict", maxAge:24*60*60*1000}).json({
      success:true,
      message,
      user
    })
    
  } 
  catch (error) 
  {
    
  }
}