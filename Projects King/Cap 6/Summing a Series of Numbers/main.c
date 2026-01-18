/*
*Objective1: A program that sums a series of numbers.
*Author: [Anthoni]
*Date: 01/18/2026
*/


#include <stdio.h>

int main(void){
    // Variables
    int n, sum = 0;
    // Date
    printf("This program sums a series of integers. \n");
    printf("Enter a integers (0 to terminate): ");
    scanf("%d", &n);
    // Statement
    while (n != 0)
    {
        sum += n;
        scanf("%d", &n);
    }
    // Result
    printf("The sum is: %d\n", sum);

    return 0;
}