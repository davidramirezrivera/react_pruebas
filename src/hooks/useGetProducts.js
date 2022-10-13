import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API)=>{
    const [products, setProducts] = useState([]); // se usa para guardar la indormacion que vamos a llamar por useefect

	useEffect(async () => { //funcion asincrona para esperar los datos de la api
		const response = await axios(API); //los datos sin usar fetch
		setProducts(response.data); //asignacion de los datos 
	}, [])

    return products;
};
export default useGetProducts;