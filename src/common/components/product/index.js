import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {StyledCard} from "./StyledElements";

const ProductCard = ({ product }) => {
  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
