import CropCard from "../CropCard";
import React from "react";
import "./index.css";
import { useSelector } from "react-redux";

const CropCardsList = () => {
  const cropDetails = useSelector(
    (state) => state.allCropsDetails.crop_details.data.other_mandi
  );
  return (
    <div className="crops-container">
      {cropDetails.map((eachCrop) => (
        <CropCard eachCrop={eachCrop} />
      ))}
    </div>
  );
};

export default CropCardsList;
