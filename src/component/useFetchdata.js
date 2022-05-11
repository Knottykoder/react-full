import {useState,useEffect} from 'react'

const useFetchdata = (url) => {
    const [userData, setuserData] = useState([]);
    useEffect(()=>{
            const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setuserData(data.products)
          }
          fetchData()
        },[])
        
    return userData
}

export default useFetchdata