public class ConnectFour {

	int numCol = 6;
	int numRows = 7;
	String [][] board = new String[numRows][numCol];
	String currentTurn = "red"; // be either red or black
	
	public ConnectFour() {
      board = new String[numRows][numCol];

}


public void setCurrentColor(String color) {
  // Make this the current color
  currentTurn = color;
}



// We return whether we were able to add the
// piece or not
public boolean insertIntoColumn(int validColumn) {
	if (validColumn < numCol && validColumn > -1) {
		for (int t = numRows - 1; t > -1; t = t - 1) {
			String newTurn = getSpot(t,validColumn); 
			if (newTurn.isEmpty()) {
			  board[t][validColumn] = currentTurn;
			  return true;
			}
		}
	}
	// We couldn't insert it into the board
    return false;
}

/*[ , , , , , ] 
 *[ , , , , , ]
 *[ , , , , , ]
 *[ , , , , , ]
 *[,  "black" , "black" , "black" , "black" , ]
 *[ , "black" , ,"red" , , ]
 *[ ,"black" ,here,"red", , ]
 *
 *0, 0
 *0, 1
 *0, 2
 *0,3
 *0,4
 *0,5
 *0,6
 *1, 0
 *1, 1
 *1,2
 *1, 3
 *
 *10000, 1000
 */
public String getSpot(int row, int col) {
	if (row < numRows && col < numCol) {
		String peg = board[row][col];
		return peg == null ? "" : peg;
	}
	return "";
}

/**
 *
 *[ , , , , , ]
 *[ , , , , , ]
 *[ , , , , , ]
 *[,  "black" , "black" , "black" , "black" , ]
 *[ , "black" , ,"red" , , ]
 *[ "red",,"black","black","black" ,"black" ]
 * @return
 * 
 */
public String getWinner(String colorToCheck) {
	System.out.println("we are in GetWinner: " + currentTurn);
	int numBlackInRow = 0;
	for (int r = numRows - 1 ; r > -1; r = r - 1) {
		numBlackInRow = 0;
		for (int c = numCol - 1; c > -1; c = c -1) {
			String rowWinner = getSpot(r,c);
			if (rowWinner != null && !rowWinner.isEmpty() && rowWinner.equals(colorToCheck)) {
				numBlackInRow = numBlackInRow + 1;
			} else {
				numBlackInRow = 0;
			}
			if (numBlackInRow == 4) {
				System.out.println("We found four in a row! " + r);
				  return colorToCheck;
			}
		}
		
	}
	/**
	 *
	 *[ , , , , ,"black" ]
	 *[ , "black", , , , ]
	 *[ ,"black" , , , , "black"]
	 *[,  "black" , "black" , "black" , "black" , "black"]
	 *[ , "black" , ,"red" , , ]
	 *[ "red",,"black","black","black" ,"black" ]
	 *
	 *c = 5, r = 5
	 *numBlackInCol = 0
	 *numBlackInCol = 1;
	 *c = 5, r = 4
	 *numBlack = 0
	 *c = 5, r= 3
	 * numBlack = 1
	 * c = 5, r = 2
	 * numBlack = 2
	 * c = 5, r = 1
	 * numBlack = 0
	 * c = 5, r = 0
	 * numBlack = 1
	 * c = 4, r = 5
	 */
	 
	int numBlackInCol = 0;
	for (int c = numCol - 1; c > -1; c = c -1) {
		numBlackInCol = 0;
		for (int r = numRows - 1 ; r > -1; r = r - 1) {
			String winner = getSpot(r,c);
			if (winner != null && !winner.isEmpty() && winner.equals(colorToCheck)) {
				numBlackInCol = numBlackInCol + 1;
			} else {
				numBlackInCol = 0;
			}
			if (numBlackInCol == 4) {
				System.out.println("we found four in a column: " + c);
				  return colorToCheck;
			}
		}
		
	}
	/**
	 *
	 *[ , , , , ,"black" ]
	 *[ , "black", , , , ]
	 *[ ,"black" , , , , "black"]
	 *[,  "black" , "black" , "black" , "black" , "black"]
	 *[ , "black" , ,"red" , , ]
	 *[ "red",   ,"black","black","black" ,"black" ]
	 *
	 *c = 0, r = 5
	 *c = 1, r =4
	 *c = 2, r = 3
	 */
	
	for (int startCol = 0; startCol < numCol; startCol = startCol +1) {
		for (int startRow = 5; startRow > -1; startRow = startRow -1) {
			if (checkDiagonal(startCol, startRow, colorToCheck).equals(colorToCheck)) {
				return colorToCheck;
			}
		} 
		
	}
	
	for (int startCol = numCol - 1; startCol > -1; startCol = startCol -1) {
		for (int startRow = 5; startRow > -1; startRow = startRow -1) {
			if (checkOtherDiagonal(startCol, startRow, colorToCheck).equals(colorToCheck)) {
				return colorToCheck;
			}
		}
	}
	return "";

}

public String checkOtherDiagonal(int startCol, int startRow, String colorToCheck) {
	int numBlackinDiagonal = 0;
	if (startCol - 3 > 0 && startRow - 3 > 0) {
		for (int numTimes = 0; numTimes < 4; numTimes = numTimes + 1) {
	 			String diagonal = getSpot(startRow,startCol);
				if (diagonal != null && !diagonal.isEmpty() && diagonal.equals(colorToCheck)) {
					numBlackinDiagonal = numBlackinDiagonal + 1;	
				} else {
					numBlackinDiagonal = 0;
				}
				startRow = startRow - 1;
				startCol = startCol - 1;
		}
				if (numBlackinDiagonal == 4) {
					return colorToCheck;
				}
	}
		return "";
	}

/**
  *
	 *[ , , , , ,"black" ]
	 *[ , "black", , , , ]
	 *[ ,"black" , , , , "black"]
	 *[,  "black" , "black" , "black" , "black" , "black"]
	 *[ , "black" , ,"red" , , ]
	 *[ "red",   ,"black","black","black" ,"black" ]
	 *
	 *start row = 4
	 *startCold = 4
	 *[4,4] numBlack = 0
	 *[3,5] numBlack = 1
	 *[2,6] 
	 *[1, 7]
	 *row - 3 > 0
	 *col + 3 < numCol
	 *
	 *Diagonal is not possible
	 *startRow = 4
	 *startCol = 4
	 *[4, 4]
	 *[3, 5]
	 *[2, 
	 *
	 *startRow = 5
	 *startCol = 0
	 *[5, 0] = [startRow, startCol]
	 *[4, 1] = [startRow - 1, startCold + 1]
	 *[3, 2] = [startRow - 2, startCol + 2]
	 *[4, 3] = [startRow - 3, startCol + 3]
	 *
	 *startRow = 5
	 *startCol = 0
	 *
 */
public String checkDiagonal(int startCol, int startRow, String colorToCheck) {
	int numBlackinDiagonal = 0;
	if (startCol + 3 < numCol && startRow - 3 > 0) {
		for (int numTimes = 0; numTimes < 4; numTimes = numTimes + 1) {
 			String diagonal = getSpot(startRow,startCol);
			if (diagonal != null && !diagonal.isEmpty() && diagonal.equals(colorToCheck)) {
				numBlackinDiagonal = numBlackinDiagonal + 1;	
			} else {
				numBlackinDiagonal = 0;
			}
			startRow = startRow - 1;
			startCol = startCol + 1;
		}
			if (numBlackinDiagonal == 4) {
				return colorToCheck;
			}
	}
	return "";
}

// Returns true if the board is full
// Otherwise, it returns false
/* 
 *[ , , , , , ]
 *[ , , , , , ]
 *[ , , , , , ]
 *[,  "black" , "black" , "black" , "black" , ]
 *[ , "black" , ,"red" , , ]
 *[ ,"black" ,here,"red", , ]
 * 6, 5
 * 6, 4
 * 6, 3
 * 6, 2
 * 6, 1
 * 5, 5
 * 5, 4
 * 5, 4
 */
public boolean checkIfBoardFull() {
	for (int r = numRows - 1; r > -1; r = r - 1) {
		for (int c = numCol - 1; c > -1; c = c - 1) {
			String fullBoard = getSpot(r,c);
			if (fullBoard.isEmpty()) {
				return false;
			}
		}
	}
	return true;
}
}
