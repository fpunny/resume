import React from 'react';
import { skills } from '../../data/sidenav';

const renderList = ({ title, items }, key, depth = 0) => {
    const Tag = `h${3 + depth}`;
    const isLeaf = typeof(items[0]) === 'string';

    return (
        <li className='side__item' key={ key }>
            <Tag className='side__item-heading'>
                { title }
            </Tag>
            <ul className={`side__list${isLeaf ? ' side__list--end': ''}`}>
                {
                    items.map((item, i) => isLeaf ? (
                        <li className='side__item' key={ i }>{ item }</li>
                    ) : renderList(item, i, depth + 1))
                }
            </ul>
        </li>
    );
};

const Skills = () => (
    <div className='side__section'>
        <h2 className='side__heading'>Skills</h2>
        <ul className='side__list side__list--head'>
            { skills.map((skill, i) => renderList(skill, i)) }
        </ul>
    </div>
)
export default Skills;