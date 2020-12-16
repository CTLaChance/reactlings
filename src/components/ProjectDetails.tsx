import React, { Component, Fragment} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable }from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './ProjectDetails.scss';

interface IProps {
    ProjectName: string;
    CodeEmbedLinks: Array<string>;
}

export default class ProjectDetails extends Component<IProps> {
    SourceCode: string = "let x = 12;";

    render() {
        return (
            <Fragment>
                <div>Viewing Project : {this.props.ProjectName}</div>
                <div id="source-code">
                    <SyntaxHighlighter language="typescript" showLineNumbers={true} style={atomOneDarkReasonable}>
                        {this.SourceCode}
                    </SyntaxHighlighter>
                </div>
            </Fragment>
        )
    }
}
