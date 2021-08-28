import React, {useState, useEffect} from 'react'

/// GET
const FuncionGet = () => {

    const [respuesta, setRespuesta] = useState("")
    const [correo,setCorreo] = useState("")

    console.log(correo)    
    const obtnerUsuario = async(e) => {
        e.preventDefault() 
        try{   
            const resFetch = await fetch(`https://covit-app.herokuapp.com/api/email/forgotPassword?correo=${correo}`)
            const datosRespuest =  await resFetch.json()    
            console.log(resFetch) 
            if  (!resFetch.ok){
                setRespuesta(datosRespuest.errors[0].msg)
                throw Error(datosRespuest.errors[0].msg)              
            }
            setRespuesta(datosRespuest.err)
        } catch(e){
                console.log(e) 
            }
        }
    
//    useEffect(()=>{
//              obtnerUsuario()
//          },[]
//         )


    return(
        <div>
            <p>`Datos= ${respuesta}`</p>
            <div>
            <form onSubmit = {(e)=>obtnerUsuario(e)}>
                <input onChange ={(e)=>{setCorreo(e.target.value)}} type="text" />
                <input type="submit" value="Enviar"/>
            </form>
            </div>
        </div>
    )
}

export default FuncionGet