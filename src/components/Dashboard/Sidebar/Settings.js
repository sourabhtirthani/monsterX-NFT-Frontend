import { useAccount } from 'wagmi'
import { getAccountInfo, updateProfileApi } from '../../../api';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import MainSearch from '../Search/MainSearch';
import MyContext from '../../../context/myContext';
import $ from "jquery";

function Settings (props) {
  const {address} = useAccount();
  const {getUserData} = useContext(MyContext);
  const [showProfile,setProfileImage] = useState("");
  const [showCover,setCoverImage] = useState("");
  const [modelShow,setModelShow] = useState('fade');
  const [userData,setUserData] = useState({
    userName:"",
    email:"",
    profileimage:"",
    coverimage:"",
    bio:"",
    instagram_link:"",
    website_link:"",
    facebook_link:"",
    twitter_link:"",
    profileimage:"",
    coverImage:""
  });

  const submit = async (e) => {
    try{
      e.preventDefault();
      let profile = e.target.profileimage.files[0];
      let cover = e.target.coverimage.files[0];      
      if(!userData.email){
        Swal.fire({
          icon:"warning",
          text:"Please provide email address"
        })
      }
      if(!userData.userName){
        Swal.fire({
          icon:"warning",
          text:"Please provide username address"
        })        
      }
      console.log(userData)
      let response = await updateProfileApi({...userData,profileImage:profile,coverImage:cover});
      if(response.message){
        setModelShow('show');
        $("#exampleModalToggle").show();
        setTimeout(()=>{
          setModelShow('fade');
          $("#exampleModalToggle").hide();
        },2000);
        // Swal.fire({
        //   icon:'success',
        //   text:response.message
        // });
        await getNewData(address);
        await getUserData(address);
      }else{
        Swal.fire({
          icon:'error',
          text:"Something went wrong"
        });        
      }
    }catch(err){
      if(err?.response?.data?.error){
        Swal.fire({
          icon:"error",
          text:err?.response?.data?.error
        })
      }else if(err.message){
        Swal.fire({
          icon:"error",
          text:err.message
        })
      }
    }
  }

  const getNewData = async (address) => {
    try{
      let response = await getAccountInfo(address);          
      setUserData(response.user);
      if(response.user.profileimage){
        setProfileImage(process.env.REACT_APP_API_BASE_IMAGE_URL+"/images/"+response.user.profileimage);
      }
      if(response.user.coverimage){
        setCoverImage(process.env.REACT_APP_API_BASE_IMAGE_URL+"/images/"+response.user.coverimage)
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    if(address){      
      (async () => {        
        await getNewData(address);
      })();
    }
  },[address])

    return <div className="profile__wrapper">
        {props.render}
    <MainSearch/>
    <form method='post' encType='multipart/form-data' className="edit__profile__wrapper" onSubmit={submit}>
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
                    src={showProfile ? showProfile : "https://i.ibb.co/sCQzL0f/user-img.png"}
                  />                  
                </div>
              </div>
              <div className="uplo_content">
                <h6>Upload a new avatar”</h6>
                <button className="file-upload">
                  <input type="file" className="file-input" name='profileimage' onChange={(e)=>setProfileImage(URL.createObjectURL(e.target.files[0]))}/>
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
                    src={showCover ? showCover : "https://i.ibb.co/sCQzL0f/user-img.png"}
                  />
                </div>
              </div>
              <div className="uplo_content">
                <h6>Upload a new avatar”</h6>
                <button className="file-upload">
                  <input type="file" className="file-input-2" name='coverimage' onChange={(e)=>setCoverImage(URL.createObjectURL(e.target.files[0]))}/>
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
                  <input type="text" placeholder="Enter your username" value={userData.userName} onChange={(e)=>setUserData((prev)=>({...prev,userName:e.target.value}))}/>
                  {/* <span className="alart">This username is already exists!</span> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Email address</label>
                  <input type="text" placeholder="Enter Your email" value={userData.email} onChange={(e)=>setUserData((prev)=>({...prev,email:e.target.value}))}/>
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
                    value={userData.bio ? userData.bio : ""} 
                    onChange={(e)=>setUserData((prev)=>({...prev,bio:e.target.value}))}
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
                  <input type="text" placeholder="Enter your website link" value={userData.website_link ? userData.website_link : ""} onChange={(e)=>setUserData((prev)=>({...prev,website_link:e.target.value}))}/>
                  <button className="delete_btn" type="button">
                    <img src="assets/img/Trash.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">X(Twitter)</label>
                  <input type="text" placeholder="Enter your twitter link" value={userData.twitter_link ? userData.twitter_link : ""} onChange={(e)=>setUserData((prev)=>({...prev,twitter_link:e.target.value}))}/>
                  <button className="delete_btn" type="button">
                    <img src="assets/img/Trash.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Facebook</label>
                  <input type="text" placeholder="Enter your facebook link" value={userData.facebook_link ? userData.facebook_link : ""} onChange={(e)=>setUserData((prev)=>({...prev,facebook_link:e.target.value}))}/>
                  <button className="delete_btn" type="button">
                    <img src="assets/img/Trash.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Instagram</label>
                  <input type="text" placeholder="Enter your linkedIn link" value={userData.instagram_link ? userData.instagram_link : ""} onChange={(e)=>setUserData((prev)=>({...prev,instagram_link:e.target.value}))}/>
                  <button className="delete_btn" type="button">
                    <img src="assets/img/Trash.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
    className={`modal ${modelShow} common__popup__blk`}
    id="exampleModalToggle"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk text-center">
            <span className="close_modal" data-bs-dismiss="modal">
              <i className="far fa-times" />
            </span>
            <div className="congrats__img">
              <img src="assets/img/Check_circle.svg" alt="" />
            </div>
            <div className="popup__common__title mt-20 text-center">
              <h5>
                Your profile updated
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>      
      <div className="edit__profile__bottom__btn">
        <a href="#" className="cancel">
          Cancel
        </a>
        {/* <a > */}
        <button style={{border:'none',background:'transparent'}} type='submit'>Save</button>
        {/* </a> */}
      </div>
    </form>
  </div>
  
}

export default Settings;