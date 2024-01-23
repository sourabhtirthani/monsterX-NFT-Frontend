function Earn () {
    return <div className="activity__table__blk">
    <div className="dashboard__table__wrapper">
      <div className="dashboard__table mt-10">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Transaction Number (ID)</th>
              <th scope="col">Title</th>
              <th scope="col">Earnings</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">View Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>679807654</td>
              <td>
                <div className="flex__table">
                  <span className="table_thumb">
                    <img src="assets/img/appreciate_thumb_8.png" alt="" />
                  </span>
                  Fire
                </div>
              </td>
              <td>
                <div className="share_table">
                  <span>
                    <img src="assets/img/compas.svg" alt="" />
                  </span>{" "}
                  0.3 ETH
                </div>
              </td>
              <td>17/12/2023</td>
              <td>
                <div className="table__inner__btn">
                  <a href="#">Royalties</a>
                </div>
              </td>
              <td>
                <a href="#" className="yellow_color yellow_border">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>1211233333</td>
              <td>
                <div className="flex__table">
                  <span className="table_thumb">
                    <img src="assets/img/appreciate_thumb_8.png" alt="" />
                  </span>
                  Baby
                </div>
              </td>
              <td>
                <div className="share_table">
                  <span>
                    <img src="assets/img/compas.svg" alt="" />
                  </span>{" "}
                  0.3 ETH
                </div>
              </td>
              <td>30/10/2023</td>
              <td>
                <div className="table__inner__btn blue_bg">
                  <a href="#">Split payment</a>
                </div>
              </td>
              <td>
                <a href="#" className="yellow_color yellow_border">
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
}

export default Earn;