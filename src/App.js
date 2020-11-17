import React, { useState } from "react";
import Topbar from "./Components/Topbar/Topbar";
import Preview from "./Components/Preview/Preview";
import Data from "./Components/Data/Data";
import ProductData from "./DataFiles/ProductData";
import classes from "./App.module.css";

const App = () => {
     const productData = ProductData;
     const [CurrentPreviewImage, setCurrentPreviewImage] = useState(0);
     const [selectedFeature, setSelectedFeature] = useState(0);

     const colourOptionClicked = (pos) => {
          setCurrentPreviewImage(pos);
     };
     const showHeart = (pos) => {
          setSelectedFeature(pos);
     };

     return (
          <div className="App">
               <div>
                    <Topbar />
               </div>
               <div className={classes.mainContainer}>
                    <div className={classes.Preview}>
                         <Preview
                              CurrentPreviewImage={
                                   productData.colorOptions[CurrentPreviewImage]
                                        .imageUrl
                              }
                              selectedFeature={selectedFeature}
                         />
                    </div>
                    <div className={classes.data}>
                         <Data
                              data={productData}
                              colourOptionClicked={colourOptionClicked}
                              CurrentPreviewImage={CurrentPreviewImage}
                              showHeart={showHeart}
                              selectedFeature={selectedFeature}
                         />
                    </div>
               </div>
          </div>
     );
};

export default App;
