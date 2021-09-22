import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

const url ="http://localhost:9000"

export const AxiosReq1 = async(api,body)=>{
      const res = await fetch(url+api,{
           method: "post",
           headers:{
                 "Content-Type":"application/json",
                 "Authorization": await AsyncStorage.getItem('token')
           },
           body: JSON.stringify(body)
      })
      return await res.json()
} 

export const AxiosReq2 = async(api,type)=>{
      const res = await fetch(url + api,{
           method: "type",
           headers:{
                 "Content-Type":"application/json",
                 "Authorization": await AsyncStorage.getItem('token')
           },
          
      })
      return await res.json()
} 