import { useEffect,useState } from 'react';
import MyContext from './myContext';
import { getAccountInfo } from '../api';
import { useAccount } from 'wagmi'

export const MyProvider = ({children}) => {
    const { address} = useAccount();
    const [userData,setUserData] = useState({
        userName:"",
        email:"",
        profileimage:"",
        coverimage:"",
        bio:"",
        isCreator:false
    });

  const getUserData = async (address) => {
    try{
      let response = await getAccountInfo(address);          
      setUserData(response.user);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    if(address){      
      (async () => {
        await getUserData(address);
      })();
    }
  },[address])
    return (
        <MyContext.Provider value={{userData,getUserData}}>
            {children}
        </MyContext.Provider>
    )
}