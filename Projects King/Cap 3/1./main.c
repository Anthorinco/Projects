/*
*Objective: Make a program that converts (mm/dd/yyyy) to yyyymmdd.
*Author [Anthoni]
*Date 01/11/2026
*/

#include <stdio.h>

int main (void)
{ 
    // Variables
    int day, month, year, Year, Day, Month;
    // Date
    printf("Enter a date (mm/dd/yyyy) :");
    scanf("%d/%d/%d", &day, &month, &year);

    // Results
    printf ("Date: %d%02d%02d\n", year, day, month);

    
    return 0;
}