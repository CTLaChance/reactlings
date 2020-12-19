import React, {Component, Fragment} from 'react'

// Components //
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import ProjectDetails from './ProjectDetails';

// Projects //
import HelloWorld from '../projects/00_HelloWorld/HelloWorld';
import TodoList from '../projects/01_TodoList/TodoList';
import Calculator from '../projects/02_Calculator/Calculator';

enum Projects {
    HelloWorld,
    TodoList,
    Calculator
}

interface IState {
    Project?: Projects;
}

export default class Reactlings extends Component {
    constructor(props: any) {
        super(props);
        this.handleGridClick = this.handleGridClick.bind(this);
    }

    state: IState = {
        // Project: Projects.HelloWorld
    }

    getProjectEmbedLinks(project: Projects) {
        switch(project) {
            case Projects.HelloWorld: 
                return ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/00_HelloWorld/HelloWorld.tsx"]
            case Projects.TodoList:
                return ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/01_TodoList/TodoList.tsx",
                        "https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/01_TodoList/TodoList2.tsx"]
            case Projects.Calculator: 
                return ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/02_Calculator/Calculator.tsx"]
        }
    }

    getProjectComponent(project: Projects) {
        switch(project) {
            case Projects.HelloWorld: 
                return <HelloWorld />
            case Projects.TodoList:
                return <TodoList />
            case Projects.Calculator: 
                return <Calculator />
        }
    }

    handleGridClick(value: string) {
        let newProject : Projects | undefined;

        switch(value) {
            case "HelloWorld":
                newProject = Projects.HelloWorld;
                break;
            case "TodoList":
                newProject = Projects.TodoList;
                break;
            case "Calculator":
                newProject = Projects.Calculator;
                break;
        }

        this.setState({
            Project: newProject
        });

        console.log(`Value: ${value}`);
    }

    render() {
        return (
            <Fragment>
                <Header />
                {
                    this.state?.Project == null ?
                    <ProjectGrid    Projects = {Object.keys(Projects).filter(key => isNaN(key as any))}
                                    OnClickCallback = {this.handleGridClick}
                    /> :
                    <ProjectDetails ProjectComponent = {this.getProjectComponent(this.state.Project)}
                                    CodeEmbedLinks = {this.getProjectEmbedLinks(this.state.Project)}
                    />
                }
            </Fragment>
        )
    }
}
