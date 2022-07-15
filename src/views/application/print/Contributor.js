import { useState } from 'react';

// material-ui
import { Button, Grid, MenuItem, TextField, Box } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// Options
import {roles} from './Options';

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //

const Contributor = () => {
    const { user, url } = useAuth();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('')

    const handleChangeRole = (event) => {
        setRole(event.target.value);
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
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const onSubmit = async(e) => {
        e.preventDefault()
        
        var formdata = new FormData();
        formdata.append("book", 3);
        formdata.append("first_name", firstName);
        formdata.append("last_name", lastName);
        formdata.append("role", role);
        formdata.append("email", email);
        formdata.append("phone", phone);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        const res = await fetch(`${url}/author/add-book-contributor`, requestOptions)
        const data = await res.json()
        console.log(res)

    }

    return (
        <Grid container spacing={gridSpacing}>

            <Grid item xs={12} md={12}>
                <SubCard title="Contributors Info">
                    <form noValidate autoComplete="off" onSubmit={onSubmit}>
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
                                <TextField id="outlined-basic3" fullWidth label="Book" type="text" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                               <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="Role"
                                    name="role"
                                    value={role}
                                    onChange={handleChangeRole}
                                >
                                    {roles.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}} >
                                    <Button type="submit" variant="contained" sx={{width: '50%'}}>
                                        <h4>PROCEED</h4>
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

export default Contributor;
