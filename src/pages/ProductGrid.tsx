import React from 'react';
import { CssBaseline, Container, Box, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { rtlTheme } from '../app/rtlTheme';
import AppBarComponent from '../components/AppBarComponent';
import ProductCard from '../components/ProductCard';

const ProductGrid: React.FC = () => {
    const products = [
        { id: 1, title: 'راکت تنیس 1', price: 500000, image: 'https://via.placeholder.com/150?text=Tennis+Racket+1' },
        { id: 2, title: 'راکت تنیس 2', price: 600000, image: 'https://via.placeholder.com/150?text=Tennis+Racket+2' },
        { id: 3, title: 'کیف تنیس', price: 700000, image: 'https://via.placeholder.com/150?text=Tennis+Bag' },
        { id: 4, title: 'توپ تنیس', price: 200000, image: 'https://via.placeholder.com/150?text=Tennis+Ball' },
        { id: 5, title: 'کفش تنیس', price: 800000, image: 'https://via.placeholder.com/150?text=Tennis+Shoes' },
        { id: 6, title: 'دستکش تنیس', price: 150000, image: 'https://via.placeholder.com/150?text=Tennis+Gloves' },
    ];

    return (
        <ThemeProvider theme={rtlTheme}>
            <CssBaseline />
            <AppBarComponent />
            <Container sx={{ mt: 4 }}>
                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                        {products.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <ProductCard
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default ProductGrid;
