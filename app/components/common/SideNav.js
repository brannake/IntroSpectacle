import React, { Component } from "react";
import {Collection, CollectionItem} from 'react-materialize';


class SideNav extends Component {
    state = {
        imageLoaded: false
      };

    render() {
        return (
        <div id="side-nav">
            <Collection>
                <CollectionItem>Images</CollectionItem>
                <CollectionItem>Self-Rated Moods</CollectionItem>
                <CollectionItem>ALVIN</CollectionItem>
                <CollectionItem>ALVIN</CollectionItem>
                <CollectionItem>Alvin</CollectionItem>
            </Collection>
        </div>
    )};
}

export default SideNav;
