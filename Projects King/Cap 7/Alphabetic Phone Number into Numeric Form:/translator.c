/*
*Objective: A program that converts alphabetic phone number into numeric form.
*Author: [Anthoni]
*Date: 03/01/2026
*/


#include <stdio.h>

int main(void) {
    // Variables
    char ch;
    // Data
    printf("Enter phone number: ");
    // Statement && Result
    while ((ch = getchar()) != '\n') {
        
        if (ch >= 'A' && ch <= 'C') printf("2");
        else if (ch >= 'D' && ch <= 'F') printf("3");
        else if (ch >= 'G' && ch <= 'I') printf("4");
        else if (ch >= 'J' && ch <= 'L') printf("5");
        else if (ch >= 'M' && ch <= 'O') printf("6");
        else if (ch == 'P' || ch == 'R' || ch == 'S') printf("7");
        else if (ch >= 'T' && ch <= 'V') printf("8");
        else if (ch >= 'W' && ch <= 'Y') printf("9");
        else putchar(ch); 
    }
    printf("\n");
    return 0;
}