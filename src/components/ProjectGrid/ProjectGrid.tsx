import React, { Component, Fragment } from 'react';
import './ProjectGrid.scss';

interface IProps {
    Projects: Array<string>;
    GridItemClickCallback: (value: string) => void;
}

export default class ProjectGrid extends Component<IProps> {
    render() {
        return (
            <Fragment>
                <div id="project-grid">
                    {Object.values(this.props.Projects).map((project, index) => {
                        return (<div key={index} onClick={() => this.props.GridItemClickCallback(project)}>{project}</div>);
                    })}
                </div>
            </Fragment>
        )
    }
}
