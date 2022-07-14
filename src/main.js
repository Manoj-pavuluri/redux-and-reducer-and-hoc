import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UpdateComponent from './Hoc/Hoc';
import OnclickCounter from './Hoc/OnclickCounter';
import HoverCounter from './useReducer/reducer';


const Main = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HoverCounter />} />
                <Route exact path="/onclickCounter" element={<OnclickCounter />} />
                <Route exact path="/updateComponent" element={<UpdateComponent />} />
            </Routes>

        </Router>
    )

}


export default Main;