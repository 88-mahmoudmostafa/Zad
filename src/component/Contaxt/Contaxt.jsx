import React from 'react'
import { useState,createContext,useContext,useEffect } from 'react'
import { jsxs } from 'react/jsx-runtime';

export const Have=createContext()

function Contaxt ({children}) {

  const [lang, setLang] = useState(
  localStorage.getItem("lang") || "ar"
);

const changeLanguage = (language) => {
  setLang(language);
  localStorage.setItem("lang", language);

  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";

  document.documentElement.lang = language;

  const changeGoogleLanguage = () => {
    const select = document.querySelector(".goog-te-combo");

    if (!select) {
      return false;
    }

    select.value = language;

    select.dispatchEvent(
      new window.Event("change", {
        bubbles: true,
      })
    );

    return true;
  };

  let attempts = 0;

  const timer = setInterval(() => {
    attempts++;

    if (changeGoogleLanguage() || attempts >= 20) {
      clearInterval(timer);
    }
  }, 300);
};
   


    const [modeleds, setModel]=useState(()=>{
      const savesb=localStorage.getItem('modeleds')
      return savesb? JSON.parse(savesb):[]
    })
     const [open, setOpen] = useState(false);
     const [sol,setSol]=useState('')

  const [cared,setCard]=useState(()=>{
 const saves= localStorage.getItem('cared')
 return saves?JSON.parse(saves):[]
})
   
  const [mof,setMof]=useState(()=>{
    const saving=localStorage.getItem('mof')
    return saving?JSON.parse(saving):[];
})

  const [user,setUser]=useState(null)
     const [isLoggedin,setIsLoggedin]=useState(true);

    localStorage.getItem('isLoggedin')==='false'
    useEffect(()=>{
        const save=localStorage.getItem('isLoggedin',isLoggedin)
        if(save==='false'){
            setIsLoggedin(false)
        }
    },[isLoggedin])

     useEffect(()=>{
       localStorage.setItem('cared',JSON.stringify(cared))
     
    },[cared])

    useEffect(()=>{
      localStorage.setItem('mof',JSON.stringify(mof))
      
    },[mof])
    useEffect(()=>{
     localStorage.setItem('modeleds',JSON.stringify(modeleds))
    },[modeleds])

    const addcard=(p)=> {
      const found=cared.find(item=>(item.id===p.id))
      if(found){
        setOpen(true);
        // setCard(prev=>prev.filter(item=>item.id !== p.id));
         return; 
      }
        setCard(prev=>[...prev,{...p, qty:1}])
        setOpen(true)
        
    }

    const addmodel=(p)=>{
       const coms =modeleds.find(item=>item.id===p.id) 
       if(coms){
        return
        }
       setModel(prev=>[...prev,{...p,qty:1}])
    }
    const fortmov=(p)=>{
      const faund=mof.some(item=>item.id===p.id)
      if(faund) return;
      else setMof(prev=>[...prev,{...p,qty:1}])
    }
    const deletecard=(id)=>{

   setCard(prev=>prev.filter(p=>p.id!==id))
    }
    const deletemof=(id)=>{
   setMof(prev=>(prev.filter(item=>item.id!==id)))
    }
    const deletemodel=(id)=>{
      setModel(modeleds.filter(item=>item.id!==id))
    }
    // const total=(p.price)*(p.qty)
  
    const total=cared.reduce((sum,p)=>sum+ p.price * p.qty ,0)
    
     const add1=(id)=>{
      setCard(prev=>prev.map(item=>( item.id==id?{...item,qty:item.qty +1}:item
        ))
     
    ) }
     const add11=(id)=>{
      setCard(prev=>prev.map(item=>(item.id==id?{...item,qty : item.qty>1 ? item.qty-1 : 1} : item))
     
     )}




   
  return (
    <Have.Provider  value={{changeLanguage,lang,deletemodel,addmodel,modeleds,add11,add1,total,deletemof,sol,setSol,deletecard,open,setOpen,isLoggedin,setIsLoggedin,user,setUser,setCard,cared,mof,setMof,fortmov,addcard}}>
     {children}
    </Have.Provider>
  )
}
export const Aya=()=>useContext(Have)

export default Contaxt