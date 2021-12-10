import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Employee {
    private JButton OKButton;
    private JTextField txtName;
    private JTextField txtSalary;
    private JTextField txtTax;
    private JTextField txtNsalary;
    private JPanel Main;

    public static void main(String[] args) {
        JFrame frame = new JFrame("Employee");
        frame.setContentPane(new Employee().Main);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }

    public Employee() {
        OKButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                double salary = Double.parseDouble(txtSalary.getText());
                double tax, nsalary;
                if(salary > 50000.00)
                {
                    tax = salary * 10 / 100;
                }
                else if(salary > 35000)
                {
                    tax = salary * 5 / 100;
                }
                else {
                    tax = 0.0;
                }
                nsalary = salary - tax;
                txtTax.setText(String.valueOf(tax));
                txtNsalary.setText(String.valueOf(nsalary));
            }
        });
    }
}
