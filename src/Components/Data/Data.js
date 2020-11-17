import React, { memo } from "react";
import classes from "./Data.module.css";
const Data = (props) => {
     const {
          data,
          CurrentPreviewImage,
          selectedFeature,
          showHeart,
          colourOptionClicked,
     } = props;
     const colors = data.colorOptions.map((item, pos) => {
          const classArr = [classes.productImages];
          if (pos === CurrentPreviewImage) {
               classArr.push(classes.selectedProductImage);
          }
          return (
               <img
                    className={classArr.join(" ")}
                    src={item.imageUrl}
                    alt={item.styleName}
                    key={pos}
                    onClick={() => colourOptionClicked(pos)}
               />
          );
     });
     const buttons = data.featureList.map((item, pos) => {
          const classArrButton = [classes.btns];
          if (pos === selectedFeature) {
               classArrButton.push(classes.selectedBtn);
          }
          return (
               <button
                    className={classArrButton.join(" ")}
                    key={pos}
                    onClick={() => showHeart(pos)}
               >
                    {item}
               </button>
          );
     });
     return (
          <div className={classes.data}>
               <h1 className={classes.title}>{data.title}</h1>
               <p className={classes.desc}>{data.description}</p>
               <h3 className={classes.selectColor}>Select Colors</h3>
               <div className={classes.optionImages}>{colors}</div>
               <h3 className={classes.selectColor}>Features</h3>
               <div className={classes.features}>{buttons}</div>
               <button className={classes.buybtn}>Buy Now</button>
          </div>
     );
};
export default memo(Data);
