import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

const RANDOM_NUMBER = Math.floor(Math.random() * 100); 

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            feedback: "Make your guess!",
            count: 0,
            guesses:[],
            inputValue: 0,
        }
    }

    handleSubmit(event){
        console.log('button has been clicked');
        event.preventDefault();
        this.setState({
            guesses:[...this.state.guesses, this.state.inputValue]
        });
        this.handleNumberCheck();
        event.target.reset();
        this.setState({count: this.state.count + 1});
    }


    handleNumberCheck(){
        let inputNum = this.state.inputValue;
        if (inputNum === RANDOM_NUMBER) {
            this.setState({feedback: "You got it!"})
        } else if (inputNum <= RANDOM_NUMBER + 5 &&  inputNum >= RANDOM_NUMBER -5  ) {
            this.setState({feedback: "Very Hot!"})
        } else if (inputNum <= RANDOM_NUMBER + 10 && inputNum >= RANDOM_NUMBER -10 ) {
            this.setState({feedback: "Warm!"})
        } else {
            this.setState({feedback: "Cold!"})
        }
   }



    render() {
        
        return (
            console.log(this.state.guesses),
            console.log(this.state.inputValue),
            console.log(this.state.count),
        <div>
            <Header />
            <GuessSection feedback={this.state.feedback}
                onSubmit={(e) => this.handleSubmit(e)} 
                onChange={(value) =>this.setState({inputValue:value})} />
            <GuessCount count={this.state.count} />
            <GuessList  guesses={this.state.guesses} />
        </div>
        );
     }
}

