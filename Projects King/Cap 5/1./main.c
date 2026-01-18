/*
*Objective: A program that calculates how many digits a number contains
*Author [Anthoni]
*Date 01/17/2026
*/

#include <stdio.h>

int main (void){
    // Variables
    int number;
    // Data
    printf("Enter a number: ");
    scanf("%d", &number);
    // Statements && Results //
    if (number < 10)
    {
        printf("The number %d has 1 digit \n", number);
    }
    else if (number < 100)
    {
        printf("The number %d has 2 digits \n", number);
    }
    else if (number < 1000){
        printf("The number %d has 3 digits \n", number);
    }
    else{
        printf("The number %d has 4 digits \n", number);
    }
    
    


    return 0;
}