import { createContext, useState } from "react";
import runChat from "../config/Ai"; 
export const Context=createContext();

const ContextProvider=(props)=>{

  
const [input,setinput]=useState("")
const [prompt,setprompt]=useState("")
const [recent,setrecent]=useState([])
const [hideScreen,sethideScreen]=useState(false)
const [loading,setloading]=useState(false)
const [result,setresult]=useState("")


const delay=(index,nextword)=>{
  setTimeout(function(){
    setresult(prev=>prev+nextword);
  }, 40*index)
  }


  
const newchat=()=>{
  setloading(false)
  sethideScreen(false)
}
 

const onSent=async (prompt)=>{
  setresult("")
  sethideScreen(true)
  setloading(true)
  let resp;
  if(prompt!==undefined)
  {
    resp=await runChat(prompt);
    setprompt(prompt)
   
  }
  else{
    setprompt(input)
    setrecent(prev=>[...prev,input])
   resp=await runChat(input)
  }
 let arrayres=resp.split("**")
 let Array="";
 for(let i=0; i<arrayres.length; i++)
 {
  if(i===0 || i%2 !==1){
    Array+=arrayres[i];
  }
  else{
    Array+="<b>"+arrayres[i]+"</b>";
  }
 }
 let array2= Array.split("*").join("</br>")


 let array3=array2.split(" ");
for(let i=0; i<array3.length; i++)
{
  const nextword = array3[i];
  delay(i,nextword+" ")
}


 setloading(false)
 setinput("")
}


const ContextValue={
  recent,
  setrecent,
onSent,
setprompt,
prompt,
hideScreen,
loading,
result,
input,
setinput,
setloading,
setresult,
newchat,
}
return(
  <Context.Provider value={ContextValue}>
    {props.children}
  </Context.Provider>
)

}
export default ContextProvider