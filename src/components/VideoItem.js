import React from 'react';
import { Segment } from 'semantic-ui-react';


const VideoItem = (props) => {
    console.log(props.video);
    return(
        <Segment raised style={{ display: 'flex'}}>
            <div>
                <img src={props.video.thumbnails.default.url}/>
            </div>
            <p>Hello WO</p>

            <div>

            </div>
        </Segment>
    )
};


export default VideoItem;