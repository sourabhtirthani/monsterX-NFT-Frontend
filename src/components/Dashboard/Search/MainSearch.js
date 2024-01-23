import { useState } from "react";

function MainSearch () {
  const [open,setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  }
    return <div className="profile__header">
    <div className="open__sidebar none__desk">
      <i className="fa-solid fa-bars" />
    </div>
    <div className="profile__search phone__none">
      <input type="text" placeholder="Search artwork, collection..." />
      <button type="button">
      <i className="fa-solid fa-magnifying-glass" />
      </button>
    </div>
    <div className="profile__bell__area">
      <span>
        <img src="../assets/img/profile_bell_1.svg" alt="" />
      </span>
    </div>
    <div className="profile__dropdown__blk">
  <div
    id="dropdownMenuClickableInside"
    data-bs-toggle="dropdown"
    data-bs-auto-close="outside"
    aria-expanded="false"
    className="profile__dropdown__inner"
  >
    <div className="profile__drop__thumb">
      <img src="../assets/img/profile_pic_1.png" alt="" />
    </div>
    <h4>
      Themesflat <i class="fa-solid fa-angle-down" />
    </h4>
  </div>
  <div
    aria-labelledby="dropdownMenuClickableInside"
    className="profile__dropdown__wrapper dropdown-menu dropdown-menu-end"
  >
    <div className="profile__dropdown__inner__blk">
      <div className="profile__dropdown__header">
        <div className="profile__dropdown__inner">
          <div className="profile__drop__thumb">
            <img src="../assets/img/profile_pic_1.png" alt="" />
          </div>
          <h4>Themesflat</h4>
        </div>
        <div className="profile__dropdown__list">
          <ul>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">My Favorite</a>
            </li>
            <li>
              <a href="#">My Order</a>
            </li>
            <li className="flex_list">
              <a href="#">Language</a>
              <div className="profile__list__inner__language">
                <div className={open ? "nice-select open" : "nice-select"} onClick={()=>setOpen(!open)} tabIndex={0}>
                <span className="current">En</span>
                <ul className="list">
                  <li data-value="En" data-display="En" className="option selected focus" onClick={close}>
                    En
                  </li>
                  <li data-value={1} className="option" onClick={close}>
                    Russian
                  </li>
                  <li data-value={2} className="option" onClick={close}>
                    Chinese
                  </li>
                  <li data-value={3} className="option" onClick={close}>
                    Spanish
                  </li>
                  <li data-value={4} className="option" onClick={close}>
                    Japanese
                  </li>
                </ul>
              </div>
              </div>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
          <div className="ethereum__area">
            <div className="ethereum__left__blk">
              <div className="ethereum__thumb">
                <img src="../assets/img/metamask-fox.svg" alt="" />
              </div>
              <div className="ethereum__text">
                <h4>Ethereum</h4>
                <p>0x880...65d9</p>
              </div>
            </div>
            <div className="ethereum__right__blk">
              <div className="ethereum__btn">
                <a href="#">
                  <img src="../assets/img/copy.svg" alt="" />
                </a>
                <a href="#">
                  <img src="../assets/img/power_btn.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="ethereum__price">
            <h4>
              <span>
                <img src="../assets/img/blue_compas.svg" alt="" />
              </span>{" "}
              0.219 ETH
            </h4>
            <h5>$448.9</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
}

export default MainSearch;