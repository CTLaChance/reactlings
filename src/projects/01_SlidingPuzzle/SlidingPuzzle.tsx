import React, { Component } from 'react';
import './SliddingPuzzle.scss';

interface IState {
    PuzzleArray: number[][]
    EmptyCellLocation: number[]
    NumberOfMoves: number
}

export default class SlidingPuzzle extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        // -1 is the empty cell.
        this.state = {
            PuzzleArray: [[1, 2, 3, 4],
                         [5, 6, 7, 8],
                         [9, 10, 11, 12],
                         [13, 14, 15, -1]],
            EmptyCellLocation: [3, 3],
            NumberOfMoves: 0
        }

        this.ShuffleGrid();
    }

    HandleClick(row: number, column: number) {
        let NewPuzzleArray: number[][] = this.state.PuzzleArray;
        let NewEmptyCellLocation: number[] = this.state.EmptyCellLocation;

        if((row === NewEmptyCellLocation[0] || column === NewEmptyCellLocation[1]) &&
           (row >= NewEmptyCellLocation[0] - 1 && row <= NewEmptyCellLocation[0] + 1) &&
           (column >= NewEmptyCellLocation[1] - 1 && column <= NewEmptyCellLocation[1] + 1))
        {
            NewPuzzleArray[NewEmptyCellLocation[0]][NewEmptyCellLocation[1]] = NewPuzzleArray[row][column];
            
            // Update the new EmptyCellLocation.
            NewPuzzleArray[row][column] = -1;
            NewEmptyCellLocation = [row, column];
        }

        this.setState({
            PuzzleArray: NewPuzzleArray,
            EmptyCellLocation: NewEmptyCellLocation,
            NumberOfMoves: this.state.NumberOfMoves + 1
        })
    }

    ShuffleGrid() {
        


    }

    render() {
        return (
            <React.Fragment>
            <div id="sliding-puzzle">
                {this.state.PuzzleArray.map((subarray: number[], row: number) => {
                    return subarray.map((number: number, column: number) => {
                        return  <div key={`${number}`} className={(number === -1) ? "empty-tile" : "tile"} onClick={() => this.HandleClick(row, column)}>
                                    {(number !== -1) ? number : null}
                                </div>
                    })
                })}
            </div>
            <div id="move-counter">
                {`Moves Made: ${this.state.NumberOfMoves}`}
            </div>
            </React.Fragment>
        )
    }
}
