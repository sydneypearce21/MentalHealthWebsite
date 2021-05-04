import { Component } from "react";
import sunriseImage from './Images/sunrise.jpg';
import mindfulness from './Images/mindfulness.jpg';
import breathe from './Images/breathe.jpg';
import yoga from './Images/yoga.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class ImageGallery extends Component {
    render () {
        return (
            <div className="carousel">
                <Carousel autoPlay infiniteLoop interval="8000" transitionTime="2000">
                    <div>
                        <img src={ sunriseImage }/>
                    </div>
                    <div>
                        <img src={ mindfulness }/>
                    </div>
                    <div>
                        <img src={ breathe }/>
                    </div>
                    <div>
                        <img src={ yoga }/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default ImageGallery