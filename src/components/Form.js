import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: ''};
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h2>Zdravo {this.state.username}! Dobro nam došao/la na stranicu Simi's shop! </h2>
      <br></br>
      <h2>Ovde možeš kupiti stvari vezane za ljubav i sreću, i usput donirati </h2>
      <h2>one kojima je to najpotrebnije.</h2>
      <br></br>
      <p>Unesi svoje ime :) </p>
      <input type='text' onChange={this.myChangeHandler}/>
      </form>
    );
  }
}

export default Form;
