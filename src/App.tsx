import React, { Fragment } from 'react';
import logo from './assets/logo.svg';
import './App.scss';

import HelloWorld from './projects/00_HelloWorld/HelloWorld';

import { CodeBlock, atomOneDark as CodeBlockTheme } from "react-code-blocks";

function App() {
    return (
        <Fragment>
            <div className="header">
                <img src={logo} className="logo" alt="React Logo" />
                <h1>Reactlings</h1>
            </div>

            {/* <div className="projects-grid">

            </div> */}


            <div className="project">
                <CodeBlock
                    text={HelloWorld}
                    language="tsx"
                    showLineNumbers="true"
                    theme={CodeBlockTheme}
                />
                <HelloWorld />
            </div>
        </Fragment>
    );
}

export default App;
