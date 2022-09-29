import {useState} from 'react'
import { useEffect } from 'react'

const useGeolocation = () => {
    const [location,setLocation] = useState({
        loaded:false,
        coordinates:{
            Latitude:'',
            Longitude:''
        }
       
    })
    
    const onSuccess =  location =>{
        setLocation({
            loaded:true,
            coordinates:{
                Latitude:location.coords.latitude,
                Longitude: location.coords.longitude
            }
        })
    }


    const onError = error =>{
        setLocation({
            loaded:true,
            error
        })
    }

    useEffect(()=>{
     if(!("geolocation" in navigator)){
        onError({
            code:0,
            message:'Geolocation Not Supported'
        })
     }
     navigator.geolocation.getCurrentPosition(onSuccess,onError)
     console.log('loc',navigator.geolocation.getCurrentPosition(onSuccess,onError))
    },[])

  return location
}

export default useGeolocation