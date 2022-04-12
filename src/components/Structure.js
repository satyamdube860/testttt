import './Structure.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Structure=()=>{
    const API_URL = 'https://randomuser.me/api';
    const [userData, setUserData] = useState({})
    const fetchData = async () => {
        const { data } = await axios.get(API_URL);
        localStorage.setItem("email", data.results[0].email)
        localStorage.setItem("first", data.results[0].name.first)
        localStorage.setItem("last", data.results[0].name.last)
        const email = localStorage.getItem("email")
        const firstName = localStorage.getItem("first")
        const lastName = localStorage.getItem("last")
        setUserData({
          "email": email,
          "firstName": firstName,
          "lastName": lastName
        })
      };
      useEffect(() => {
        fetchData();
      }, []);
    return(
        <div cl>
        
          <div>
              <button
              onClick={fetchData} className="button"
              >
                {"Refresh"}
              </button>
              <div>
                <h2 className='input'>{userData.email}</h2>
               <span><p className='input'>{userData.firstName}</p>
               <p className='input'>{userData.lastName}</p>
               </span> 
              </div>
          </div>
      </div>
    );
};
export default Structure;