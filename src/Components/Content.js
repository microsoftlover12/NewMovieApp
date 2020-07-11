import React , {useState } from 'react';
import {Link } from 'react-router-dom'




const Content = () =>{
    const [movies, setMovies] = useState([
        {id:1,name:'FIRST MAN'},
        {id:2,name:'INTERSTELLAR'},
        {id:3,name:'JOHN WICK 2'},
        {id:4,name:'MOWGLI'}
    ]);
    
    const [search, setSearch] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);



    const filterMovie = () =>{
        setFilteredMovies(
            movies.filter(movies =>
                movies.name.toLowerCase().includes(search.toLowerCase())
          )
        );
    }
   
      

    return (

        <>
            <div>
                <input type='text' placeholder='search movies' onChange={e => (e.target.value)} />
                <button  onClick={() => {
        setSearch([...movies, { id: movies.length, name: filteredMovies }])
        setFilteredMovies('')}}>Search</button>
                

            </div>
            <br></br>
            <div>
                <img src='/firstman.jpg' />
                <div>
                    <p>FIRST MAN</p>
                    <Link to ='/FirstMovieContent.js'>
                    <button>Plus..</button>
                    </Link>

                </div>
                <br></br>
                <img src='/interstellar.jpg' />
                <div>
                    <p>INTERSTELLAR</p>
                    <Link to ='/SecondMovieContent.js'>
                    <button>Plus..</button>
                    </Link>
                </div>

                <br></br>
                <img src='/johnwick.jpg' />
                <div>
                    <p>JOHN WICK 2</p>
                    <Link to='/ThirdMovieContent.js'>
                    <button>Plus..</button>
                    </Link>
                </div>
                <br></br>
                <img src='/mowgli.jpg' />
                <div>
                    <p>MOWGLI</p>
                    <button>Plus..</button>
                </div>

            </div>

        </>





    )
}


export default Content