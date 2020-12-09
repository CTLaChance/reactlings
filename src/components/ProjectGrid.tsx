import React, { Component, Fragment } from 'react'
import projects from '../projects/projects.json'

export default class ProjectGrid extends Component {
    render() {
        return (
            <Fragment>
                <div className="ProjectGrid">
                    {projects.map((project, index) => {
                        return (<div>{project[0]}</div>)
                    })}
                </div>
            </Fragment>
        )
    }
}
