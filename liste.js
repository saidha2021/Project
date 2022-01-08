import React from 'react'

import Grid from '@material-ui/core/Grid';
import Comment from "./comment"
import { useSelector } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';
import Box from '@material-ui/core/Box';

const Liste = (props) => {
    const tasks = useSelector(state => state )
    console.log(tasks)
    return (
        
        <div>

            {tasks.length !== 0 ? (
                
                tasks.map(el => {
                    return (el.description.includes(props.filter) ? 
                    <Box m={1} style={{float: "left"}} item xs={false} sm={4} md={4} spacing={2} >
                    <Comment key={el.id} id={el.id} description={el.description} />
                    </Box>
                    : "")
                })
                 )
                : (
                    <Alert severity="warning">
                    <AlertTitle>no text </AlertTitle>
                    
                    </Alert>
                )
            }
        </div>
    )
}

export default Liste
