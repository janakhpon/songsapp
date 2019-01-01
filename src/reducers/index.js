import {combineReducers} from 'redux';



const songReducer = () => {

    return[

        {
            title:'Take a hint', duration: '3:45'
        },

        {
            title:'heart beat', duration: '3:45'
        },

        {
            title:'this little girl', duration: '3:45'
        },

        {
            title:'demon', duration: '3:45'
        },

        {
            title:'thunder', duration: '3:45'
        }

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === "SELECTED_SONG"){

        return action.payload;
    }

    return selectedSong;

}


export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})