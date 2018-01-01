import React, { Component } from "react";
import ReactDOM, { render } from 'react-dom';
import {Modal, Button, Navbar, NavItem, Slider, Slide, Footer, Row, Input, Icon, image} from 'react-materialize';

class SubLogin extends Component {
    state = {
        username: '',
        password: ''
      };

  handleUsernameInputChange = (event) => {
    this.setState({
        username: event.currentTarget.value
    });
  }

  handlePasswordInputChange = (event) => {
    this.setState({
        password: event.currentTarget.value
    });
  }

  successfulLogin= (data) => {
    this.props.onLoginClick(data.username);
    this.props.confirmAuthentication();
    $('.modal-overlay').text("Loading...");
    $('#materialize-modal-overlay-2').text("Loading...");
    setTimeout(function(){$('.modal-overlay').remove()}, 1000);
    setTimeout(function(){$('#sidenav-overlay').remove()}, 1000);
    setTimeout(function(){$('#sidenav-overlay-1').remove()}, 1000);
  }

  //Logs the user in and pulls the authentication state back up to the parent component (MainLogin)
  loginUser = () => {

    $.ajax({
        url: 'api/login',
        type: 'POST',
        data: this.state,
        success: (data) => {
            this.successfulLogin(data);
        }
    }).fail(function (jqXHR, textStatus, error) {
        // Handle failed login here
        $('#error-display').text("We couldn't find that user/password combination. Try again.");
    });
    }   

    //Logs the user in and pulls the authentication state back up to the parent component (MainLogin)
  signUpUser = () => {
    
    $.ajax({
        url: 'api/signup',
        type: 'POST',
        data: this.state,
        success: (data) => {
            this.successfulLogin(data);
        }
    }).fail(function (jqXHR, textStatus, error) {
        console.log("why wont this run");
        // Handle failed login here
        $('#error-display-1').text("This user/password combination already exists");
    });
    }

    componentDidMount = () => {
        $(".modal-close").click(() =>{
            this.setState({username: '', password: ''});
        });
        $('#login').modal({dismissible: false});
        $('#signup').modal({dismissible: false});
    }

  render() {
    return (
    <div>
        <Navbar brand='introspectiv' left>
            <div className="wrapper">
                <Button 
                    id="login-btn"
                    waves='light'    
                    onClick={() => {$('#login').modal('open')}}
                >
                    Login
                </Button>
            </div>
                <Modal className= "page-footer example"
                    ref={ref => { this.modalRef = ref }}
                    id='login'
                    header='Login'>
                    <div id="error-display"></div>
                    <form>
                        <Input 
                            name="user"
                            s={6} label="User Name"
                            value={this.state.username}
                            onChange={this.handleUsernameInputChange}              
                            validate>
                            <Icon>account_circle</Icon>
                        </Input>
                        <Input
                            name="Password"
                            s={6} 
                            label="Password"
                            onChange={this.handlePasswordInputChange}
                            value={this.state.password}                
                            validate type='password'>
                            <Icon>lock</Icon>
                        </Input>
                    </form>
                        <div className="modal-footer">
                        <Button 
                            id="submit-button"
                            className="btn waves-effect waves-light modal-action"
                            onClick={this.loginUser}
                        > 
                            Submit
                        </Button>
                        </div>            
                </Modal>
        </Navbar>
        <Slider>
            <Slide
                src="savedimages/main2.jpg"
                title="Discover Yourself">
            </Slide>
            <Slide
                src="savedimages/second.jpeg"
                title="Capture the Important Moments"
                placement="left">
            </Slide>
            <Slide
                src="savedimages/third.jpeg"
                title="And Learn From Each Day"
                placement="right">
            </Slide>
            </Slider>
            <Footer copyrights="Copyright &copy; 2017 introspectiv"
                className='example'
            >
                    <h5 className="white-text">Get started with your introSpectiv journal!</h5>
                <div className="wrapper">
                    <Button 
                    id="signup-btn"
                    waves='light'    
                    onClick={() => {
                $('#signup').modal('open')
                }}>Sign up   
                </Button>
                </div>
                <Modal className= "page-footer example"
                    id='signup'
                    header='Sign up'>
                    <div id="error-display-1"></div>
                    <form>
                        <Input 
                            name="user"
                            s={6} label="User Name"
                            value={this.state.username}
                            onChange={this.handleUsernameInputChange}              
                            validate><Icon>account_circle</Icon>
                        </Input>
                        <Input
                            name="Password"
                            s={6} 
                            label="Password"
                            onChange={this.handlePasswordInputChange}
                            value={this.state.password}               
                            validate type='password'>
                            <Icon>lock</Icon>
                        </Input>
                    </form>
                        <div className="modal-footer">
                            <Button
                                id="submit-button"
                                className="btn waves-effect waves-light modal-action"
                                onClick={this.signUpUser}
                            > 
                                Submit
                            </Button>
                        </div>            
                </Modal>
            </Footer>
    </div>
    )}
};

export default SubLogin;