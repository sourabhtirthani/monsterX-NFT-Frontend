import MainSearch from "../Search/MainSearch";
// Cards
import CurationCards from "../NFTCards/Curation";
import RecentActivity from "../Filters/RecentActivity";
function Curation (props) {

    return  <div className="profile__page__main">
    {props.render}
    <div className="overlay none__desk" />
    <div className="profile__wrapper">
     <MainSearch />
      <div className="breadcrumb__area">
        <div
          className="breadcrumb__inner__wrap"
          style={{ backgroundImage: "url(../assets/img/breadcrumb_bg_1.png)" }}
        ></div>
      </div>
      <div className="ctegorie__search__area mt-35">
        <div className="flex__filter">
          <h5>
            <img src="../assets/img/Filter.svg" alt="" /> Filter:
          </h5>
          <RecentActivity />
        </div>
        <div className="profile__search">
          <input type="text" placeholder="Search by name or trait... " />
          <button type="button">
          <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <CurationCards />
    </div>
  </div>
  
}

export default Curation;