/*
*Objective: A program that calculates the total digits of a user input number.
*Author: [Anthoni]
*Date: 01/18/2026
*/


#include <stdio.h>

int main(void){
    // Variables
    int n, i = 0;
    // Date
    printf("Enter a nonnegative integer: ");
    scanf("%d", &n);
    // Statements
    do
    {
        n /= 10;
        i++;
    } while (n > 0);
    // Result
    printf("The number has %d digit(s). \n", i);

    return 0;
}