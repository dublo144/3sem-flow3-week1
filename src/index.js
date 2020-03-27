import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import { Count } from './day2/stateAndEvents/Count';
import Timer from './day2/stateAndEvents/Timer';
import ChuckNorris from './day2/stateAndEvents/jokes/Jokes';
import ListDemoApp from './day2/listsAndKeys/ListDemoApp';
import FormDemo from './day3/formsWithReact/FormDemo';
import ReservationForm from './day3/formsWithReact/FormDemoMultiple';
// import App from './day3/liftingState/proofOfConcept/App';
// import App from './day3/liftingState/liftingState2/App';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
