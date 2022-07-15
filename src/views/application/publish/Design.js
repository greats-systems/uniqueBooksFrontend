import { useState } from 'react';

// material-ui
import { Button, Grid, MenuItem, TextField, Input, Box } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';


import {interior_colors, paper_types, binding_types, cover_finishes} from './Options';

import { Document, Page } from 'react-pdf';

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //

const Design = () => {
    const { user, url, currentBook } = useAuth();

    const [interior, setInterior] = useState('');
    const [paper, setPaper] = useState('');
    const [binding, setBinding] = useState('');
    const [coverFinish, setCoverFinish] = useState('');
    // const [upload_book, setUpload_Book] = useState('');
    // const [upload_cover, setUpload_Cover] = useState('');

    const handleChangeInterior = (event) => {
        setInterior(event.target.value);
    };
    const handleChangePaper = (event) => {
        setPaper(event.target.value);
    };
    const handleChangeBinding = (event) => {
        setBinding(event.target.value);
    };
    const handleChangeCoverFinish = (event) => {
        setCoverFinish(event.target.value);
    };

    // const handleChangeCover = (event) => {
    //     setUpload_Cover(event.target.book.files[0]);
    // };const handleChangeBook = (event) => {
    //     setUpload_Book(event.target.cover.files[0]);
    // };

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    // handleLoadSuccess = async (pdfObject) => {
    //     // If you want to get the dimension for page 1 (1-indexed)
    //     const page = await pdf.getPage(1);
    //     console.log(page.width);
    //     console.log(page.height);
    //   };


    const onSubmit = async(e) => {
        e.preventDefault();

        const upload_book = e.target.book.files[0];
        const upload_cover = e.target.cover.files[0];



        var nonformdata = new FormData();
        var formdata = new FormData();
        interior !== '' ? formdata.append("color", interior) : nonformdata.append("color", interior);
        binding !== '' ? formdata.append("binding", binding) : nonformdata.append("binding", binding);
        paper !== '' ? formdata.append("paper", paper) : nonformdata.append("paper", paper);
        coverFinish !== '' ? formdata.append("cover_finish", coverFinish) : nonformdata.append("cover_finish", coverFinish);
        upload_book !== '' ? formdata.append("book_pdf", upload_book) : nonformdata.append("book_pdf", upload_book);
        upload_cover !== '' ? formdata.append("cover", upload_cover) : nonformdata.append("cover", upload_cover);

        var requestOptions = {
        method: 'PATCH',
        body: formdata,
        redirect: 'follow'
        };

        const res = await fetch(`${url}/author/book-publish-update/${currentBook}`, requestOptions)
        const data = await res.json()
        console.log(data)
        console.log(res)
    }

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Personal Information">
                    <form noValidate autoComplete="off" onSubmit={onSubmit}>
                    {/* <Document file="upload_book" onLoadSuccess={onDocumentLoadSuccess}></Document> */}
                        <Grid container spacing={gridSpacing}>
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
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="outlined-select-experience"
                                    select
                                    fullWidth
                                    label="Interior Color"
                                    value={interior}
                                    onChange={handleChangeInterior}
                                >
                                    {interior_colors.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="outlined-select-experience"
                                    select
                                    fullWidth
                                    label="Paper Type"
                                    value={paper}
                                    onChange={handleChangePaper}
                                >
                                    {paper_types.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="outlined-select-experience"
                                    select
                                    fullWidth
                                    label="Binding Options"
                                    value={binding}
                                    onChange={handleChangeBinding}
                                >
                                    {binding_types.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="outlined-select-experience"
                                    select
                                    fullWidth
                                    label="Cover Finish"
                                    value={coverFinish}
                                    onChange={handleChangeCoverFinish}
                                >
                                    {cover_finishes.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Button variant="contained" component="span" fullWidth sx={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'darkgray'}}>
                                    <h3>COST </h3>  <DoubleArrowIcon/>  <h3>  65USD</h3>
                                </Button>
                            </Grid> */}
                            <Grid item xs={12}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" name="cover" multiple type="file" sx={{display: 'none'}}/>
                                <Button variant="outlined" component="span" fullWidth endIcon={<LibraryBooksIcon/>} sx={{display: 'flex', justifyContent: 'space-around'}}>
                                    <p>Upload Cover</p>
                                </Button>
                            </label>
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

export default Design;
