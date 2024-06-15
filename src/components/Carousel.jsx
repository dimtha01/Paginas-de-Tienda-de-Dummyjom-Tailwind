import banner_1 from "../assets/banner1.jpg";
import banner_2 from "../assets/banner2.jpg";
import banner_3 from "../assets/banner3.png";
const Carousel = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner_1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner_2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner_3} className="w-full" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </>
    )
}

export default Carousel