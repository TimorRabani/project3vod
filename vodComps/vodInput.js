import React, { useRef, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function VodInput(props) {
    // let searchQ = "bank";
    const [val, setVal] = useState("");
    const [arYears, setarYears] = useState([]);
    useEffect(() => {
        craeteYears();
    }, [])
    const craeteYears = () => {
        let tempar = [1989, 1995, 2000, 2020, 2021];
        setarYears(tempar);
    }


    return (
        <div className="container-fluid m-0 p-0 bg-light">
            <div className='' style={{ height: '200px', background: "rgb(18, 60, 39)" }}>
                <div className='text-center display-1 pt-4 text-white'>MOVIE APP</div>
            </div>
            <div className="container p-5">
                <div className='d-md-flex justify-content-between'>
                    <div className="col-md-8 d-flex ps-5">
                        <input value={val} onInput={(e) => { setVal(e.target.value) }} type="search" placeholder='search...' className='form-control w-50' />

                        <Link className='btn btn-dark' to={'/search/' + val} >
                            Search
                        </Link>
                    </div>

                    <div className='d-flex'>
                        <div className='col-auto p-0 mx-auto'>
                            {arYears.map(item => {
                                return (
                                    <Link key={item} to={`/year/${item}`} className='col-auto btn me-1 fs-5'>{item}</Link>
                                )
                            })}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
