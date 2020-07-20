import React, {Component} from "react";
import $ from "jquery";

class Trivia extends Component{
    constructor(props) {
        super(props);
        this.toggleAnswer = this.toggleAnswer.bind(this);
      }

    toggleAnswer(event){
        event.preventDefault();
        console.log(event.target.id);
        if(event.target.innerText == "Show Answer"){
          $(event.target).text("Hide Answer");
          $(event.target).css("background-color","black");
          $(`#${event.target.id}`).show();
        }
           
        else{
          $(event.target).text("Show Answer");
          $(event.target).css("background-color","green");
          $(`#${event.target.id}`).hide();
        }
    
      }
    
    render(){

        return(
            <div className="trivia-container">
                <table className="table table-hover">
                <thead>
                    <th><h2>Trivia</h2></th>
                    <th><h2>Points</h2></th>
                    <th><h2>Actions</h2></th>
   
                </thead>
                {this.props.trivia.map((trivia, index) => (
                    <tr>
                    <td style={{textAlign:"left"}} key={trivia.id}>
                    <div className="question">
                   Q: {trivia.question}
                    </div>
                    <div id={index} className="answer">
                    A: {trivia.answer}
                    </div> 
                    </td>
                    <td>
                       <h4>100</h4> 
                    </td>
                    <td>
                        <button id={index} key={index} className="btn btn-success" onClick={this.toggleAnswer}>Show Answer</button>
                    </td>
                    </tr>

                ))}
                 </table>
            </div>
        )

    }
}

export default Trivia;