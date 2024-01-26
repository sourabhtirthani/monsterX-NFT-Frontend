import { useEffect } from 'react';
import { useAccount } from 'wagmi'
// Header And Footer
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OwlCarousel from 'react-owl-carousel';
// jQuery
import { loadHeroContent } from '../../utils/jquery';
// Components
import NFTCards from '../../components/Home/NFTCards';
import { useNavigate } from 'react-router-dom';
import { Wallets } from '../../walletConfiguration/Wallets';
function HomePage () {
  const options = {
        loop: true,
        nav: false,
        navText: ['<img src="assets/img/round_arrow_icon_1.svg" alt="">', '<img src="assets/img/round_arrow_icon_2.svg" alt="">'],
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3500,
        items: 1,
        margin: 8,
        slideToScroll: 1,
        center: false,
        autoplayHoverPause: true,

  }
  useEffect(()=>{
    loadHeroContent()
  })
  return <>
  <Header />
  {/* ------------------ HEADER WALLET MODAL START --------------- */}

  {/* ------------------ HEADER WALLET MODAL END --------------- */}
  <section
    className="hero__area"
    style={{ backgroundImage: "url(./assets/img/hero_bg.png)" }}
  >
    <div className="container">
    <OwlCarousel 
       className='hero__inner__blk'
        {...options}
       >
        <div className="hero__content__blk">
          <h1>
            The First <span>RWA </span> Collection of <span>Wesley</span>
          </h1>
          <p>Embarking on a Pioneering Artistic Odyssey</p>
        </div>
        <div className="hero__content__blk">
          <h1>
            The First <span>RWA </span> Collection of <span>Wesley</span>
          </h1>
          <p>Embarking on a Pioneering Artistic Odyssey</p>
        </div>
        <div className="hero__content__blk">
          <h1>
            The First <span>RWA </span> Collection of <span>Wesley</span>
          </h1>
          <p>Embarking on a Pioneering Artistic Odyssey</p>
        </div>
        <div className="hero__content__blk">
          <h1>
            The First <span>RWA </span> Collection of <span>Wesley</span>
          </h1>
          <p>Embarking on a Pioneering Artistic Odyssey</p>
        </div>
        </OwlCarousel>
    </div>
  </section>
  {/* =================== HERO AREA END ===================== */}
  {/* =================== INSPIR AREA START ===================== */}
  <section className="inspir__area">
    <div className="container">
      <div className="section__title text-center">
        <h3>
          Inspiring <span>Artist</span> Interviews
        </h3>
        <p>
        Discover art's wisdom in conversations with our brilliant artists
        </p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="single__inspir__card">
            <div className="single__inspire__thumb">
              <img src="assets/img/inspir_thumb_1.png" alt="" />
            </div>
            <div className="inspire__content">
              <h5>Maria Carey</h5>
              <p>Sweden | Coral Cube</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single__inspir__card">
            <div className="single__inspire__thumb">
              <img src="assets/img/inspir_thumb_2.png" alt="" />
            </div>
            <div className="inspire__content">
              <h5>John Marco</h5>
              <p>Mexico | Funk Town</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single__inspir__card">
            <div className="single__inspire__thumb">
              <img src="assets/img/inspir_thumb_3.png" alt="" />
            </div>
            <div className="inspire__content">
              <h5>Satoshi Nakamoto</h5>
              <p>Japan | Funk Town</p>
            </div>
          </div>
        </div>
      </div>
      <div className="inspir__btn">
        <a href="#" className="common__btn">
          Discover Artist
        </a>
      </div>
    </div>
    <div className="inspir__shape__1">
      <img src="assets/img/artist_shape_1.png" alt="" />
    </div>
  </section>
  {/* =================== INSPIR AREA END ===================== */}
  {/* =================== SPORT AREA START ===================== */}
  <section className="sport__area">
    <div className="container">
      <div className="sport__title">
        <div className="section__title m-0">
          <h3 className="m-0">
          This Week in <span>ICAF</span>
          </h3>
        </div>
        <div className="discover__btn">
          <a href="#">
            Discover more{" "}
            <span>
              <i className="far fa-long-arrow-right" />
            </span>
          </a>
        </div>
      </div>
       <NFTCards />
      <div className="sport__dts__ico">
        <img src="assets/img/Dots.svg" alt="" />
      </div>
    </div>
  </section>
  {/* =================== SPORT AREA END ===================== */}
  {/* =================== EXCEPTIONAL AREA START ===================== */}
  <section className="exceptional__area">
    <div className="container">
      <div className="section__title">
        <h3>
          Exceptional Art <span>Curation</span>
        </h3>
        <p>Experience artistic brilliance in curated collections</p>
      </div>
      <div className="exceptional__shape">
        <img src="assets/img/exceptional_shape.png" alt="" />
      </div>
      <div className="exceptional__card__blk">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="single__exceptional__card">
              <div className="exceptional__thumb">
                <img src="assets/img/exceptio_thumb_1.png" alt="" />
              </div>
              <div className="exceptional__content">
                <h4>Photography in 1990</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single__exceptional__card">
              <div className="exceptional__thumb">
                <img src="assets/img/exceptio_thumb_2.png" alt="" />
              </div>
              <div className="exceptional__content">
                <h4>Celebrity Dress</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="exceptional__shape_1">
      <img src="assets/img/angle_shape_1.png" alt="" />
    </div>
  </section>
  {/* =================== EXCEPTIONAL AREA END ===================== */}
  {/* =================== APPRECIATE AREA START ===================== */}
  <section className="appreciate__area">
    <div className="container">
      <div className="sport__title">
        <div className="section__title m-0">
          <h3 className="m-0">Appreciate</h3>
        </div>
        <div className="discover__btn">
          <a href="#">
            Discover more{" "}
            <span>
              <i className="far fa-long-arrow-right" />
            </span>
          </a>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="single__sport__blk">
            <div className="sport__thumb">
              <img src="assets/img/appreciate_thumb_1.png" alt="" />
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
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="single__sport__blk">
            <div className="sport__thumb">
              <img src="assets/img/appreciate_thumb_2.png" alt="" />
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
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="single__sport__blk">
            <div className="sport__thumb">
              <img src="assets/img/appreciate_thumb_3.png" alt="" />
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
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="single__sport__blk">
            <div className="sport__thumb">
              <img src="assets/img/appreciate_thumb_4.png" alt="" />
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
        </div>
      </div>
      <div className="appreciate__slide__blk">
        <NFTCards />
        <div className="sport__dts__ico">
          <img src="assets/img/Dots.svg" alt="" />
        </div>
      </div>
    </div>
    <div className="appreciate__shape__1">
      <img src="assets/img/appreciate_shape.png" alt="" />
    </div>
    <div className="appreciate__shape__2">
      <img src="assets/img/angle_shape_2.png" alt="" />
    </div>
  </section>
  {/* event and news section */}
  <section className="event__area">
  <div className="container">
    <div className="section__title text-center">
      <h3>News &amp; Event</h3>
    </div>
    <div className="row g-4">
      <div className="col-xl-7">
        <div className="event__left__thumb">
          <img src="assets/img/news_thumb_1.jpg" alt="" />
        </div>
      </div>
      <div className="col-xl-5">
        <div className="news__thumb__blk">
          <div className="news__thumb">
            <img src="assets/img/news_thumb_2.jpg" alt="" />
            <p>Unreal Engine for Fortnite is a big deal</p>
          </div>
          <div className="news__thumb">
            <img src="assets/img/news_thumb_3.jpg" alt="" />
            <p>Unreal Engine for Fortnite is a big deal</p>
          </div>
          <div className="news__thumb">
            <img src="assets/img/news_thumb_3.jpg" alt="" />
            <p>Unreal Engine for Fortnite is a big deal</p>
          </div>
          <div className="news__thumb">
            <img src="assets/img/news_thumb_4.jpg" alt="" />
            <p>Unreal Engine for Fortnite is a big deal</p>
          </div>
          <div className="news__thumb">
            <img src="assets/img/news_thumb_4.jpg" alt="" />
            <p>Unreal Engine for Fortnite is a big deal</p>
          </div>
          <div className="news__thumb">
            <img src="assets/img/news_thumb_2.jpg" alt="" />
            <p>Unreal Engine for Fortnite is a big deal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="event__shape__1">
    <img src="assets/img/event__shape_1.png" alt="" />
  </div>
  <div className="event__shape__2">
    <img src="assets/img/event__shape_2.png" alt="" />
  </div>
  <div className="event__shape__3">
    <img src="assets/img/event__shape_3.png" alt="" />
  </div>
</section>
  {/* =================== NEWSLETTER AREA START ===================== */}
  <section className="newsletter__area">
    <div className="container">
      <div
        className="newsltter__inner__blk"
        style={{ backgroundImage: "url(./assets/img/newsletter_thumb.png)" }}
      >
        <div className="newsletter__form">
          <h4>
            Join our newsletter to stay up to date on features and releases
          </h4>
          <form action="#">
            <input type="text" placeholder="abcd@gmail.com" />
            <a href="#">
              <img src="assets/img/mail.svg" alt="" />
            </a>
            <button type="button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</>

}

export default HomePage;