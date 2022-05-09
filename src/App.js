import React from 'react';
import PageProfile from './pages/profile/PageProfile'
import Header from './components/header/Header'
import './Index.scss'
import PageMessages from './pages/messages/PageMessages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';

const App = (props) => {
    return (
                <BrowserRouter>
                    <div className="gridContainer">
                        <Header />
                        <div className='gridItemSidebar'>
                        <Sidebar data={props.state.sidebar}/>
                        </div>
                            <div className="gridItemContent">
                                <Routes>
                                    <Route path="/profile" element={<PageProfile data={props.state.profilePage}/>}></Route>
                                    <Route path="/messages/*" element={<PageMessages data={props.state.messagesPage}/>}></Route>
                                </Routes>
                            </div>
                    </div>
                </BrowserRouter>
                
    )
}
export default App