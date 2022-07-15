import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'

// material-ui
import { Button, CardActions, CardMedia, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import useAuth from 'hooks/useAuth';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';



// =========================|| DASHBOARD ANALYTICS - LATEST CUSTOMERS TABLE CARD ||========================= //

const LatestCustomerTableCard = ({ title }) => {
    const { url } = useAuth();

    const [authors, setAuthors] = useState([])
    
    useEffect( async() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        const res = await fetch(`${url}/author/author-profile-list`, requestOptions)
        const data = await res.json()
        setAuthors(data)
    }, [])

    return(
    <MainCard title={title} content={false}>
        <PerfectScrollbar style={{ height: 450, padding: 0 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ pl: 3 }}>Image</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="center">
                                Phone
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authors.map((author, index) => (
                            <TableRow hover key={index}>
                                <TableCell sx={{ pl: 3 }}>
                                    <CardMedia component="img" image={author.image} title="image" sx={{ width: 30, height: 'auto' }} />
                                </TableCell>
                                <TableCell align="left">{author.name}</TableCell>
                                <TableCell align="left">{author.email}</TableCell>
                                <TableCell align="center">{author.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PerfectScrollbar>

        <Divider />
        {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
                View all Latest Customers
            </Button>
        </CardActions> */}
    </MainCard>
)}

LatestCustomerTableCard.propTypes = {
    title: PropTypes.string
};

export default LatestCustomerTableCard;
