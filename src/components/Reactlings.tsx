import React, {Component, Fragment} from 'react'

// Components //
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import ProjectDetails from './ProjectDetails';

interface IState {
    ViewedProjectIndex?: number;
}

export default class Reactlings extends Component<IState> {
    state: IState = {
        ViewedProjectIndex: 1
    }

    render() {
        return (
            <Fragment>
                <Header />
                {
                    this.state?.ViewedProjectIndex == null ?
                    <ProjectGrid /> :
                    <ProjectDetails ProjectName="null" CodeEmbedLinks={["https://raw.githubusercontent.com/CTLaChance/reactlings/main/src/index.tsx"]}/>
                }
            </Fragment>
        )
    }
}
