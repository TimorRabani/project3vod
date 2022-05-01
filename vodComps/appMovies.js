import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VodInput from "./vodInput"
import VodList from "./vodList"
import { useParams } from 'react-router-dom';


export default function AppMovies(props) {
  const [ar, setAr] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const { searchQ, YYYY } = useParams();

  useEffect(() => {
    doSearchApi();
  }, [searchQ, YYYY])


  const doSearchApi = async () => {
    setLoading(true);
    setAr([]);
    let url = `https://www.omdbapi.com/?s=${searchQ||"bank"}&y=${YYYY}&apikey=5a292f28`;
    let resp = await axios.get(url);
    console.log("axios", resp);
    let temp_ar = resp.data.Search || [];
    setAr(temp_ar);
    setFlag(!temp_ar.length ? true : false)
    setLoading(false);
  }

  return (
    <div>
      <VodInput />
      <div className='text-center bg-light'>
      {loading&&<img style={{height:'60px',width:'80px'}} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'></img>}
 {flag && !loading && <h2  className=''>No results...</h2>}
 </div>

        <VodList movies_ar={ar} />
      

    </div>
  )
}
