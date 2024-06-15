import Modal from "./Modal"

const Card = ({ item }) => {
    return (
        <>
            <div className="card w-auto glass">
                <figure><img src={item.thumbnail} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.brand}</p>
                    <p className="text-rose-600">{item.price}$</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded" onclick="my_modal_4.showModal()">Ver Detalle</button>
                        <label htmlFor={`${item.id}`} className="btn bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">Ver Detalle</label>
                    </div>
                </div>
            </div>
            {/* <Modal key={item} item={item} /> */}
        </>
    )
}

export default Card