import React, { Component, Fragment} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './ProjectDetails.scss';

interface IProps {
    ProjectComponent: React.ReactChild;
    CodeEmbedLinks: Array<string>;
    ReturnArrowCallback: () => void;
}

interface IState {
    SourceCodeArray: Array<string>;
}

export default class ProjectDetails extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        
        this.state = {
            SourceCodeArray: []
        }
    }

    componentDidMount() {
        this.props.CodeEmbedLinks.forEach((url: string) => {
            fetch(url).then(async (response: Response) => {
                if(response.ok) {
                    let NewSourceCodeArray: Array<string> = this.state.SourceCodeArray;

                    NewSourceCodeArray.push(await response.text());

                    this.setState({
                        SourceCodeArray: NewSourceCodeArray
                    });
                }
            });
        });
    }

    render() {
        return (
            <Fragment>
                <div id="return-arrow" onClick={this.props.ReturnArrowCallback}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
                </div>
                <div id="project">{this.props.ProjectComponent}</div>
                <div id="source-code">
                    {this.state.SourceCodeArray.map((code) => {
                        return (
                            <SyntaxHighlighter language="typescript" showLineNumbers={true} style={atomOneDarkReasonable}>
                                {code}
                            </SyntaxHighlighter>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}
