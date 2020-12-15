import React, { Component, Fragment} from 'react'

interface IProps {
    ProjectName: string;
    CodeEmbedLinks: Array<string>;
}

export default class ProjectDetails extends Component<IProps> {
    render() {
        return (
            <Fragment>
                <div>Viewing Project : {this.props.ProjectName}</div>
            </Fragment>
        )
    }
}
