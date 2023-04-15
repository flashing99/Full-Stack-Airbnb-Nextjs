'use client';
import React, { useEffect, useState } from 'react'
 
interface clientOnlyProps{
  children : React.ReactNode;
}


 const ClientOnly: React.FC<clientOnlyProps> = ({children}) => {

    //.............
  const [haseMounted, setHasMounted] = useState(false);
  useEffect(()=>{
    return setHasMounted(true);
  }, []);

  //.............

  if(!haseMounted){
    return null
  }

   return (
     <>
     {children}
     </>
   )
 }
 
 export default ClientOnly