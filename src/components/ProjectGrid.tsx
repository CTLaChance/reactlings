import React, { Component, Fragment } from 'react';
import projects from '../projects/projects.json';
import './ProjectGrid.scss';

export default class ProjectGrid extends Component {
    render() {
        return (
            <Fragment>
                <div id="project-grid">
                    {Object.keys(projects).map((project) => {
                        return (<div>{project}</div>);
                    })}
                </div>
            </Fragment>
        )
    }
}
