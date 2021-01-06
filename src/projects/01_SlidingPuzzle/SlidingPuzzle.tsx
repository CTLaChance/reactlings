import React, { Component } from 'react';
import './SliddingPuzzle.scss';

interface IState {
    PuzzleArray: number[][];
}

export default class SlidingPuzzle extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        // -1 is the empty cell.
        this.state = {
            PuzzleArray: [[1, 2, 3, 4],
                         [5, 6, 7, 8],
                         [9, 10, 11, 12],
                         [13, 14, 15, -1]]
        }

        this.ShuffleGrid();
    }

    HandleClick(row: number, column: number) {
        console.log(`Clicked ${row}, ${column}`);

        let NewPuzzleArray: number[][] = this.state.PuzzleArray;

        let EmptyCellLocation: number[] = (() => {
            let EmptyCellRow = 0;
            let EmptyCellColumn = 0;

            NewPuzzleArray.forEach((subarray: number[], row: number) => {
                subarray.forEach((value: number, column: number) => {
                    if (value === -1) {
                        EmptyCellRow = row;
                        EmptyCellColumn = column;
                    };
                });
            });

            console.log(`Empty Cell Location: ${EmptyCellRow} - ${EmptyCellColumn}`);
            return [EmptyCellRow, EmptyCellColumn];
        })();


        if(row === EmptyCellLocation[0] || column === EmptyCellLocation[1]) {
            if((EmptyCellLocation[0] - 1 < row && row < EmptyCellLocation[0] + 1) || 
               (EmptyCellLocation[1] - 1 < column && column < EmptyCellLocation[1] + 1)) {
                let swap = NewPuzzleArray[row][column];
                
                NewPuzzleArray[row][column] = NewPuzzleArray[EmptyCellLocation[0]][EmptyCellLocation[1]];
                NewPuzzleArray[EmptyCellLocation[0]][EmptyCellLocation[1]] = swap;
            }
        }

        this.setState({
            PuzzleArray: NewPuzzleArray
        })
    }

    ShuffleGrid() {
        console.log("Shuffle grid!");
    }

    render() {
        return (
            <div id="sliding-puzzle">
                {this.state.PuzzleArray.map((subarray: number[], row: number) => {
                    return subarray.map((number: number, column: number) => {
                        return  <div key={`${number}`} className={(number === -1) ? "empty-tile" : "tile"} onClick={() => this.HandleClick(row, column)}>
                                    {(number !== -1) ? number : null}
                                </div>
                    })
                })}
            </div>
        )
    }
}
