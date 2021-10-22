import React, {FC} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom";

const sliderItems = [
    {
        id: "85",
        name: "Photo 1",
        url: "https://cdn2.tendance-parfums.com/media/resized/948/444/media/catalog/tmp/category/si-intense-giorgio-armani.jpg"
    },
    {
        id: "46",
        name: "Photo 2",
        url: "https://cdn2.tendance-parfums.com/media/resized/948/444/media/catalog/tmp/category/libre-eau-de-toilette-ysl.jpg"
    },
    {
        id: "86",
        name: "Photo 2",
        url: "https://cdn2.tendance-parfums.com/media/resized/948/444/media/catalog/category/la-vie-est-belle-soleil-cristal-lancome_8.jpg"
    },
    {
        id: "48",
        name: "Photo 2",
        url: "  https://cdn2.tendance-parfums.com/media/resized/948/444/media/catalog/category/acqua-di-gio-profondo-girogio-armani.jpg"
    },
    {
        id: "87",
        name: "Photo 2",
        url: " https://cdn2.tendance-parfums.com/media/resized/948/444/media/catalog/tmp/category/l-homme-la-nuit-de-l-homme-ysl.jpg"
    },
    {
        id: "49",
        name: "Photo 2",
        url: "https://cdn2.tendance-parfums.com/media/resized/948/444/media/catalog/tmp/category/spicebomb-viktor-rolf.jpg"
    },


  

];

const CarouselImageSlider: FC = () => {
    const settings = {
        indicators: false,
        fade: true,
        infinite: true,
        interval: 1000
    }

    return (
        <div>
            <Carousel {...settings}>
                {sliderItems.map((item, index) => {
                    return (
                        <Carousel.Item key={item.id}>
                            <Link to={`/product/${item.id}`}>
                                <img className="d-block w-100" src={item.url} alt={item.name}/>
                            </Link>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default CarouselImageSlider;
