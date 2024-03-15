#include <iostream>
#include <string>
#include <cmath>
#include <fstream>
#include <iomanip>
using namespace std;

int main()
{
    string fName, lName;
    double test1, test2, test3;
    string grade;
    cout << "Enter the first name\n";
    cin >> fName;
    cout << "Enter the last name\n";
    cin >> lName;
    cout << "Enter the three test scores\n";
    cin >> test1 >> test2 >> test3;
    int average = round((test1 + test2 + test3)/3);

    switch (average)
    {
    case 0:
    case 1:
    case 2:
    case 3:
        grade = 'F';
        break;
    case 4:
        grade = 'D+';
        break;
    case 5:
        grade = 'C';
        break;
    case 6:
        grade = 'C+';
        break;
    case 7:
        grade = 'B';
        break;
    case 8:
        grade = 'B+';
        break;
    case 9:
    case 10:
        grade = 'A';
        break;
    default:
        grade = "Grade is invalid.";
    }

    ofstream outData;
    outData.open("example.txt");

    outData << left << setfill('-') << setw(10) << "First"
        << setw(20) << "Last"
        << setw(10) << "Test 1"
        << setw(10) << "Test 2"
        << setw(10) << "Test 3"
        << setw(10) << "Average"
        << "Grade\n";

    outData << left << setfill('-') << setw(10) << fName
        << setw(20) << lName
        << setw(10) << test1
        << setw(10) << test2
        << setw(10) << test3
        << setw(10) << average
        << grade << endl;

    outData.close();
    return 0;
}

