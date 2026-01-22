/*
* Objective: A program that sums a series of integers using the long type
* to handle a larger range of values than a standard int.r
* Author: [Anthoni]
* Date: 01/22/2026
*/


#include <stdio.h>


int main (void){
    // Variables
    long n, sum = 0;
    // Date
    printf("This program sums a series of integers. \n");
    printf("Enter integers (0 to terminate): ");
    scanf("%ld", &n);
    // Statement
    while (n != 0)
    {
        sum += n;
        scanf("%ld", &n);
    }
    // Result
    printf("The sum is: %ld\n", sum);

    return 0;


    
}