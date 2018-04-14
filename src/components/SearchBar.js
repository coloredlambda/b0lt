import React from 'react';
import { Input } from 'semantic-ui-react';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { videoQuery: '' }
    }

    handleKeyPress(e){
        if(e.key === 'Enter') {
            console.log(this.state.videoQuery);
            console.log('Searching videos');
            this.props.searchVideos(this.state.videoQuery)
        }
    }


    render(){
        return(
            <Input
                icon='search'
                size='huge'
                placeholder='Search video'
                fluid
                value={this.state.videoQuery}
                onChange={event => this.setState({ videoQuery: event.target.value })}
                onKeyPress={event => {this.handleKeyPress(event)}}
            />
        )
    }
}



export default SearchBar;