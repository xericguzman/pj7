import axios from 'axios'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'


export default function Detail() {
    const [astronaut, setAstronaut] = useState({});
    let {id} = useParams()


    const fetchAstronaut = async () => {
      let response = await axios.get(
        `https://directory-of-astronauts-2022.herokuapp.com/api/astronauts/${id}`
      );
      setAstronaut(response.data);
    };
  
    useEffect(() => {
      fetchAstronaut();
    }, []);
  
  return (
    <div>
        <h1>{astronaut.name}</h1>
        <img src={astronaut.image} />
        <p>{astronaut.bio}</p>
    </div>
  )
}
