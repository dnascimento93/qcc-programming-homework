#include <iostream>
using namespace std;

int main()
{
    // One variable for user input and one to display the sum
    int input, sum = 0;
    cout << "Enter positive odd numbers.\n";

    // Loop forever
    while (true) {
        // Get a number input from the user
        cin >> input;

        // If input is less than zero then break out of loop
        if (input <= 0) {
            break;
        }

        // If input is not divisible by two then it is added to the sum
        if (input % 2 == 1) {
            sum += input;
        }
    }

    // Print the sum
    cout << "Sum of the odd numbers is: " << sum << endl;    
    return 0;
}
