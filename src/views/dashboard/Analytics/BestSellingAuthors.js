import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'

import useAuth from 'hooks/useAuth';

// material-ui
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// ===========================|| DASHBOARD ANALYTICS - TOTAL REVENUE CARD ||=========================== //

const BestSellingAuthors = ({ title }) => {
    const { url } = useAuth();
    const successSX = { color: 'success.dark' };
    const errorSX = { color: 'error.main' };

    const [authors, setAuthors] = useState([])
    const [topAuthors, setTopAuthors] = useState([])
    

    const allAuthors = async() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          const res = await fetch(`${url}/author/author-profile-list`, requestOptions)
          const data = await res.json()
          console.log(res)
          console.log('Res Data', data)
          setAuthors(data)
    }

    useEffect(()=> {
        allAuthors()
        
    }, [])
    
    let tempAuthors = authors
    let newTempAuthors = []
    let tempRevenue = 0
    let tempIndexID 
    let tempIndex = 0
    let ArrTopFive = []
    let ArrDataIndex = []


    try {
        console.log('State Authors', tempAuthors.length)
        if (tempAuthors === 0 ) {
            for (let i = 0; i < 5; i++) {
                console.log('First Temp Rev', tempRevenue)
                for (let i = 0; i < tempAuthors.length; i++) {
                    console.log('Check', i)
                    console.log(parseFloat(tempAuthors[i].totalRevenue))
                    if (parseFloat(tempAuthors[i].totalRevenue) > tempRevenue) {
                        tempRevenue = parseFloat(tempAuthors[i].totalRevenue)
                        tempIndexID = tempAuthors[i]
                        tempIndex = i
                       
                    }
                    console.log('Current Index', i)
                    console.log('Current Temp Rev', tempRevenue)
                }
                console.log('Current Temp Rev II', tempRevenue)
                console.log('added', i)
                console.log('temp Index', tempIndex)
                newTempAuthors = tempAuthors.splice(tempIndex, 1)
                console.log(newTempAuthors)
                console.log(tempAuthors)
    
                ArrTopFive[i] = tempRevenue
                ArrDataIndex[i] = tempIndexID   
                tempRevenue = 0
                tempIndex = 0
                console.log('Current top Five', ArrTopFive)
            }
            console.log('Array Top Five', ArrTopFive)
            console.log('Array Data Index', ArrDataIndex)
            console.log('Array New Temp Books', newTempAuthors)
            
            // setTopBooks(ArrDataIndex)
        }
          } catch (ex) {
            console.error('outer', ex.message);
          }
            // console.log('Top Books', topBooks)
          
        

  

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
                    {tempAuthors === 0 &&
                         ArrDataIndex.map((author, index)=> (
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowDropUpIcon sx={successSX} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <span>{author.name}</span>
                                            <Typography sx={successSX}>+$ {author.totalRevenue}</Typography>
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

BestSellingAuthors.propTypes = {
    title: PropTypes.string
};

export default BestSellingAuthors;
