function Favorite () {
    return <div className="categorie__tabs__area">
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <button
        className="nav-link active"
        id="nav-home-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-home"
        type="button"
        role="tab"
        aria-controls="nav-home"
        aria-selected="true"
      >
        NFTS
      </button>
      <button
        className="nav-link"
        id="nav-profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-profile"
        type="button"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="false"
      >
        Curation
      </button>
      <button
        className="nav-link"
        id="nav-contact-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-contact"
        type="button"
        role="tab"
        aria-controls="nav-contact"
        aria-selected="false"
      >
        Artist
      </button>
    </div>
    <div className="tab-content" id="nav-tabContent">
      <div
        className="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div className="categorie__card__blk">
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-4 col-xxl-4 col-xl-6 col-lg-4 col-md-6 col-sm-6">
              <div className="single__sport__blk">
                <div className="sport__thumb">
                  <img src="assets/img/appreciate_thumb_1.png" alt="" />
                </div>
                <div className="sport__content">
                  <h5>Birmingham Hawthorn L</h5>
                  <p>
                    Created by: <span>Marvin McKinney</span>
                  </p>
                  <p>
                    Canvas Collection <span />
                  </p>
                  <h4>
                    Price{" "}
                    <span>
                      <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-xxl-4 col-xl-6 col-lg-4 col-md-6 col-sm-6">
              <div className="single__sport__blk">
                <div className="sport__thumb">
                  <img src="assets/img/appreciate_thumb_2.png" alt="" />
                </div>
                <div className="sport__content">
                  <h5>Birmingham Hawthorn L</h5>
                  <p>
                    Created by: <span>Marvin McKinney</span>
                  </p>
                  <p>
                    Canvas Collection <span />
                  </p>
                  <h4>
                    Price{" "}
                    <span>
                      <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-xxl-4 col-xl-6 col-lg-4 col-md-6 col-sm-6">
              <div className="single__sport__blk">
                <div className="sport__thumb">
                  <img src="assets/img/appreciate_thumb_3.png" alt="" />
                </div>
                <div className="sport__content">
                  <h5>Birmingham Hawthorn L</h5>
                  <p>
                    Created by: <span>Marvin McKinney</span>
                  </p>
                  <p>
                    Canvas Collection <span />
                  </p>
                  <h4>
                    Price{" "}
                    <span>
                      <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-xxl-4 col-xl-6 col-lg-4 col-md-6 col-sm-6">
              <div className="single__sport__blk">
                <div className="sport__thumb">
                  <img src="assets/img/appreciate_thumb_4.png" alt="" />
                </div>
                <div className="sport__content">
                  <h5>Birmingham Hawthorn L</h5>
                  <p>
                    Created by: <span>Marvin McKinney</span>
                  </p>
                  <p>
                    Canvas Collection <span />
                  </p>
                  <h4>
                    Price{" "}
                    <span>
                      <img src="assets/img/compas.svg" alt="" /> 3.122 ETH
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <div className="curation__area">
          <div className="row g-4">
            <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
              <div className="curation__card__blk">
                <div className="curation__thumb">
                  <img src="assets/img/curation_thumb_1.jpg" alt="" />
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
                          <img src="assets/img/compas.svg" alt="" />
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
                  <img src="assets/img/curation_thumb_2.jpg" alt="" />
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
                          <img src="assets/img/compas.svg" alt="" />
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
                  <img src="assets/img/curation_thumb_3.jpg" alt="" />
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
                          <img src="assets/img/compas.svg" alt="" />
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
                  <img src="assets/img/curation_thumb_4.jpg" alt="" />
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
                          <img src="assets/img/compas.svg" alt="" />
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
                  <img src="assets/img/curation_thumb_5.jpg" alt="" />
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
                          <img src="assets/img/compas.svg" alt="" />
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
                  <img src="assets/img/curation_thumb_6.jpg" alt="" />
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
                          <img src="assets/img/compas.svg" alt="" />
                        </span>{" "}
                        3 ETH
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        ...
      </div>
    </div>
  </div>
  
}

export default Favorite;