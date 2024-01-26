import { useContext, useState } from "react";
// tabs
import All from "../NFTCards/All";
import Owned from "../NFTCards/Owned";
import Created from "../NFTCards/Created";
import Curation from "../NFTCards/Curation";
import Activity from "../NFTCards/Activity";
import Favorite from "../NFTCards/Favorite";
import Order from "../NFTCards/Order";
import Earn from "../NFTCards/Earn";
// components
import MainSearch from "../Search/MainSearch";
import CategorySearch from "../Search/CategorySearch";
import MyContext from "../../../context/myContext";
import { useAccount } from 'wagmi'
import Swal from 'sweetalert2'

function Profile (props) {
    const {userData} = useContext(MyContext);
    const {address} = useAccount();
    const [isCopyText,setCopyText] = useState(false);
    const [tabName,setTabName] = useState('All');
    function TabHandler () {
        
      switch (tabName) {
        case 'All':
          return <All />
          break;
        case 'Owned':
          return <Owned />
          break;
        case 'Created':
          return <Created />
          break;
        case 'Curation':
          return <Curation />
          break;
        case 'Activity':
          return <Activity />
          break;
        case 'Favorite':
          return <Favorite />
          break;
        case 'Order':
          return <Order />
          break;
        case 'Earn':
          return <Earn />
          break;
      
        default:
          break;
      }
    }
    return <div className="profile__page__main">
    {props.render}
    <div className="overlay none__desk" />
    <div className="profile__wrapper">
        <MainSearch />
      <div className="breadcrumb__area">
        <div
          className="breadcrumb__inner__wrap"
          style={{ backgroundImage: userData.coverimage ? `url(${process.env.REACT_APP_API_BASE_IMAGE_URL+"/"+userData.coverimage})` : "url(./assets/img/breadcrumb_bg_1.png)"  }}
        >
          <div className="breadcrumb__inner__blk">
            <div className="copy-text">
              <input
                type="text"
                className="text"
                defaultValue={address ? address : ""}
              />
              <button>
                <img src="assets/img/copy.svg" alt="" onClick={()=>{
                  navigator.clipboard.writeText(address)
                  Swal.fire({
                    icon:"success",
                    text:"Copied"
                  })
                }}/>
              </button>
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
        </div>
      </div>
      <div className="inner__profile__blk">
        <div className="inner__profile__wrapper">
          <div className="inner__profile__thumb">
            <img src="assets/img/prifile__thumb__1.png" alt="" />
          </div>
          <div className="profile__content">
            <h5>{userData.userName ? userData.userName : ""}</h5>
            <div className="followers__content">
              <p>
                Followers : <span>356</span>
              </p>
              <p>
                Following : <span>356</span>
              </p>
            </div>
          </div>
        </div>
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
      
      <div className="inner__profile__bottom__content">
          {userData.bio ? 
            <p>
            {userData.bio}
            </p>
       : ""}
       </div>
        
      <div className="categorie__btn">
        <a className={tabName === 'All' ? "active" : ""} onClick={()=>setTabName('All')}>
          All
        </a>
        <a className={tabName === 'Owned' ? "active" : ""} onClick={()=>setTabName('Owned')}>Owned</a>
        <a className={tabName === 'Created' ? "active" : ""} onClick={()=>setTabName('Created')}>Created</a>
        <a className={tabName === 'Curation' ? "active" : ""} onClick={()=>setTabName('Curation')}>Curation</a>
        <a className={tabName === 'Activity' ? "active" : ""} onClick={()=>setTabName('Activity')}>Activity</a>
        <a className={tabName === 'Favorite' ? "active" : ""} onClick={()=>setTabName('Favorite')}>Favorite</a>
        <a className={tabName === 'Order' ? "active" : ""} onClick={()=>setTabName('Order')}>Order</a>
        <a className={tabName === 'Earn' ? "active" : ""} onClick={()=>setTabName('Earn')}>Earn</a>
      </div>
      <CategorySearch />
      {TabHandler(tabName)}
    </div>
  </div>  
}

export default Profile;