import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    TextField,
    Box,
    Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AppBarComponent: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between', padding: 0 }}>
                <IconButton color="inherit">
                    <Badge badgeContent={2} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>

                <Box sx={{ textAlign: 'right', flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ ml: 3 }}>
                        تنیس هد
                    </Typography>
                    <Typography variant="body2" sx={{ ml: 3 }}>
                        شماره تماس: (123) 456-7890
                    </Typography>
                </Box>

                <TextField
                    placeholder="جستجو..."
                    variant="outlined"
                    size="small"
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 1,
                        ml: 2,
                        width: { xs: '50%', md: '30%' },
                    }}
                />

                <Typography variant="h6">Tennis Shop</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;

