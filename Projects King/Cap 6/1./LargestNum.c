/*
*Objective: Find the largest number.
*Author: [Anthoni]
*Date: 01/20/2026
*/


#include <stdio.h>

int main(void){

    // Variables
    float largest =0.0f, num = 1.0f;
    
    // Statement
    while (num != 0)
    {
        printf("Enter a number: ");
        scanf("%f", &num);
        if (num > largest) {
            largest = num;
        }
    }
    
    // Result
    printf("The largest number entered was %.2f \n", largest);


    return 0;
}