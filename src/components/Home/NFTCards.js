import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function NFTCards (props) {
    const options = {
        loop: true,
        nav: true,
        navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 4,
        margin: 25,
        slideToScroll: 1,
        center: false,
        autoplayHoverPause: true,
    
        responsive: {
            0: {
                stagePadding: 0,
            },
            320: {
                items: 1,
                stagePadding: 20,
            },
            450: {
                items: 1,
                stagePadding: 40,
            },
            575: {
                items: 2,
                stagePadding: 0,
            },
            768: {
                items: 2,
                stagePadding: 40,
            },
            992: {
                items: 3,
                stagePadding: 0,
            },
            1200: {
                items: 4,
                stagePadding: 0,
            },
            1360: {
                stagePadding: 0,
            },
            1449: {
                stagePadding: 0,
            },
            1500: {
                stagePadding: 0,
            },
            1600: {
                stagePadding: 0,
            },
            1700: {
                stagePadding: 0,
            }
        }
    
    }
    return <OwlCarousel className='sport__inner__blk' {...options}>
    <div className="single__sport__blk">
      <div className="sport__thumb">
        <img src="assets/img/appreciate_thumb_5.png" alt="" />
      </div>
      <div className="sport__content">
        <h5>Birmingham Hawthorn L</h5>
        <p>
          Created by: <span>Marvin McKinney</span>
        </p>
        <p>
          Canvas Collection <span />
        </p>
        <h4>
          Price{" "}
          <span>
            <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
          </span>
        </h4>
      </div>
    </div>
    <div className="single__sport__blk">
      <div className="sport__thumb">
        <img src="assets/img/appreciate_thumb_6.png" alt="" />
      </div>
      <div className="sport__content">
        <h5>Birmingham Hawthorn L</h5>
        <p>
          Created by: <span>Marvin McKinney</span>
        </p>
        <p>
          Canvas Collection <span />
        </p>
        <h4>
          Price{" "}
          <span>
            <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
          </span>
        </h4>
      </div>
    </div>
    <div className="single__sport__blk">
      <div className="sport__thumb">
        <img src="assets/img/appreciate_thumb_7.png" alt="" />
      </div>
      <div className="sport__content">
        <h5>Birmingham Hawthorn L</h5>
        <p>
          Created by: <span>Marvin McKinney</span>
        </p>
        <p>
          Canvas Collection <span />
        </p>
        <h4>
          Price{" "}
          <span>
            <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
          </span>
        </h4>
      </div>
    </div>
    <div className="single__sport__blk">
      <div className="sport__thumb">
        <img src="assets/img/appreciate_thumb_8.png" alt="" />
      </div>
      <div className="sport__content">
        <h5>Birmingham Hawthorn L</h5>
        <p>
          Created by: <span>Marvin McKinney</span>
        </p>
        <p>
          Canvas Collection <span />
        </p>
        <h4>
          Price{" "}
          <span>
            <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
          </span>
        </h4>
      </div>
    </div>
    <div className="single__sport__blk">
      <div className="sport__thumb">
        <img src="assets/img/appreciate_thumb_5.png" alt="" />
      </div>
      <div className="sport__content">
        <h5>Birmingham Hawthorn L</h5>
        <p>
          Created by: <span>Marvin McKinney</span>
        </p>
        <p>
          Canvas Collection <span />
        </p>
        <h4>
          Price{" "}
          <span>
            <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
          </span>
        </h4>
      </div>
    </div>
    <div className="single__sport__blk">
      <div className="sport__thumb">
        <img src="assets/img/appreciate_thumb_6.png" alt="" />
      </div>
      <div className="sport__content">
        <h5>Birmingham Hawthorn L</h5>
        <p>
          Created by: <span>Marvin McKinney</span>
        </p>
        <p>
          Canvas Collection <span />
        </p>
        <h4>
          Price{" "}
          <span>
            <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
          </span>
        </h4>
      </div>
    </div>
    <div className="single__sport__blk">
      <div className="sport__thumb">
        <img src="assets/img/appreciate_thumb_7.png" alt="" />
      </div>
      <div className="sport__content">
        <h5>Birmingham Hawthorn L</h5>
        <p>
          Created by: <span>Marvin McKinney</span>
        </p>
        <p>
          Canvas Collection <span />
        </p>
        <h4>
          Price{" "}
          <span>
            <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
          </span>
        </h4>
      </div>
    </div>
    <div className="single__sport__blk">
      <div className="sport__thumb">
        <img src="assets/img/appreciate_thumb_8.png" alt="" />
      </div>
      <div className="sport__content">
        <h5>Birmingham Hawthorn L</h5>
        <p>
          Created by: <span>Marvin McKinney</span>
        </p>
        <p>
          Canvas Collection <span />
        </p>
        <h4>
          Price{" "}
          <span>
            <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
          </span>
        </h4>
      </div>
    </div>
    </OwlCarousel>
}

export default NFTCards;