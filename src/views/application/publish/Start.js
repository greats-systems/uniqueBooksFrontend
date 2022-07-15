import { useState } from 'react';

// material-ui
import { Button, Grid, MenuItem, TextField, Box} from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// Options
import {languages, categories, bisac_keywords} from './Options';

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //

const Start = () => {
    const { url, user } = useAuth();

    const [language, setLanguage] = useState('');
    const [category, setCategory] = useState('');
    const [primaryBisac, setPrimaryBisac] = useState('');
    const [secondaryBisac, setSecondaryBisac] = useState('');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleChangePrimaryBisac = (event) => {
        setPrimaryBisac(event.target.value);
    };
    const handleChangeSecondaryBisac = (event) => {
        setSecondaryBisac(event.target.value);
    };


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [contentsTable, setContentsTable] = useState('')
    const [keywords, setKeywords] = useState('')
    const [isbn, setIsbn] = useState('')

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleChangeContentsTable = (event) => {
        setContentsTable(event.target.value);
    };
    const handleChangeKeywords = (event) => {
        setKeywords(event.target.value);
    };
    const handleChangeIsbn = (event) => {
        setIsbn(event.target.value);
    };

    



    const onSubmit = async (e) => {
        e.preventDefault()
        var formdata = new FormData();
        formdata.append("author", user.id);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        const res = await fetch(`${url}/author/add-book-publish`, requestOptions)
        const data = await res.json();
        console.log(data);
        console.log(res)

        var nonformdata = new FormData();
        var patchformdata = new FormData();
        title !== '' ? patchformdata.append("title", title) : nonformdata.append("title", title);
        description !== '' ? patchformdata.append("description", description) : nonformdata.append("description", description);
        contentsTable !=='' ?  patchformdata.append("table_of_contents", contentsTable) : nonformdata.append("table_of_contents", contentsTable);
        keywords !== '' ? patchformdata.append("keywords", keywords) : nonformdata.append("keywords", keywords);
        language !== '' ? patchformdata.append("language", language) : nonformdata.append("language", language);
        category !== '' ? patchformdata.append("category", category) : nonformdata.append("category", category);
        isbn !== '' ? patchformdata.append("isbn", isbn) : nonformdata.append("isbn", isbn);
        primaryBisac !== '' ? patchformdata.append("bisac_category1", primaryBisac) : nonformdata.append("bisac_category1", primaryBisac);
        secondaryBisac !== '' ? patchformdata.append("bisac_category2", secondaryBisac) : nonformdata.append("bisac_category2", secondaryBisac);

        var requestOptions = {
        method: 'PATCH',
        body: patchformdata,
        redirect: 'follow'
        };

        const patchRes = await fetch(`${url}/author/book-publish-update/${data.id}`, requestOptions)
        const patchData = await patchRes.json();
        console.log(patchData);
        console.log(patchRes)
    }


    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12}>
                <SubCard title="Book Details">
                    <form noValidate autoComplete="off" onSubmit={onSubmit}>
                        <Grid container spacing={gridSpacing}>
                            {/* <Grid item xs={12} md={6}>
                                <Button sx={{backgroundColor: 'darkgray', display: 'flex', justifyContent: 'space-between'}}  variant="contained" fullWidth endIcon={<TipsAndUpdatesIcon sx={{color: '#2196F3', fontSize: '65px'}}/>}>
                                    <h4>Publish to Unique Bookstores</h4>
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <Button sx={{backgroundColor: 'darkgray', display: 'flex', justifyContent: 'space-between'}}  variant="contained" fullWidth endIcon={<TipsAndUpdatesIcon sx={{color: '#2196F3'}}/>}>
                                    <h4>Publish to Extrnal Bookstores</h4>
                                </Button>
                            </Grid> */}
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic2" fullWidth label="Title"  name="title" type="text" value={title} onChange={handleChangeTitle}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic3" fullWidth label="ISBN" name="isbn" type="text" value={isbn} onChange={handleChangeIsbn}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                               <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    name='language'
                                    label="Language"
                                    value={language}
                                    onChange={handleChangeLanguage}
                                >
                                    {languages.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id=""
                                    select
                                    fullWidth
                                    name="category"
                                    label="Category"
                                    value={category}
                                    onChange={handleChangeCategory}
                                >
                                    {categories.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static2"
                                    label="Description"
                                    multiline
                                    fullWidth
                                    rows={3}
                                    name="description"
                                    type="text"
                                    value={description} onChange={handleChangeDescription}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static2"
                                    label="Contributor Notes"
                                    name="contributor_notes"
                                    type="text"
                                    multiline
                                    fullWidth
                                    rows={3}
                                    // value={contributor} onChange={handleChangeContributorNotes}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static2"
                                    label="Table of Contents"
                                    name="contents_table"
                                    type="text"
                                    multiline
                                    fullWidth
                                    rows={5}
                                    value={contentsTable} onChange={handleChangeContentsTable}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                               <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    name="primary_bisac"
                                    label="Primary BISAC Keyword"
                                    value={primaryBisac}
                                    onChange={handleChangePrimaryBisac}
                                >
                                    {bisac_keywords.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                               <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    name="secondary_bisac"
                                    label="Secondary BISAC keyword"
                                    value={secondaryBisac}
                                    onChange={handleChangeSecondaryBisac}
                                >
    S                              {bisac_keywords.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic2" fullWidth label="Keywords" value={keywords} onChange={handleChangeKeywords}/>
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

export default Start;
