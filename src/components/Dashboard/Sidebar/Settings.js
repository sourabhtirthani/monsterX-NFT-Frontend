function Settings (props) {
    return <div className="profile__wrapper">
        {props.render}
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
          <img src="assets/img/profile_bell_1.svg" alt="" />
        </span>
      </div>
      <div className="profile__dropdown__blk">
        <div className="profile__dropdown__inner">
          <div className="profile__drop__thumb">
            <img src="assets/img/profile_pic_1.png" alt="" />
          </div>
          <h4>
            Themesflat <i className="fal fa-angle-down" />
          </h4>
        </div>
      </div>
    </div>
    <div className="edit__profile__wrapper">
      <div className="edit__profile__title text-center">
        <h4>Edit Profile</h4>
      </div>
      <div className="common__edit__proe__wrap">
        <div className="edit__profilfile__inner__top__blk">
          <div className="edit__profile__inner__title">
            <h5>Edit your avatar</h5>
          </div>
          <div className="edit_profile_inner_top_right">
            <div className="edit__profile__angle__ico">
              <span>
                <img src="assets/img/angle_up.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="edit__profile__upload__image">
          <div className="upload__wrapper">
            <div className="upload__inner__blk">
              <div className="upload__profile">
                <div className="imageWrapper">
                  <img
                    className="image"
                    src="https://i.ibb.co/sCQzL0f/user-img.png"
                  />
                </div>
              </div>
              <div className="uplo_content">
                <h6>Upload a new avatar”</h6>
                <button className="file-upload">
                  <input type="file" className="file-input" />
                  <span>
                    <img src="assets/img/image_ico.svg" alt="" /> Choose file
                  </span>{" "}
                  No files selected
                </button>
                <p>JPEG 100x100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="common__edit__proe__wrap mt-30">
        <div className="edit__profilfile__inner__top__blk">
          <div className="edit__profile__inner__title">
            <h5>Edit your Cover Image</h5>
          </div>
          <div className="edit_profile_inner_top_right">
            <div className="edit__profile__angle__ico">
              <span>
                <img src="assets/img/angle_up.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="edit__profile__upload__image">
          <div className="upload__wrapper">
            <div className="upload__inner__blk">
              <div className="upload__profile">
                <div className="imageWrapper">
                  <img
                    className="image-2"
                    src="https://i.ibb.co/sCQzL0f/user-img.png"
                  />
                </div>
              </div>
              <div className="uplo_content">
                <h6>Upload a new avatar”</h6>
                <button className="file-upload">
                  <input type="file" className="file-input-2" />
                  <span>
                    <img src="assets/img/image_ico.svg" alt="" /> Choose file
                  </span>{" "}
                  No files selected
                </button>
                <p>JPEG 100x100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="common__edit__proe__wrap mt-30">
        <div className="edit__profilfile__inner__top__blk">
          <div className="edit__profile__inner__title">
            <h5>Basic Information</h5>
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
          <form action="#">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Username</label>
                  <input type="text" placeholder="Enter your username" />
                  <span className="alart">This username is already exists!</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Email address</label>
                  <input type="text" placeholder="Enter Your email" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Your Bio</label>
                  <textarea
                    name="#"
                    placeholder="Say something about yourself"
                    id=""
                    cols={30}
                    rows={10}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="common__edit__proe__wrap mt-30">
        <div className="edit__profilfile__inner__top__blk">
          <div className="edit__profile__inner__title">
            <h5>Your links</h5>
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
        <div className="edit__profile__form">
          <form action="#">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Website</label>
                  <input type="text" placeholder="Enter your facebook link" />
                  <button className="delete_btn" type="button">
                    <img src="assets/img/Trash.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">X(Twitter)</label>
                  <input type="text" placeholder="Enter your website link" />
                  <button className="delete_btn" type="button">
                    <img src="assets/img/Trash.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Facebook</label>
                  <input type="text" placeholder="Enter your twitter link" />
                  <button className="delete_btn" type="button">
                    <img src="assets/img/Trash.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Instagram</label>
                  <input type="text" placeholder="Enter your linkedIn link" />
                  <button className="delete_btn" type="button">
                    <img src="assets/img/Trash.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="edit__profile__bottom__btn">
        <a href="#" className="cancel">
          Cancel
        </a>
        <a href="#">Save</a>
      </div>
    </div>
  </div>
  
}

export default Settings;