import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    console.log('logs guess-form',props.onSubmit);

    const checkDouble = (value) => {
        return props.guesses.includes(value);
        //returns a boolean
    }

    const onSubmit = (e => {
        e.preventDefault();
        let value = parseInt(e.target.value, 10);
        if (checkDouble(value)){
            alert('You guessed this number already')
        } else if (!checkDouble && (value > 0 && value <=100)) {
            props.onChange(value)
        } else {
            alert('Keep it between 1 and 100')
        }
    })
    return (
        <form onSubmit={(e) =>onSubmit(e)}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />

            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

                //onChange={(e) => props.onChange(parseInt(e.target.value, 10))}
