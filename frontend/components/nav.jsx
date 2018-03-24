import React from 'react';


import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';


  class Nav extends React.Component {

    constructor(props){
        super(props);
    }

    logout () {
        this.props.logout();
        this.props.history.push('/');
    }

    render () {

        if (this.props.currentUser) {
            return (
                <div class="nav-bar-container">
                    <nav class="nav-bar">
                            <ul class="nav-bar-list left">
                                <li> <Link class={'nav-link'} to="/home">Home</Link> </li>
                            </ul>
                        
                        <ul class="nav-bar-list right">
                            <li>
                                <button class={'nav-link'} onClick={this.logout.bind(this)}>Logout</button>
                            </li>
                        </ul>

                    </nav>
                    <div class="clearfix"></div>
                </div>
                
            )
        } else {
            return (
               
                <div class="nav-bar-flex">
                    <div class="nav-bar-container">
                        <nav class="nav-bar">

                            <ul class="nav-bar-list left">
                                <li> <Link class={'nav-link'} to="/home">Home</Link> </li>
                            </ul>

                             <ul class="nav-bar-list right">
                                <li>
                                    <Link class={'nav-link'} to="/login">LogIn</Link>
                                </li>
                                <li>
                                    <Link class={'nav-link'} to="/signup">SignUp</Link>
                                </li>
                            </ul>
                           
                
                        </nav>
                    </div>
                </div>
                   
               
            )
        }

        //end of render method
    }


  }



  export default withRouter(Nav);