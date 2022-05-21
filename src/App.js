import React from 'react';
import PageProfile from './pages/profile/PageProfile'
import Header from './components/header/Header'
import './Index.scss'
import PageMessages from './pages/messages/PageMessages';
import {Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';

const App = (props) => {
    return (
                    <div className="gridContainer">
                        <Header />
                        <div className='gridItemSidebar'>
                        <Sidebar sidebar={props.state.sidebar} friends={props.state.social.friends}/>
                        </div>
                            <div className="gridItemContent">
                                <Routes>
                                    <Route path="/profile" element={<PageProfile profilepage={props.state.profilePage} dispatch={props.dispatch}/>}></Route>
                                    <Route path="/messages/*" element={<PageMessages messagespage={props.state.social} dispatch={props.dispatch}/>}></Route>
                                </Routes>
                            </div>
                    </div>    
    )
}
export default App