function GameOfLife() {

    this.w = 8;
    this.columns = Math.floor(width / this.w);
    this.rows = Math.floor(height / this.w);
    this.board = new Array(this.columns);

    for (var i = 0; i < this.columns; i++) {
        this.board[i] = new Array(this.rows);
    }


    //initialize with new cell
    this.init = function() {
        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
                this.board[i][j] = new Cell(i * this.w, j * this.w, this.w);
            }
        }
    };

    this.init();


    this.generate = function() {
        for (var x = 0; x < this.columns; x++) {
            for (var y = 0; y < this.rows; y++) {
                this.board[x][y].savePreviousState();
            }
        }

        for (var x = 0; x < this.columns; x++) {
            for (var y = 0; y < this.rows; y++) {

                var neighbors = 0;

                for (var i = -1; i <= 1; i++) {
                    for (var j = -1; j <= 1; j++) {
                       // neighbors += this.board[x + i][y + j].previousState;
                        neighbors += this.board[(x + i + this.columns) % this.columns][(y + j + this.rows) % this.rows].previousState;
                    }
                }

                neighbors -= this.board[x][y].previousState;


                if      ((this.board[x][y].state == 1)   && (neighbors < 2))  this.board[x][y].newState(0);
                else if ((this.board[x][y].state == 1)   && (neighbors > 3))  this.board[x][y].newState(0);
                else if ((this.board[x][y].state === 0)  && (neighbors == 3)) this.board[x][y].newState(1);

            }
        }
    };

    this.display = function() {
        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
                this.board[i][j].display();
            }
        }
    };
}
