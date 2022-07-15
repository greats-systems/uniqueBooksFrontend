import * as React from 'react';
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const initialValues = {
  vision: '',
}

export default function VisionCard({url}) {
  const [expanded, setExpanded] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [values, setValues] = useState(initialValues);


  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setValues({
        ...values,
        [name]: value,
    })
}
  const onSubmit = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    var formdata = new FormData();
    formdata.append("text", values.vision);

    var requestOptions = {
      method: 'PATCH',
      body: formdata,
      redirect: 'follow'
    };

    const res = await fetch(`${url}/api/patch-vision/1`, requestOptions)
    console.log(res)
    if(res.status === 200){
      setIsLoading(false)
    }


  }

  const getVision = async() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const res = await fetch(`${url}/api/vision`, requestOptions)
    const data = await res.json()
    console.log("Vision DATA", data[0].text)

    setValues({
      ...values,
      vision: data[0].text,
    })
  }

  useEffect(()=> {
    // getVision()
  }, [])


  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        
        action={
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title="Vision Statement"
      />
      <CardActions disableSpacing>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <form  onSubmit={onSubmit} action="#" noValidate autoComplete="off">
                <Grid container spacing={2} sx={{ mt: 0.25 }}>
                    <Grid item xs={12}>
                        <TextField 
                            id="outlined-basic1" 
                            fullWidth label="Edit Vision Statement" 
                            // defaultValue="Iphone 11 Pro Max"
                            name="vision"
                            value={values.vision}
                            onChange={handleInputChange} 
                            />
                    </Grid>

                    <Grid item  md={12} xs={12}>
                      {isLoading ? <Button disabled fullWidth type="submit" variant="contained">Editing ...</Button> : <Button fullWidth type="submit" variant="contained">Edit</Button>} 
                    </Grid>
                </Grid>
            </form>
        </CardContent>
      </Collapse>
    </Card>
  );
}
