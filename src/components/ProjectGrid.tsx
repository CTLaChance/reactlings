import React, { Component, Fragment } from 'react';
import './ProjectGrid.scss';

interface IProps {
    Projects: Array<string>;
}

export default class ProjectGrid extends Component<IProps> {
    render() {
        return (
            <Fragment>
                <div id="project-grid">
                    {Object.values(this.props.Projects).map((project) => {
                        return (<div>{project}</div>);
                    })}
                </div>
            </Fragment>
        )
    }
}
