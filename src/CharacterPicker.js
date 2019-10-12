import React, {Component} from "react"
import "./CharacterPicker.css"
import Logo from "./Logo.jpg"
//CHARACTERS
import Bowser from "./icons/Bowser.jpg"
import DDD from "./icons/DDD.jpg"
import Game from "./icons/G&W.jpg"
import Ken from "./icons/Ken.jpg"
import Pikachu from "./icons/Pikachu.jpg"
import Ridley from "./icons/Ridley.jpg"
import Greninja from "./icons/Greninja.jpg"
import ROB from "./icons/ROB.jpg"

class CharacterPicker extends Component {

    constructor(props){
    super(props);
    this.state = {num: 0};
    this.randomNumber = this.randomNumber.bind(this);
    }
    
    randomNumber() {
        let rand = Math.floor(Math.random() * 8 + 1);
        this.setState({num: rand})
    }

    updates() {
        alert(
            "10/12/19 ROB has been added"
        )
    }

    render() {
        let msg;
        if (this.state.num === 1) {
            msg = 
            <div>
                <img className="icon" alt="Bowser" src={Bowser} />
                <h3>Bowser</h3>
            </div>
        }

        else if (this.state.num === 2) {
            msg =
            <div>
                <img className="icon" alt="DDD" src={DDD} />
                <h3>DDD</h3>
            </div>
        }

        else if (this.state.num === 3) {
            msg =
            <div>
                <img className="icon" alt="Game" src={Game} />
                <h3>Game and Watch</h3>
            </div>
        }

        else if (this.state.num === 4) {
            msg =
            <div>
                <img className="icon" alt="Ken" src={Ken} />
                <h3>Ken</h3>
            </div>
        }

        else if (this.state.num === 5) {
            msg =
            <div>
                <img className="icon" alt="Pikachu" src={Pikachu} />
                <h3>Pikachu</h3>
            </div>
        }

        else if (this.state.num === 6) {
            msg =
            <div>
                <img className="icon" alt="Ridley" src={Ridley} />
                <h3>Ridley</h3>
            </div>
        }

        else if (this.state.num === 7) {
            msg =
            <div>
                <img className="icon" alt="Greninja" src={Greninja} />
                <h3>Greninja</h3>
            </div>
        }

            else if (this.state.num === 8) {
            msg =
            <div>
                <img className="icon" alt="R.O.B." src={ROB} />
                <h3>R.O.B.</h3>
            </div>
        }
        console.log(this.state.num)

        return (
            <div className="main" >
                <div className="title">
                <h1>Jack's
                    <span> <img className = "logo" src={Logo}/></span> 
                    Roster</h1>
                    </div>

                {msg}
                {this.state.num === 0 && <button onClick={this.randomNumber}>和大男孩們在一起</button>}
                {this.state.num !== 0 && <button onClick={this.randomNumber}>Next Character</button>}
                
                <div className= "question-mark">
                <button className="question-button" onClick={() => this.updates() }> <i className="fas fa-question-circle"></i> </button>
                </div>
                

            </div>
        )
    }
}

export default CharacterPicker
