import './App.css';
import useAxios from './useAxios';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import useGeolocation from './useGeolocation';

function App() {
  const {id} = useParams()
  const [password,setPassword] = useState('')
  const api = useAxios()
  const location = useGeolocation()
  
   const verifyForm = async (e) =>{
    e.preventDefault()
    try {
      const response = await api.post(`staff/confirm`,{
        employeeId: id,
        password : password,
        location: location.coordinates
      })
      console.log(id)
      console.log(location)
      console.log(response)
    } catch (error) {
      
    }
   }
   /*eslint-disable*/
  //  useEffect(()=>{
  //   console.log('id',id)
  //   console.log('location',location)
  //  },[])

  return (
    <form onSubmit={verifyForm} className="">
           <input type='password' name='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </form>
  );
}

export default App;
