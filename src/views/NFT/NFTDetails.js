import { useState } from "react";
import Category from "../../components/Dashboard/Filters/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function NFTDetails () {
    const [type,setType] = useState('buy');
    const [open,setOpen] = useState({
        state : false,
        city : false
    });
    const handleOpen = (name,value) => {
        setOpen({...open,[name]:value})
    }
    const close = () => {
        setOpen(false);
    }
    return <>
    <div className="main__area">
  <div className="mobile__menu none__desk">
    <div className="header__right__blk">
      <div className="main__menu">
        <nav className="accordion">
          <ul>
            <li>
              <a href="#">Appreciates</a>
            </li>
            <li>
              <a href="#">Artist</a>
            </li>
            <li>
              <a href="#">Curation</a>
            </li>
            <li>
              <a href="#">News &amp; Event</a>
            </li>
            <li>
              <a href="#">How to work</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nft__header__btn">
        <a href="#" className="common__btn common_border__btn">
          Create RWA
        </a>
        <a href="#" className="common__btn">
          Sign In
        </a>
      </div>
    </div>
    <div className="close__menu">
    <i className="fa-solid fa-xmark" />
    </div>
  </div>
  <div className="overlay none__desk" />
  {/* =================== HEADER AREA START ===================== */}
  <header className="header__area">
    <div className="container">
      <div className="header__inner__blk">
        <div className="header__logo">
          <a href="#">
            <img src="../assets/img/logo.svg" alt="" />
          </a>
        </div>
        <div className="header__right__blk none__phone">
          <div className="main__menu">
            <nav>
              <ul>
                <li className="active">
                  <a href="#">Appreciates</a>
                </li>
                <li>
                  <a href="#">Artist</a>
                </li>
                <li>
                  <a href="#">Curation</a>
                </li>
                <li>
                  <a href="#">News &amp; Event</a>
                </li>
                <li>
                  <a href="#">How to work</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nft__header__btn">
            <a href="#" className="common__btn common_border__btn">
              Create RWA
            </a>
            <a href="#" className="common__btn">
              Sign In
            </a>
          </div>
        </div>
        <div className="open__menu none__desk">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
    </div>
  </header>
  {/* =================== HEADER AREA END ===================== */}
      {/* =================== NFT DETAIL HERO AREA START ===================== */}
      <section className="nft__detail__hero__area">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="nft__detail__thumb__blk">
                <img src="../assets/img/nft_thumb.png" alt="" />
                <div className="nft__heart__blk">
                  <div className="nft__compas">
                    <a href="#">
                      <img src="../assets/img/compas.svg" alt="" />
                    </a>
                  </div>
                  <div className="heart__area">
                    <span>10</span>
                    <div className="con-like love_border_white">
                      <input title="like" type="checkbox" className="like" />
                      <div className="checkmark">
                        <svg
                          viewBox="0 0 24 24"
                          className="outline"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          className="filled"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          className="celebrate"
                          width={100}
                          height={100}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon points="10,10 20,20" className="poly" />
                          <polygon points="10,50 20,50" className="poly" />
                          <polygon points="20,80 30,70" className="poly" />
                          <polygon points="90,10 80,20" className="poly" />
                          <polygon points="90,50 80,50" className="poly" />
                          <polygon points="80,80 70,70" className="poly" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nft_ico">
                  <img src="../assets/img/nfc-icon.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nft__contect__blk">
                <div className="nft__edit__blk">
                  <div className="nft__share__ico">
                    <a href="#">
                      <img src="../assets/img/nft_share.svg" alt="" />
                    </a>
                  </div>
                  <div className="nft__edit__ico">
                    <a data-bs-toggle="dropdown" aria-expanded="false" href="#">
                      <img src="../assets/img/nft_edit.svg" alt="" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end similar__dropdown">
                      <li>
                        <a className="dropdown-item"                     
                        data-bs-target="#exampleModalToggle3"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        href="#" >
                          Edit NFT
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item"
                        data-bs-toggle="modal"
                        href="#exampleModalToggle"
                        role="button">
                          Transfer Token
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item"                     
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal">
                          Burn Token
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="theme__title">
                  <h4>Themesflat #0270</h4>
                </div>
                <div className="nft__profile">
                  <div className="single__nft__profile">
                    <a href="#">
                      <div className="nft__profile__thumb">
                        <img src="../assets/img/themes_img_1.png" alt="" />
                      </div>
                      <div className="nft__profile__text">
                        <p>Owned by:</p>
                        <h6>Marvin McKinney</h6>
                      </div>
                    </a>
                  </div>
                  <div className="single__nft__profile">
                    <a href="#">
                      <div className="nft__profile__thumb">
                        <img src="../assets/img/themes_img_2.png" alt="" />
                      </div>
                      <div className="nft__profile__text">
                        <p>Created by:</p>
                        <h6>Marvin McKinney</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="nft__profile__activities__btn">
                  <a href="#">
                    <span>
                      <img src="../assets/img/eye.svg" alt="" />
                    </span>{" "}
                    208 view
                  </a>
                  <a href="#">
                    <span>
                      <img src="../assets/img/heart.svg" alt="" />
                    </span>{" "}
                    10 favorites
                  </a>
                  <a href="#">
                    <span>
                      <img src="../assets/img/subscription.svg" alt="" />
                    </span>{" "}
                    Collectibles
                  </a>
                </div>
                <div className="current__price__area">
                  <div className="current__price__title">
                    <p>Current price</p>
                  </div>
                  <div className="current__price__blk">
                    <div className="current__price__text">
                      <h4>
                        0,032 ETH <span>$58,11</span>
                      </h4>
                    </div>
                    <div className="sale__btn">
                      {type === 'buy' ? <a
                        className="common__btn common_border__btn"
                        data-bs-toggle="modal" 
                        href="#exampleModalToggle6" 
                        role="button"
                      >
                        Buy Now
                      </a> : type === 'release' ? <div className="sale__btn">
                            <a className="common__btn common_border__btn"                      
                            >
                              Release Escrow
                            </a>
                            <div className="order_btn">
                              <a data-bs-toggle="modal" 
                            href="#exampleModalToggle10" 
                            role="button">Cancel Order</a>
                            </div>
                          </div>
                          : <a
                        className="common__btn common_border__btn"
                        data-bs-toggle="modal" 
                        href="#exampleModalToggle4" 
                        role="button"
                      >
                        Put On Sale
                      </a>}
                      
                    </div>
                  </div>
                </div>
                <div className="over__view__area">
                  <div className="overview__title">
                    <h5>Overview</h5>
                  </div>
                  <div className="over__view__flex">
                    <div className="overview__left__blk">
                      <div className="overview__similar__text">
                        <h5>Overview</h5>
                        <p>Dhruv Swami</p>
                      </div>
                      <div className="overview__similar__text mt-3">
                        <h5>Shipping Country</h5>
                        <p>India</p>
                      </div>
                    </div>
                    <div className="overview__right__blk">
                      <div className="overview__similar__text">
                        <h5>Size</h5>
                        <p>
                          <small>Length</small> <span>:</span> 20cm
                        </p>
                        <p>
                          <small>Height</small> <span>:</span> 20cm
                        </p>
                        <p>
                          <small>Width</small> <span>:</span> 20cm
                        </p>
                        <p>
                          <small>Weight</small> <span>:</span> 10kg
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nft__thumb__area">
            <div className="row g-3">
              <div className="col-2">
                <div className="single__nft__thumb">
                  <img src="../assets/img/attachment_thumb_1.jpg" alt="" />
                </div>
              </div>
              <div className="col-2">
                <div className="single__nft__thumb">
                  <img src="../assets/img/attachment_thumb_2.jpg" alt="" />
                </div>
              </div>
              <div className="col-2">
                <div className="single__nft__thumb">
                  <img src="../assets/img/attachment_thumb_3.jpg" alt="" />
                </div>
              </div>
              <div className="col-2">
                <div className="single__nft__thumb">
                  <img src="../assets/img/attachment_thumb_4.jpg" alt="" />
                </div>
              </div>
              <div className="col-2">
                <div className="single__nft__thumb">
                  <img src="../assets/img/appreciate_thumb_3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="description__similar__blk">
            <div className="description__title__blk">
              <div className="description__title">
                <h4>
                  <span>
                    <img src="../assets/img/description_ico.svg" alt="" />
                  </span>{" "}
                  Description
                </h4>
              </div>
              <div className="description__angle__down">
                <span>
                  <img src="../assets/img/angle_down.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="description__content">
              <p>
                8,888 NFTs of beautiful, Asian women painstakingly-crafted where
                even the most intricate details are steeped in historical
                significance. We envision 8SIAN being a global, inclusive
                community <a href="#">see more</a>
              </p>
            </div>
          </div>
          <div className="description__similar__blk">
            <div className="description__title__blk">
              <div className="description__title">
                <h4>
                  <span>
                    <img src="../assets/img/description_ico.svg" alt="" />
                  </span>{" "}
                  Properties
                </h4>
              </div>
              <div className="description__angle__down">
                <span>
                  <img src="../assets/img/angle_down.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="description__testing">
              <div className="row g-3">
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="nft__single__option">
                    <a href="#">
                      <h4>Testing</h4>
                      <p>Dhruv Swami</p>
                    </a>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="nft__single__option">
                    <a href="#">
                      <h4>Testing</h4>
                      <p>Dhruv Swami</p>
                    </a>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="nft__single__option">
                    <a href="#">
                      <h4>Testing</h4>
                      <p>Dhruv Swami</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description__similar__blk">
            <div className="description__title__blk mb-0">
              <div className="description__title">
                <h4>
                  <span>
                    <img src="../assets/img/arrow_up_down.svg" alt="" />
                  </span>{" "}
                  Item activity
                </h4>
              </div>
              <div className="description__angle__down">
                <span>
                  <img src="../assets/img/angle_down.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="activity__table__blk">
              <div className="dashboard__table__wrapper">
                <div className="dashboard__table mt-10">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Event</th>
                        <th scope="col">Price</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_1.svg" alt="" />
                            </span>{" "}
                            Minted
                          </div>
                        </td>
                        <td>-/-</td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_2.svg" alt="" />
                            </span>{" "}
                            Listed
                          </div>
                        </td>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/compas.svg" alt="" />
                            </span>{" "}
                            0,0319
                          </div>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_3.svg" alt="" />
                            </span>
                            Unlisted
                          </div>
                        </td>
                        <td>-/-</td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_4.svg" alt="" />
                            </span>
                            Purchased
                          </div>
                        </td>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/compas.svg" alt="" />
                            </span>{" "}
                            0,0212
                          </div>
                        </td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_5.svg" alt="" />
                            </span>{" "}
                            In Escrow
                          </div>
                        </td>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/compas.svg" alt="" />
                            </span>{" "}
                            0,0212
                          </div>
                        </td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_6.svg" alt="" />
                            </span>
                            Transfer
                          </div>
                        </td>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/compas.svg" alt="" />
                            </span>{" "}
                            0,0212
                          </div>
                        </td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_7.svg" alt="" />
                            </span>{" "}
                            Burn
                          </div>
                        </td>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/compas.svg" alt="" />
                            </span>{" "}
                            0,0212
                          </div>
                        </td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_8.svg" alt="" />
                            </span>
                            Royalties
                          </div>
                        </td>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/compas.svg" alt="" />
                            </span>{" "}
                            0,0212
                          </div>
                        </td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/activity_ico_9.svg" alt="" />
                            </span>{" "}
                            Split Payements
                          </div>
                        </td>
                        <td>
                          <div className="share_table">
                            <span>
                              <img src="../assets/img/compas.svg" alt="" />
                            </span>{" "}
                            0,0212
                          </div>
                        </td>
                        <td>
                          <span className="yellow_color">Dhruv Swami</span>
                        </td>
                        <td>
                          <span className="yellow_color">Hans Lee</span>
                        </td>
                        <td>11/19/2023</td>
                        <td>11:23:46 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="nft__details__area">
            <p>
              <span>
                <img src="../assets/img/details_ico_1.svg" alt="" />
              </span>{" "}
              Details
            </p>
            <p>
              <span>
                <img src="../assets/img/details_ico_2.svg" alt="" />
              </span>{" "}
              Erc721
            </p>
            <p className="yellow_color">
              <span>
                <img src="../assets/img/details_ico_3.svg" alt="" />
              </span>{" "}
              View on Sepolia Scan{" "}
              <a href="#">
                <img src="../assets/img/send_icon.svg" alt="" />
              </a>
            </p>
            <p className="yellow_color">
              <span>
                <img src="../assets/img/details_ico_4.svg" alt="" />
              </span>{" "}
              Open original on IPFS{" "}
              <a href="#">
                <img src="../assets/img/send_icon.svg" alt="" />
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* =================== NFT DETAIL HERO AREA END ===================== */}
      {/* =================== NEWSLETTER AREA START ===================== */}
      <section className="newsletter__area">
        <div className="container">
          <div
            className="newsltter__inner__blk"
            style={{ backgroundImage: "url(./../assets/img/newsletter_thumb.png)" }}
          >
            <div className="newsletter__form">
              <h4>
                Join our newsletter to stay up to date on features and releases
              </h4>
              <form action="#">
                <input type="text" placeholder="abcd@gmail.com" />
                <a href="#">
                  <img src="../assets/img/mail.svg" alt="" />
                </a>
                <button type="button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* =================== NEWSLETTER AREA END ===================== */}
      {/* =================== FOOTER AREA START ===================== */}
    <Footer />
      {/* =================== FOOTER AREA END ===================== */}
    </div>
    <div
      className="modal fade common__popup__blk"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body similar__site__popup">
            <div className="popup__inner__blk">
              <div className="popup__common__title">
                <h4>Transfer Token</h4>
                <p>Transfer this token from your wallet to other wallet.</p>
              </div>
              <div className="popup__similar__form">
                <div className="single__popup__input input_no_padding">
                  <label htmlFor="#">Recipient Address*</label>
                  <input type="text" placeholder="Recipient Address..." />
                </div>
                <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-20 pb-0">
                  <a
                    href="#"
                  >
                    Confirm
                  </a>
                  <a href="#" className="cancel">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade common__popup__blk"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body similar__site__popup">
            <div className="popup__inner__blk">
              <div className="popup__common__title">
                <h4>Do you really want to burn this Token?</h4>
                <p>
                  Burning token will destroy/delete the token from contract
                  permanently. You will not find this token anywhere.
                </p>
              </div>
              <div className="popup__similar__form">
                <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-20 pb-0">
                  <a
                  >
                    Confirm
                  </a>
                  <a href="#" className="cancel">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade common__popup__blk"
      id="exampleModalToggle3"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel3"
      tabIndex={-1}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: 1180 }}
      >
        <div className="modal-content">
          <div className="modal-body similar__site__popup">
            <span className="close_modal close_center" data-bs-dismiss="modal">
              <i className="fa-solid fa-xmark" />
            </span>
            <div className="popup__inner__blk">
              <div className="popup__common__title mt-4">
                <h4>Edit NFT</h4>
              </div>
              <div className="common__edit__proe__wrap mt-5 mb-5">
                <div className="edit__profilfile__inner__top__blk">
                  <div className="edit__profile__inner__title">
                    <h5>Attachment</h5>
                  </div>
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="../assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="attachment__card__blk">
                  <div className="row gx-4">
                    <div className="col-2">
                      <div className="single__attachment__cird__blk">
                        <div className="attachment__thumb">
                          <img src="../assets/img/attachment_thumb_1.jpg" alt="" />
                        </div>
                        <div className="attachment__content">
                          <a href="#">
                            Change{" "}
                            <span>
                              <img src="../assets/img/Trash.svg" alt="" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="single__attachment__cird__blk">
                        <div className="attachment__thumb">
                          <img src="../assets/img/attachment_thumb_2.jpg" alt="" />
                        </div>
                        <div className="attachment__content">
                          <a href="#">
                            Change{" "}
                            <span>
                              <img src="../assets/img/Trash.svg" alt="" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="single__attachment__cird__blk">
                        <div className="attachment__thumb">
                          <img src="../assets/img/attachment_thumb_3.jpg" alt="" />
                        </div>
                        <div className="attachment__content">
                          <a href="#">
                            Change{" "}
                            <span>
                              <img src="../assets/img/Trash.svg" alt="" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="single__attachment__cird__blk">
                        <div className="attachment__thumb">
                          <img src="../assets/img/attachment_thumb_4.jpg" alt="" />
                        </div>
                        <div className="attachment__content">
                          <a href="#">
                            Change{" "}
                            <span>
                              <img src="../assets/img/Trash.svg" alt="" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="single__attachment__cird__blk">
                        <div className="attachment_upload_thumb">
                          <div className="imageWrapper">
                            <img
                              className="image-2"
                              src="https://i.ibb.co/c8FMdw1/attachment-link.png"
                            />
                          </div>
                        </div>
                        <button className="file-upload">
                          <input type="file" className="file-input-2" />
                          <span>
                            Upload{" "}
                            <small>
                              <img src="../assets/img/Upload.svg" alt="" />
                            </small>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popup__select">
                <div className="categorie__select select_black_bg">
                  <label htmlFor="#">Category </label>
                  <Category style={{width : '100%'}} />
                </div>
              </div>
              <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-3 pb-0">
                <a href="#" className="cancel">
                  Cancel
                </a>
                <a href="#">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggle4"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: 1200 }}
    >
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <span className="close_modal" data-bs-dismiss="modal">
          <i className="fa-solid fa-xmark" />
          </span>
          <div className="popup__inner__blk">
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>Give a new price to put this asset for sale.</h5>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-lg-12">
                    <div className="single__edit__profile__step">
                      <input
                        type="text"
                        placeholder="Enter Price for one piece"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nft__single__switch__box mt-3">
              <div className="nft__switch__text">
                <h6>Split Payments</h6>
                <p>
                  Add multiple address to recieve your payments. Only Creator
                  will be able to see it. Must total 100%.
                </p>
              </div>
              <div className="nft__switch">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    defaultChecked=""
                  />
                </div>
              </div>
            </div>
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>Shipping Address</h5>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-md-6">
                    <div className="single__edit__profile__step">
                      <label htmlFor="#">Address 1*</label>
                      <input
                        type="text"
                        placeholder="Enter Your Street Address*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single__edit__profile__step">
                      <label htmlFor="#">Address 2</label>
                      <input
                        type="text"
                        placeholder="Enter Your Street Address*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
            <div onClick={()=>handleOpen('city',!open.city)} className="categorie__select select_black_bg">
              <label htmlFor="#">City *</label>
              <div className={open.city ? "nice-select open" : "nice-select"} tabIndex={0}>
                <span className="current">City *</span>
                <ul className="list">
                    <li
                    data-value="State"
                    data-display="State"
                    className="option selected focus"
                    >
                    New York
                    </li>
                    <li data-value={1} className="option" onClick={()=>close('city',false)}>
                    Highest last sale
                    </li>
                    <li data-value={2} className="option" onClick={()=>close('city',false)}>
                    Artist
                    </li>
                    <li data-value={3} className="option" onClick={()=>close('city',false)}>
                    Recently Minted
                    </li>
                    <li data-value={4} className="option" onClick={()=>close('city',false)}>
                    Recently Activity
                    </li>
                    <li data-value={5} className="option" onClick={()=>close('city',false)}>
                    Recently listed
                    </li>
                    <li data-value={6} className="option" onClick={()=>close('city',false)}>
                    Most Favorited
                    </li>
                    <li data-value={7} className="option" onClick={()=>close('city',false)}>
                    NFC Minted
                    </li>
                </ul>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div onClick={()=>handleOpen('state',!open.state)} className="categorie__select select_black_bg">
              <label htmlFor="#">State *</label>
              <div className={open.state ? "nice-select open" : "nice-select"} tabIndex={0}>
                <span className="current">State *</span>
                <ul className="list">
                    <li
                    data-value="State"
                    data-display="State"
                    className="option selected focus"
                    >
                    New York
                    </li>
                    <li data-value={1} className="option" onClick={()=>close('state',false)}>
                    Highest last sale
                    </li>
                    <li data-value={2} className="option" onClick={()=>close('state',false)}>
                    Artist
                    </li>
                    <li data-value={3} className="option" onClick={()=>close('state',false)}>
                    Recently Minted
                    </li>
                    <li data-value={4} className="option" onClick={()=>close('state',false)}>
                    Recently Activity
                    </li>
                    <li data-value={5} className="option" onClick={()=>close('state',false)}>
                    Recently listed
                    </li>
                    <li data-value={6} className="option" onClick={()=>close('state',false)}>
                    Most Favorited
                    </li>
                    <li data-value={7} className="option" onClick={()=>close('state',false)}>
                    NFC Minted
                    </li>
                </ul>
            </div>
            </div>
          </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single__edit__profile__step">
                      <label htmlFor="#">Postal Code*</label>
                      <input type="text" placeholder="Enter Postal Code" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single__edit__profile__step">
                      <label htmlFor="#">Phone Number*</label>
                      <input
                        type="text"
                        id="mobile_code"
                        className="from-control"
                        placeholder={'0000000000'}
                        name="name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>Contact Information For seller</h5>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-xl-12">
                    <div className="single__edit__profile__step">
                      <textarea
                        name="#"
                        placeholder="Please describe your product*"
                        id=""
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>
                    Consent for collection and Usage of Personal Information
                  </h5>
                  <p>
                    Please read the following and check the appropriate boxes to
                    indicate your consent:
                  </p>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-xl-12">
                    <div className="single__edit__profile__step">
                      <textarea
                        name="#"
                        placeholder="faucibus id malesuada aliquam. Tempus morbi turpis nulla viverra tellus mauris cum. Est consectetur commodo turpis habitasse sed. Nibh tincidunt quis nunc placerat arcu sagittis. In vitae fames nunc consectetur. Magna faucibus sit risus sed tortor malesuada purus. Donec fringilla orci lobortis quis id blandit rhoncus. "
                        id=""
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="agree__radio__btn">
              <div className="codeplay-ck">
                <label className="container-ck">
                  <p>I agree to all Term, Privacy Polic and fees</p>
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-20 pb-0">
              <a href="#" className="cancel">
                Discard
              </a>
              <a
                data-bs-toggle="modal"
                href="#exampleModalToggl5"
                role="button"
              >
                Submit{" "}
                <span>
                  <img src="assets/img/arrow_ico.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggl5"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk text-center">
            <div className="congrats__img">
              <img src="../assets/img/refresh_ico_1.svg" alt="" />
            </div>
            <div className="popup__common__title mt-3">
              <h4>Please wait while we put it on sale</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/* Buy Model */}
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggle6"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel6"
    tabIndex={-1}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: 1200 }}
    >
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <span className="close_modal" data-bs-dismiss="modal">
          <i className="fa-solid fa-xmark" />
          </span>
          <div className="popup__inner__blk">
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>Give a new price to put this asset for sale.</h5>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-lg-12">
                    <div className="single__edit__profile__step">
                      <input
                        type="text"
                        placeholder="Enter Price for one piece"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nft__single__switch__box mt-4">
              <div className="nft__switch__text">
                <h6>Split Payments</h6>
                <p>
                  Add multiple address to recieve your payments. Only Creator
                  will be able to see it. Must total 100%.
                </p>
              </div>
              <div className="nft__switch">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    defaultChecked=""
                  />
                </div>
              </div>
            </div>
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>Shipping Address</h5>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-md-6">
                    <div className="single__edit__profile__step">
                      <label htmlFor="#">Address 1*</label>
                      <input
                        type="text"
                        placeholder="Enter Your Street Address*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single__edit__profile__step">
                      <label htmlFor="#">Address 2</label>
                      <input
                        type="text"
                        placeholder="Enter Your Street Address*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                  <div onClick={()=>handleOpen('state',!open.state)} className="categorie__select select_black_bg">
              <label htmlFor="#">State *</label>
              <div className={open.state ? "nice-select open" : "nice-select"} tabIndex={0}>
                <span className="current">State *</span>
                <ul className="list">
                    <li
                    data-value="State"
                    data-display="State"
                    className="option selected focus"
                    >
                    New York
                    </li>
                    <li data-value={1} className="option" onClick={()=>close('state',false)}>
                    Highest last sale
                    </li>
                    <li data-value={2} className="option" onClick={()=>close('state',false)}>
                    Artist
                    </li>
                    <li data-value={3} className="option" onClick={()=>close('state',false)}>
                    Recently Minted
                    </li>
                    <li data-value={4} className="option" onClick={()=>close('state',false)}>
                    Recently Activity
                    </li>
                    <li data-value={5} className="option" onClick={()=>close('state',false)}>
                    Recently listed
                    </li>
                    <li data-value={6} className="option" onClick={()=>close('state',false)}>
                    Most Favorited
                    </li>
                    <li data-value={7} className="option" onClick={()=>close('state',false)}>
                    NFC Minted
                    </li>
                </ul>
            </div>
            </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                  <div onClick={()=>handleOpen('city',!open.city)} className="categorie__select select_black_bg">
              <label htmlFor="#">City *</label>
              <div className={open.city ? "nice-select open" : "nice-select"} tabIndex={0}>
                <span className="current">City *</span>
                <ul className="list">
                    <li
                    data-value="State"
                    data-display="State"
                    className="option selected focus"
                    >
                    New York
                    </li>
                    <li data-value={1} className="option" onClick={()=>close('city',false)}>
                    Highest last sale
                    </li>
                    <li data-value={2} className="option" onClick={()=>close('city',false)}>
                    Artist
                    </li>
                    <li data-value={3} className="option" onClick={()=>close('city',false)}>
                    Recently Minted
                    </li>
                    <li data-value={4} className="option" onClick={()=>close('city',false)}>
                    Recently Activity
                    </li>
                    <li data-value={5} className="option" onClick={()=>close('city',false)}>
                    Recently listed
                    </li>
                    <li data-value={6} className="option" onClick={()=>close('city',false)}>
                    Most Favorited
                    </li>
                    <li data-value={7} className="option" onClick={()=>close('city',false)}>
                    NFC Minted
                    </li>
                </ul>
            </div>
            </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single__edit__profile__step">
                      <label htmlFor="#">Postal Code*</label>
                      <input type="text" placeholder="Enter Postal Code" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single__edit__profile__step">
                      <label htmlFor="#">Phone Number*</label>
                      <input
                        type="text"
                        id="mobile_code"
                        className="from-control"
                        placeholder={'0000000000'}
                        name="name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>Contact Information For seller</h5>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-xl-12">
                    <div className="single__edit__profile__step">
                      <textarea
                        name="#"
                        placeholder="Please describe your product*"
                        id=""
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>
                    Consent for collection and Usage of Personal Information
                  </h5>
                  <p>
                    Please read the following and check the appropriate boxes to
                    indicate your consent:
                  </p>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-xl-12">
                    <div className="single__edit__profile__step">
                      <textarea
                        name="#"
                        placeholder="faucibus id malesuada aliquam. Tempus morbi turpis nulla viverra tellus mauris cum. Est consectetur commodo turpis habitasse sed. Nibh tincidunt quis nunc placerat arcu sagittis. In vitae fames nunc consectetur. Magna faucibus sit risus sed tortor malesuada purus. Donec fringilla orci lobortis quis id blandit rhoncus. "
                        id=""
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="agree__radio__btn">
              <div className="codeplay-ck">
                <label className="container-ck">
                  <p>I agree to all Term, Privacy Polic and fees</p>
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="common__edit__proe__wrap mt-4">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>Order Summery</h5>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-xl-12">
                    <div className="order__summery__area">
                      <div className="popup__order__summery__content">
                        <p>
                          Price <span>0.00000123 ETH</span>
                        </p>
                        <p>
                          Amount <span>1</span>
                        </p>
                        <p>
                          Royalty <span>0%</span>
                        </p>
                      </div>
                      <div className="popup__order__summery__content border-0 mt-25">
                        <p className="p-0">
                          You will Pay <span>0.100 ETH</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-20 pb-0">
              <a href="#" className="cancel">
                Discard
              </a>
              <a
                data-bs-toggle="modal"
                href="#exampleModalToggl7"
                role="button"
              >
                Proceed to Checkout{" "}
                <span>
                  <img src="assets/img/arrow_ico.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggl7"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: 780 }}
    >
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk">
            <div className="popup__common__title">
              <h5>
                <span>
                  <img src="assets/img/information_icon_1.svg" alt="" />
                </span>{" "}
                Caution
              </h5>
            </div>
            <div className="popup__information__content">
              <h6>
                Do not disclose buyer shipping information to third parties!
              </h6>
              <p>
                To maintain the confidentiality of buyer information and ensure
                smooth transactions, please pay close attention to the following
                points:
              </p>
              <p>
                <span>1.</span> Confidentiality of Shipping Information: Buyer
                shipping information should remain confidential to sellers. Be
                cautious to prevent any external disclosures.
              </p>
              <p>
                <span>2.</span> Tips for Safe Transactions: Handle buyer
                shipping information securely to sustain safe and transparent
                transactions.
              </p>
              <p>
                <span>3.</span> Protection of Personal Information: As a seller,
                it is imperative to treat buyer personal information with utmost
                care. Avoid disclosing it to third parties.We kindly request
                your strict adherence to these guidelines to uphold transparency
                and trust in your transactions. Ensuring a secure transaction
                environment benefits everyone involved.
              </p>
              <h5>Thank You</h5>
            </div>
            <div
              className="popup__inner__button edit__profile__bottom__btn pt-20 pb-0"
              style={{ maxWidth: 210, marginRight: "auto" }}
            >
              <a
                data-bs-target="#exampleModalToggle8"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                href="#"
              >
                I Agree
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggle8"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabIndex={-1}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: 575 }}
    >
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk">
            <div className="popup__common__title">
              <h5>Checkout</h5>
              <p>You are about to purchase Dhruv Swami From 0x50af9...6158</p>
            </div>
            <div className="connected__top__blk popup__connected__top__blk mb-35">
              <div className="connected__left__blk">
                <div className="connected_compas">
                  <span>
                    <img src="assets/img/compas.svg" alt="" />
                  </span>
                  <div className="connected_left_text">
                    <h5>0x1743.....2343d</h5>
                    <span>Sepolia Test Network</span>
                  </div>
                </div>
              </div>
              <div className="connected__right__blk">
                <a href="#">Connected</a>
              </div>
            </div>
            <div className="order__summery__area">
              <div className="popup__order__summery__content">
                <p>
                  Price <span>0.00000123 ETH</span>
                </p>
                <p>
                  Amount <span>1</span>
                </p>
                <p>
                  Royalty <span>0%</span>
                </p>
              </div>
              <div className="popup__order__summery__content mb-15 mt-25">
                <p>
                  You will Pay <span>0.100 ETH</span>
                </p>
              </div>
            </div>
            <div
              className="popup__inner__button edit__profile__bottom__btn pt-20 pb-0"
              style={{ maxWidth: 210, margin: "auto" }}
            >
              <a
                data-bs-target="#exampleModalToggl9"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                href="#"
              >
                I Agree
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggl9"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel3"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk text-center">
            <div className="congrats__img">
              <img src="assets/img/Check_circle.svg" alt="" />
            </div>
            <div className="popup__common__title mt-4">
              <h5>Purchase Success!</h5>
              <p>Your Payment has been successfully done.</p>
            </div>
            <div className="popup__success__form">
              <div className="row g-3">
                <div className="col-6">
                  <div className="single__popup__success__blk">
                    <p>From</p>
                    <span>0x50af9...6158</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="single__popup__success__blk">
                    <p>To</p>
                    <span>0x50af9...6158</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="single__popup__success__blk">
                    <p>Payment Method</p>
                    <span>Sepolia</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="single__popup__success__blk">
                    <p>Payment Time</p>
                    <span>11/19/2023, 11:49:57 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-20 pb-0">
              <a href="#" className="cancel">
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggle10"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: 1180 }}
    >
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <span className="close_modal close_center" data-bs-dismiss="modal">
          <i className="fa-solid fa-xmark" />
          </span>
          <div className="popup__inner__blk">
            <div className="popup__common__title mt-20">
              <h4>
                <span>
                  <img src="assets/img/Receipt-ico.svg" alt="" />
                </span>{" "}
                Order Cancellation Request
              </h4>
            </div>
            <div className="order__cancellation">
              <p>
                Firstly, we sincerely regret receiving your request for order
                cancellation. Please be informed that cancellations due to a
                change of mind are not processed in accordance with our terms
                and conditions. However, if there are significant reasons such
                as shipping delays or product defects, your order cancellation
                may be approved. We strive to provide a prompt and accurate
                assessment of your request.
              </p>
              <p>
                Kindly elaborate on the reasons for your cancellation in the
                field below. After careful review, we will communicate the
                results and offer additional consultation through the email and
                messenger ID you provided. Your valuable feedback is essential
                in our commitment to delivering the best possible service. Thank
                you.
              </p>
            </div>
            <div className="common__edit__proe__wrap mt-20">
              <div className="edit__profile__form">
                <div className="row gy-4 gx-3">
                  <div className="col-xl-12">
                    <div className="single__edit__profile__step">
                      <textarea
                        name="#"
                        placeholder="Please describe your product*"
                        id=""
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="common__edit__proe__wrap mt-20">
              <div className="edit__profilfile__inner__top__blk">
                <div className="edit__profile__inner__title">
                  <h5>Curation Description Image</h5>
                </div>
                <div className="edit_profile_inner_top_right">
                  <div className="add_new">
                    <a href="#">
                      <span>
                        <img src="assets/img/Plus_circle.svg" alt="" />
                      </span>{" "}
                      Add New
                    </a>
                  </div>
                  <div className="edit__profile__angle__ico">
                    <span>
                      <img src="assets/img/angle_up.svg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="file__formate">
                <p>PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.</p>
              </div>
              <div className="upload__file__with__name">
                <input type="file" id="real-file" hidden="hidden" />
                <button type="button" id="custom-button">
                  Upload{" "}
                  <span>
                    <img src="assets/img/Upload_ico.svg" alt="" />
                  </span>
                </button>
                <span id="custom-text">Choose File</span>
              </div>
            </div>
            <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-20 pb-0">
              <a href="#" className="cancel">
                Cancel
              </a>
              <a
                data-bs-toggle="modal"
                href="#exampleModalToggl11"
                role="button"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggl11"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <span className="close_modal" data-bs-dismiss="modal">
          <i className="fa-solid fa-xmark" />
          </span>
          <div className="popup__inner__blk text-center">
            <div className="congrats__img">
              <img src="assets/img/Check_circle.svg" alt="" />
            </div>
            <div className="popup__common__title mt-20">
              <h5>Application Success</h5>
              <p>
                Your order cancellation request has been successfully received.
                We will carefully review it and contact you as soon as possible.
                Thank you for your patience.
              </p>
            </div>
            <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-20 pb-0">
              <a href="#">Close</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  
}

export default NFTDetails;