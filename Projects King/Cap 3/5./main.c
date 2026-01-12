#include <stdio.h>
/*
*Objective: Write a program that asks the user to enter the numbers from 1 to 16  (in any order)
and then displays the numbers in a 4 by 4 arrangement. followed by the sums of the rows, columns, and diagonals.
*Author [Anthoni]
*Date 01/11/2026
*/
int main(void)
{
    // Variables
    int n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16, rs1, rs2, rs3, rs4, cs1, cs2, cs3, cs4, ds1, ds2;

    // Date
    printf("Enter the number from 1 to 16 in any order:\n");
    scanf("%d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d",
          &n1, &n2, &n3, &n4, &n5, &n6, &n7, &n8, &n9, &n10, &n11, &n12, &n13, &n14, &n15, &n16);
    printf("%2d %2d %2d %2d \n%2d %2d %2d %2d \n%2d %2d %2d %2d \n%2d %2d %2d %2d \n\n",
           n1, n2, n3, n4,
           n5, n6, n7, n8,
           n9, n10, n11, n12,
           n13, n14, n15, n16);
    // Expressions
    rs1 = n1 + n2 + n3 + n4;
    rs2 = n5 + n6 + n7 + n8;
    rs3 = n9 + n10 + n11 + n12;
    rs4 = n13 + n14 + n15 + n16;

    cs1 = n1 + n5 + n9 + n13;
    cs2 = n2 + n6 + n10 + n14;
    cs3 = n3 + n7 + n11 + n15;
    cs4 = n4 + n8 + n12 + n16;

    ds1 = n1 + n6 + n11 + n16;
    ds2 = n4 + n7 + n10 + n13;

    // Results
    printf("Row sums: %d %d %d %d \n", rs1, rs2, rs3, rs4);
    printf("Column sums: %d %d %d %d \n", cs1, cs2, cs3, cs4);
    printf("Diagonal sums: %d %d \n", ds1, ds2);

    return 0;
}