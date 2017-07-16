import React    from 'react'
import ReactDOM from 'react-dom'
import 'react-select/dist/react-select.css'

import SenmakerApp   from './SenmakerApp'
//import {SenmakerStore} from './SenmakerStore'
// Include the the reactions in order
// to respond to the state changes.
require('./todoReactions');

ReactDOM.render(
    <SenmakerApp />,
    document.getElementById('senmaker')
)
