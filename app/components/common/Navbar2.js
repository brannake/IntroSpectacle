import React from "react";
import {Modal, Button, Navbar, NavItem, Footer, Row, Input, Icon, Image} from 'react-materialize';
import { Link } from "react-router";
import LoginForm from "./LoginForm";

const Navbar2 = () => (
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
                    <LoginForm />                                                  
                </Modal>
        </Navbar>
  
   );

export default Navbar2;