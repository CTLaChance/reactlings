import React, { Component, Fragment} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './ProjectDetails.scss';

interface IProps {
    ProjectComponent: React.ReactChild;
    CodeEmbedLinks: Array<string>;
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
                <div>{this.props.ProjectComponent}</div>
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
