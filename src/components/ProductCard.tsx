import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => (
    <Card>
        <CardMedia
            component="img"
            height="140" 
            image={image}
            alt={title}
        />
        <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2">{price} تومان</Typography>
        </CardContent>
    </Card>
);

export default ProductCard;
