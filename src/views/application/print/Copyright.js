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
import {rights} from './Options';
// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //

const Copyright = () => {
    const { user, url } = useAuth();

    const [holder, setHolder] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [right, setRight] = useState('');
    const [edition, setEdition] = useState('');
    const [editionStatement, setEditionStatement] = useState('');

    const handleChangeHolder = (event) => {
        setHolder(event.target.value);
    };
    const handleChangeSubtitle = (event) => {
        setSubtitle(event.target.value);
    };
    const handleChangeRights = (event) => {
        setRight(event.target.value);
    };
    const handleChangeEdition = (event) => {
        setEdition(event.target.value);
    };
    const handleChangeEditionStatement = (event) => {
        setEditionStatement(event.target.value);
    };

    const onSubmit = async(e) => {
        e.preventDefault()

        var formdata = new FormData();
        formdata.append("holder", holder);
        formdata.append("right_reserved", right);
        formdata.append("edition", edition);
        formdata.append("edition_statement", editionStatement);
        formdata.append("subtitle", subtitle);
        formdata.append("book", 3);
    
        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };
    
        const res = await fetch(`${url}/author/add-book-copyright`, requestOptions)
        const data = await res.json()
        console.log('Copyright Response', res)

    }



    return (
        <Grid container spacing={gridSpacing}>
            
            <Grid item xs={12} md={12}>
                <SubCard title="Copyright Info">
                    <form noValidate autoComplete="off" onSubmit={onSubmit}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic2" fullWidth label="Holder Name" name="holder" value={holder} onChange={handleChangeHolder}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic3" fullWidth label="Book"  />
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic2" fullWidth label="Subtitle" name="subtitle" value={subtitle} onChange={handleChangeSubtitle}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                               <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    label="Rights"
                                    name="right"
                                    value={right}
                                    onChange={handleChangeRights}
                                >
                                    {rights.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                    
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static2"
                                    label="Edition"
                                    multiline
                                    fullWidth
                                    name="edition" 
                                    value={edition} 
                                    onChange={handleChangeEdition}
                                    rows={2}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static2"
                                    label="Edition Statement"
                                    multiline
                                    fullWidth
                                    name="editionStatement" 
                                    value={editionStatement} 
                                    onChange={handleChangeEditionStatement}
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}} >
                                    <Button type="submit" variant="contained" sx={{width: '60%'}}>
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

export default Copyright;
