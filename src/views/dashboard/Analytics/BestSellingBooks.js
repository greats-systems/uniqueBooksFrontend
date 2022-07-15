import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
// material-ui
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

import useAuth from 'hooks/useAuth';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// ===========================|| DASHBOARD ANALYTICS - TOTAL REVENUE CARD ||=========================== //

const BestSellingBooks = ({ title }) => {
    const { url } = useAuth();
    const successSX = { color: 'success.dark' };
    const errorSX = { color: 'error.main' };

    const [books, setBooks] = useState([])
    const [topBooks, setTopBooks] = useState([])
    

    let tempBooks = books
    let newTempBooks = []
    let tempRevenue = 0
    let tempIndexID 
    let tempIndex = 0
    let ArrTopFive = []
    let ArrDataIndex = []

    const allBooks = async() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          const res = await fetch(`${url}/author/book-publish-list`, requestOptions)
          const data = await res.json()
          console.log(res)
          console.log('Res Data', data)
          setBooks(data)
    }

    useEffect(()=> {
        allBooks()
        

        try {
            console.log('State Books', tempBooks)
    
            for (let i = 0; i < 5; i++) {
                console.log('First Temp Rev', tempRevenue)
                for (let i = 0; i < tempBooks.length; i++) {
                    console.log('Check', i)
                    console.log(parseFloat(tempBooks[i].currentRevenue))
                    if (parseFloat(tempBooks[i].currentRevenue) > tempRevenue) {
                        tempRevenue = parseFloat(tempBooks[i].currentRevenue)
                        tempIndexID = tempBooks[i]
                        tempIndex = i
                       
                    }
                    console.log('Current Index', i)
                    console.log('Current Temp Rev', tempRevenue)
                }
                console.log('Current Temp Rev II', tempRevenue)
                console.log('added', i)
                console.log('temp Index', tempIndex)
                newTempBooks = tempBooks.splice(tempIndex, 1)
                console.log(newTempBooks)
                console.log(tempBooks)
    
                ArrTopFive[i] = tempRevenue
                ArrDataIndex[i] = tempIndexID   
                tempRevenue = 0
                tempIndex = 0
                console.log('Current top Five', ArrTopFive)
            }
            console.log('Array Top Five', ArrTopFive)
            console.log('Array Data Index', ArrDataIndex)
            console.log('Array New Temp Books', newTempBooks)

          } catch (ex) {
            console.error('outer', ex.message);
          }
            // console.log('Top Books', topBooks)
    
    
    }, [])
    
    




    
        
    return (
        <MainCard title={title} content={false}>
            <PerfectScrollbar style={{ height: 250 }}>
                <List
                    component="nav"
                    aria-label="main mailbox folders"
                    sx={{
                        '& svg': {
                            width: 32,
                            my: -0.75,
                            ml: -0.75,
                            mr: 0.75
                        }
                    }}
                >

                {ArrDataIndex.map((book, index)=> (
                    <ListItemButton>
                    <ListItemIcon>
                        <ArrowDropUpIcon sx={successSX} />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <span>{book.title}</span>
                                <Typography sx={successSX}>+$ {book.currentRevenue}</Typography>
                            </Stack>
                        }
                    />
                </ListItemButton>
                ))}
                   
                </List>
            </PerfectScrollbar>
        </MainCard>
    );
};

BestSellingBooks.propTypes = {
    title: PropTypes.string
};

export default BestSellingBooks;
