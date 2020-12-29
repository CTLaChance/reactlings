import React, { Component } from 'react'
import './LightsOutPuzzle.scss';

interface IState {
    LightArray: boolean[][];
}

export default class LightsOutPuzzle extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            LightArray: [[false, false, false],
                         [false, false, false],
                         [false, false, false]]
        }

        this.RandomizeGrid(5);
    }

    HandleClick(row: number, column: number) {
        console.log(`Clicked Row: ${row} - Column: ${column}`)

        let NewLightArray: boolean[][] = this.state.LightArray;

        // Toggle lights in a cross pattern from the selected cell.
        let RowLowerBound = Math.max(row - 1, 0);
        let RowUpperBound = Math.min(row + 1, NewLightArray.length - 1);
        let ColumnLowerBound = Math.max(column - 1, 0);
        let ColumnUpperBound = Math.min(column + 1, NewLightArray[row].length - 1)

        // console.log(`Rows: ${RowLowerBound} - ${RowUpperBound}`);
        // console.log(`Column: ${ColumnLowerBound} - ${ColumnUpperBound}`);

        for(let i = RowLowerBound; i <= RowUpperBound; i++) {
            for(let j = ColumnLowerBound; j <= ColumnUpperBound; j++) {
                // Ignore corners.
                if (i !== row && j !== column) continue;

                NewLightArray[i][j] = !NewLightArray[i][j];
            }
        }

        this.setState({
            LightArray: NewLightArray
        });
    }

    RandomizeGrid(NumberOfSteps: number) {
        for(let i = 0; i < NumberOfSteps; i++) {
            let row = Math.round(Math.random() * (this.state.LightArray.length - 1));
            let column = Math.round(Math.random() * (this.state.LightArray[0].length - 1));

            this.HandleClick(row, column)
        }
    }

    render() {
        return (
            <div id="lights-out-puzzle">
                {this.state.LightArray.map((subarray, row) => {
                    return subarray.map((bool, column) => {
                        return <div key={`${row} - ${column}`} className={`${bool}`} onClick={() => this.HandleClick(row, column)} />
                    })
                })}
            </div>
        )
    }
}
