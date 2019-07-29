import React, { Fragment } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Header, Footer, Content, Sidenav } from './components';

export const App = () => (
    <Fragment>
        <Header/>
        <main className='fp__main'>
            <Sidenav/>
            <Content/>
        </main>
        <div className='fp__box fp__box--one'/>
        <div className='fp__box fp__box--two'/>
        <div className='fp__line'>
            Made with <FaHeart className='fp__line-icon'/> by Frederic Pun
        </div>
    </Fragment>
)