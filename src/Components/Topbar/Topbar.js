import React, { memo } from "react";
import classes from "./Topbar.module.css";
const Topbar = () => {
     return (
          <header className="App-header">
               <nav className={classes.Topbar}>
                    <img
                         src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                         alt="Amazon-logo"
                    />
               </nav>
          </header>
     );
};
export default memo(Topbar);
