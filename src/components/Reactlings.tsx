import React, {Component, Fragment} from 'react'

// Components //
import Header from './Header/Header';
import ProjectGrid from './ProjectGrid/ProjectGrid';
import ProjectDetails from './ProjectDetails/ProjectDetails';

// Projects //
import HelloWorld from '../projects/00_HelloWorld/HelloWorld';
import TodoList from '../projects/01_TodoList/TodoList';
import Calculator from '../projects/02_Calculator/Calculator';

const Projects: any = {
    "HelloWorld": {
        ProjectComponent: <HelloWorld />,
        CodeEmbedLinks: ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/00_HelloWorld/HelloWorld.tsx"]
    },

    "TodoList": {
        ProjectComponent: <TodoList />,
        CodeEmbedLinks: ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/01_TodoList/TodoList.tsx",
                         "https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/01_TodoList/TodoList2.tsx"]
    },

    "Calculator": {
        ProjectComponent: <Calculator />,
        CodeEmbedLinks: ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/02_Calculator/Calculator.tsx"]
    },

    "15 Sliding Puzzle": {
        ProjectComponent: <Calculator />,
        CodeEmbedLinks: []
    }
};

interface IState {
    Project?: string
}

export default class Reactlings extends Component<{}, IState> {
    // state: IState = { Project: "HelloWorld"}

    render() {
        return (
            <Fragment>
                <Header />
                {
                    (this.state?.Project == null) ?
                    <ProjectGrid    Projects = {Object.keys(Projects)}
                                    GridItemClickCallback = {(value) => {this.setState({
                                        Project: value
                                    })}}
                    /> :
                    <ProjectDetails ProjectComponent = {Projects[this.state.Project].ProjectComponent}
                                    CodeEmbedLinks = {Projects[this.state.Project].CodeEmbedLinks}
                                    ReturnArrowCallback = {() => {this.setState({
                                        Project: undefined
                                    })}}
                    />
                }
            </Fragment>
        )
    }
}
