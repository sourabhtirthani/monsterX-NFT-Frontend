import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallets } from "../../walletConfiguration/Wallets";



function Header () {
  const [openModel,setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!openModel)
  }
  const close = () => {
    setOpen(false);
  }
    return <>
  <div className={openModel ? "mobile__menu none__desk active" : "mobile__menu none__desk"}>
    <div className="header__search">
      <div className="h__search__blk">
        <input
          id="dropdownMenuClickableInside"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          type="text"
          placeholder="Search artwork, collection..."
        />
        <button type="button">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <div
          className="search__dropdown dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuClickableInside"
        >
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Artist
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              NFTs
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Collections
            </button>
            <button
              className="nav-link"
              id="nav-users-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-users"
              type="button"
              role="tab"
              aria-controls="nav-users"
              aria-selected="false"
            >
              Users
            </button>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="search__drop__body">
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_2.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dhruv Swami</h5>
                    <p>ABC Curation</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_3.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Hans</h5>
                    <p>ABC Curation</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_4.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dhruv Swami</h5>
                    <p>ABC Curation</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_5.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Hans 2</h5>
                    <p>ABC Curation</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_2.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dhruv Swami</h5>
                    <p>ABC Curation</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_3.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Hans</h5>
                    <p>ABC Curation</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="search__drop__body">
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Price: 0.00000001 ETH</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Price: 0.00000001 ETH</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Price: 0.00000001 ETH</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Price: 0.00000001 ETH</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Price: 0.00000001 ETH</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Price: 0.00000001 ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="search__drop__body">
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>SNFT Collections</h5>
                    <p>Testnet</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Testnet</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Testnet</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Testnet</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Testnet</p>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dashboard</h5>
                    <p>Testnet</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-users"
              role="tabpanel"
              aria-labelledby="nav-users-tab"
            >
              <div className="search__drop__body">
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_2.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dhruv Swami</h5>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_3.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Seller Account</h5>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_4.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Hans</h5>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_5.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Hans 2</h5>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_2.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Dhruv Swami</h5>
                  </div>
                </div>
                <div className="search__drop__single__step">
                  <div className="search__drop__thumb">
                    <img src="../assets/img/search_drop_thumb_3.png" alt="" />
                  </div>
                  <div className="search__drop__content">
                    <h5>Seller Account</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      <div className="header__btn">
        <a data-bs-toggle="modal" href="#exampleModalToggle" role="button">
          Connect Wallettt{" "}
          <span>
            <img src="../assets/img/wallet.svg" alt="" />
          </span>
        </a>
      </div>
      <div className="social__ico__blk">
        <a href="#">
          <img src="../assets/img/social_ico_1.svg" alt="" />
        </a>
        <a href="#">
          <img src="../assets/img/social_ico_2.svg" alt="" />
        </a>
        <a href="#">
          <img src="../assets/img/social_ico_3.svg" alt="" />
        </a>
        <a href="#">
          <img src="../assets/img/social_ico_4.svg" alt="" />
        </a>
        <a href="#">
          <img src="../assets/img/social_ico_5.svg" alt="" />
        </a>
      </div>
    </div>
    <div className="close__menu" onClick={close}>
    <i className="fa-solid fa-xmark" />
    </div>
  </div>
  <div className={openModel ? "overlay none__desk active" : "overlay none__desk"} />
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
          <div className="header__search">
            <div className="h__search__blk">
              <input
                id="dropdownMenuClickableInside"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
                type="text"
                placeholder="Search artwork, collection..."
              />
              <button type="button">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              <div
                className="search__dropdown dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuClickableInside"
              >
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home1"
                    type="button"
                    role="tab"
                    aria-controls="nav-home1"
                    aria-selected="true"
                  >
                    Artist
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile1"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile1"
                    aria-selected="false"
                  >
                    NFTs
                  </button>
                  <button
                    className="nav-link"
                    id="nav-contact1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact1"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact1"
                    aria-selected="false"
                  >
                    Collections
                  </button>
                  <button
                    className="nav-link"
                    id="nav-users1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-users1"
                    type="button"
                    role="tab"
                    aria-controls="nav-users1"
                    aria-selected="false"
                  >
                    Users
                  </button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home1"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="search__drop__body">
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_2.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dhruv Swami</h5>
                          <p>ABC Curation</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_3.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Hans</h5>
                          <p>ABC Curation</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_4.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dhruv Swami</h5>
                          <p>ABC Curation</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_5.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Hans 2</h5>
                          <p>ABC Curation</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_2.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dhruv Swami</h5>
                          <p>ABC Curation</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_3.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Hans</h5>
                          <p>ABC Curation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile1"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="search__drop__body">
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Price: 0.00000001 ETH</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Price: 0.00000001 ETH</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Price: 0.00000001 ETH</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Price: 0.00000001 ETH</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Price: 0.00000001 ETH</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Price: 0.00000001 ETH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact1"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="search__drop__body">
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>SNFT Collections</h5>
                          <p>Testnet</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Testnet</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Testnet</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Testnet</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Testnet</p>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_1.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dashboard</h5>
                          <p>Testnet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-users1"
                    role="tabpanel"
                    aria-labelledby="nav-users-tab"
                  >
                    <div className="search__drop__body">
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_2.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dhruv Swami</h5>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_3.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Seller Account</h5>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_4.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Hans</h5>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_5.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Hans 2</h5>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_2.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Dhruv Swami</h5>
                        </div>
                      </div>
                      <div className="search__drop__single__step">
                        <div className="search__drop__thumb">
                          <img src="../assets/img/search_drop_thumb_3.png" alt="" />
                        </div>
                        <div className="search__drop__content">
                          <h5>Seller Account</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Wallets />
        </div>
        <div className="open__menu none__desk" onClick={handleOpen}>
          <i className="fa-solid fa-bars" />
        </div>
      </div>
    </div>
  </header>
  </>
    
}

export default Header;