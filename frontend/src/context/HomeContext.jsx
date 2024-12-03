import { createContext, useState, useEffect } from "react";
export const homeContext = createContext();
import ListProduc from "../assets/ProductsData.json";

export const HomeProvaider =({children})=>{

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
      setProductos(ListProduc)
      
    }, []);
    

    const addCart =()=>{

    }

    const contextValues={
        productos,
        carrito
    }

    return(
        <homeContext.Provider value={contextValues}>
            {children}
        </homeContext.Provider>
    )
}