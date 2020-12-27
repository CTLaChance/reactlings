import React, {Component, Fragment} from 'react'

// Components //
import Header from './Header/Header';
import ProjectGrid from './ProjectGrid/ProjectGrid';
import ProjectDetails from './ProjectDetails/ProjectDetails';

// Projects //
import HelloWorld from '../projects/00_HelloWorld/HelloWorld';
import SlidingPuzzle from '../projects/01_SlidingPuzzle/SlidingPuzzle';

const Projects: any = {
    "HelloWorld": {
        ProjectComponent: <HelloWorld />,
        CodeEmbedLinks: ["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/projects/00_HelloWorld/HelloWorld.tsx"]
    },

    "Sliding Puzzle": {
        ProjectComponent: <SlidingPuzzle />,
        CodeEmbedLinks: []
    }
};

interface IState {
    Project?: string
}

export default class Reactlings extends Component<{}, IState> {
    state: IState = { Project: "Sliding Puzzle"}

    render() {
        return (
            <Fragment>
                <Header />
                {
                    (this.state?.Project == null) ?
                    <ProjectGrid    Projects = {Object.keys(Projects)}
                                    GridItemClickCallback = {(project: string) => {this.setState({
                                        Project: project
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
