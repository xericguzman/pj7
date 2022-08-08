import React from 'react'
import {Link} from "react-router-dom"


export default function Home({astronauts}) {
  return (
    <div>
        <h1>Astronauts</h1>
        {astronauts.map((ast) => (
            <Link to={`/astronauts/${ast._id}`}>
                <img src={ast.image}/>
            </Link>
        ))}
    </div>
    
  )
}
