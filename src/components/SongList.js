import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../action';

 class Songlist extends Component {

    renderList = () => {
        return this.props.songs.map((song)=>{
            return <div className="item" key={song.title}>
                <div className="right floated content">
                    <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                        select
                    </button>
                </div>
                <div className="contetn">
                {song.title}
                </div>
            </div>;
        })
    }

    render(){
        console.log(this.props)
        return(
            
            <div className="ui divided list">{this.renderList()}</div>
            
        );
    }
}

const mapStateToProps = (state) =>{
console.log(state)
return {songs:state.songs};

}

export default connect(mapStateToProps, {
    selectSong
})(Songlist);