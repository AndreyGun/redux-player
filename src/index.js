import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app';

const initialState = [
    'Smells like spirit',
    'Enter sandmam'
]

const playlist = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TRACK':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// function playlist(state = [], action) {
//     if (action.type === 'ADD_TRACK') {
//         return [
//             ...state,
//             action.payload
//         ]
//     }
//     return state;
// }

// const store = createStore( playlist );
// const addTrackBtn = document.querySelector('.add-track');
// const trackInput = document.querySelector('.track-input');
// const list = document.querySelector('.list');

// store.subscribe(() => {
//     list.innerHTML = '';
//     store.getState().forEach( track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     });
// });

// store.dispatch({type: 'ADD_TRACK', payload: 'Smells like teen spirit'});
// store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman'});

// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({type: 'ADD_TRACK', payload: trackName});
//     trackInput.value = '';
// })