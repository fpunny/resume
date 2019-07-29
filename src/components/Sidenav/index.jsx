import React from 'react';
import '../../styles/components/Sidenav.scss';
import Skills from './Skills';
import Roles from './Roles';
import Education from './Education';

export const Sidenav = () => (
    <section className='side'>
        <Skills/>
        <Roles/>
        <Education/>
    </section>
);