export const ticTacToeHelper = {
  instance: null,
  getInstance() {
    if (!this.instance) {
      this.instance = {
        findRandomSquare: (board) => {
            const remainingPlaces = board.reduce(
              (openPlaces, nextPlace, index) => {
                return !nextPlace
                  ? [...openPlaces, index]
                  : openPlaces;
              },
              []
            )
    
            if (!remainingPlaces.length) {
              return null;
            }
  
            const randomIndex = Math.floor(
              Math.random() * remainingPlaces.length
            );
          
            return remainingPlaces[randomIndex];
          },
          calculateWinner: (squaresArray) => {
            const lines = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6],
            ];
          
            const { length } = lines;
          
            for (let i = 0; i < length; i++) {
              const [a, b, c] = lines[i];
            
              if (squaresArray[a] && squaresArray[a] === squaresArray[b] && squaresArray[a] === squaresArray[c]) {
                return squaresArray[a];
              }
            }
          
            return 'none';
          }
      };
    }
    return this.instance;
  }
};
