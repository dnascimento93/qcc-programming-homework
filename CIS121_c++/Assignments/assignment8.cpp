#include <iostream>
#include <iomanip>
using namespace std;

void print_numbers(int x, int y);

int main()
{
    int numX, numY, temp;
    cout << "Enter two numbers:\n";
    cin >> numX >> numY;
    if (numX > numY) {
        temp = numY;
        numY = numX;
        numX = temp;
    }
    print_numbers(numX, numY);
    return 0;
}

void print_numbers(int x, int y)
{
    cout << "\nEven" << setw(10) << right << "Odd\n";
    for (int i = x; i <= y; i++) {
        if (i == x || i == y)
            continue;
        if (i % 2 == 0)
            cout << left << i;
        else
            cout << setw(10) << right << i << endl;
    }
}