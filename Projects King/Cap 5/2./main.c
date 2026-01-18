/*
 *Objective: A program that asks the user fora 24-hour time, then displays in 12-hour form.
 *Author: [Anthoni]
 *Date: 01/17/2026
 */

#include <stdio.h>

int main(void)
{
    // Variables
    int hour, minute;
    // Data
    printf("Enter a 24 -hour time: ");
    scanf("%d:%d", &hour, &minute);
    // Statements && Results //
    if (hour == 0)
    {
        printf("12:%02d AM\n", minute);
    }
    else if (hour < 12)
    {
        printf("%d:%02d AM\n", hour, minute);
    }
    else if (hour == 12)
    {
        printf("12:%02d PM\n", minute);
    }
    else
    {
        printf("%d:%02d PM\n", (hour - 12), minute);
    }

    return 0;
}