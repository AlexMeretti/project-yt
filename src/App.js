import React from 'react';
import PageProfile from './pages/profile/PageProfile'
import Header from './components/header/Header'
import LeftMenu from './components/leftmenu/LeftMenu'
import './Index.scss'
import PageMessages from './pages/messages/PageMessages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
                <BrowserRouter>
                    <div className="gridContainer">
                        <Header />
                        <LeftMenu />
                            <div className="gridItemContent">
                                <Routes>
                                    <Route path="/profile" element={<PageProfile />}></Route>
                                    <Route path="/messages" element={<PageMessages />}></Route>
                                </Routes>
                            </div>
                    </div>
                </BrowserRouter>
                
    )
}
export default App