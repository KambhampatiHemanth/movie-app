import React, {useEffect} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import { useMovie } from "../customHooks/movieContext"
import { useType } from "../customHooks/typeContext"
const MovieList = () => {
    
    const {movieList , setMovieList} = useMovie()
    const {movietype} = useParams()
    const {setType} = useType()
    useEffect(()=>{
        setType(movietype)  
    },[movietype])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [movietype])

    const getData = async () => {
        fetch(`https://api.themoviedb.org/3/movie/${movietype ? movietype : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        
    }

    return (
        <div className="movie__list">
            <div style={{height : "100px"}}  ></div>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList