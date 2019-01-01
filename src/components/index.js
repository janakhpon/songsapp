import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

const App = (props) => {


    return(
        <div className="ui container grid">
            <div className="ui eight wide column">
            <SongList />
            </div>
            <div className="ui eight wide column">
            <SongDetails />
            </div>
        </div>
    );
}

export default App;

