// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, useMediaQuery } from '@mui/material';

// project imports
import MarketShareAreaChartCard from './MarketShareAreaChartCard';
import TotalRevenueCard from './TotalRevenueCard';
import BestSellingAuthors from './BestSellingAuthors';
import BestSellingBooks from './BestSellingBooks';
import LatestCustomerTableCard from './LatestCustomerTableCard';
import MainCard from 'ui-component/cards/MainCard';
import RevenueCard from 'ui-component/cards/RevenueCard';
import UserCountCard from 'ui-component/cards/UserCountCard';
import { gridSpacing } from 'store/constant';

// assets
import { IconShare, IconAccessPoint, IconCircles, IconCreditCard } from '@tabler/icons';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

// ==============================|| ANALYTICS DASHBOARD ||============================== //

const Analytics = () => {
    const theme = useTheme();
    const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

    const blockSX = {
        p: 2.5,
        borderLeft: '1px solid ',
        borderBottom: '1px solid ',
        borderLeftColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[200],
        borderBottomColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[200]
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} lg={8} md={6}>
                <Grid container spacing={gridSpacing}>
                    {/* <Grid item xs={12}>
                        <MarketShareAreaChartCard />
                    </Grid> */}
                    <Grid item xs={12} lg={4}>
                        <RevenueCard
                            primary="Revenue"
                            secondary="$42,562"
                            content="$50,032 Last Month"
                            iconPrimary={MonetizationOnTwoToneIcon}
                            color={theme.palette.secondary.main}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <RevenueCard
                            primary="Orders Received"
                            secondary="486"
                            content="20% Increase"
                            iconPrimary={AccountCircleTwoTone}
                            color={theme.palette.primary.main}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <RevenueCard
                            primary="Revenue"
                            secondary="$42,562"
                            content="$50,032 Last Month"
                            iconPrimary={MonetizationOnTwoToneIcon}
                            color={theme.palette.secondary.main}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <LatestCustomerTableCard title="Latest Authors" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        {/* <TotalRevenueCard title="Total Revenue" /> */}
                        <BestSellingAuthors title="Best Selling Authors" />
                    </Grid>
                    <Grid item xs={12}>
                        {/* <TotalRevenueCard title="Total Revenue" /> */}
                        <BestSellingBooks title="Best Selling Books" />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <UserCountCard
                            primary="Daily user"
                            secondary="1,658"
                            iconPrimary={AccountCircleTwoTone}
                            color={theme.palette.secondary.main}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <UserCountCard
                            primary="Daily page view"
                            secondary="1K"
                            iconPrimary={DescriptionTwoToneIcon}
                            color={theme.palette.primary.main}
                        />
                    </Grid> */}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Analytics;
