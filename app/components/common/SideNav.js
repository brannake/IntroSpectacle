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
                <CollectionItem href='#' active>Images</CollectionItem>
                <CollectionItem href='#'>Self-Rated Moods</CollectionItem>
                <CollectionItem href='#'>ALVIN</CollectionItem>
                <CollectionItem href='#'>ALVIN</CollectionItem>
                <CollectionItem href='#'>Alvin</CollectionItem>
            </Collection>
        </div>
    )};
}

export default SideNav;
