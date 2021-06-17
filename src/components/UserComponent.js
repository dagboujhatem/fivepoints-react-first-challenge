import React, { Component } from 'react';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: ''
    };
  }

  changeFirstName = (event) => {
    this.setState({
      firstname: event.target.value
    });
  }

  changeLastName = (event) => {
    this.setState({ lastname: event.target.value });
  }

  clearAllState = (event) => {
    this.setState({
      firstname: '',
      lastname: ''
    });
  }

  showAllState = (event) =>{
    // show the current state
    console.log(this.state)
    // Preventing Form Submission
    event.preventDefault(); 
  }

  render() {
    return (
     <div className="row">
        <h1 className="text-primary text-center my-5">  Hello {this.state.firstname} {this.state.lastname}</h1>
        <form className="offset-3 col-6" onSubmit={this.showAllState}>
        <div className="form-group">
          <label htmlFor="fist">First name :</label>
          <input type="string" id="firstname" className="form-control" name="firstname" placeholder="Type your first name here ..."
           onChange={this.changeFirstName} value={this.state.firstname}/>
        </div>
        <div className="form-group">
          <label htmlFor="last">Last name :</label>
          <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Type your last name here ..."
           onChange={this.changeLastName} value={this.state.lastname}/>
        </div>
        <button type="submit" className="btn btn-primary btn-block my-2">Create new user</button>
        <button type="button" className="btn btn-primary btn-block my-2" onClick={this.clearAllState}>Clear this user</button>
      </form>
     </div>
    );
  }


}

export default UserComponent;