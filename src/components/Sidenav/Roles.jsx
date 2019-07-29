import React from 'react';
import { uniWork } from '../../data/sidenav';

const Roles = () => (
    <div className='side__section'>
        <h2 className='side__heading'>University Work</h2>
        <ul className='side__list side__list--head'>
            { uniWork.map(({ title, role, date, details }, i) => (
                <li className='side__item' key={ i }>
                    <h3 className='side__item-heading'>
                        { title }
                    </h3>
                    <div className='side__item-subtext'>
                        <span className='side__item-span'>{ role } | </span>
                        <span className='side__item-span'>{ date }</span>
                    </div>
                    <ul className='side__list side__list--details'>
                        { details.map((item, j) => (
                            <li className='side__item' key={ j }>{ item }</li>
                        )) }
                    </ul>
                </li>
            )) }
        </ul>
    </div>
)
export default Roles;