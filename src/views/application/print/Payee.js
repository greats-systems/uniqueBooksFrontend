import { useState } from 'react';

// material-ui
import { Button, Grid, MenuItem, TextField, Box } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// OPTIONS
import {payee_types} from './Options';

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //

const Payee = () => {
    const { user } = useAuth();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [paypalEmail, setPaypalEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [payeeType, setPayeeType] = useState('')

    const [bookPrice, setBookPrice] = useState('')

    const handleChangeBookPrice = (event) => {
        setBookPrice(event.target.value);
    };
    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePaypalEmail = (event) => {
        setPaypalEmail(event.target.value);
    };
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };
    const handleChangePayeeType = (event) => {
        setPayeeType(event.target.value);
    };

    const onSubmitPricing = async(e) => {
        e.preventDefault()
        alert('Pricing Submitting')
    }

    const onSubmitPayee = async(e) => {
        e.preventDefault()
        alert('Payee Submitting')
    }


    return (
        <Grid container spacing={gridSpacing}>


<Grid item xs={12} md={12}>
                <SubCard title="Pricing">
                    <form noValidate autoComplete="off" onSubmit={onSubmitPricing}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={8}>
                                <TextField id="outlined-basic2" fullWidth label="Book Price" name="bookPrice" type="phone" value={bookPrice} onChange={handleChangeBookPrice}/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}} >
                                    <Button type="submit" variant="contained" sx={{width: '60%', marginTop: '5px'}}>
                                        Submit
                                    </Button>
                                </Box>
                            </Grid>
       
                        </Grid>
                    </form>
                </SubCard>
            </Grid>

            <Grid item xs={12} md={12}>
                <SubCard title="Payee Info">
                    <form noValidate autoComplete="off" onSubmit={onSubmitPayee}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic2" fullWidth label="First Name" name="firstName" type="text" value={firstName} onChange={handleChangeFirstName}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic3" fullWidth label="Last Name" name="lastName" type="text" value={lastName} onChange={handleChangeLastName}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic2" fullWidth label="Email" name="email" type="email" value={email} onChange={handleChangeEmail}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic3" fullWidth label="Phone" name="phone" type="text" value={phone} onChange={handleChangePhone}/>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic3" fullWidth label="Paypal Email" name="paypalEmail" type="email" value={paypalEmail} onChange={handleChangePaypalEmail}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                               <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="Payee Types"
                                    value={payeeType}
                                    onChange={handleChangePayeeType}
                                >
                                    {payee_types.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}} >
                                    <Button type="submit" variant="contained" sx={{width: '30%'}}>
                                        PROCEED
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </SubCard>
            </Grid>

        </Grid>
    );
};

export default Payee;
