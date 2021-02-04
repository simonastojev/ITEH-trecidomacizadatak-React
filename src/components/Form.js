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
      <h2>Zdravo {this.state.username} dobro nam došao/la na stranicu Simi's shop! Ovde možeš kupiti stvari vezane za ljubav i sreću, i usput donirati one kojima je to najpotrebnije.</h2>
      <p>Unesi svoje ime :) </p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

export default Form;