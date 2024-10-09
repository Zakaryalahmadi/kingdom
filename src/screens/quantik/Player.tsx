export enum PieceType {
    Square = 'square',
    Triangle = 'triangle',
    Circle = 'circle',
    Cross = 'cross'
}

// const pieces = ;

export default class Player{
    color: string;
    pieces: String[];

    constructor(color : string){
        this.color = color;
        this.pieces = ['square', 'square','triangle', 'triangle','circle', 'circle','cross', 'cross'];
    }
}
