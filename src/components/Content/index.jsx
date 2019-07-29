import React from 'react';
import '../../styles/components/Content.scss';
import Work from './Work';
import Projects from './Projects';

export const Content = () => (
    <section className='content'>
        <Work/>
        <Projects/>
    </section>
);