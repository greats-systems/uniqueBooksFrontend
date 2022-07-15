// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Divider, Grid, Typography, Button, Box } from '@mui/material';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneAllIcon from '@mui/icons-material/DoneAll';

// ================================|| Print Job Review ||================================ //

export default function Review() {
    const theme = useTheme();
    const avatarSuccess = {
        width: 16,
        height: 16,
        borderRadius: '5px',
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
        ml: 1.875
    };
    const avatarError = {
        width: 16,
        height: 16,
        borderRadius: '5px',
        backgroundColor: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        ml: 1.875
    };
    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                Book Size
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                        A4 32*3
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1.5, mb: 1.5 }} />

            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                Page Count
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                        182 Pages
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1.5, mb: 1.5 }} />
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                Interior Color
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                        Black And White Premium
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1.5, mb: 1.5 }} />
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                Paper Type
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                        Cream
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1.5, mb: 1.5 }} />
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                Book Binding
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                        Coil Bound
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1.5, mb: 1.5 }} />
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                Cover Finish
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                        Matte
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1.5, mb: 1.5 }} />
            <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                Print Cost
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.success.dark }}>
                                        USD 4.00
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1.5, mb: 1.5 }} />

            <Grid item xs={12} md={12}>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly', marginTop: '45px'}} >
                    <Button type="submit" variant="contained" 
                                endIcon={<DoneAllIcon />}
                                        sx={{
                                        background: theme.palette.success.dark,
                                        '&:hover': { background: theme.palette.success.main },
                                        width:'20%'
                                    }}>
                        PROCEED
                    </Button>
                    <Button type="submit" variant="contained"  
                                        endIcon={<DeleteOutlineIcon />}
                                            sx={{ background: theme.palette.error.main,
                                                 '&:hover': { background: theme.palette.error.dark },
                                                 width:'20%' }}>
                        CANCEL
                    </Button>
                </Box>
            </Grid>
            
        </div>
    );
}
