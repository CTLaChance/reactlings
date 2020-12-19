import React, { Component, Fragment } from 'react';
import './ProjectGrid.scss';

interface IProps {
    Projects: Array<string>;
    OnClickCallback: (value: string) => void;
}

export default class ProjectGrid extends Component<IProps> {
    render() {
        return (
            <Fragment>
                <div id="project-grid">
                    {Object.values(this.props.Projects).map((project) => {
                        return (<div onClick={() => this.props.OnClickCallback(project)}>{project}</div>);
                    })}
                </div>
            </Fragment>
        )
    }
}
