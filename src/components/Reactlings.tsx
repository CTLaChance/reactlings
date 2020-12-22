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
    ProjectComponent?: React.ReactChild;
    CodeEmbedLinks?: Array<string>;
}

export default class Reactlings extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.ChangeDisplayedProject = this.ChangeDisplayedProject.bind(this);
        this.ResetDisplayedProject = this.ResetDisplayedProject.bind(this);
    }

    ChangeDisplayedProject(value: string) {
        let newProjectComponent : React.ReactChild | undefined;
        let newCodeEmbedLinks : Array<string> | undefined;

        switch(value) {
            case "HelloWorld":
                newProjectComponent = <HelloWorld />;
                newCodeEmbedLinks = ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/00_HelloWorld/HelloWorld.tsx"];
                break;
            case "TodoList":
                newProjectComponent = <TodoList />;
                newCodeEmbedLinks = ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/01_TodoList/TodoList.tsx",
                                     "https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/01_TodoList/TodoList2.tsx"];
                break;
            case "Calculator":
                newProjectComponent = <Calculator />;
                newCodeEmbedLinks = ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/02_Calculator/Calculator.tsx"];
                break;
        }

        this.setState({
            ProjectComponent: newProjectComponent,
            CodeEmbedLinks: newCodeEmbedLinks
        });
    }

    ResetDisplayedProject() {
        this.setState({
            ProjectComponent: undefined,
            CodeEmbedLinks: undefined
        })
    }

    render() {
        return (
            <Fragment>
                <Header />
                {
                    (this.state?.ProjectComponent == null || this.state?.CodeEmbedLinks == null) ?
                    <ProjectGrid    Projects = {Object.keys(Projects).filter(key => isNaN(key as any))}
                                    OnClickCallback = {this.ChangeDisplayedProject}
                    /> :
                    <ProjectDetails ProjectComponent = {this.state.ProjectComponent}
                                    CodeEmbedLinks = {this.state.CodeEmbedLinks}
                                    ReturnArrowCallback = {this.ResetDisplayedProject}
                    />
                }
            </Fragment>
        )
    }
}
