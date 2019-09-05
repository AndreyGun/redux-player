import React, { Component } from 'react';
import { connect } from 'react-redux';

class App  extends Component {

    addTrack = () => {
        console.log('addTrack ', this.trackInput.value);
        this.props.onAddTrack( this.trackInput.value );
        this.trackInput.value = '';
    }
    findTrack = () => {
        console.log(this.searchInput.value);
        this.props.onFindTrack( this.searchInput.value );
    }
    render() {
        console.log(this.props.tracks);
        return(
            <div>
                <div>
                    <input type="text" ref={(input) => {this.trackInput = input}} ></input>
                    <button 
                        onClick={this.addTrack}>
                        Add track</button>
                </div>
                <div>
                    <input type="text" ref={(input) => {this.searchInput = input}} ></input>
                    <button 
                        onClick={this.findTrack}>
                        Find track</button>
                </div>
                <ul>
                    {this.props.tracks.map((track, index) => 
                        <li key={index} >{track.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ tracks, filterTracks }) => {
    return {
        tracks: tracks.filter( track => track.title.includes(filterTracks) )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddTrack: (title) => {
            const payload = {
                id: Date.now().toString(),
                title
            }
            dispatch({type: 'ADD_TRACK', payload})
        },
        onFindTrack: (title) => {
            dispatch({type: 'FIND_TRACK', payload: title})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);