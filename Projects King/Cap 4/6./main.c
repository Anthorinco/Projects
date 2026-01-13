/*
*Objective: Create a program that calculates the check digit of EAN ( European Article Number ).
*Author: [Anthoni]
*Date 01/13/2026
*/

#include <stdio.h>


int main (void)
{   
    // Variables
    int firstsum, total, secondsum, checkdigit, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth,tenth, eleventh, twelfth;

    // Data
    printf("Enter all digits: ");
    scanf("%1d%1d%1d%1d%1d%1d%1d%1d%1d%1d%1d%1d", &first, &second, &third, &fourth, &fifth, &sixth, &seventh, &eighth, &ninth, &tenth, &eleventh, &twelfth);

    // Expressions
    firstsum = second + fourth + sixth + eighth + tenth + twelfth;
    secondsum = first + third + fifth + seventh + ninth + eleventh;
    checkdigit = (firstsum * 3) + secondsum;
    total = 9- ((checkdigit - 1) % 10);
    
    // Results
    printf("Check digit: %d\n", total);


    return 0;
}