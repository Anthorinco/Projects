// write a single expression whose value is either -1, 0 or +1, depending
// on whether i is less than, equal to, or greater than j, respectively
#include <stdio.h>

int main(void){

    int i, j;
    i = 2;
    j = 2;
    printf("%d \n", (i > j) - (i < j));

    return 0;
}