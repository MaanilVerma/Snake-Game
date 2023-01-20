import { CellInterface } from "../interfaces";

export const classNames = (...className: string[]) => {
  return className.filter(Boolean).join(" ");
};

export const createCell = (data: CellInterface) => {
  return { ...data };
};

export const singleCell: CellInterface = {
  cellNumber: 0,
  column: 0,
  row: 0,
  isWall: false,
  isSnakeBodyPart: false,
  isFood: false,
};

export const getCellObjects = (
  startRow: number = 20,
  startColumn: number = 20
): CellInterface[][] => {
  let gridCells: CellInterface[][] = [];
  let cellNumber = 0;
  for (let rowIndex = 0; rowIndex < 40; rowIndex++) {
    let currentRow: CellInterface[] = [];
    for (let columnIndex = 0; columnIndex < 40; columnIndex++) {
      currentRow.push({
        ...singleCell,
        row: rowIndex,
        column: columnIndex,
        cellNumber,
        isSnakeBodyPart: rowIndex === startRow && columnIndex === startColumn,
      });
      cellNumber++;
    }
    gridCells.push(currentRow);
  }
  return gridCells;
};

export const getFoodCell = (grid: CellInterface[][]): CellInterface => {
  let rowIndex = Math.ceil(Math.random() * 38);
  let columnIndex = Math.ceil(Math.random() * 38);
  let cellToBeRendered = grid[rowIndex][columnIndex];
  if (cellToBeRendered.isSnakeBodyPart || cellToBeRendered.isWall) {
    return getFoodCell(grid);
  }
  cellToBeRendered.isFood = true;
  return cellToBeRendered;
};

export const getSnakeCell = (
  grid: CellInterface[][],
  row: number,
  column: number
): CellInterface => {
  let snakeCell = grid[row][column];
  snakeCell.isSnakeBodyPart = true;
  return snakeCell;
};
