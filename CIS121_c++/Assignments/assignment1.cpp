// Include header files for cout and string
#include <iostream>
#include <string>
using namespace std;

main()
{
    // String variables for my first and last name
    string firstName = "Daniel";
    string lastName = "Nascimento";

    // Outputs my first name and sets cursor two blank lines away
    cout << firstName << "\n\n\n";

    // For each letter in my first name
    for (int i = 0; i < firstName.length(); i++)
    {
        // Print a hyphen
        cout << '-';
    }

    // Output my last name directly after hyphens
    cout << lastName << endl;

    // Exit and return 0 to indicate program ran successfully
    return 0;
}