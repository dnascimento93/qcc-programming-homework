#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    int counter = 0;

    do {
        cout << "Enter the first name: ";
        cin >> name;

        cout << "Enter the age: ";
        cin >> age;

        cout << name << " is " << age << " years old." << endl;
        counter++;
    } while (counter < 10);
    return 0;
}
