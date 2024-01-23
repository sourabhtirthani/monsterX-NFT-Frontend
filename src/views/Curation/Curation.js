import { useState } from "react";
import RecentActivity from "../../components/Dashboard/Filters/RecentActivity";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useNavigate } from "react-router-dom";

function Curation () {
  const navigate = useNavigate();
  const [selectedType,setSelectedType] = useState('items');
  const [tabShow,setTabShow] = useState('curation')
  const onClickMenuButton = (value) => {
    navigate(`/dashboard`)
  }
  
    return <div className="profile__page__main">
    <Sidebar onClickMenuButton={onClickMenuButton} activeTab={tabShow} />
    <div className="overlay none__desk" />
    <div className="profile__wrapper">
      <div className="profile__header">
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
          <div className="profile__dropdown__inner">
            <div className="profile__drop__thumb">
              <img src="../assets/img/profile_pic_1.png" alt="" />
            </div>
            <h4>
              Themesflat <i className="fal fa-angle-down" />
            </h4>
          </div>
        </div>
      </div>
      <div className="breadcrumb__area">
        <div
          className="breadcrumb__inner__wrap"
          style={{ backgroundImage: "url(./../assets/img/breadcrumb_bg_1.png)" }}
        >
          <div className="breadcrumb__inner__blk">
            <div className="copy-text">
              <input
                type="text"
                className="text"
                defaultValue="O494XR2454....22df3"
              />
              <button>
                <img src="../assets/img/copy.svg" alt="" />
              </button>
            </div>
            <div className="breadcrumb__right__blk">
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
              <div className="edit__breadcrumb">
                <a href="#">
                  <span>
                    <img src="../assets/img/Pencil-ico.svg" alt="" />
                  </span>{" "}
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__area">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="inner__profile__bottom__content mb-20 p-0">
              <p className="bg-transparent p-0">
                Tellus est commodo nunc a montes. Tempus dolor convallis cras orci
                turpis sit aenean. Mi enim vitae proin facilisi. Sed tincidunt
                ullamcorper sed semper a. Rhoncus eu cras vel venenatis iam at
                proin. <a href="#">More...</a>
              </p>
            </div>
            <div className="row g-4">
            <div className="col-xxl-6 col-lg-12 col-md-6">
              <div className="single__about__box">
                <div className="about__thumb">
                  <img src="../assets/img/appreciate_thumb_1.png" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=cO-2i8FCrs8"
                    className="play__button"
                  >
                    <span>
                      <img src="../assets/img/play_btn.svg" alt="" />
                    </span>
                  </a>
                </div>
                <div className="about__content">
                  <h4>Intro About The Apes</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-12 col-md-6">
              <div className="single__about__box">
                <div className="about__thumb">
                  <img src="../assets/img/appreciate_thumb_1.png" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=cO-2i8FCrs8"
                    className="play__button"
                  >
                    <span>
                      <img src="../assets/img/play_btn.svg" alt="" />
                    </span>
                  </a>
                </div>
                <div className="about__content">
                  <h4>Intro About The Apes</h4>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-lg-4">
            <div className="about__item__text">
              <p>
                Items <span>80</span>
              </p>
              <p>
                Artist <span>14</span>
              </p>
              <p>
                Owner <span>74</span>
              </p>
              <p>
                Volume Ranking <span>1</span>
              </p>
            </div>
            <div className="about__social__blk">
              <div className="profile__social__ico">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fas fa-paper-plane" />
                </a>
                <a href="#">
                  <i className="fab fa-discord" />
                </a>
                <a href="#">
                  <i className="fab fa-discord" />
                </a>
                <a href="#">
                  <i className="fab fa-discord" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="art__bg__area">
        <img src="../assets/img/art_bg.png" alt="" />
        <a href="#">
          <img src="../assets/img/double_down_ico.svg" alt="" />
        </a>
      </div>
      <div className="categorie__btn">
        <a className={selectedType === "items" ? "active" : ""} onClick={()=>setSelectedType('items')}>
          Items
        </a>
        <a className={selectedType === "activity" ? "active" : ""} onClick={()=>setSelectedType('activity')}>Activity</a>
      </div>
      <div className="ctegorie__search__area">
        <div className="profile__search">
          <input type="text" placeholder="Search by name or trait... " />
          <button type="button">
          <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
       <RecentActivity />
      </div>
      {/* Items */}
      <div className={selectedType === "items" ? "categorie__card__blk" : "d-none"}>
        <div className="row g-4">
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <div className="single__sport__blk">
              <div className="sport__thumb">
                <img src="../assets/img/appreciate_thumb_1.png" alt="" />
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
                    <img src="../assets/img/compas.svg" alt="" /> 3.122 ETH
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <div className="single__sport__blk">
              <div className="sport__thumb">
                <img src="../assets/img/appreciate_thumb_1.png" alt="" />
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
                    <img src="../assets/img/compas.svg" alt="" /> 3.122 ETH
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* activity */}
      <div className={selectedType === "activity" ? "activity__table__blk" : "d-none"}>
  <div className="dashboard__table__wrapper">
    <div className="dashboard__table mt-10">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Item</th>
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                Minted
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                Listed
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                Unlisted
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                Purchased
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                In Escrow
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                Transfer
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                Burn
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                Royalties
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
                  <img src="assets/img/share.svg" alt="" />
                </span>{" "}
                Split Payments
              </div>
            </td>
            <td>
              <div className="flex__table">
                <span className="table_thumb">
                  <img src="assets/img/appreciate_thumb_8.png" alt="" />
                </span>
                New Curation Name
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
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  </div>  
}

export default Curation;