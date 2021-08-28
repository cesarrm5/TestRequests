import React, {useState, useEffect} from 'react'



//POST
  const FuncionPost = () => {

    const [respuesta, setRespuesta] = useState("")
    const [correoVal,setCorreo] = useState("")
    const [pass,setPass] = useState("")
    
    // const obtnerUsuario = (e) => {
    //     e.preventDefault() 
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ correo: correoVal, contraseña: pass })
    //     };
        
    //     fetch("https://covit-app.herokuapp.com/api/auth/login", requestOptions)
    //     .then(response => response.json())
    //     .then(response => JSON.stringify(response.assistant))
    //     .then(response => setRespuesta(response))
    //     .catch(error => console.log('error', error))

    // }

    const obtnerUsuario = async(e) => {
        e.preventDefault() 

        try{  
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo: correoVal, contraseña: pass })
            };
            
            const resFetch = await fetch("https://covit-app.herokuapp.com/api/auth/login", requestOptions) 
            const  datosRespuest =  await resFetch.json()    
            console.log(resFetch) 
            if  (!resFetch.ok){
                setRespuesta(datosRespuest.errors[0].msg)
                throw Error(datosRespuest.errors[0].msg)              
            }
            setRespuesta(JSON.stringify(datosRespuest.assistant))
        } catch(e){
                console.log(e) 
            }
    }
        

    return(
        <div>
            <p>`Datos= ${respuesta}`</p>
            <div>
            <form onSubmit = {(e)=>obtnerUsuario(e)}>
                <input onChange ={(e)=>{setCorreo(e.target.value)}} type="text" />
                <input onChange ={(e)=>{setPass(e.target.value)}} type="text" />
                <input type="submit" value="Enviar"/>
            </form>
            </div>
        </div>
    )
}

export default FuncionPost