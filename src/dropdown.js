import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

export default ({classes, ...props}) => {
 
    return (
        <Dropdown>
            <Dropdown.Toggle className={classes.toggle}>{props.text}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>hi</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

}

