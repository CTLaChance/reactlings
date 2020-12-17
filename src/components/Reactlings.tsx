import React, {Component, Fragment} from 'react'

// Components //
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import ProjectDetails from './ProjectDetails';

import projects from '../projects/projects.json'

interface IState {
    ViewedProject?: string;
}

interface Projects {
    HelloWorld: Array<string>;
    TodoList: Array<string>;
    Calculator: Array<string>;
}

export default class Reactlings extends Component<IState> {
    state: IState = {
        ViewedProject: "TodoList"
    }

    render() {
        return (
            <Fragment>
                <Header />
                {
                    this.state?.ViewedProject == null ?
                    <ProjectGrid /> :
                    <ProjectDetails ProjectName={this.state.ViewedProject} CodeEmbedLinks={projects[this.state.ViewedProject as keyof Projects]}/>
                }
            </Fragment>
        )
    }
}
