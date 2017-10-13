import React, { Component } from "react";
import ReactDOM, { render } from 'react-dom';
import {Modal, Button, Navbar, NavItem, Slider, Slide, Footer, Row, Input, Icon, image} from 'react-materialize';
import {Link} from "react-router";

class Login extends Component {
  state = {
      username:'',
      password:'',
      authenticated: false
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

  loginUser = () => {

    $.ajax({
        url: 'api/login',
        type: 'POST',
        data: this.state,
        success: (data) => {
          console.log(data);
          this.setState({imageData:data});
          this.calculateMonthlyMoodAverage(data);
          this.setState({loaded: true});
        }
      });
    }

    signUpUser = () => {
        
            $.ajax({
                url: 'api/signup',
                type: 'POST',
                data: this.state,
                success: (data) => {
                  console.log(data);
                  if (data === "Authenticated") {
                    this.setState({authenticated:true});
                  }
                }
              });
            }


  render() {
    return (
    <div>
        <Navbar brand='introspectiv' left>
            <NavItem>
                <Link to="/heatmaps">TRENDS</Link>
            </NavItem>
            <NavItem>
                <Link to="/calendar">MY CALENDAR</Link>
            </NavItem>
            <div className="wrapper">
                    <Button 
                    id="login-btn"
                    waves='light'    
                    onClick={() => {
                $('#login').modal('open')
                }}>Login      
                </Button>
                </div>
                <Modal className= "page-footer example"
                    id='login'
                    header='Login'>
                    <form>
                        <Input 
                        name="user"
                        s={6} label="User Name"
                        value={this.state.newUserInput}
                        onChange={this.handleUsernameInputChange}              
                        validate><Icon>account_circle</Icon></Input>
                        <Input
                        name="Password"
                        s={6} 
                        label="Password"
                        onChange={this.handlePasswordInputChange}
                        value={this.state.passwordInput}                
                        validate type='tel'><Icon>lock</Icon></Input>
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
                one snap shot at a time
            </Slide>
            <Slide
                src="https://static.pexels.com/photos/106344/pexels-photo-106344.jpeg"
                title="Gain quantitative insight"
                placement="right">
                on your mood over time
            </Slide>
            </Slider>
            <Footer copyrights="Copyright &copy; 2017 introspectiv"
                className='example'
            >
                    <h5 className="white-text">Get started with your photo journal!</h5>
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
                    <form>
                        <Input 
                        name="user"
                        s={6} label="User Name"
                        value={this.state.newUserInput}
                        onChange={this.handleUsernameInputChange}              
                        validate><Icon>account_circle</Icon></Input>
                        <Input
                        name="Password"
                        s={6} 
                        label="Password"
                        onChange={this.handlePasswordInputChange}
                        value={this.state.passwordInput}               
                        validate type='tel'><Icon>lock</Icon></Input>
                    </form>
                        <div className="modal-footer">
                        <Button
                            id="submit-button"
                            className="btn waves-effect waves-light modal-action"
                            onClick={this.signUpUser}> 
                        Submit
                        </Button>
                        </div>            
                </Modal>
            </Footer>
    </div>
    );
  }
}

export default Login;