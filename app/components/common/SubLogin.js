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
    $('#materialize-modal-overlay-1').text("Loading...");
    setTimeout(function(){$('#materialize-modal-overlay-1').remove()}, 1000);
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
        // Handle failed login here
        $('#error-display').text("This user/password combination already exists");
    });
    }

    componentDidMount = () => {
        $(".modal-close").click(function(){
            $("#input_0").val('');
            $("#input_1").val('');
            $("#input_4").val('');
            $("#input_5").val('');
        })
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
                src="https://static.pexels.com/photos/7764/pexels-photo.jpg"
                title="Create a digital memory">
                by capturing the highlight of your day
            </Slide>
            <Slide
                src="https://static.pexels.com/photos/196655/pexels-photo-196655.jpeg"
                title="Reflect on your life"
                placement="left">
                one snapshot at a time
            </Slide>
            <Slide
                src="https://static.pexels.com/photos/106344/pexels-photo-106344.jpeg"
                title="Gain insight"
                placement="right">
                into your personal well-being with our analytics
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
                    <div id="error-display"></div>
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