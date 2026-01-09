/*
*Objective: Calculate the volume of a sphere using C.
*Author [Anthoni]
*Date 01/08/2026
*/

#include <stdio.h>

// Macros
#define Formula (4.0f/3.0f)

int main(void)
{
    float volume, PI, r;
    // Data of sphere
    PI = 3.14;
    r = 10; // Radius in meters
    
    // Result / Expressions
    printf("Volume:%.2f \n", Formula * PI * r * r * r);



    return 0;
}
