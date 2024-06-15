import { useEffect, useState } from "react";
import Card from "../components/Card";
const API = 'https://dummyjson.com/products?limit=20&skip=';

const Tienda = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            console.log(data)
            setDatos(data.products);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            <div className="container mx-auto z-100">
                <h1 className="text-center my-8 text-6xl text-white">Todos los Productos</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {datos && datos.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Tienda