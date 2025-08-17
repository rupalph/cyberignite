import React from "react";
import PageContent from "./PageContent";

class Donate extends React.Component {
render() {
    const mystyle = {
      position: "absolute",
      border: 0,
      top:0,
      left:0,
      bottom:0,
      right:0,
      width:"100%",
      height:"100%"
    };
    const mystyleouter = {
        position:"relative",
        overflow:"hidden",
        height:"1200px",
        width:"100%"
    };


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}
            >
            <div style={mystyleouter}>
                <iframe title='Donation form powered by Zeffy'
                    style={mystyle}
                    src='https://www.zeffy.com/embed/donation-form/ee0199b3-429d-45e2-9266-604b05555be0' allowpaymentrequest
                    allowTransparency="true">
                </iframe>
            </div>
        </div>
    );
    }
};

export default Donate;