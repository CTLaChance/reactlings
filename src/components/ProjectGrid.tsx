import React, { Component, Fragment } from 'react';
import projects from '../projects/projects.json';
import './ProjectGrid.scss';

export default class ProjectGrid extends Component {
    render() {
        return (
            <Fragment>
                <div id="project-grid">
                    {projects.map((project, index) => {
                        return (<div>{project[0]}</div>)
                    })}
                </div>
            </Fragment>
        )
    }
}
