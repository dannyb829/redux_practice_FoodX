import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Nav() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className='nav-bar'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   <b>FoodX</b> 
                </Typography>
            </AppBar>
        </Box>
    );
}