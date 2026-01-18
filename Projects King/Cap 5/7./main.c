/*
*Objective: A program that finds the largest and smallest of four integers.
*Author: [Anthoni]
*Date: 01/17/2026
*/


#include <stdio.h>

int main(void)
{
    // Variables
    int n1, n2, n3, n4, max1, min1, smallest, largest, max2, min2;
    // Data
    printf("Enter four integers:");
    scanf("%d %d %d %d", &n1, &n2, &n3, &n4);
    // Statements
    if (n1 > n2)
    {
        max1 = n1;
        min1 = n2;
    }
    else
    {
        max1 = n2;
        min1 = n1;
    }

    if (n3 > n4)
    {
        max2 = n3;
        min2 = n4;
    }
    else
    {
        max2 = n4;
        min2 = n3;
    }

    if (max1 > max2)
        largest = max1;
    else
        largest = max2;

    if (min1 < min2)

        smallest = min1;
    else
        smallest = min2;
    // Results
    printf("Smallest: %d \n Largest: %d \n", smallest, largest);

    return 0;
}