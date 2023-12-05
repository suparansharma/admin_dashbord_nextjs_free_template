  // "use client"

  import axios from 'axios';
import { useRouter } from 'next/navigation';
  import { useState } from 'react';

export default function Axios() { 
  const router = useRouter();

      //get token string
      function getToken(){

        if (typeof window !== 'undefined') {
          const tokenString = localStorage.getItem('access_token');
          const userToken = JSON.parse(tokenString);
          return userToken;
        }


    }
    //get user string
    function getUser(){
      if (typeof window !== 'undefined') {

        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
      }
    }

  const [user,setUser] = useState(getUser());
  const [token,setToken] = useState(getToken());

  function saveToken(user,token){
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const storeToken = localStorage.setItem('access_token',JSON.stringify(token));
      const storeUser = localStorage.setItem('user',JSON.stringify(user));

      setToken(storeToken);
      setUser(storeUser);

      router.replace("/profile/user/", "/dashboard");

    }
  }

  function logout(){
    localStorage.clear();
     router.replace("/profile/user/", "/user/login");
  }

    const http = axios.create({
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${token}`,
        }
    });
  http.defaults.withCredentials = true;

  return {
    http,
    saveToken,
    logout,
    token,
    user,
    getToken
  };
}