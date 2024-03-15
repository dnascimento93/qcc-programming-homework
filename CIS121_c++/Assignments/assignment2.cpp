// Include header files
#include <iostream>
using namespace std;

int main()
{
    // Define variables
    int digit1, digit2, digit3;
    int number;

    // Ask user for input
    cout << "Type a three digit number\n";
    cin >> number;

    // Get the remainder of the number and trim the last digit each time
    digit3 = number % 10;
    number /= 10;
    digit2 = number % 10;
    number /= 10;
    digit1 = number % 10;

    // Print each digit of the number separated by a space
    cout << digit1 << " " << digit2 << " " << digit3 << endl;
    return 0;
}