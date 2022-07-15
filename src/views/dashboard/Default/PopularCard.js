import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'store';
import { getBooks } from 'store/slices/book';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [rows, setRows] = React.useState([]);
    const { books } = useSelector((state) => state.book);

    React.useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);
    React.useEffect(() => {
        setRows(books);
    }, [books]);

    console.log('Books',books)

    // let temp = 0
    // let arr = []

    // for (let i = 0; i < books.length; i++) {
    //     if (arr.length === 5 ){
    //         break
    //     } else {
    //         if (books[i].revenue > temp) {
    //             arr[arr.length] = books[i].revenue
    //             temp = books[i].revenue
    //         }
    //     }
        
    //   }
    // let newBooks

    // for (let i = 0; i < books.length; i++) {
    //     if (i == 3) {
    //         newBooks = books.splice(i, 1)
    //     }
    // }

    // console.log('New Books', newBooks)

    // console.log('Temp Array', arr)

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>

                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">Popular Books</Typography>
                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                <BajajAreaChartCard />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="spa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ce-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Current Book Title
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $1839.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success.light,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                            10% Profit
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};

PopularCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PopularCard;
