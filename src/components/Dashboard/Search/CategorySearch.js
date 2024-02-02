// import { useState } from "react";
import RecentActivity from "../Filters/RecentActivity";

function CategorySearch ({searchValue , setSearchValue}) {
  // const [searchValue , setSearchValue] = useState();
    return <div className="ctegorie__search__area">
    <div className="profile__search">
      <input type="text" placeholder="Search by name or trait... " value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
      <button type="button">
      <i className="fa-solid fa-magnifying-glass" />
      </button>
    </div>
   <RecentActivity />
  </div>
}

export default CategorySearch;