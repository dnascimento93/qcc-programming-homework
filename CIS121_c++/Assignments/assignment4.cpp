#include <iostream>
#include <iomanip>
using namespace std;

int integer(double input)
{
    return static_cast<int>(input);
}

double decimal(double input)
{
    double dec = input - static_cast<int>(input);
    if (dec < 0)
        dec *= -1;
    return dec;
}

int main()
{
    double x, y;
    cout << "Enter two decimal numbers"<< endl;
    cin >> x >> y;
    cout << left;
    cout << setw(10) << integer(x);
    cout << decimal(x) << endl;
    cout << setw(10) << integer(y);
    cout << decimal(y) << endl;
    return 0;
}
