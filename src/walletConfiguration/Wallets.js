import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useWeb3Modal } from '@web3modal/wagmi1/react'
import { useAccount,useDisconnect } from 'wagmi'
import $ from "jquery";
import { checkAccountExists, createAccountApi, getAccountInfo,  updateProfileRegisterApi } from "../api";
export function Wallets({}) {  
  const { address, isConnecting, isDisconnected ,status} = useAccount();
  const { disconnect } = useDisconnect();
  const [registerModel,setRegisterModel] = useState('fade');
  const { open } = useWeb3Modal();
  const [registerData,setRegisterData] = useState({username:"",email:""});

  const navigate = useNavigate();
  const updateProfile = async (e) => {
    try{
      e.preventDefault(0);
      let email = registerData.email;
      let username = registerData.username;
      if(!address){
        Swal.fire({
          title: 'Error!',
          text: "Please connect wallet",
          icon: 'error',
        })           
      }
      if(!email){
        Swal.fire({
          title: 'Error!',
          text: "Please enter email",
          icon: 'error',
        })        
      }
      if(!username){
        Swal.fire({
          title: 'Error!',
          text: "Please enter username",
          icon: 'error',
        })        
      }
      let response = await updateProfileRegisterApi({...registerData,address});
      if(response.message){
        Swal.fire({
          title: 'Conguratulation!',
          text: "Profile Created Successsfully",
          icon: 'success',
        })
        setRegisterModel('fade');
      $("#exampleModalToggle2").hide();
      }else{
        Swal.fire({
          title: 'Error!',
          text: "Something went wrong",
          icon: 'error',
        })
      }

    }catch(err){
      if(err?.response?.data?.error){
        Swal.fire({
          title: 'Error!',
          text: err?.response?.data?.error,
          icon: 'error',
        })
      }else{
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
        })
      }      
    }
  }

  const createAccount = async (account) => {
    try{
      let response = await createAccountApi(account);
      console.log(response);
      setRegisterModel('show');
      $("#exampleModalToggle2").show();
    }catch(err){      
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
      })
    }
  }

  React.useEffect(()=>{
    if(status == "connected"){
      
      (async () => {
        try{
          let response = await checkAccountExists(address);          
          if(response.data.result){
            let accountData = await getAccountInfo(address);
            if(!accountData.user.email || !accountData.user.userName){
              setRegisterModel('show');
              $("#exampleModalToggle2").show();
            }
          }
        }catch(err){
          if(err?.response?.data?.result == false){
            createAccount(address) 
          }else if(err){
            Swal.fire({
              title: 'Error!',
              text: err.message,
              icon: 'error',
            })
          }else{
            console.log(err);
          }
        }
      })();
    }
  },[status,address])  

  return (
    <>
          <div
        className={`modal ${registerModel} common__popup__blk`}
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body similar__site__popup">
              <form method="post" onSubmit={updateProfile} className="popup__inner__blk">
                <div className="popup__common__title">
                  <h4>Enter your Nickname</h4>
                </div>
                <div className="popup__similar__form">
                  <div className="single__popup__input">
                    <input type="text" placeholder="Enter nickname..." onChange={(e)=>setRegisterData((prev)=>({...prev,username:e.target.value}))} value={registerData.username}/>
                    <button className="popup_left_position_btn" type="button">
                      <img src="assets/img/User.svg" alt="" />
                    </button>
                  </div>
                  <div className="single__popup__input">
                    <input type="text" placeholder="Enter Email" onChange={(e)=>setRegisterData((prev)=>({...prev,email:e.target.value}))} value={registerData.email}/>
                    <button className="popup_left_position_btn" type="button">
                      <img src="assets/img/Mail_ico.svg" alt="" />
                    </button>
                  </div>
                  <div className="popup__alart">
                    {/* <p>
                      <span>*This e-mail is already taken.</span>{" "}
                      <a href="#">Sign in</a> instead?
                    </p> */}
                  </div>
                  <div className="popup__similar__btn mt-0">
                    <button     
                      type="submit"                 
                      href="#"
                      className="popup_common_btn_1"
                    >
                      Submit{" "}
                      {/* <span>
                        <img src="assets/img/arrow_ico.svg" alt="" />
                      </span> */}
                    </button>
                  </div>
                </div>
              </form>
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body similar__site__popup">
              <div className="popup__inner__blk text-center">
                <div className="congrats__img">
                  <img src="assets/img/congrats.png" alt="" />
                </div>
                <div className="popup__common__title mt-20">
                  <h4>Congrats!</h4>
                  <p>
                    You have successfully created an account.{" "}
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      onClick={() => navigate("/dashboard")}
                    >
                      Sign in
                    </a>{" "}
                    now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>          
          {address ?
            <div className="header__btn">            
              <w3m-button />             
            </div>          
           :
           <div className="header__btn" onClick={()=>open()}>
            {/* <a data-bs-toggle="modal" href="#exampleModalToggle" role="button"> */}
            <a href="#" role="button">
              Connect Wallet{" "}
              <span>
                <img src="../assets/img/wallet.svg" alt="" />
              </span>
            </a>
          </div>
          }
    </>
  );
}

