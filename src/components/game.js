import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            feedback: ["Make your guess!", "You got it!", "Very hot", "Hot", "Warm", "Cool", "Cold"],
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
       event.target.reset();
       this.setState({count: this.state.count + 1});
    }



    render() {
        
        return (
            console.log(this.state.guesses),
            console.log(this.state.inputValue),
            console.log(this.state.count),
        <div>
            <Header />
            <GuessSection feedback="Make your guess!" 
                onSubmit={(e) => this.handleSubmit(e)} 
                onChange={(value) =>this.setState({inputValue:value})} />
            <GuessCount count={this.state.count} />
            <GuessList  guesses={this.state.guesses} />
        </div>
        );
     }
}

