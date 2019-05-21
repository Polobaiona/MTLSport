import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class UnconnectedSellForum extends Component {
  render = () => {
    return (
      <div className="centerSecondHeader">
        <div>
          <h1 className="proxima-nova-font">Buy Sports Equipment </h1>
        </div>
        <div className="fuckOffPaul">
          <div className="mainPageLinks grow">
            <Link to="/SellBasketball">
              <img
                className="frontPageSportImage"
                src="https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/kfwfrlxmbtsqmznivevv/vince-carter-25000-dunk-2018"
              />
              <br />
              <span className="proxima-nova-font">Basketball</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellHockey">
              <img
                className="frontPageSportImage"
                src="https://assets3.sportsnet.ca/wp-content/uploads/2011/10/orr_bobby_gal.jpg"
              />
              <br />
              <span className="proxima-nova-font">Hockey</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellRockClimbing">
              <img
                className="frontPageSportImage"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Under_a_roof.jpg/220px-Under_a_roof.jpg"
              />
              <br />
              <span className="proxima-nova-font">Rock Climbing</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellSoccer">
              <img
                className="frontPageSportImage"
                src="https://i2-prod.mirror.co.uk/incoming/article10027240.ece/ALTERNATES/s615b/PROD-Diego-Maradona-scores-his-Hand-of-God-goal-against-England-goalkeeper-Peter-Shilton.jpg"
              />
              <br />
              <span className="proxima-nova-font">Soccer</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellTennis">
              <img
                className="frontPageSportImage"
                src="https://photos.smugmug.com/OP-Clarkston-Regional-Tennis/i-SCL8dLL/0/bdf7b894/S/RegionTennis-2.10122017-S.jpg"
              />
              <br />
              <span className="proxima-nova-font">Tennis</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellMisc">
              <img
                className="frontPageSportImage"
                src="https://i.ebayimg.com/images/g/VZMAAOSwSWJXRWSe/s-l640.jpg"
              />
              <br />
              <span className="proxima-nova-font">Misc.</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };
}

let SellForum = connect()(UnconnectedSellForum);

export default SellForum;
