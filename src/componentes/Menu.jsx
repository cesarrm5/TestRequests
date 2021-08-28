import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    
    //const [llamadas, setllamadas] = useState [{id:1,name:"GET"},{id:2,name:"POST"},{id:3,name:"DELET"},{id:4,name:"PUT"}]
    const [llamadas, setllamadas] = useState (["GET", "POST" , "DELET", "PUT"])
   // const [llamadas, setllamadas] = useState ([1,2,3,4])

    return(
        <div>
            <h1>
                <h2>Lista de Metodos</h2>
                {
                   llamadas.map( (item)=>(
                       <div key = {item} >
                           <Link to={`/${item}`} >{item}</Link>
                       </div>
                   )

                   ) 
                }
            </h1>
        </div>
    )
}

export default Menu