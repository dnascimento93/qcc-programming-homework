#include <iostream>
#include <string>
using namespace std;

int main()
{
    string a, b, c, temp;
    cout << "String a: ";
    getline(cin, a);
    cout << "String b: ";
    getline(cin, b);
    cout << "String c: ";
    getline(cin, c);

    if(a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    if(b > c) {
        temp = b;
        b = c;
        c = temp;
    }
    if(a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    cout << "1: " << a << endl << "2: " << b << endl << "3: " << c << endl;
    return 0;
}
