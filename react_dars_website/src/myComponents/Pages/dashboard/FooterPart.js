import React from "react";
import "./FooterPart.css";

const FooterPart = () => {
    return (
        <div className="mt-64 relative">
        <footer class="footer">
            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(10,147,220,1" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(10,147,220,0.5" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(10,147,220,0.2" />
                    {/* <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.7" /> */}
                    </g>
                </svg>
            </div>
            <ul class="menu">
            </ul>
            <p>&copy;2024 Daisuke Asai | Phi Hung Nguyen | Hyun Joon Chang | Ryan Posti | Yu-Ting Hou | All Rights Reserved</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
}

export default FooterPart;