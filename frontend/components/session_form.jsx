import React from 'react';
import {Link, withRouter} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            erorrMessage: ""
          };
    }

    handleSubmit (event) {
        event.preventDefault();

        if (this.props.formType === "signup" && (this.state.password !== this.state.confirmPassword)) {
            this.setState({errorMessage: "Passwords don't match."})
        } else {
            const user = {
                username: this.state.username,
                password: this.state.password
            }
            this.props.processForm(user);
        }

        // const user = Object.assign({}, this.state);
        
    }

    navLink () {
        if (this.props.formType === 'login') {
            return <Link class={'nav-link session-link-hover'} to="/signup">sign up instead</Link>;
          } else {
            return <Link class={'nav-link session-link-hover'} to="/login">log in instead</Link>;
          }
    }

    update (field) {
       return (event) => {
           this.setState({
                [field]: event.currentTarget.value
            })
       } 
    }

    renderErrors() {
        if (this.props.errors.length > 0) {

            return (
                <ul>
                    {this.props.errors.map((error, i) => (
                    <li class='error-message' key={`error-${i}`}>
                        {error}
                    </li>
                    ))} 
                    <br />
                </ul>
               
            );
        }   
    }

    render () {
        return (
            <div class="session-form-container session-form-background">
                <div class="session-form">
                    <h1> {this.props.formType} or {this.navLink()}</h1>

                    {this.renderErrors()}

                    <li class='error-message'>{this.state.errorMessage}</li>

                    <form onSubmit={ this.handleSubmit.bind(this) }>
                        <label>Username</label>
                        <input type='text' value={this.state.username} onChange={this.update('username')} />

                            <br /><br />

                        <label>Password</label>
                        <input type='password' value={this.state.password} onChange={this.update('password')}/>

                            <br /><br />

                            {this.props.formType === "signup" ?

                            <>
                                <label>Confirm Password</label>
                                <input type='password' value={this.state.confirmPassword} onChange={this.update('confirmPassword')}/>
                                <br /><br />
                            </>
                            :
                        
                            ""}

                        <input class='session-submit-button' type="submit" value="Submit" />
                    </form>

                </div>
            </div> 
        )
        
    }

}

export default withRouter(SessionForm);