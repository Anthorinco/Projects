/*
*Objective: Write a program that asks the user to enter a two-digit number, then prints
the number with its digits reversed.
*Author: [Anthoni]
*Date: 01/13/2026
*/

#include <stdio.h>

int main(void)
{
    int Num1;

    printf("Enter a two-digit number: \n");
    scanf("%d", &Num1);

    printf("The reversal is: %d%d\n", Num1 % 10, Num1 / 10);

    return 0;
}