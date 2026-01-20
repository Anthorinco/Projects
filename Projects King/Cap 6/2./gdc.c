/*
*Objective: Find the greatest common divisor of two numbers.
*Author: [Anthoni]
*Date: 01/20/2026
*/


#include <stdio.h>

int main(void){
    // Variables
    int n, m, gcd = 0;
    // Data
    printf("Enter two integers: ");
    scanf("%d %d", &n, &m);
    // Statement
    for (int i = 1; i <= n && i <= m; i++){
        if (n % i == 0 && m % i == 0)
        {
            gcd = i;
        }
        
    }
    // Result
    printf("Greatest common divisor: %d \n", gcd);

    return 0;
}