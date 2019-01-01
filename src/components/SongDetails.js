import React from 'react';
import {connect} from 'react-redux';

const SongDetail =({song})=>{

    if(!song){
        return <div>select one song!</div>;
    }

    
    return (
    <div>
        <h5>{song.title}</h5>
        <h5>{song.duration}</h5>
    </div>
    );

}

const mapStateToProps = (state) => {
 return {song:state.selectedSong};
};


export default connect(mapStateToProps)( SongDetail);