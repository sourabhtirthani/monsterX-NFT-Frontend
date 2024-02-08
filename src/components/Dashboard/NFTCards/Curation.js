import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import { fetchCurationByAddress } from "../../../api";
import { useAccount } from 'wagmi'

function Curation ({searchValue}) {
  const {address} = useAccount();
  const [allCuration , setAllCurations] = useState([]);

  useEffect(()=>{
    const fetchCurationForOneProfile = async()=>{
      console.log(`address is ${address}`)
      try{
        const response = await fetchCurationByAddress(address);
        console.log(response);
        setAllCurations(response.curations);

      }catch(error){
        console.log(`error int fetching curation by address in fnd : ${error.message}`)
      }
    }
    fetchCurationForOneProfile();
  }, [address])

  
  let filteredCurations = allCuration;
  if (searchValue) {
    filteredCurations = allCuration.filter((curation) => {
      const curationName = curation && curation.name ? curation.name.toLowerCase() : '';
      return curationName.includes(searchValue.toLowerCase());
    });
  }
  
  const getFileExtension = (url) => {
    return url.split('.').pop().toLowerCase();
  }

  const navigate = useNavigate();
    return <div className="curation__area">
    <div className="row g-4">
      {filteredCurations.map((curation) => (
        <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6" key={curation._id} onClick={() => navigate('/dashboard/curation')}>
          <div className="curation__card__blk">
            <div className="curation__thumb">
            {/* style={{ width: "19px", height: "20px" }} */}
            {curation && curation.curation_file && getFileExtension(curation.curation_file) !== 'mp4' ? (
    <img src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}/images/${curation.curation_file}`} alt="" />
) : (
    curation && curation.curation_file && (
        <video style={{height : "250px" , width : "350px"}} className="hero__video" autoPlay loop muted>
            <source src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}/images/${curation.curation_file}`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
)}
              <ion-icon name="heart" className="click_heart">
                <div className="red-bg" />
              </ion-icon>
            </div>
            <div className="curation__content">
              <h5>{curation.name}</h5>
              <p style={{color : "white"}}>{curation.description}</p> 
              <div className="curation__card__bottom">
                <div className="single__curation__categorie">
                  <p>Artworks</p>
                  <h6>04</h6>
                </div>
                <div className="single__curation__categorie">
                  <p>Artists</p>
                  <h6>21</h6>
                </div>
                <div className="single__curation__categorie">
                  <p>Volume</p>
                  <h6>
                    <span>
                      <img src="../assets/img/compas.svg" alt="" />
                    </span>{" "}
                    3 ETH
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
}

export default Curation;








{/* <div className="curation__area">
    <div className="row g-4">
      <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6" onClick={()=>navigate('/dashboard/curation')}>
        <div className="curation__card__blk">
          <div className="curation__thumb">
            <img src="../assets/img/curation_thumb_1.jpg" alt="" />
            <ion-icon name="heart" className="click_heart">
              <div className="red-bg" />
            </ion-icon>
          </div>
          <div className="curation__content">
            <h5>Photography in 19901</h5>
            <div className="curation__card__bottom">
              <div className="single__curation__categorie">
                <p>Artworks</p>
                <h6>04</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Artists</p>
                <h6>21</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Volume</p>
                <h6>
                  <span>
                    <img src="../assets/img/compas.svg" alt="" />
                  </span>{" "}
                  3 ETH
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
        <div className="curation__card__blk">
          <div className="curation__thumb">
            <img src="../assets/img/curation_thumb_2.jpg" alt="" />
            <ion-icon name="heart" className="click_heart">
              <div className="red-bg" />
            </ion-icon>
          </div>
          <div className="curation__content">
            <h5>Photography in 1990</h5>
            <div className="curation__card__bottom">
              <div className="single__curation__categorie">
                <p>Artworks</p>
                <h6>04</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Artists</p>
                <h6>21</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Volume</p>
                <h6>
                  <span>
                    <img src="../assets/img/compas.svg" alt="" />
                  </span>{" "}
                  3 ETH
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
        <div className="curation__card__blk">
          <div className="curation__thumb">
            <img src="../assets/img/curation_thumb_3.jpg" alt="" />
            <ion-icon name="heart" className="click_heart">
              <div className="red-bg" />
            </ion-icon>
          </div>
          <div className="curation__content">
            <h5>Photography in 1990</h5>
            <div className="curation__card__bottom">
              <div className="single__curation__categorie">
                <p>Artworks</p>
                <h6>04</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Artists</p>
                <h6>21</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Volume</p>
                <h6>
                  <span>
                    <img src="../assets/img/compas.svg" alt="" />
                  </span>{" "}
                  3 ETH
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
        <div className="curation__card__blk">
          <div className="curation__thumb">
            <img src="../assets/img/curation_thumb_4.jpg" alt="" />
            <ion-icon name="heart" className="click_heart">
              <div className="red-bg" />
            </ion-icon>
          </div>
          <div className="curation__content">
            <h5>Photography in 1990</h5>
            <div className="curation__card__bottom">
              <div className="single__curation__categorie">
                <p>Artworks</p>
                <h6>04</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Artists</p>
                <h6>21</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Volume</p>
                <h6>
                  <span>
                    <img src="../assets/img/compas.svg" alt="" />
                  </span>{" "}
                  3 ETH
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
        <div className="curation__card__blk">
          <div className="curation__thumb">
            <img src="../assets/img/curation_thumb_5.jpg" alt="" />
            <ion-icon name="heart" className="click_heart">
              <div className="red-bg" />
            </ion-icon>
          </div>
          <div className="curation__content">
            <h5>Photography in 1990</h5>
            <div className="curation__card__bottom">
              <div className="single__curation__categorie">
                <p>Artworks</p>
                <h6>04</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Artists</p>
                <h6>21</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Volume</p>
                <h6>
                  <span>
                    <img src="../assets/img/compas.svg" alt="" />
                  </span>{" "}
                  3 ETH
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
        <div className="curation__card__blk">
          <div className="curation__thumb">
            <img src="../assets/img/curation_thumb_6.jpg" alt="" />
            <ion-icon name="heart" className="click_heart">
              <div className="red-bg" />
            </ion-icon>
          </div>
          <div className="curation__content">
            <h5>Photography in 1990</h5>
            <div className="curation__card__bottom">
              <div className="single__curation__categorie">
                <p>Artworks</p>
                <h6>04</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Artists</p>
                <h6>21</h6>
              </div>
              <div className="single__curation__categorie">
                <p>Volume</p>
                <h6>
                  <span>
                    <img src="../assets/img/compas.svg" alt="" />
                  </span>{" "}
                  3 ETH
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}