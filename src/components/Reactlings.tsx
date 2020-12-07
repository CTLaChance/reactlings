import React, {Fragment} from 'react'

// Components //
import Header from './Header';
import ProjectGrid from './ProjectGrid';
import ProjectDetails from './ProjectDetails';


interface IProps {

}

interface ReactlingsState {
    ViewedProjectIndex?: number;
}

export default class Reactlings extends React.Component<IProps, ReactlingsState> {
    state: ReactlingsState = {
        // ViewedProjectIndex: 1
    }

    render() {
        return (
            <Fragment>
                <Header />
                {this.state?.ViewedProjectIndex == null ? <ProjectGrid /> : <ProjectDetails />}
            </Fragment>
        )
    }
}
