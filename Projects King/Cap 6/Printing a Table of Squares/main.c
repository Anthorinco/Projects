/*
*Objective: A program that prints a table of squares
based on the value inputted by the user.
Author: [Anthoni]
Date: 01/18/2026
*/

#include <stdio.h>

int main (void){
    // Variables
    int value, i;
    i = 1;
    // Data
    printf("This program prints a table of squares. \n");

    printf("Enter number of entries in table: ");
    scanf("%d", &value);
    // Statement && Result //
    while (i <= value)
    {
        printf("%10d, %10d \n", i, (i * i));
        i++;
    }
    

    return 0;
}