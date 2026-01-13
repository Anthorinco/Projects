/*
*Objective: Create a program that calculates the check digit of UPC ( Universal Product Code ).
*Author: [Anthoni]
*Date 01/12/2026
*/

#include <stdio.h>


int main (void)
{   
    // Variables
    int firstsum, total, secondsum, checkdigit, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth,tenth, eleventh;

    // Data
    printf("Enter all digits: ");
    scanf("%1d%1d%1d%1d%1d%1d%1d%1d%1d%1d%1d", &first, &second, &third, &fourth, &fifth, &sixth, &seventh, &eighth, &ninth, &tenth, &eleventh);

    // Expressions
    firstsum = first + third + fifth + seventh + ninth + eleventh;
    secondsum = second + fourth + sixth + eighth + tenth;
    checkdigit = (firstsum * 3) + secondsum;
    total = 9- ((checkdigit - 1) % 10);
    
    // Results
    printf("Check digit: %d\n", total);


    return 0;
}