import React, { Component } from "react";
import {SideNav, SideNavItem, Button} from 'react-materialize';


class SideNavMod extends Component {
    state = {
        imageLoaded: false
      };

    render() {
        return (
            <div id="SideNavMod">
                <SideNav
                    trigger={<Button>Settings</Button>}
                    options={{ closeOnClick: true }}
                >
                    <SideNavItem userView
                        user={{
                            background: 'http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/12/Images-2.jpg',
                            image: 'http://cdn.cavemancircus.com//wp-content/uploads/images/2015/june/pretty_girls_3/pretty_girls_20.jpg',
                            name: 'Ray Lewis',
                            email: 'raylewis@baltimoreravens.org'
                        }}
                    />
                    <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                    <SideNavItem href='#!second'>Second Link</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>Subheader</SideNavItem>
                    <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
                </SideNav>
            </div>
        )
    }
}

export default SideNavMod;
