
const getTracks = () => dispatch => {
    setTimeout(()=>{
        console.log('GOT IT!');
        dispatch({type: 'FETCH_TRACKS_SUCCES'});
    },2000);
}

export default getTracks;