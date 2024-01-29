import { useContext, useState } from "react";
import MyContext from "../../../context/myContext";
import { Wallets } from "../../../walletConfiguration/Wallets";

function MainSearch () {
  const [open,setOpen] = useState(false);
  const {userData} = useContext(MyContext);
  
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
      {userData.profileimage ? <img src={process.env.REACT_APP_API_BASE_IMAGE_URL+"/images/"+userData.profileimage} alt="" /> : <img src="../assets/img/profile_pic_1.png" alt="" />}
    </div>
    <h4>
      {userData.userName && userData.userName } <i class="fa-solid fa-angle-down" />
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
          {userData.profileimage ? <img src={process.env.REACT_APP_API_BASE_IMAGE_URL+"/images/"+userData.profileimage} alt="" /> : <img src="../assets/img/profile_pic_1.png" alt="" />}
          </div>
          <h4>{userData.userName && userData.userName}</h4>
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
              <Wallets />                          
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

  </div>
}

export default MainSearch;