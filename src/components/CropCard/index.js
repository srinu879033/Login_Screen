import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./index.css";
const CropCard = (props) => {
  const { crop_id, district, image, km, last_date, state } = props.eachCrop;
  return (
    <Card sx={{ maxWidth: 500, margin: 5 }}>
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          district
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Distance:{km}, State:{state}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CropCard;
