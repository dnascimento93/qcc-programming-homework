import java.awt.*;
import java.awt.event.ActionListener;
import javax.swing.*;
import javax.swing.plaf.basic.BasicBorders;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;

public class Calc extends JFrame {
    public Calc() {
        // Create the calc content pane
        Container calc = getContentPane();
        calc.setLayout(new BorderLayout());
        final double[] result = {0};

        // Create the display text field and display panel
        // Then combine them and add it to the calc content pane
        JTextField display = new JTextField();
        display.setEditable(false);
        display.setFont(new Font("Consolas", Font.BOLD, 24));
        display.setBackground(Color.LIGHT_GRAY);
        display.setForeground(new Color(175, 50, 50));
        JPanel displayPanel = createPanel(1, 1);
        displayPanel.setPreferredSize(new Dimension(calc.getWidth(), 85));
        displayPanel.add(display);
        calc.add(displayPanel, BorderLayout.NORTH);

        // Create a 4x4 panel for the buttons and add it to the calc pane
        JPanel buttonPanel = createPanel(4, 4);
        calc.add(buttonPanel, BorderLayout.CENTER);

        // Create an array of 10 buttons (0-9)
        JButton[] btn = new JButton[10];
        // Populate the button array
        for (int i = 0; i <= 9; i++) {
            int finalI = i;
            btn[i] = createButton(String.valueOf(i), _ -> setButtonAction(String.valueOf(finalI), display, result));
        }

        // Buttons with symbols get created separately
        JButton btnDivide = createButton("/", _ -> setButtonAction("/", display, result));

        JButton btnMultiply = createButton("*", _ -> setButtonAction("*", display, result));

        JButton btnMinus = createButton("-", _ -> setButtonAction("-", display, result));

        JButton btnPlus = createButton("+", _ -> setButtonAction("+", display, result));

        JButton btnClear = createButton("C", _ -> display.setText(""));

        // Set the equals' button label and action
        JButton btnEqual = createButton("=", _ -> {
            DisplayCheck displayCheck = displayChecker(display.getText());
            if (displayCheck.isEmpty) {
                display.setText("");
            } else if (displayCheck.hasResult) {
                display.setText(display.getText());
            } else if (displayCheck.lastCharIsOperator) {
                display.setText(display.getText());
            } else {
                // Split the display text into a numbers list
                result[0] = 0;
                String n = display.getText();
                String[] splitNums = n.split("[-+/*]");
                List<Double> numbers = new ArrayList<>();
                for (String splitNum : splitNums) {
                    numbers.add(Double.parseDouble(splitNum));
                }

                // Split the display text into an operators list
                List<Character> operators = new ArrayList<>();
                for (int i = 0; i < n.length(); i++) {
                    if (n.charAt(i) == '-' || n.charAt(i) == '+' || n.charAt(i) == '/' || n.charAt(i) == '*') {
                        operators.add(n.charAt(i));
                    }
                }

                // Following PEMDAS
                // For each division or multiplication operator
                for (int i = 0; i < operators.size(); i++) {
                    if (operators.get(i) == '/' || operators.get(i) == '*') {
                        if (operators.get(i) == '/') {
                            result[0] = numbers.get(i) / numbers.get(i + 1);
                        } else if (operators.get(i) == '*') {
                            result[0] = numbers.get(i) * numbers.get(i + 1);
                        }
                        // Update the numbers list after calculations are performed
                        numbers.set(i, result[0]);
                        numbers.remove(i + 1);
                        operators.remove(i);
                        // Step back in the list because one was removed
                        i--;
                    }
                }

                // For each addition or subtraction operator
                for (int i = 0; i < operators.size(); i++) {
                    if (operators.get(i) == '+' || operators.get(i) == '-') {
                        if (operators.get(i) == '+') {
                            result[0] = numbers.get(i) + numbers.get(i + 1);
                        } else if (operators.get(i) == '-') {
                            result[0] = numbers.get(i) - numbers.get(i + 1);
                        }
                        // Update the numbers list after calculations are performed
                        numbers.set(i, result[0]);
                        numbers.remove(i + 1);
                        operators.remove(i);
                        // Step back in the list because one was removed
                        i--;
                    }
                }

                // Update the display to show the result
                display.setText(display.getText() + " = " + result[0]);
            }
        });

        // For each button
        for (int i = 1; i <= 9; i++) {

            // Add that button to the buttonPanel
            buttonPanel.add(btn[i]);

            // Finish the first row of buttons
            if (i == 3) {
                buttonPanel.add(btn[i]);
                buttonPanel.add(btnDivide);

            // Finish the second row of buttons
            } else if (i == 6) {
                buttonPanel.add(btn[i]);
                buttonPanel.add(btnMultiply);

            // Finish the third and fourth row of buttons
            } else if (i == 9) {
                buttonPanel.add(btn[i]);
                buttonPanel.add(btnMinus);
                buttonPanel.add(btnClear);
                buttonPanel.add(btn[0]);
                buttonPanel.add(btnEqual);
                buttonPanel.add(btnPlus);
            }
        }

        // Set the JFrame values
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("Calculator");
        setSize(400, 550);
        setVisible(true);
    }

    // Panel and button methods to reduce repetitive code
    public static JPanel createPanel(int row, int col) {
        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(row, col));
        return panel;
    }
    public static JButton createButton(String label, ActionListener action) {
        JButton button = new JButton(label);
        button.setFont(new Font("Consolas", Font.BOLD, 30));
        button.setBackground(Color.DARK_GRAY);
        button.setForeground(new Color(175, 50, 50));
        button.setBorder(new BasicBorders.ButtonBorder(Color.LIGHT_GRAY, Color.DARK_GRAY, Color.RED, Color.RED));
        button.addActionListener(action);
        return button;
    }
    public DisplayCheck displayChecker(String display) {
        boolean isEmpty = display.isEmpty();
        boolean lastCharIsOperator = !display.isEmpty() && (display.charAt(display.length() - 1) == '+' || display.charAt(display.length() - 1) == '-' || display.charAt(display.length() - 1) == '*' || display.charAt(display.length() - 1) == '/');
        boolean hasResult = display.contains("=");
        return new DisplayCheck(lastCharIsOperator, isEmpty, hasResult);
    }
    public void setButtonAction(String label, JTextField display, double[] result) {
        // Use the display to create a checker, so each click will perform the correct action
        DisplayCheck displayCheck = displayChecker(display.getText());
        Set<String> operators = Set.of("+", "-", "*", "/");
        if (operators.contains(label)) {
            if (displayCheck.lastCharIsOperator) {
                display.setText(display.getText());
            } else if (displayCheck.isEmpty) {
                display.setText("");
            } else if (displayCheck.hasResult) {
                display.setText(result[0] + label);
            } else {
                display.setText(display.getText() + label);
            }
        } else {
            if (displayCheck.hasResult) {
                display.setText(String.valueOf(label));
            } else {
                display.setText(display.getText() + label);
            }
        }
    }

    // Main function that runs Calc
    public static void main(String[] args) {
        SwingUtilities.invokeLater(Calc::new);
    }
}



/*
        ***CODE GRAVEYARD***

        panel[0].add(btn[7]);
        panel[0].add(btn[8]);
        panel[0].add(btn[9]);
        panel[0].add(btnPlus);
        panel[1].add(btn[4]);
        panel[1].add(btn[5]);
        panel[1].add(btn[6]);
        panel[1].add(btnMinus);
        panel[2].add(btn[1]);
        panel[2].add(btn[2]);
        panel[2].add(btn[3]);
        panel[2].add(btnMultiply);
        panel[3].add(btnClear);
        panel[3].add(btn[0]);
        panel[3].add(btnEqual);
        panel[3].add(btnDivide);
        calc.add(panel[0]);
        calc.add(panel[1]);
        calc.add(panel[2]);
        calc.add(panel[3]);


        // For each panel
        for (int i = 0; i < panel.length; i++) {
            // For the first panel
            if (i == 0) {
                // Add buttons 7-9 and divide to first panel
                for (int j = 7; j <= 9; j++) {
                    panel[i].add(btn[j]);
                }
                panel[i].add(btnDivide);
                calc.add(panel[i]); // Add the first panel to content pane

            // For the second panel
            } else if (i == 1) {
                // Add buttons 4-6 and multiply to the second panel
                for (int j = 4; j <= 6; j++) {
                    panel[i].add(btn[j]);
                }
                panel[i].add(btnMultiply);
                calc.add(panel[i]); // Add the second panel to content pane

            // For the third panel
            } else if (i == 2) {
                // Add buttons 1-3 and minus to the third panel
                for (int j = 1; j <= 3; j++) {
                    panel[i].add(btn[j]);
                }
                panel[i].add(btnMinus);
                calc.add(panel[i]); // Add the third panel to content pane

            // For the last panel,  add all other buttons
            } else {
                panel[3].add(btnClear);
                panel[3].add(btn[0]);
                panel[3].add(btnEqual);
                panel[3].add(btnPlus);
                calc.add(panel[3]); // Add the last panel to content pane
            }
        }


import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;
import java.util.ArrayList;
import javax.swing.*;

public class Calc extends JFrame {
    public Calc() {
        // Create the calc content pane
        Container calc = getContentPane();
        calc.setLayout(new GridLayout(5,1));

        // Create a panel for the display field
        JPanel displayPanel = new JPanel();
        displayPanel.setLayout(new GridLayout(1,1));
        // Create the text field and add to displayPanel
        JTextField display = new JTextField();
        display.setEditable(false);
        display.setFont(new Font("Arial", Font.BOLD, 24));
        displayPanel.add(display);

        // Create a panel for the first row of buttons
        JPanel buttonPanel1 = new JPanel();
        buttonPanel1.setLayout(new GridLayout(1,4));
        // Create and add buttons to buttonPanel1
        JButton btnSeven = new JButton("7");
        btnSeven.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel1.add(btnSeven);
        JButton btnEight = new JButton("8");
        btnEight.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel1.add(btnEight);
        JButton btnNine = new JButton("9");
        btnNine.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel1.add(btnNine);
        JButton btnPlus = new JButton("+");
        btnPlus.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel1.add(btnPlus);

        // Create a panel for the second row of buttons
        JPanel buttonPanel2 = new JPanel();
        buttonPanel2.setLayout(new GridLayout(1,4));
        // Create and add buttons to buttonPanel2
        JButton btnFour = new JButton("4");
        btnFour.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel2.add(btnFour);
        JButton btnFive = new JButton("5");
        btnFive.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel2.add(btnFive);
        JButton btnSix = new JButton("6");
        btnSix.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel2.add(btnSix);
        JButton btnMinus = new JButton("-");
        btnMinus.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel2.add(btnMinus);

        // Create a panel for the third row of buttons
        JPanel buttonPanel3 = new JPanel();
        buttonPanel3.setLayout(new GridLayout(1,4));
        // Create and add buttons to buttonPanel3
        JButton btnOne = new JButton("1");
        btnOne.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel3.add(btnOne);
        JButton btnTwo = new JButton("2");
        btnTwo.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel3.add(btnTwo);
        JButton btnThree = new JButton("3");
        btnThree.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel3.add(btnThree);
        JButton btnMultiply = new JButton("X");
        btnMultiply.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel3.add(btnMultiply);

        // Create a panel for the fourth row of buttons
        JPanel buttonPanel4 = new JPanel();
        buttonPanel4.setLayout(new GridLayout(1,4));
        // Create and add buttons to buttonPanel4
        JButton btnClear = new JButton("C");
        btnClear.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel4.add(btnClear);
        JButton btnZero = new JButton("0");
        btnZero.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel4.add(btnZero);
        JButton btnEqual = new JButton("=");
        btnEqual.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel4.add(btnEqual);
        JButton btnDivide = new JButton("÷");
        btnDivide.setFont(new Font("Arial", Font.BOLD, 24));
        buttonPanel4.add(btnDivide);

        // Add all the panels to the calc content pane
        calc.add(displayPanel);
        calc.add(buttonPanel1);
        calc.add(buttonPanel2);
        calc.add(buttonPanel3);
        calc.add(buttonPanel4);

        // Add action listener to buttons
        btnSeven.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "7");
            }
        });

        btnEight.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "8");
            }
        });

        btnNine.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "9");
            }
        });

        btnPlus.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "+");
            }
        });

        btnFour.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "4");
            }
        });

        btnFive.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "5");
            }
        });

        btnSix.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "6");
            }
        });

        btnMinus.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "-");
            }
        });

        btnOne.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "1");
            }
        });

        btnTwo.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "2");
            }
        });

        btnThree.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "3");
            }
        });

        btnMultiply.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "*");
            }
        });

        btnClear.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText("");
            }
        });

        btnZero.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "0");
            }
        });

        btnDivide.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                display.setText(display.getText() + "/");
            }
        });

        btnEqual.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                double result = 0;

                // Split the display text into a numbers list
                String n = display.getText();
                String[] splitNums = n.split("[-+/*]");
                List<Double> numbers = new ArrayList<>();
                for (String splitNum : splitNums) {
                    numbers.add(Double.parseDouble(splitNum));
                }

                // Split the display text into an operators list
                List<Character> operators = new ArrayList<>();
                for (int i = 0; i < n.length(); i++) {
                    if (n.charAt(i) == '-' || n.charAt(i) == '+' || n.charAt(i) == '/' || n.charAt(i) == '*') {
                        operators.add(n.charAt(i));
                    }
                }

                // Follow PEMDAS rules
                // Iterate through the operators list looking for / and *
                for (int i = 0; i < operators.size(); i++) {
                    if (operators.get(i) == '/' || operators.get(i) == '*') {
                        if (operators.get(i) == '/') {
                            result = numbers.get(i) / numbers.get(i + 1);
                        } else if (operators.get(i) == '*') {
                            result = numbers.get(i) * numbers.get(i + 1);
                        }
                        // Update the numbers list after calculations are performed
                        numbers.set(i, result);
                        numbers.remove(i + 1);
                        operators.remove(i);
                        // Step back in the list because one was removed
                        i--;
                    }
                }

                // Then iterate through the operators list looking for + and -
                for (int i = 0; i < operators.size(); i++) {
                    if (operators.get(i) == '+' || operators.get(i) == '-') {
                        if (operators.get(i) == '+') {
                            result = numbers.get(i) + numbers.get(i + 1);
                        } else if (operators.get(i) == '-') {
                            result = numbers.get(i) - numbers.get(i + 1);
                        }
                        // Update the numbers list after calculations are performed
                        numbers.set(i, result);
                        numbers.remove(i + 1);
                        operators.remove(i);
                        // Step back in the list because one was removed
                        i--;
                    }
                }
                // Update the display to show the result
                display.setText(display.getText() + " = " + result);
            }
        });

        // Set JFrame values
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("Calculator");
        setSize(300, 400);
        setVisible(true);
    }

    // Main function that runs Calc
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new Calc();
            }
        });
    }
}
*/