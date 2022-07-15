import { useEffect, useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Divider,
    Drawer,
    Grid,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports

import ProductEmpty from './ProductEmpty';
import ProductCard from 'ui-component/cards/ProductCard';
import DashboardBlogCard from 'ui-component/cards/DashboardBlogCard';

import SkeletonProductPlaceholder from 'ui-component/cards/Skeleton/ProductPlaceholder';
import useConfig from 'hooks/useConfig';

import { openDrawer } from 'store/slices/menu';
import { useDispatch, useSelector } from 'store';
import { appDrawerWidth, gridSpacing } from 'store/constant';
import { getProducts, filterProducts } from 'store/slices/product';

// product list container
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shorter
    }),
    marginRight: -appDrawerWidth,
    [theme.breakpoints.down('xl')]: {
        paddingRight: 0,
        marginRight: 0
    },
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shorter
        }),
        marginRight: 0
    })
}));

// ==============================|| E-COMMERCE - PRODUCT GRID ||============================== //

const BlogList = () => {
    const theme = useTheme();

    const { borderRadius } = useConfig();
    const dispatch = useDispatch();


    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    // drawer
    const [open, setOpen] = useState(isLoading);

    // product data
    const [products, setProducts] = useState([]);
    const productState = useSelector((state) => state.product);

    useEffect(() => {
        setProducts(productState.products);
    }, [productState]);

    useEffect(() => {
        dispatch(getProducts());

        // hide left drawer when email app opens
        dispatch(openDrawer(false));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // filter
    const initialState = {
        search: '',
        sort: 'low',
        gender: [],
        categories: ['all'],
        colors: [],
        price: '',
        rating: 0
    };






    let productResult = <></>;
    if (products && products.length > 0) {
        productResult = products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <DashboardBlogCard
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    offerPrice={product.offerPrice}
                    salePrice={product.salePrice}
                    rating={product.rating}
                    color={product.colors ? product.colors[0] : undefined}
                />
            </Grid>
        ));
    } else {
        productResult = (
            <Grid item xs={12} sx={{ mt: 3 }}>
                <ProductEmpty />
            </Grid>
        );
    }

    const spacingMD = matchDownMD ? 1 : 1.5;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                    <Main open={open}>
                        <Grid container spacing={gridSpacing}>
                            {isLoading
                                ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                      <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
                                          <SkeletonProductPlaceholder />
                                      </Grid>
                                  ))
                                : productResult}
                        </Grid>
                    </Main>   
                </Box>
            </Grid>
        </Grid>
    );
};

export default BlogList;
