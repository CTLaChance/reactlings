import React, {Component, Fragment} from 'react'

// Components //
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import ProjectDetails from './ProjectDetails';

import HelloWorld from '../projects/00_HelloWorld/HelloWorld'

// Projects //
import projects from '../projects/projects.json'
interface IProjects {
    HelloWorld: object;
    TodoList: object;
    Calculator: object;
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
                    <ProjectDetails ProjectComponent = {<HelloWorld />}
                                    CodeEmbedLinks = {projects[this.state.ViewedProject as keyof IProjects].embedLinks}
                    />
                }
            </Fragment>
        )
    }
}
