import React, { Component } from 'react';
import './SliddingPuzzle.scss';

interface IState {
    LightArray: number[][];
}

export default class SlidingPuzzle extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            LightArray: [[1, 2, 3, 4],
                         [5, 6, 7, 8],
                         [9, 10, 11, 12],
                         [13, 14, 15, 0]]
        }
    }

    HandleClick(row: number, column: number) {
        console.log(`Clicked ${row}, ${column}`);
    }

    ShuffleGrid() {
        
    }

    render() {
        return (
            <div id="sliding-puzzle">
                {this.state.LightArray.map((subarray: number[], row: number) => {
                    return subarray.map((number: number, column: number) => {
                        return <div key={`${number}`} onClick={() => this.HandleClick(row, column)}>{number}</div>
                    })
                })}
            </div>
        )
    }
}
