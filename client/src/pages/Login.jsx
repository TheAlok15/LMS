import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useSigninUserMutation, useSignupUserMutation } from "@/features/api/authApi"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function Login() {

  const [signupInfo, setSignupInfo] = useState({name: " ", email: " ", password: ""})
  const [signinInfo, setSigninInfo] = useState({email: " ", password: ""})

  const [signupUser, {data:signupData, error:signupError, isLoading:signupIsLoading, isSuccess:signupIsSuccess}] = useSignupUserMutation()

  const [signinUser, {data:signinData, error:signinError, isLoading:signinIsLoading, isSuccess:signinIsSuccess}] = useSigninUserMutation()

  const inputHandler = function (e, type){
      const {name, value} = e.target;
      if(type === "signup"){
        setSignupInfo({...signupInfo,[name]:value});
        // setSignupInfo({...signupInfo,[e.target.name]:e.target.value});
      }
      else{
        setSigninInfo({...signinInfo,[name]:value});
      }
  }

  const handleRegister = async (type) =>{
    const inputData = type === "signup" ? signupInfo : signinInfo
    const action = type === "signup" ? signupUser : signinUser 
    await action(inputData);
  }

  useEffect(function(){
    if(signupIsSuccess && signupData){
      toast.success(signupData.message || "Signup successfully")
    }

    if(signupError){
      toast.error(signupData.data.message || "Signup failed")
    }

    if(signinIsSuccess && signinData){
      toast.success(signinData.message || "Signin successfully")
    }

    if(signinError) {
        toast.error(signinData.data.message || "Signin failed")
    }

  },[signupIsLoading, signinIsLoading, signupData, signinData, signupError, signinError])
  
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:100}}>
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="signin">Signin</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>
              Create an account and get unlimited information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label>Name</Label>
              <Input 
               name = "name"
               value = {signupInfo.name}
               onChange = {function(e){
                inputHandler(e, "signup")
               }} 
               type = "text"
               placeholder = " alok"
               required = {true}
               />
            </div>

            <div className="space-y-1">
              <Label>Email</Label>
              <Input
               name = "email"
               value = {signupInfo.email}
               onChange = {function(e){
                inputHandler(e, "signup")
               }}  
               type="email"
               placeholder = "alok@gmail.com"
               required = {true} />
            </div>

            <div className="space-y-1">
              <Label>Password</Label>
              <Input 
               name = "password"
               value = {signupInfo.password}
               onChange = {function(e){
                inputHandler(e, "signup")
               }}   
               type = "password" 
               placeholder = "xyz"
               required = {true} />
            </div>

          </CardContent>
          <CardFooter>
          <Button disabled = {signupIsLoading} onClick ={() => handleRegister("signup")}  style={{width:"100%"}}>
              {
                signupIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait
                  </>
                ) : "Signup"
              }
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle>Signin</CardTitle>
            <CardDescription>
              Login to get all your courses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label>Email</Label>
              <Input 
               name = "email"
               value = {signinInfo.email} 
               type="email"
               onChange = {function(e){
                inputHandler(e, "signin")
               }}  
               placeholder = "alok@gmail.com"
               required = {true} />
            </div>

            <div className="space-y-1">
              <Label>Password</Label>
              <Input
                name = "password"
                value = {signinInfo.password}  
                type="password"
                onChange = {function(e){
                  inputHandler(e, "signin")
                 }}  
                placeholder = "xyz"
                required = {true} />
            </div>

          </CardContent>
          <CardFooter>
            <Button disabled = {signinIsLoading} onClick ={() => handleRegister("signin")}  style={{width:"100%"}}>
              {
                signinIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait
                  </>
                ) : "Signin"
              }
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
   </div>
  )
}