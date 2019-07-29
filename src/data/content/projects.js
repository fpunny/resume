import React, { Fragment } from 'react';

export const projects = [
    {
        title: 'Hack The 6ix Website',
        role: 'Web Developer',
        date: 'January 2019 - Present',
        details: [
            'Learned, configured, and developed landing page and hacker dashboard, using Vue, Prettier, and SCSS, with CI using Netlify',
            'Separated content from application, allowing for easy configuration of data and improved efficiency from requirement changes',
            'Implemented routing based on metadata and barrel files, allowing for automation of routing, navigation, and footer to improve efficiency',
        ]
    },
    {
        title: 'AutoShyfter (MHacks II)',
        role: 'Participant - Frontend Developer',
        date: 'October 12th - 14th, 2018',
        details: [
            'Created auto-scheduling React application for small businesses within 36 hours with MongoDB, Nodejs with express, and GraphQL',
            'Developed an optimized and interactive component which manages and displays a schedule with SASS',
            'Awarded first place out of 111 teams',
        ]
    },
    {
        title: 'Computer Science Enrichment Club Website',
        role: 'Front-end Developer',
        date: 'April 2019 - Present',
        details: [
            'A website for the Computer Science club as a hub for information regarding the clubs in CMS',
            'Designed and developed with the goal of optimization and SEO using React Gatsby, and SCSS, as a result achieving perfect performance and SEO in lighthouse',
            <Fragment>
                Link to application: <a href='https://csec.netlify.com/' target='_blank'>https://csec.netlify.com</a>
            </Fragment>
        ]
    },
];