import { useState } from "react";
import MainSearch from "../Search/MainSearch";
import { useAccount,useConnect  } from 'wagmi'
import { getNetwork } from '@wagmi/core'
import Swal from 'sweetalert2'
import { createCurationApi } from "../../../api";
import $ from "jquery";

function Create (props) {
  const { address } = useAccount();
  const { chain } = getNetwork();
    const [step,setStep] = useState(0);
    const [selectedType,setSelectedType] = useState('');
    const [modelShow,setModelShow] = useState('fade');
    const [open,setOpen] = useState({
        category : false,
        country : false,
        state : false,
        city : false,
    })
    const [collectionData,setCollectionData] = useState({
      name:"",
      symbol:"",
      description:"",
      website_link:"",
      facebook_link:"",
      instagram_link:"",
      twitter_link:"",
      youtube_link:"",
      youtube_title:"",
      descriptionImage:"",
      curation_file:""
    })
    const handleOpen = (name,value) => {
        setOpen({...open,[name] : value})
    }
    const close = (name,value) => {
        setOpen({...open,[name] : false})
    }

    const handleSubmit = async (e) => {
      try{
        e.preventDefault(0);
        if(!address){
          Swal.fire({
            icon:"warning",
            text:"Please Connect Wallet"
          })
        }
        let curation_description_image = e.target.curation_description_image.files[0];
        let curation_file = e.target.curation_file.files[0];
        let response = await createCurationApi({...collectionData,address,curation_description_image,curation_file});
        console.log(response);
        setModelShow('show');
        $("#exampleModalToggl1").show();
        setTimeout(()=>{
          setModelShow('fade');
          $("#exampleModalToggl1").hide();
        },2000);
        // Swal.fire({
        //   icon:"success",
        //   title:"Congratulation",
        //   text:"Successfully create collection",
        // })
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

    return <div className="profile__wrapper">
    <MainSearch />
    {props.render}
    <div className={step !== 0 ? "d-none": "create__area"}>
      <div className="row g-0 align-items-center">
        <div className="col-md-6">
          <div className="create__content__wrap">
            <div className="create__title">
              <span>
                <img src="assets/img/plus_file.svg" alt="" />
              </span>
              <h4>Create</h4>
            </div>
            <div className="single__create__card">
              <span>
                <img src="assets/img/create-ico-1.svg" alt="" />
              </span>
              <div className="create__content__blk">
                <div className="create__content">
                  <h4>Create Curation</h4>
                  <p>
                    Become an NFT tastemaker. Create your own Curation for others
                    to mint.
                  </p>
                </div>
                <a href="#" onClick={()=>{
                  setSelectedType('createCuration')
                  setStep(1)
                  }}>
                  <img src="assets/img/arrow-right-ico.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="single__create__card">
              <span>
                <img src="assets/img/create-ico-2.svg" alt="" />
              </span>
              <div className="create__content__blk">
                <div className="create__content">
                  <h4>Create Artwork NFTs</h4>
                  <p>
                    Transform your art into a collectible, with one simple tap.
                  </p>
                </div>
                <a href="#" onClick={()=>{
                  setSelectedType('createNFT')
                  setStep(1)
                  }}>
                  <img src="assets/img/arrow-right-ico.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="single__create__card">
              <span>
                <img src="assets/img/create-ico-3.svg" alt="" />
              </span>
              <div className="create__content__blk">
                <div className="create__content">
                  <h4>Mint NFTs Using NFC</h4>
                  <p>
                    Bridging the physical and digital worlds: Mint NFTs with a
                    tap.
                  </p>
                </div>
                <a href="#">
                  <img src="assets/img/arrow-right-ico.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="create__thumb">
            <img src="assets/img/create_thumb.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className={selectedType === 'createCuration' ? '' : 'd-none'}>
    <div className="edit__profile__wrapper">
  <div className="edit__profile__title">
    <h4>Create Your Collection</h4>
  </div>
  <div className="connected__top__blk">
    <div className="connected__left__blk">
      <div className="connected_compas">
        <span>
          <img src="assets/img/compas.svg" alt="" />
        </span>
        <div className="connected_left_text">
          <h5>{address ? address : ""}</h5>
          <span>{chain ? chain.name : ""}</span>
        </div>
      </div>
    </div>
    <div className="connected__right__blk">
      <a data-bs-toggle="modal" role="button">
        Connected
      </a>
      <span className="angle_down">
        <img src="assets/img/angle_down.svg" alt="" />
      </span>
    </div>
  </div>
  <div className="connected__bottom__btn">
    <a data-bs-toggle="modal" role="button">
      Free
    </a>
    <a
      data-bs-toggle="modal"
      href="#exampleModalToggl1"
      role="button"
      className="dark_btn"
    >
      On Network
    </a>
  </div>
  <div className="connected__form">
    <form action="#" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="row g-4">
        <div className="col-xxl-5 col-xl-12 col-lg-12">
          <div className="upload__file">
            <div className="upload__content">
              <div className="uipload__ico">
                <img src="assets/img/Upload.svg" alt="" />
                <h5>Upload file</h5>
              </div>
              <p>
                Drag or choose your file to upload <br />{" "}
                <span>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</span>
              </p>
            </div>
            <div className="single_upload__btn">
              <label htmlFor="file-upload" className="custom-file-upload">
                Browse file{" "}
                <span>
                  <img src="assets/img/arrow_ico.svg" alt="" />
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                name="curation_file"
                style={{ display: "none" }}
                onchange="uploadFile(this.files)"
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-12 col-lg-12">
          <div className="connected__top__form">
            <div className="row gx-3 gy-4">
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Name* </label>
                  <input type="text" placeholder="Enter Your Name" value={collectionData.name} onChange={(e)=>setCollectionData((prev)=>({...prev,name:e.target.value}))}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Symbol*</label>
                  <input type="text" placeholder="i.e: TAT" value={collectionData.symbol} onChange={(e)=>setCollectionData((prev)=>({...prev,symbol:e.target.value}))}/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Description *</label>
                  <textarea
                    name="#"
                    placeholder="Please describe your product*"
                    id=""
                    cols={30}
                    rows={10}
                    value={collectionData.description} onChange={(e)=>setCollectionData((prev)=>({...prev,description:e.target.value}))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="common__edit__proe__wrap mt-4">
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
                    <input type="text" placeholder="Enter your website link" value={collectionData.twitter_link} onChange={(e)=>setCollectionData((prev)=>({...prev,twitter_link:e.target.value}))}/>
                    <button className="delete_btn" type="button">
                      <img src="assets/img/Trash.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single__edit__profile__step">
                    <label htmlFor="#">Facebook</label>
                    <input type="text" placeholder="Enter your facebook link" value={collectionData.facebook_link} onChange={(e)=>setCollectionData((prev)=>({...prev,facebook_link:e.target.value}))}/>
                    <button className="delete_btn" type="button">
                      <img src="assets/img/Trash.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single__edit__profile__step">
                    <label htmlFor="#">Instagram</label>
                    <input type="text" placeholder="Enter your instagram link" value={collectionData.instagram_link} onChange={(e)=>setCollectionData((prev)=>({...prev,instagram_link:e.target.value}))}/>
                    <button className="delete_btn" type="button">
                      <img src="assets/img/Trash.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="common__edit__proe__wrap mt-4">
            <div className="edit__profilfile__inner__top__blk">
              <div className="edit__profile__inner__title">
                <h5>Youtube Video Link</h5>
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
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="single__edit__profile__step">
                    <label htmlFor="#">Title</label>
                    <input type="text" placeholder="Enter video title" value={collectionData.youtube_title} onChange={(e)=>setCollectionData((prev)=>({...prev,youtube_title:e.target.value}))}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single__edit__profile__step link__input">
                    <label htmlFor="#">Video Link</label>
                    <input type="text" placeholder="Enter your website link" value={collectionData.youtube_link} onChange={(e)=>setCollectionData((prev)=>({...prev,youtube_link:e.target.value}))}/>
                    <button className="link_ico" type="button">
                      <img src="assets/img/link_ico.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="common__edit__proe__wrap mt-4">
            <div className="edit__profilfile__inner__top__blk">
              <div className="edit__profile__inner__title">
                <h5>Curation Description Image</h5>
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
            <div className="file__formate">
              <p>PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.</p>
            </div>
            <div className="upload__file__with__name">
              <input type="file" id="real-file"  name="curation_description_image"/>
              <button type="button" id="custom-button">
                Upload{" "}
                <span>
                  <img src="assets/img/Upload_ico.svg" alt="" />
                </span>
              </button>
              <span id="custom-text">Choose File</span>
            </div>
          </div>
          <div className="edit__profile__bottom__btn half__width__btn">
            <a  
            // data-bs-toggle="modal"
            //     href="#exampleModalToggle5"
                role="button" className="cancel">
              Discard
            </a>
            <a  
                // data-bs-toggle="modal"
                // href="#exampleModalToggle4"
                role="button"
            >
              <button type="submit" style={{border:"none",background:'transparent'}}>
                Submit
              </button>
              <span>
                <img src="assets/img/arrow_ico.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

    </div>
    <div className={selectedType === 'createNFT' ? '' : 'd-none'}>
    {/* Step 1 */}
    <div className={step > 0 ? "edit__profile__wrapper" : "d-none"}>
  <div className="edit__profile__title">
    <h4>Create New NFT</h4>
  </div>
  <div className="create__step__blk">
    <a href="#" className="single__create__step active">
      <small>1</small> Basic Details
    </a>
    <span>
    <i class="fa-solid fa-angle-right" />
    </span>
    <a href="#" className={step > 1 ? "single__create__step active" : "single__create__step"}>
      <small>2</small> Advanced Details
    </a>
    <span>
    <i class="fa-solid fa-angle-right" />
    </span>
    <a href="#" className={step > 2 ? "single__create__step active" : "single__create__step"}>
      <small>3</small> Seller Information
    </a>
  </div>
  <div className={step === 1 ? "connected__top__blk mb-35" : "d-none"}>
    <div className="connected__left__blk">
      <div className="connected_compas">
        <span>
          <img src="assets/img/compas.svg" alt="" />
        </span>
        <div className="connected_left_text">
          <h5>0x1743.....2343d</h5>
          <span>Sepolia Test Network</span>
        </div>
      </div>
    </div>
    <div className="connected__right__blk">
      <a href="#">Connected</a>
      <span className="angle_down">
        <img src="assets/img/angle_down.svg" alt="" />
      </span>
    </div>
  </div>
  {/* Step 1 */}
  <div className={step === 1 ? "connected__form" : "d-none"}>
    <form action="#">
      <div className="row g-4">
        <div className="col-md-5">
          <div className="upload__file">
            <div className="upload__content">
              <div className="uipload__ico">
                <img src="assets/img/Upload.svg" alt="" />
                <h5>Upload file</h5>
              </div>
              <p>
                Drag or choose your file to upload <br />{" "}
                <span>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</span>
              </p>
            </div>
            <div className="single_upload__btn">
              <label htmlFor="file-upload" className="custom-file-upload">
                Browse file{" "}
                <span>
                  <img src="assets/img/arrow_ico.svg" alt="" />
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onchange="uploadFile(this.files)"
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="connected__top__form">
            <div className="row gx-3 gy-4">
              <div className="col-md-12">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Product name * </label>
                  <input type="text" placeholder="Enter Product Name" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Description *</label>
                  <textarea
                    name="#"
                    placeholder="Please describe your artwork*"
                    id=""
                    cols={30}
                    rows={10}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Price *</label>
                  <input type="text" placeholder={0} />
                  <button className="eth" type="button">
                    ETH
                  </button>
                </div>
              </div>
              <div className="col-md-12">
                <div className="listing__fee__blk">
                  <p>
                    Listing Fee <span>2%</span>
                  </p>
                  <p>
                    You will recieve <span>-</span>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Artist Name *</label>
                  <input type="text" placeholder="Enter Artist Name" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="single__edit__profile__step">
                  <label htmlFor="#">Curation *</label>
                  <input type="text" placeholder="You must choose Curation*" />
                </div>
              </div>
            </div>
          </div>
          <div className="common__edit__proe__wrap mt-4">
            <div className="edit__profilfile__inner__top__blk">
              <div className="edit__profile__inner__title">
                <h5>Attachment</h5>
              </div>
              <div className="edit__profile__angle__ico">
                <span>
                  <img src="assets/img/angle_up.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="attachment__card__blk">
              <div className="row gx-5 gy-4">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="single__attachment__cird__blk">
                    <div className="attachment__thumb">
                      <img src="assets/img/attachment_thumb_1.jpg" alt="" />
                    </div>
                    <div className="attachment__content">
                      <a href="#">
                        Change{" "}
                        <span>
                          <img src="assets/img/Trash.svg" alt="" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="single__attachment__cird__blk">
                    <div className="attachment__thumb">
                      <img src="assets/img/attachment_thumb_2.jpg" alt="" />
                    </div>
                    <div className="attachment__content">
                      <a href="#">
                        Change{" "}
                        <span>
                          <img src="assets/img/Trash.svg" alt="" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="single__attachment__cird__blk">
                    <div className="attachment__thumb">
                      <img src="assets/img/attachment_thumb_3.jpg" alt="" />
                    </div>
                    <div className="attachment__content">
                      <a href="#">
                        Change{" "}
                        <span>
                          <img src="assets/img/Trash.svg" alt="" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="single__attachment__cird__blk">
                    <div className="attachment__thumb">
                      <img src="assets/img/attachment_thumb_4.jpg" alt="" />
                    </div>
                    <div className="attachment__content">
                      <a href="#">
                        Change{" "}
                        <span>
                          <img src="assets/img/Trash.svg" alt="" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="single__attachment__cird__blk">
                    <div className="attachment_upload_thumb">
                      <div className="imageWrapper">
                        <img
                          className="image-2"
                          src="https://i.ibb.co/c8FMdw1/attachment-link.png"
                        />
                      </div>
                    </div>
                    <button className="file-upload">
                      <input type="file" className="file-input-2" />
                      <span>
                        Upload{" "}
                        <small>
                          <img src="assets/img/Upload.svg" alt="" />
                        </small>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="edit__profile__bottom__btn half__width__btn">
            <a href="#" className="cancel">
              Discard
            </a>
            <a href="#" onClick={()=>setStep(2)}>
              Next{" "}
              <span>
                <img src="assets/img/arrow_ico.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
  {/* Step 2 */}
  <div className={step === 2 ? "connected__form" : "d-none"}>
  <form action="#">
    <div className="nft__switch__blk">
      <div className="row g-3">
        <div className="col-lg-4 col-md-6">
          <div className="nft__single__switch__box">
            <div className="nft__switch__text">
              <h6>Royalties</h6>
              <p>Earn a % on secondary sales</p>
            </div>
            <div className="nft__switch">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  defaultChecked=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="nft__single__switch__box">
            <div className="nft__switch__text">
              <h6>Free Minting</h6>
              <p>Free mint your nft. You don’t eed any gas fee.</p>
            </div>
            <div className="nft__switch">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="nft__single__switch__box">
            <div className="nft__switch__text">
              <h6>Unlockable Content</h6>
              <p>Only Owner can view this content</p>
            </div>
            <div className="nft__switch">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  defaultChecked=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="nft__single__switch__box">
            <div className="nft__switch__text">
              <h6>Collection</h6>
              <p>Put this item into a Collection</p>
            </div>
            <div className="nft__switch">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="nft__single__switch__box">
            <div className="nft__switch__text">
              <h6>Category</h6>
              <p>Put this item into a Category</p>
            </div>
            <div className="nft__switch">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  defaultChecked=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="nft__single__switch__box">
            <div className="nft__switch__text">
              <h6>Split Payments</h6>
              <p>Add multiple address to recieve payments. </p>
            </div>
            <div className="nft__switch">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="connected__top__form">
      <div className="row gx-3 gy-4">
        <div className="col-md-12">
          <div className="single__edit__profile__step">
            <label htmlFor="#">Royalties </label>
            <input type="text" placeholder="Earn Royalties Percentage(%)" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="single__edit__profile__step">
            <label htmlFor="#">Unlockable Content</label>
            <textarea
              style={{ height: 119 }}
              name="#"
              placeholder="Only the artwork owner can view this content and file. You may also attach a certificate of authenticity issued by a third party and a special image just for the buyer."
              id=""
              cols={30}
              rows={10}
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="nft__file__upload">
            <div className="upload__file__with__name">
              <input type="file" id="real-file" hidden="hidden" />
              <button type="button" id="custom-button">
                Upload{" "}
                <span>
                  <img src="assets/img/Upload_ico.svg" alt="" />
                </span>
              </button>
              <span id="custom-text">Choose File</span>
            </div>
            <div className="add_new">
              <a href="#">
                <span>
                  <img src="assets/img/Plus_circle.svg" alt="" />
                </span>{" "}
                Add New
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div onClick={()=>handleOpen('category',!open.category)} className="categorie__select">
            <label htmlFor="#">Category</label>
            <div className={open.category ? "nice-select open" : "nice-select"} tabIndex={0}>
                <span className="current">Category</span>
                <ul className="list">
                    <li
                    data-value="Category"
                    data-display="Category"
                    className="option selected focus"
                    >
                    Category
                    </li>
                    <li data-value={1} className="option" onClick={()=>close('category','value')}>
                    Highest last sale
                    </li>
                    <li data-value={2} className="option" onClick={()=>close('category','value')}>
                    Artist
                    </li>
                    <li data-value={3} className="option" onClick={()=>close('category','value')}>
                    Recently Minted
                    </li>
                    <li data-value={4} className="option" onClick={()=>close('category','value')}>
                    Recently Activity
                    </li>
                    <li data-value={5} className="option" onClick={()=>close('category','value')}>
                    Recently listed
                    </li>
                    <li data-value={6} className="option" onClick={()=>close('category','value')}>
                    Most Favorited
                    </li>
                    <li data-value={7} className="option" onClick={()=>close('category','value')}>
                    NFC Minted
                    </li>
                </ul>
            </div>

          </div>
        </div>
        <div className="col-md-12">
          <div className="ntf__flex__input__wrap">
            <div className="single__edit__profile__step width_430">
              <label htmlFor="#">Split Payments</label>
              <input type="text" placeholder="Address" />
            </div>
            <div className="single__edit__profile__step" style={{ width: 95 }}>
              <input type="text" placeholder="%" />
            </div>
            <div className="input__add__btn">
              <a href="#">
                <img src="assets/img/Trash.svg" alt="" />
              </a>
              <a className="add_input_btn" href="#">
                <span>
                  <img src="assets/img/Plus_circle.svg" alt="" />
                </span>{" "}
                Add
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="propatis__area">
            <div className="propertis__content">
              <h4>Properties</h4>
              <p>Textual Traits that show up as rectangle.</p>
            </div>
            <div className="ntf__flex__input__wrap">
              <div className="single__edit__profile__step width_245">
                <label htmlFor="#">Type</label>
                <input type="text" placeholder="Type" />
              </div>
              <div className="single__edit__profile__step width_245">
                <label htmlFor="#">Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="input__add__btn">
                <a className="add_input_btn" href="#">
                  <span>
                    <img src="assets/img/Plus_circle.svg" alt="" />
                  </span>{" "}
                  Add
                </a>
              </div>
            </div>
            <div className="nft__delete__option">
              <div className="row g-3">
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="nft__single__option">
                    <a href="#">
                      <h4>Testing</h4>
                      <p>Dhruv Swami</p>
                      <span>
                        <img src="assets/img/Trash.svg" alt="" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="nft__single__option">
                    <a href="#">
                      <h4>Testing</h4>
                      <p>Dhruv Swami</p>
                      <span>
                        <img src="assets/img/Trash.svg" alt="" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="nft__single__option">
                    <a href="#">
                      <h4>Testing</h4>
                      <p>Dhruv Swami</p>
                      <span>
                        <img src="assets/img/Trash.svg" alt="" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="nft__single__option">
                    <a href="#">
                      <h4>Testing</h4>
                      <p>Dhruv Swami</p>
                      <span>
                        <img src="assets/img/Trash.svg" alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="edit__profile__bottom__btn half__width__btn">
      <a href="#" className="cancel">
        Discard
      </a>
      <a href="#" onClick={()=>setStep(3)}>
        Next{" "}
        <span>
          <img src="assets/img/arrow_ico.svg" alt="" />
        </span>
      </a>
    </div>
  </form>
</div>
{/* Step 3 */}
<div className={step === 3 ? "connected__form" : "d-none"}>
  <form action="#">
    <div className="common__edit__proe__wrap mt-4">
      <div className="edit__profilfile__inner__top__blk">
        <div className="edit__profile__inner__title">
          <h5>Seller Information</h5>
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
        <div className="row gy-4 gx-3">
          <div className="col-lg-4 col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Name*</label>
              <input type="text" placeholder="Enter Name*" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">E-mail*</label>
              <input type="text" placeholder="Email address*" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={()=>handleOpen('country',!open.country)} className="categorie__select select_black_bg">
              <label htmlFor="#">Country*</label>
                          <div className={open.country ? "nice-select open" : "nice-select"} tabIndex={0}>
                <span className="current">Select Country</span>
                <ul className="list">
                    <li
                    data-value="Country"
                    data-display="Country"
                    className="option selected focus"
                    >
                    USA
                    </li>
                    <li data-value={1} className="option" onClick={()=>close('country','value')}>
                    Highest last sale
                    </li>
                    <li data-value={2} className="option" onClick={()=>close('country','value')}>
                    Artist
                    </li>
                    <li data-value={3} className="option" onClick={()=>close('country','value')}>
                    Recently Minted
                    </li>
                    <li data-value={4} className="option" onClick={()=>close('country','value')}>
                    Recently Activity
                    </li>
                    <li data-value={5} className="option" onClick={()=>close('country','value')}>
                    Recently listed
                    </li>
                    <li data-value={6} className="option" onClick={()=>close('country','value')}>
                    Most Favorited
                    </li>
                    <li data-value={7} className="option" onClick={()=>close('country','value')}>
                    NFC Minted
                    </li>
                </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="common__edit__proe__wrap mt-4">
      <div className="edit__profilfile__inner__top__blk">
        <div className="edit__profile__inner__title">
          <h5>Shipping Address</h5>
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
        <div className="row gy-4 gx-3">
          <div className="col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Address 1*</label>
              <input type="text" placeholder="Enter Your Street Address*" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Address 2</label>
              <input type="text" placeholder="Enter Your Street Address*" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div onClick={()=>handleOpen('state',!open.state)} className="categorie__select select_black_bg">
              <label htmlFor="#">State *</label>
              <div className={open.state ? "nice-select open" : "nice-select"} tabIndex={0}>
                <span className="current">Select State</span>
                <ul className="list">
                    <li
                    data-value="State"
                    data-display="State"
                    className="option selected focus"
                    >
                    New York
                    </li>
                    <li data-value={1} className="option" onClick={()=>close('state','value')}>
                    Highest last sale
                    </li>
                    <li data-value={2} className="option" onClick={()=>close('state','value')}>
                    Artist
                    </li>
                    <li data-value={3} className="option" onClick={()=>close('state','value')}>
                    Recently Minted
                    </li>
                    <li data-value={4} className="option" onClick={()=>close('state','value')}>
                    Recently Activity
                    </li>
                    <li data-value={5} className="option" onClick={()=>close('state','value')}>
                    Recently listed
                    </li>
                    <li data-value={6} className="option" onClick={()=>close('state','value')}>
                    Most Favorited
                    </li>
                    <li data-value={7} className="option" onClick={()=>close('state','value')}>
                    NFC Minted
                    </li>
                </ul>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div onClick={()=>handleOpen('city',!open.city)} className="categorie__select select_black_bg">
              <label htmlFor="#">City *</label>
              <div className={open.city ? "nice-select open" : "nice-select"} tabIndex={0}>
                <span className="current">Select City</span>
                <ul className="list">
                    <li
                    data-value="City"
                    data-display="City"
                    className="option selected focus"
                    >
                    New York
                    </li>
                    <li data-value={1} className="option" onClick={()=>close('city','value')}>
                    Highest last sale
                    </li>
                    <li data-value={2} className="option" onClick={()=>close('city','value')}>
                    Artist
                    </li>
                    <li data-value={3} className="option" onClick={()=>close('city','value')}>
                    Recently Minted
                    </li>
                    <li data-value={4} className="option" onClick={()=>close('city','value')}>
                    Recently Activity
                    </li>
                    <li data-value={5} className="option" onClick={()=>close('city','value')}>
                    Recently listed
                    </li>
                    <li data-value={6} className="option" onClick={()=>close('city','value')}>
                    Most Favorited
                    </li>
                    <li data-value={7} className="option" onClick={()=>close('city','value')}>
                    NFC Minted
                    </li>
                </ul>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Postal Code*</label>
              <input type="text" placeholder="Enter Postal Code" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Phone Number*</label>
              <input
                type="text"
                id="mobile_code"
                className="from-control"
                placeholder={'0000000000'}
                name="name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="common__edit__proe__wrap mt-4">
      <div className="edit__profilfile__inner__top__blk">
        <div className="edit__profile__inner__title">
          <h5>Shipment Information</h5>
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
        <div className="row gy-4 gx-3">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Length (cm)</label>
              <input type="text" placeholder="--" />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Width (cm)</label>
              <input type="text" placeholder="--" />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Height (cm)</label>
              <input type="text" placeholder="--" />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single__edit__profile__step">
              <label htmlFor="#">Weight (kg)</label>
              <input type="text" placeholder="--" />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="common__edit__proe__wrap mt-4">
        <div className="edit__profilfile__inner__top__blk">
          <div className="edit__profile__inner__title">
            <h5>Contact Information For seller</h5>
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
          <div className="row gy-4 gx-3">
            <div className="col-xl-12">
              <div className="single__edit__profile__step">
                <textarea
                  name="#"
                  placeholder="Please describe your product*"
                  id=""
                  cols={30}
                  rows={10}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="common__edit__proe__wrap mt-4">
          <div className="edit__profilfile__inner__top__blk">
            <div className="edit__profile__inner__title">
              <h5>Consent for collection and Usage of Personal Information</h5>
              <p>
                Please read the following and check the appropriate boxes to indicate
                your consent:
              </p>
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
            <div className="row gy-4 gx-3">
              <div className="col-xl-12">
                <div className="single__edit__profile__step">
                  <textarea
                    name="#"
                    placeholder="faucibus id malesuada aliquam. Tempus morbi turpis nulla viverra tellus mauris cum. Est consectetur commodo turpis habitasse sed. Nibh tincidunt quis nunc placerat arcu sagittis. In vitae fames nunc consectetur. Magna faucibus sit risus sed tortor malesuada purus. Donec fringilla orci lobortis quis id blandit rhoncus. "
                    id=""
                    cols={30}
                    rows={10}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="agree__radio__btn">
          <div className="codeplay-ck">
            <label className="container-ck">
              <p>I agree to all Term, Privacy Polic and fees</p>
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <div className="edit__profile__bottom__btn half__width__btn">
          <a
            data-bs-toggle="modal"
            href="#exampleModalToggle1"
            role="button"
            className="cancel"
          >
            Discard
          </a>
          <a data-bs-toggle="modal" href="#exampleModalToggle" role="button">
            Proceed to Create NFT{" "}
            <span>
              <img src="assets/img/arrow_ico.svg" alt="" />
            </span>
          </a>
        </div>
  </form>
</div>
</div>
</div>
{/* <div
  className="modal fade common__popup__blk"
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
            <img src="assets/img/exclamation.svg" alt="" />
          </div>
          <div className="popup__common__title mt-20 text-center">
            <h5>
              “You must select curation for NFT creation. Permission is required
              to create curation. Click Learn More or contact administrator.”
            </h5>
            <div className="learn_more_popup">
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
  <div
    className="modal fade common__popup__blk"
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
              <img src="assets/img/exclamation.svg" alt="" />
            </div>
            <div className="popup__common__title mt-20 text-center">
              <h5>
                “You must select curation for NFT creation. Permission is
                required to create curation. Click Learn More or contact
                administrator.”
              </h5>
              <div
                className="popup__inner__button edit__profile__bottom__btn pt-20 pb-0"
                style={{ maxWidth: 320, margin: "auto" }}
              >
                <a href="#" className="no_btn">
                  No
                </a>
                <a
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  href="#"
                >
                  Yes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggle1"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk">
            <div className="popup__common__title mt-20">
              <h5>NFT Creation is in Progress</h5>
              <p>Transfer this token from your wallet to other wallet.</p>
            </div>
          </div>
          <div className="popup__progress__list">
            <div className="single__popup__progress__list">
              <a href="#">
                <div className="popup__progress__ico">
                  <img src="assets/img/refresh_ico_1.svg" alt="" />
                </div>
                <div className="popup__progress__text">
                  <h5>Upload NFTs</h5>
                  <p>Uploading of all media assets and metadata to IPFS</p>
                </div>
              </a>
            </div>
            <div className="single__popup__progress__list">
              <a href="#">
                <div className="popup__progress__ico">
                  <img src="assets/img/refresh_ico_1.svg" alt="" />
                </div>
                <div className="popup__progress__text">
                  <h5>Mint</h5>
                  <p>Send transaction to create your NFT</p>
                </div>
              </a>
            </div>
            <div className="single__popup__progress__list disable_item">
              <a href="#">
                <div className="popup__progress__ico">
                  <img src="assets/img/list_gray_refresh.svg" alt="" />
                </div>
                <div className="popup__progress__text">
                  <h5>Listing for sale</h5>
                  <p>Send transaction to list your NFT</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggle2"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
    tabIndex={-1}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: 780 }}
    >
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk">
            <div className="popup__common__title">
              <h5>
                <span>
                  <img src="assets/img/information_icon_1.svg" alt="" />
                </span>{" "}
                Caution
              </h5>
            </div>
            <div className="popup__information__content">
              <h6>
                Do not disclose buyer shipping information to third parties!
              </h6>
              <p>
                To maintain the confidentiality of buyer information and ensure
                smooth transactions, please pay close attention to the following
                points:
              </p>
              <p>
                <span>1.</span> Confidentiality of Shipping Information: Buyer
                shipping information should remain confidential to sellers. Be
                cautious to prevent any external disclosures.
              </p>
              <p>
                <span>2.</span> Tips for Safe Transactions: Handle buyer
                shipping information securely to sustain safe and transparent
                transactions.
              </p>
              <p>
                <span>3.</span> Protection of Personal Information: As a seller,
                it is imperative to treat buyer personal information with utmost
                care. Avoid disclosing it to third parties.We kindly request
                your strict adherence to these guidelines to uphold transparency
                and trust in your transactions. Ensuring a secure transaction
                environment benefits everyone involved.
              </p>
              <h5>Thank You</h5>
            </div>
            <div
              className="popup__inner__button edit__profile__bottom__btn pt-20 pb-0"
              style={{ maxWidth: 210, margin: "auto" }}
            >
              <a
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                href="#"
              >
                I Agree
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggle3"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel3"
    tabIndex={-1}
  >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ maxWidth: 420 }}
    >
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk">
            <div className="popup__common__title">
              <h5 className="yellow_color mb-10">Congratulations!</h5>
              <p className="white">Your NFT is Published.</p>
            </div>
            <div className="congrats__social__ico">
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
              </div>
            </div>
            <div className="popup__inner__button half__width__btn edit__profile__bottom__btn pt-20 pb-0">
              <a href="#">View NFT</a>
              <a href="#" className="cancel">
                Close
              </a>
            </div>
            <div className="congrats__copy__text">
              <div className="breadcrumb__inner__blk">
                <div className="copy-text">
                  <input
                    type="text"
                    className="text"
                    defaultValue="https://playground.wpsmartnft.com/token/dark-theme-web-design/https://playground.wpsmartnft.com/token/dark-theme-web-design/"
                  />
                  <button>
                    <img src="assets/img/Document_ico.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Curation */}
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggle4"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk text-center">
            <div className="congrats__img">
              <img src="assets/img/refresh_ico_1.svg" alt="" />
            </div>
            <div className="popup__common__title mt-20">
              <h4>Creating Your Collection Please Wait!</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className={`modal ${modelShow} common__popup__blk`}
    id="exampleModalToggl1"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk text-center">
            <div className="congrats__img">
              <img src="assets/img/Check_circle.svg" alt="" />
            </div>
            <div className="popup__common__title mt-20">
              <h4>Your Collection is Created.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade common__popup__blk"
    id="exampleModalToggl5"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body similar__site__popup">
          <div className="popup__inner__blk text-center">
            <div className="congrats__img">
              <img src="assets/img/request_popup.svg" alt="" />
            </div>
            <div className="popup__common__title mt-20 text-center">
              <h5>
                You don’t have permission to Create Curation. Click Learn More
                or Contact the Administrator
              </h5>
              <div className="learn_more_popup">
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
}

export default Create;