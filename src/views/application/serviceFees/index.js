import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { IconButton } from '@mui/material'
import { TransitionGroup } from 'react-transition-group';

// import Iconify from '../../../components/Iconify';
import { IconTrash } from '@tabler/icons';


import MissionCard from './MissionCard'
import VisionCard from './VisionCard'


const FRUITS = [

      
];

function renderItem({ item, handleRemoveFruit }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          
            {/* <Iconify icon="eva:trash-2-fill" /> */}
            <IconTrash/>
          
        </IconButton>
      }
    >
      
    </ListItem>
  );
}

export default function TransitionGroupExample() {

  const [url] = useState('https://backend.fastdelivery.co.zw')
  // const [url] = useState('http://localhost:8000')
  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    <Button
      variant="contained"
      disabled={fruitsInBasket.length >= FRUITS.length}
      onClick={handleAddFruit}
    >
      Load More Components
    </Button>
  );

  return (
      
        <List>
          <Grid item xs={12} container spacing={1}>
            <Grid item xs={6}>
            <MissionCard url={url}/>
            </Grid>
            <Grid item xs={6}>
            <VisionCard url={url}/>
            </Grid>
          </Grid>
        </List>
      

  );
}

export function Test() {
    // show a right sidebar when clicked on new product
    const [open, setOpen] = useState(false);
    const handleClickOpenDialog = () => {
        setOpen(true);
    };
    const handleCloseDialog = () => {
    
        setOpen(false);
    };
return (
<>
<h1 onClick={handleClickOpenDialog}>Test</h1>
{/* <EditEmail/> */}
</>
);
}

export function Test1() {
return (
<div>
<h1>Test1</h1>
</div>
);
}

export function Test2() {
return (
<div>
<h1>Test2</h1>
</div>
);
}

export function Test3() {
return (
<div>
<h1>Test3</h1>
</div>
);
}
