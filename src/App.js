import React, { Component } from 'react';
import { connect } from 'react-redux';

class App  extends Component {

    addTrack = () => {
        console.log('addTrack ', this.trackInput.value);
        this.props.onAddTrack( this.trackInput.value );
        this.trackInput.value = '';
    }

    render() {
        console.log(this.props.testStore);
        return(
            <div>
                <input type="text" ref={(input) => {this.trackInput = input}} ></input>
                <button 
                    onClick={this.addTrack}>
                    Add track</button>
                <ul>
                    {this.props.testStore.map((track, index) => 
                        <li key={index} >{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        testStore: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);