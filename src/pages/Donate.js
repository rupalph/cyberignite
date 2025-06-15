import React from "react";
import PageContent from "./PageContent";

const Donate = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}
        >
<div style="position:relative;overflow:hidden;height:1200px;width:100%;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' src='https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-16943' allowpaymentrequest allowTransparency="true"></iframe></div>
        </div>
    );
};

export default Donate;