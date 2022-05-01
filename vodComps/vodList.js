import React from 'react'
import { Link } from 'react-router-dom'

export default function VodList(props) {
    return (
        <div className='container-fluid bg-light'>
        <div className='container'>
            <div className="row">
                {props.movies_ar.map(item => {

                    item.Poster = item.Poster != "N/A" ? item.Poster : "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    return (
                        <div key={item.imdbID} className='col-md-4 px-5 py-5 justify-content-between'>
                            <div className='ps-5'>
                            <Link className='btn' to={"/video/" + item.imdbID}>
                                <div style={{ borderRadius: "20px", cursor: "pointer", width:"200px" }} className="shadow overflow-hidden h-100">
                                    <img src={item.Poster} alt={item.Title} height={300} width={150} className="w-100" />
                                    
                                </div>
                                <h4 className='col-md-8 pt-1'>{item.Title}</h4>
                            </Link>
                            </div>
                        </div>                    
                    )
                })}
            </div>
        </div>
        </div>
    )
}
