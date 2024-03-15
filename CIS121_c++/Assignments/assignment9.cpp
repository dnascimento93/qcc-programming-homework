#include <iostream>
#include <string>
#include <math.h>
using namespace std;

void getScores(int scores[3][4]);
void getAverages(int scores[3][4]);

int main()
{
    int scores[3][4];
    getScores(scores);
    getAverages(scores);
    return 0;
}

void getScores(int scores[3][4])
{
    for (int i = 0; i < 3; i++) {
        cout << "***COURSE " << i + 1 << "***\n";
        for (int j = 0; j < 4; j++) {
            if (j == 3) {
                cout << "Final exam grade: ";
                cin >> scores[i][j];
                cout << endl;
            } else {
                cout << "Test " << j + 1 << " grade: ";
                cin >> scores[i][j];
            }
        }
    }
}

void getAverages(int scores[3][4])
{
    double averages[3];
    cout << "***AVERAGES***\n";
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++)  {
            averages[i] += scores[i][j];
        }
        averages[i] /= 4;
        cout << "Course " << i + 1 << " average: " << round(averages[i]) << endl;
    }
    cout << endl;
}
