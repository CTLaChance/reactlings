import React, { Component, Fragment} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './ProjectDetails.scss';

interface IProps {
    ProjectName: string;
    CodeEmbedLinks: Array<string>;
}

interface IState {
    SourceCodeArray: Array<string>;
}

export default class ProjectDetails extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            SourceCodeArray: ["let x = 12;"]
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
                <div>Viewing Project : {this.props.ProjectName}</div>
                <div id="source-code">
                    {this.state.SourceCodeArray.map((value, index) => {
                        return (
                            <SyntaxHighlighter language="typescript" showLineNumbers={true} style={atomOneDarkReasonable}>
                                {this.state.SourceCodeArray[index]}
                            </SyntaxHighlighter>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}
