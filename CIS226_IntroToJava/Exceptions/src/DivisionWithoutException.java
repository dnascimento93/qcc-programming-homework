import java.util.Scanner;


public class DivisionWithoutException {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        System.out.print("Enter the first number (dividend): ");

        int dividend = scanner.nextInt();


        System.out.print("Enter the second number (divisor): ");

        int divisor = scanner.nextInt();


        // Direct division without exception handling

        int result = dividend / divisor; // Risk of division by zero

        System.out.println("Result: " + result);


        scanner.close();

    }

}