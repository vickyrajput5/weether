import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import profile from '../img/ws-y.png'
export default function Weether(){
    const [city , setCity] = useState(null);
    const [search, setSearch] = useState("karachi");

    useEffect(()=>{
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b02bf8c062b1ee46a2dde6544974a177`;
            const response  = await fetch(url);
            const resJson = await response.json();

       setCity(resJson.main);
       
        };
        fetchApi();
    },[search])
    
    return(
        <>
    <Section>
        <div className="profile"><img src={profile} alt="" /></div>
        <div className="pro-title">
            <h1>Muhammad Waqar Rajput</h1>
        </div>
        <div className="weether-section">
            <div className="input">
                <input type="search" value={search} className="inputField" onChange={(event)=>{setSearch(event.target.value)}}/>

            </div>
             {!city ? (
                <p className="error">
                    no data found
                </p>
            ) : (
               <div className="weether-details">
                <div className="weether-location">
                <h2><i className="fa-solid fa-street-view"></i> {search} </h2>
                <h1 className="temp"> {city.temp}° Cel </h1>
                <h3 className="tempmin-max">{city.temp_min}° Cel | {city.temp_max}° Cel</h3>
                </div>
               </div>
            )} 
            
        </div>
    </Section>
        </>
    )
}

const Section = styled.section `
width: 100%;
height: 100vh;
background-color: #c0b9b9;
display: grid;
place-items: center;
gap: 4rem;
padding: 15px;
.profile{
    width: 200px;
    height: 200px;
    border-radius: 50px;
    margin-top: 35px;
    @media (max-width:500px){
        width: 150px;
        height: 150px;
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}
.pro-title{
    margin-top: -76px;
    padding-bottom: 27px;
    h1{
        font-size: 55px;
        font-weight: bold;
        font-family: 'Permanent Marker', cursive;
        color: #24240d;
        @media (max-width:500px){
     font-size: 22px;
    }
    }
}
.weether-section{
    margin-top: -90px;
    width: 450px;
    height: 400px;
    background: linear-gradient(25deg, #0602f97a 2%, rgba(82,66,166,0.28335084033613445) 73%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    @media (max-width:500px){
        width: 100%;
        padding: 25px 15px;
    }
    .input {
        display: flex;
        justify-content: center;
        width: 100%;
        input{
            width: 80%;
            padding: 12px;
            margin:  auto;
            border-radius: 50px;
            border: none;
            outline: none;
            background-color: #bcbcd4;
            color: #444435;
            font-weight: bold;
            font-size: 18px;
            font-family: 'Permanent Marker', cursive;
            caret-color: blue;
            @media (max-width:500px){
        width: 100% !important;
    }
        }
    }
    .error{
        font-size: 30px;
        font-weight: bold;
        font-family: 'Permanent Marker', cursive;
        padding-bottom: 117px;
        color: #740202;
    }
    .weether-details{
   
    text-align: center;
    .weether-location{
        h2{
            font-size: 55px;
            font-weight: bold;
            font-family: 'Permanent Marker', cursive;
            text-transform:capitalize ;
            color: #dd0;
            display: flex;
            flex-direction: column;
            gap: 0rem;
            @media (max-width:500px){
        font-size: 36px;
    }
            i{
                color: #313118 !important;
            }
            sub{
                font-size: 12px;
            }
        }
        h1{
            font-size: 30px;
            font-weight: 600;
            font-family: 'Permanent Marker', cursive;
            color: #09131b;
        }
        h3{
            font-size: 20px;
            font-weight: 600;
            font-family: 'Permanent Marker', cursive;
            color: #09131b;
        }
    }
}
}

`;