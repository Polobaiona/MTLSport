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
                src="http://cdn.shopify.com/s/files/1/0257/6087/products/2e67479ae6ce1e0b5d3ad9ca81bab7d4.png?v=1539833066"
              />
              <br />
              <span className="proxima-nova-font">Basketball</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellHockey">
              <img
                className="frontPageSportImage"
                src="http://pngimg.com/uploads/hockey/hockey_PNG13.png"
              />
              <br />
              <span className="proxima-nova-font">Hockey</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellRockClimbing">
              <img
                className="frontPageSportImage"
                src="https://icon2.kisspng.com/20180616/txi/kisspng-petzl-rock-climbing-equipment-belay-rappel-devic-petzl-5b24a7a6469c44.0041621415291288702892.jpg"
              />
              <br />
              <span className="proxima-nova-font">Rock Climbing</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellSoccer">
              <img
                className="frontPageSportImage"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrauly-8b5ebd2e-2fb3-4ba0-8e58-af63f76366aa.png/v1/fill/w_890,h_898,strp/soccer_ball_on_a_transparent_background__by_prussiaart_dcrauly-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzMyIsInBhdGgiOiJcL2ZcLzI1ZDQ1MDE0LThjYzMtNGM5OC1iMDJjLTVhMGNmM2E1NWRkZFwvZGNyYXVseS04YjVlYmQyZS0yZmIzLTRiYTAtOGU1OC1hZjYzZjc2MzY2YWEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fRZV_mHeC7TcYZVeHBbXFR-Uz22AXc8-Xay2lMU5jgU"
              />
              <br />
              <span className="proxima-nova-font">Soccer</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellTennis">
              <img
                className="frontPageSportImage"
                src="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b90.png"
              />
              <br />
              <span className="proxima-nova-font">Tennis</span>
            </Link>
          </div>
          <div className="mainPageLinks grow">
            <Link to="/SellMisc">
              <img
                className="frontPageSportImage"
                src="https://www.pinclipart.com/picdir/middle/5-59995_free-sports-clipart-sports-clipart-free-sports-clipart.png"
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
