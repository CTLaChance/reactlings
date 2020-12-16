import React, { Component, Fragment} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable }from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './ProjectDetails.scss';

interface IProps {
    ProjectName: string;
    CodeEmbedLinks: Array<string>;
}

export default class ProjectDetails extends Component<IProps> {

    render() {
        return (
            <Fragment>
                <div>Viewing Project : {this.props.ProjectName}</div>
                <div id="source-code">
                    <SyntaxHighlighter language="typescript" showLineNumbers={true} style={atomOneDarkReasonable}>
                        {'(num) => num + 1'}
                    </SyntaxHighlighter>
                </div>
            </Fragment>
        )
    }
}
