import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    console.log('logs guess-form',props.onSubmit);

    return (
        <form onSubmit={(e) =>props.onSubmit(e)}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                onChange={(e) => props.onChange(parseInt(e.target.value, 10))}/>

            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

