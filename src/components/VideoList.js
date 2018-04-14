import React from 'react';
import VideoItem from './VideoItem';


const VideoList = (props) => {
    console.log(props);
    return(
        <div>
            <h1>Related Videos</h1>
            {props.videos.map((video, i) => {
                console.log(video);
                if(i !== 0){
                    return(<VideoItem video={video}/>)
                }
            })}
        </div>
    )
};

export default VideoList;