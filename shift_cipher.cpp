#include <iostream>
#include <string>

using namespace std;

string encrypt(string text, int shift){
	string ciphertext = "";
	for(char c : text) {
		if(isalpha(c)) {
			char base = islower(c) ? 'a' : 'A';
			ciphertext += (c - base + shift) % 26 + base;	
		} 
		else {
			ciphertext += c;
		}
	}
	return ciphertext;
	}

int main(int argc, char *argv[]) {
	string text;
	int shift;
	cout << "enter text: \n";
	cin >> text;
	cout << "enter key: \n";
	cin >> shift;
	cout << encrypt(text,shift) << "\n";
	return 0;
}




