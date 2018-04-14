import React, {Component} from 'react';
import ytSearch from 'youtube-search';
import './App.css';
import { BounceLoader } from 'react-spinners';
import { Icon } from 'semantic-ui-react';

// Components
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';


let options = {
    maxResults: 10,
    key: 'AIzaSyDG--C7WbAXhMT4us2-jmATiFgZtYT2Uow\t'
};

class App extends Component {
    constructor(props){
        super(props);
        this.state = { loading: true, videos: [], error: false };
    }

    searchVideos(query){
        let searchItem = query || 'Mr. Eazi';
        this.setState({ loading: true, error: false }, () => {
            console.log('Searching for this video:', query);
            ytSearch(searchItem, options, (err, results) => {
                if(err){
                    console.log('There was an error while trying to load video');
                    console.log(err);
                    this.setState({ error: true });
                }else{
                    console.log(results);
                    this.setState({ videos: results });
                }
                this.setState({ loading: false });
            })
        })
    }


    componentDidMount(){
        this.searchVideos();
    }


    render() {
        return (
            <div className='container'>
                <div className='navbar pad'>

                    <div className='logo'>
                        <h1>Bolt</h1>
                    </div>

                    <div className='search'>
                        <SearchBar searchVideos={this.searchVideos.bind(this)}/>
                    </div>

                </div>

                <div className='body'>

                    <div className='videoPlayer pad'>
                        {this.state.error ? <div><h1>There was an error. Check Internet Connection</h1></div> : this.state.loading ?
                            <BounceLoader size={60} color='#424242' loading={this.state.loading}/>
                            :
                            <VideoPlayer
                                id={this.state.videos[0].id}
                                title={this.state.videos[0].title}
                                placeholder={this.state.videos[0].thumbnails.medium.url}
                            />}

                    </div>

                    <div className='videoList pad' style={{ overflowY: 'auto'}}>
                        <VideoList videos={this.state.videos}/>
                    </div>

                </div>

                <div className='footer pad'>
                    <h1>Made with <span><Icon name='heart' color='red'/></span> by Flossie</h1>
                </div>
            </div>
        );
    }
}

export default App;
