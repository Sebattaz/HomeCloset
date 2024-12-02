import { createContext, useState, useEffect } from "react";
export const homeContext = createContext();
import ListProduc from "../assets/ProductsData.json";

export const HomeProvaider =({children})=>{

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      setProductos(ListProduc)
      
    }, []);
    

    const contextValues={
        productos
    }

    return(
        <homeContext.Provider value={contextValues}>
            {children}
        </homeContext.Provider>
    )
}