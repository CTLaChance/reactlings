import React, {Component, Fragment} from 'react'

// Components //
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import ProjectDetails from './ProjectDetails';

// Projects //
import projects from '../projects/projects.json'
interface IProjects {
    HelloWorld: Array<string>;
    TodoList: Array<string>;
    Calculator: Array<string>;
}

interface IState {
    ViewedProject?: string;
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
                    <ProjectDetails ProjectName={this.state.ViewedProject} CodeEmbedLinks={projects[this.state.ViewedProject as keyof IProjects]}/>
                }
            </Fragment>
        )
    }
}
