#include <iostream>
using namespace std;

double decimal(double x);

int main(void)
{
    double input;
    cout << "Input a decimal: ";
    cin >> input;
    cout << decimal(input) << endl;
    return 0;
}

double decimal(double x)
{
    return x - static_cast<int>(x);
}
