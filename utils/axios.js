// "use client"

import axios from 'axios';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

export default function Axios() {
    const router = useRouter();

  const [user,setUser] = useState(getUser());
  const [token,setToken] = useState(getToken());


    //get token string
    function getToken() {
        if (typeof window !== 'undefined') {
          return localStorage.getItem('access_token');
        }


    }

    //get user string
    function getUser() {
        if (typeof window !== 'undefined') {
            const userString = localStorage.getItem('user');
            return JSON.parse(userString);
        }
    }

    function saveToken(user, token) {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            localStorage.setItem('access_token', token);
            localStorage.setItem('user', JSON.stringify(user));

            setToken(token);
            setUser(user);

            router.replace("/dashboard", "/dashboard");
        }
    }

    function logout() {
        localStorage.clear();
        router.replace("/profile/user/", "/user/login");
    }

    const http = axios.create({
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
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