import React, { memo } from "react";
import classes from "./Preview.module.css";
const Preview = (props) => {
     const { CurrentPreviewImage, selectedFeature } = props;
     const hour =
          new Date().getHours() > 9
               ? new Date().getHours()
               : "0" + new Date().getHours();
     const minute =
          new Date().getMinutes() > 9
               ? new Date().getMinutes()
               : "0" + new Date().getMinutes();
     return (
          <div className={classes.Preview}>
               <img src={CurrentPreviewImage} alt="Preview-img" />
               {selectedFeature === 1 ? (
                    <div className={classes.heart}>
                         <i className="fa fa-heartbeat"></i>
                         <p>78</p>
                    </div>
               ) : (
                    <div className={classes.date}>
                         <p>{`${hour}:${minute}`}</p>
                    </div>
               )}
          </div>
     );
};
export default memo(Preview);
