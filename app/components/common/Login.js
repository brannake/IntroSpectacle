import React, { Component } from "react";
import { render } from 'react-dom';
import API from "../../utils/API";
import {Modal, Button, Navbar, NavItem, Slider, Slide, Footer, Row, Input, Icon, image} from 'react-materialize';

class Login extends Component {
  state = {

  };

  render() {
    return (
    <div>
        
        <Navbar brand='introspectiv' icon='photo_camera' left> 
            <NavItem href=''>Home</NavItem>
            <NavItem href=''>Analytics</NavItem>
            <NavItem href=''>Login</NavItem>
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
                title="View statistics"
                placement="right">
                on your activity over time
            </Slide>
            </Slider>
            <Footer copyrights="Copyright &copy; 2017 introspectiv"
                className='example'
            >
                    <h5 className="white-text">Get Started and Sign Up!</h5>
                <div class="wrapper">
                    <Button 
                    id="signup-btn"
                    waves='light'    
                    onClick={() => {
                $('#signup').modal('open')
                }}>Sign up  <Icon right> create </Icon>    
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
                        onChange={this.handleInputChange}              
                        validate><Icon>account_circle</Icon></Input>
                        <Input
                        name="Password"
                        s={6} 
                        label="Password"
                        onChange={this.handleInputChange}
                        value={this.state.passwordInput}                
                        validate type='tel'><Icon>lock</Icon></Input>
                    </form>
                        <div className="modal-footer">
                        <Button
                            className="btn waves-effect waves-light modal-action"
                            onClick={this.signupUser}
                        > 
                        Submit
                        </Button>
                        </div>            
                </Modal>
            </Footer>;
    </div>
    );
  }
}

export default Login;