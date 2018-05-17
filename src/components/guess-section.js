import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    console.log('logs guess-section.js'+ props.onSubmit);

    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onSubmit={props.onSubmit} onChange={props.onChange}/>
        </section>
    );
}

