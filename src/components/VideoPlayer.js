import React from 'react';
import { Embed } from 'semantic-ui-react';


const VideoPlayer = (props) => {
    console.log('ID is', props.id);
    return(
        <div>
            <Embed source='youtube' id={props.id} aspectRatio='16:9' hd placeholder={props.placeholder}/>
            <h1>{props.title}</h1>
            <h5>{props.description}</h5>
        </div>
    )
};


export default VideoPlayer;