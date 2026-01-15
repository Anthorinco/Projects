/*
*Objective: Write a Broker's Commission calculator.
*Author [Anthoni]
* 01/14/2026
*/

#include <stdio.h>

int main(void)
{
    // Variables
    float commission, value;

    // Data
    printf("Enter value of trade: ");
    scanf("%f", &value);

    // Statements
    if (value < 2500.00f)
    {
        commission = 30.00f + (value * .017f);
    }
    else if (value < 6250.00f)
    {
        commission = 56.00f + (value * .0066f);
    }
    else if (value < 20000.00f)
    {
        commission = 76.00f + (value * .0036f);
    }
    else if (value < 50000.00f)
    {
        commission = 100.00f + (value * .0022f);
    }
    else if (value < 500000.00f)
    {
        commission = 155.00f + (value * .0011f);
    }
    else
    {
        commission = 255.00f + (value * .0009f);
    }
    if (commission < 39.00f)
    {
        commission = 39.00f;
    }

    // Result
    printf("Commission: $%.2f \n", commission);

    return 0;
}