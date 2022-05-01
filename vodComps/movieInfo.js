import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function MovieInfo(props) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let query = useParams();

  useEffect(() => {
    doApiInfo();
  }, [query.id])

  const doApiInfo = async () => {
    setLoading(true);
    let url = `https://www.omdbapi.com/?i=${query.id}&apikey=5a292f28`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setMovie(resp.data)
    setLoading(false);
  }

  return (
    <div className='container-fluid bg-white'>
      <div className='container pt-5'>
        {loading ? <div className='text-center'><img style={{ height: '60px', width: '80px' }} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'></img></div> :
          <div className='col-lg-7 d-md-flex shadow p-3 mx-auto bg-light'>
            <div className='pe-3'>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div>
              <h2>{movie.Title}</h2>
              <div className='pb-2'>Plot: {movie.Plot}</div>
              <div className='pb-2'>Genre: {movie.Genre}</div>
              <div className='pb-3'>Score: {movie.imdbRating}</div>
              <button className='btn btn-success' onClick={() => navigate(-1)}>Go back</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
