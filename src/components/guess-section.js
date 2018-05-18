import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {

    handleFeedback =function () {
        let inputNum = props.inputValue;

        if (inputNum === props.answer) {
            this.setState({feedback: "You got it!"})
        } else if (inputNum <= RANDOM_NUMBER + 5 &&  inputNum >= RANDOM_NUMBER -5  ) {
            this.setState({feedback: "Very Hot!"})
        } else if (inputNum <= RANDOM_NUMBER + 10 && inputNum >= RANDOM_NUMBER -10 ) {
            this.setState({feedback: "Warm!"})
        } else {
            this.setState({feedback: "Cold!"})
        }
   }


    return (
        <section>
            <h2 id="feedback">{handleFeedback}</h2>
            <GuessForm onChange={props.onChange} guesses={props.guesses}/>
        </section>
    );
}

