import React, { Fragment } from 'react';
import { FaCode } from 'react-icons/fa';
import { contact } from '../data';
import '../styles/components/Header.scss';
const [ { Icon, value, link }, ...info ] = contact;

export const Header = () => (
    <header className='header'>
        <div className='header__head'>
            <h1 className='header__heading'>Frederic Pun</h1>
            <p className='header__head-text'>
                <FaCode className='header__head-icon'/>
                Yet Another Front-End Developer
            </p>
            <p className='header__head-text'>
                <Icon className='header__head-icon'/>
                <a className='header__link' href={ link }>
                    { value }
                </a>
            </p>
            <div className='header__box'/>
        </div>
        <ul className='header__info'>
            {
                info.map(({ value, link, Icon }) => (
                    <li key={ value } className='header__info-item'>
                        <Icon className='header__info-icon'/>
                        <a className='header__link' href={ link }>
                            { value }
                        </a>
                    </li>
                ))
            }
        </ul>
        <div className='header__line'/>
    </header>
);