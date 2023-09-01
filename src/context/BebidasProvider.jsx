import { useState,useEffect,createContext } from "react";
import axios from "axios";

const BebidasContext = createContext()

const BebidasProvider = ({children}) =>{
    const [modal,setModal] = useState(false)
    const [bebidas,setBebidas] = useState([])
    const {bebidaId, setBebidaId} = useState(null)

    const consultarBebida = async datos=>{
        try{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const{data} = await axios(url)
            setBebidas(data.drinks)
        }catch(error){
            console.log(error)
        }
    }

    const handleModalclick = () =>{
        setModal(!modal)
    }

    const handleBebidaIdClick = id =>{
        setBebidaId(id)
    }

    
    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalclick,
                modal,
                handleBebidaIdClick

            }}
        >

            {children}

        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}
export default BebidasContext