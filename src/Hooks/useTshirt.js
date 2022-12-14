import { useEffect, useState } from "react"

const useTshirt =()=>{
const [tshirts, setTshirts]=useState([]);
useEffect(()=>{
    fetch('t-shirt.json')
    .then(res=>res.json())
    .then(data=>setTshirts(data))
},[])
return [tshirts, setTshirts];
}
export default useTshirt;