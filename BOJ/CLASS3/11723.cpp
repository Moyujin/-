#include<iostream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int M, num, bit = 0;
    string str;
    cin >> M;

    for (int i = 0; i < M; i++) {
        cin >> str;

        if (str == "all") bit = (1 << 20) - 1;
        else if (str == "empty") bit = 0;
        else {
            cin >> num;
            num = num - 1;
            if (str == "add") bit = bit | (1 << num);
            else if (str == "remove") bit = bit & ~(1 << num);
            else if (str == "check") cout << ((bit & (1 << num)) > 0) << "\n";
            else if (str == "toggle") bit = bit ^ (1 << num);
        }
    }
}