import { useState } from "react";

function RecentActivity () {
  const [open,setOpen] = useState(false);
  const close = () => {
      setOpen(false);
  }
  return <div className="categorie__dropdown nft_explore_filter">
  <span>
    <img src="../assets/img/filter_ico_1.svg" alt="" />
  </span>
  <div className={open ? "nice-select open" : "nice-select"} onClick={()=>setOpen(!open)} tabIndex={0}>
  <span className="current">Recent Activity</span>
  <ul className="list">
      <li
      data-value="Category"
      data-display="Category"
      className="option selected"
      >
      Recent Activity
      </li>
      <li data-value={1} className="option" onClick={close}>
      Highest last sale
      </li>
      <li data-value={2} className="option" onClick={close}>
      Artist
      </li>
      <li data-value={3} className="option" onClick={close}>
      Recently Minted
      </li>
      <li data-value={4} className="option" onClick={close}>
      Recently Activity
      </li>
      <li data-value={5} className="option" onClick={close}>
      Recently listed
      </li>
      <li data-value={6} className="option" onClick={close}>
      Most Favorited
      </li>
      <li data-value={7} className="option" onClick={close}>
      NFC Minted
      </li>
  </ul>
  </div>

</div>
}

export default RecentActivity;