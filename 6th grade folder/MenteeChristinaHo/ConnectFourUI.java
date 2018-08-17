import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Label;
import java.awt.Menu;
import java.awt.MenuBar;
import java.awt.MenuItem;
import java.awt.Panel;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JFrame;


public class ConnectFourUI  {

	
	public static void main(String[] args) throws Exception {
		ConnectFourRealUI frame = new ConnectFourRealUI(7, 6, new ConnectFour());
		frame.setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
	}
}

class ConnectFourRealUI  extends JFrame implements ActionListener {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Button> buttons;
	MenuItem newMI, exitMI, redMI, blackMI;
	ConnectFour board;
	boolean	end = false;
	boolean	gameStart = false;
    int numRows;
    int numCols;


	public static final String SPACE = "            "; // 18 spaces

	
	public ConnectFourRealUI(int numRows, int numCols, ConnectFour board) {
		buttons = new ArrayList<Button>();
		setTitle("Connect4 by Christina Ho");
		
		MenuBar mbar = new MenuBar();
		Menu fileMenu = new Menu("File");
		newMI = new MenuItem("New");
		newMI.addActionListener(this);
		
		fileMenu.add(newMI);
		exitMI = new MenuItem("Exit");
		exitMI.addActionListener(this);
		fileMenu.add(exitMI);
		mbar.add(fileMenu);
		Menu optMenu = new Menu("Options");
		redMI = new MenuItem("Red starts");
		redMI.addActionListener(this);
		optMenu.add(redMI);
		blackMI = new MenuItem("Black starts");
		blackMI.addActionListener(this);
		optMenu.add(blackMI);
		mbar.add(optMenu);
		setMenuBar(mbar);

		// Build control panel.
		Panel panel = new Panel();

		for (int i = 0; i < numCols; i++) {
		    Button button = new Button("" + (i + 1));
		    buttons.add(button);
			button.addActionListener(this);
			panel.add(button);
			panel.add(new Label(SPACE));
		}
		panel.add(new Label("                     "));
		
		add(panel, BorderLayout.NORTH);
		// initialize();
		// Set to a reasonable size.
		setSize(1024, 768);
		this.board = board;
		this.numRows = numRows;
		this.numCols = numCols;
	}
	
	// Anytime a user taps on a button, we call this method.
	public void actionPerformed(ActionEvent e) {
		for (int i = 0; i < buttons.size(); i++) {
			if (e.getSource() == buttons.get(i)) {
				board.insertIntoColumn(i);
				repaint();
				try {
				  Thread.sleep(100);
				} catch (Exception exception) {}
				if (board.currentTurn.equals("black")) {
					board.setCurrentColor("red");
				} else if (board.currentTurn.equals("red")) {
					board.setCurrentColor("black");
				}
			}
		}
		if (e.getSource() == newMI) {
			end=false;
			board = new ConnectFour();
			repaint();
		} else if (e.getSource() == exitMI) {
			System.exit(0);
		} else if (e.getSource() == redMI && !gameStart) {
			board.setCurrentColor("red");
		} else if (e.getSource() == blackMI && !gameStart) {
			board.setCurrentColor("black");
	    }
	}
	
	public void paint(Graphics g) {
		g.setColor(Color.BLUE);
		
		g.fillRect(110, 50, 50+100*numCols, 100+100*numRows);
		for (int row=0; row<numRows; row++) {
			for (int col=0; col<numCols; col++) {
				String color = board.getSpot(row, col);
				
				if (color == null || color.isEmpty()) {
					g.setColor(Color.WHITE);
				} else if (color.equals("red")) {
					g.setColor(Color.RED);
				} else if (color.equals("black")) {
					g.setColor(Color.BLACK);
				} else {
					g.setColor(Color.WHITE);
				}
				g.fillOval(160+100*col, 100+100*row, 50, 50);
			}
		}
		
		String Winner = board.getWinner("red");		
		if (Winner != null && !Winner.isEmpty()) {
			displayWinner(g, Winner);
		}
		String winner2 = board.getWinner("black");		
		if (winner2 != null && !winner2.isEmpty()) {
			displayWinner(g, winner2);
		}
		if (board.checkIfBoardFull()) {
			printBoardFull(g);
		}
	} 
	
	public void printBoardFull(Graphics g) {
		g.setColor(Color.BLACK);
		g.setFont(new Font("Courier", Font.BOLD, 100));
		g.drawString("Stalemate!", 100, 400);
		end = true;
	}
	
	public void displayWinner(Graphics g, String color) {
		g.setColor(Color.BLACK);
		g.setFont(new Font("Courier", Font.BOLD, 100));
		if (color.equals("red")) {
			g.drawString("Red wins!", 100, 400);
		} else {
			g.drawString("Black wins!", 100, 400);
		}
		end = true;
	}

}
