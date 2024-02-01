import React from 'react'
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi'
import { fetchCurationsByUUID } from '../../../api';

function Curationsall () {
    const {address} = useAccount();
    const [curationsList , setCurationsList] =  useState([]);
    const navigate = useNavigate();
   
    useEffect(()=>{
        const fetchCurationsFrombcknd = async()=>{
            try{
            const listOfAllCurations = await fetchCurationsByUUID();
            setCurationsList(listOfAllCurations.allCurations);
            }catch(error){
                console.log(`error in fetching all the curations : ${error.message}`)
            }
        }
        fetchCurationsFrombcknd();
    }, [])
    
   return <div className="row g-4">
      {curationsList.map((curation) => (
        <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6" key={curation._id} onClick={() => navigate('/dashboard/curation')}>
          <div className="curation__card__blk">
            <div className="curation__thumb">
            {/* style={{ width: "19px", height: "20px" }} */}
              <img src={`http://localhost:5000/images/${curation.curation_file}`}   alt="" />
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
  
}

export default Curationsall