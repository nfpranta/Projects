import java.awt.*;
import java.awt.event.*;
import java.util.*;
import javax.swing.*;
public class GamaFrame extends JFrame {
    GamePanel panel;
    GamaFrame(){
        panel=new GamePanel();
        this.add(panel);
        this.setTitle("Pong Game");
        this.setResizable(false);
        this.setBackground(Color.BLACK);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.pack();
        this.setVisible(true);
        this.setLocationRelativeTo(null);
    }
}