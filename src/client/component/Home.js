import React,{useState,useEffect} from 'react';

const Home=()=>{
    const [data,setData]=useState(0)
    const handleCLick=()=>{
        setData(data+1)
    }
    useEffect(()=>{
        console.log(data)
    })
    return (<div>{data}
                    <button onClick={handleCLick}>Press Me</button>
                </div>
                
            )
};
export default Home;