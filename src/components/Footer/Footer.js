function Footer () {
    return <footer className="footer__area">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-9">
          <div className="footer__menu">
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Artist</a>
              </li>
              <li>
                <a href="#">Curation</a>
              </li>
              <li>
                <a href="#">News &amp; Event</a>
              </li>
              <li>
                <a href="#">Who We Are</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="single__footer__list">
            <h4>Join Us Today!</h4>
            <div className="footer__social__ico">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-discord" />
              </a>
              <a href="#">
                <i className="fas fa-paper-plane" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__bottom__blk">
      <div className="container">
        <div className="footer__logo">
          <a href="#">
            <img src="../assets/img/logo.svg" alt="" />
          </a>
        </div>
        <div className="footer__bottom__text">
          <p>2023 MonsterX. All right reserved.</p>
          <div className="footer__privacy__text">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>  
}

export default Footer;