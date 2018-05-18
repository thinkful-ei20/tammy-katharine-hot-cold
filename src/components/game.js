import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

// const RANDOM_NUMBER = Math.floor(Math.random() * 100); 

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            feedback: "Make your guess!",
            count: 0,
            guesses:[],
            inputValue: 0,
            answer: Math.floor(Math.random() * 100)
        }
    }

    //if (guesses != [] && number !== this.state.inputValue){ set state} else {error}
    // Object.values(thing that should be an array

    handleSubmit(event){
        console.log('button has been clicked');
        event.preventDefault();
    
        (Object.values(this.state.guesses)).forEach(number => {
            if (this.state.guesses !== [] && number !== this.state.inputValue) {
                this.setState({guesses:[...this.state.guesses, this.state.inputValue]});
                this.handleNumberCheck();
                event.target.reset();
                this.setState({count: this.state.count + 1});
            } else if (this.state.guesses !== [])  {
                alert("You've already guessed this number");
            }


            // if (number === this.state.inputValue) {
            //     alert("You've already guessed this number");

            // } else {
            //     this.setState({guesses:[...this.state.guesses, this.state.inputValue]});
            //     this.handleNumberCheck();
            //     event.target.reset();
            //     this.setState({count: this.state.count + 1});
            // }
        })

    }

    updateGuesses(guess){
     this.setState({guesses:[...this.state.guesses, this.state.inputValue]});
    
    }
    updateCounter(count){
        this.setState({count: this.state.count + 1});
    }

    updateFeedback(feedback){
        this.setState({feedback: feedback});

    }

//     handleNumberCheck(){
//         let inputNum = this.state.inputValue;
//         if (inputNum === RANDOM_NUMBER) {
//             this.setState({feedback: "You got it!"})
//         } else if (inputNum <= RANDOM_NUMBER + 5 &&  inputNum >= RANDOM_NUMBER -5  ) {
//             this.setState({feedback: "Very Hot!"})
//         } else if (inputNum <= RANDOM_NUMBER + 10 && inputNum >= RANDOM_NUMBER -10 ) {
//             this.setState({feedback: "Warm!"})
//         } else {
//             this.setState({feedback: "Cold!"})
//         }
//    }

//    handleRepeatNumber(){
//        this.state.guesses.forEach(number => {
//            if (number === this.state.inputValue) {
//             alert("You've already guessed this number")
//            }
//        })
//    }



    render() {
        
        return (
            console.log(this.state.guesses),
            console.log(this.state.inputValue),
            console.log(this.state.count),
        <div>
            <Header restartGame={() => this.restartGame()} about={this.state.whatState} showAbout={() => this.updateMod()}/>
            <GuessSection 
                feedback={this.handleFeedback(feedback)}
                onChange={(value) =>this.setState({inputValue:value})}
                answer={this.state.answer}
                guesses={this.state.guesses} />
            <GuessCount count={this.updateCounter()} />
            <GuessList  guesses={this.state.guesses} />
        </div>
        );
     }
}

