import RecentActivity from "../Filters/RecentActivity";

function CategorySearch () {
    return <div className="ctegorie__search__area">
    <div className="profile__search">
      <input type="text" placeholder="Search by name or trait... " />
      <button type="button">
      <i className="fa-solid fa-magnifying-glass" />
      </button>
    </div>
   <RecentActivity />
  </div>
}

export default CategorySearch;