import React, {Component} from 'react';
import Trivia from "./components/Trivia"

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      url:"",
      key:"",
      query:"",
      error: null,
      isLoaded: false,
      trivia: [],
      score:0,
      count:1
    }
    this.generateRandom = this.generateRandom.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add(event){
    event.preventDefault();
    this.setState({score: this.state.score +100});
  }

 subtract(event){
    event.preventDefault();
    this.setState({score: this.state.score -100});
  }

  reset(event){
    event.preventDefault();
    this.setState({score: 0});
  }

  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  
  generateRandom (event) {
    event.preventDefault();
    console.log("inside generate");
    this.setState({
      url:"https://jservice.io/api/random" + "?count=" + this.state.count
    }, () =>{
      fetch(this.state.url).then(response =>{
        return response.json()
      }).then(json => this.setState({trivia: json}),
        err => console.log(err))
    })

  } 

  render(){
    return(   
        <div className="trivia-container">
          <h1>Welcome to Jeopardy!</h1>
          <h2>
            <div className="score">Score  <span>{this.state.score}</span></div>
            <button className="btn btn-primary" onClick={this.add}>Add</button>
            <button className="btn btn-danger" onClick={this.subtract}>Subtract</button>
            <button className="btn btn-dark" onClick={this.reset}>Reset</button>
          </h2>
          <form className="submit-form" onSubmit={this.generateRandom}>
            <label>Enter the number of trivia questions and click Generate.
              </label><br/>
              <input id="count" className="input-random" type="number"  onChange={this.handleChange}/><br/>
          <input
            type='submit'
            className="btn btn-dark random"
            value='Generate'
          />
          </form>
          <Trivia trivia={this.state.trivia}/>
        </div>
         )
  }
}
export default App;
