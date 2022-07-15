import { useState } from 'react';

// material-ui
import { Button, Grid, MenuItem, TextField, Box, Input} from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// Options
import {languages, categories, bisac_keywords} from './Options';

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //

const Start = () => {
    const { user, currentBook, setCurrentBook, url } = useAuth();

    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [isbn, setIsbn] = useState('')

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleChangeIsbn = (event) => {
        setIsbn(event.target.value);
    };
    

    const onSubmit = async (e) => {
        e.preventDefault()
       
        console.log(user.id)

        const upload_book = e.target.book.files[0];

        var formdata = new FormData();
        formdata.append("author", user.id);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        const res = await fetch(`${url}/author/add-book-print`, requestOptions)
        const data = await res.json();
        console.log(data);
        console.log(res)
        setCurrentBook(data.id)

        var nonformdata = new FormData();
        var patchformdata = new FormData();
        title !== '' ? patchformdata.append("title", title) : nonformdata.append("title", title);
        language !== '' ? patchformdata.append("language", language) : nonformdata.append("language", language);
        category !== '' ? patchformdata.append("category", category) : nonformdata.append("category", category);
        description !== '' ? patchformdata.append("description", description) : nonformdata.append("description", description);
        isbn !== '' ? patchformdata.append("isbn", isbn) : nonformdata.append("isbn", isbn);
        upload_book !== '' ? formdata.append("book_pdf", upload_book) : nonformdata.append("book_pdf", upload_book);

        var requestOptions = {
        method: 'PATCH',
        body: patchformdata,
        redirect: 'follow'
        };

        const patchRes = await fetch(`${url}/author/book-print-update/${data.id}`, requestOptions)
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
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic2" fullWidth label="Title"  name="title" type="text" value={title} onChange={handleChangeTitle}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic3" fullWidth label="ISBN " name="isbn" type="text" value={isbn} onChange={handleChangeIsbn}/>
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
                           
                            <Grid item xs={12} md={6}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" name="book" multiple type="file" sx={{display: 'none'}}/>
                                <Button variant="outlined" component="span" fullWidth endIcon={<LibraryBooksIcon/>} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p>Upload Book</p>
                                </Button>
                            </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button variant="outlined" component="span" fullWidth sx={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p>Size: A4</p> <p>Page Count: 28</p>
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}} >
                                    <Button type="submit" variant="contained" sx={{width: '40%'}}>
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

export default Start;
