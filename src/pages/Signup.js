import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class SignUp extends Component {
  
  state = {
    error: null,
    email: '',
    password: '',
  };

  // handles changes to email and password inputs
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // async handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({ error: '' });
  //   try {
  //     await signup(this.state.email, this.state.password);
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   }
  // }

//   async googleSignIn() {
//     try {
//       await signInWithGoogle();
//     } catch (error) {
//       this.setState({ error: error.message });
//     }
//   }
// 
//   async githubSignIn() {
//     try {
//       await signInWithGitHub();
//     } catch (error) {
//       console.log(error)
//       this.setState({ error: error.message });
//     }
//   }

  render() {
    return (
  
      <div className="container">
        <Header />

        <div id="signup-content">
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <p className="lead">Fill in the form below to create an account.</p>
            <div className="form-group">
              <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
            </div>
            <div className="form-group">
              {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
              <button className="btn btn-primary px-5" type="submit">Sign up</button>
            </div>
            <p>You can also sign up with any of these services</p>
            <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
              Sign up with Google
            </button>
            <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
              Sign up with GitHub
            </button>
            <hr></hr>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    )
  }
}