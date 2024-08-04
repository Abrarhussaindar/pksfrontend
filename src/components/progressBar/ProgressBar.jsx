import LinearProgress from '@mui/material/LinearProgress';
    

import React from 'react'

export default function ProgressBar(props) {
    return (
        <LinearProgress className="progress" variant="determinate" value={props.progress} />
    );
}
