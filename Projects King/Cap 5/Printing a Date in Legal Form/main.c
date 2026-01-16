/*
*Objective: Get a specific format of date and print in legal form.
*Author [Anthoni]
*Date: 01/15/2026
*/


#include <stdio.h>

int main(void)
{
    // Variables
    int day, month, year;

    // Data
    printf("Enter date (mm/dd/yy): ");
    scanf("%d/%d/%2d", &month, &day, &year);

    printf("Dated this ");

    printf("%d", day);

    // Statement
    if (day == 11 || day == 12 || day == 13)
    {
        printf("th");
    }
    else
    {
        switch (day % 10)
        {
        case 1:
            printf("st");
            break;
        case 2:
            printf("nd");
            break;
        case 3:
            printf("rd");
            break;
        default:
            printf("th");
            break;
        }
    }

    printf(" day of ");

    // Statement
    switch (month)
    {
    case 1:
        printf("January");
        break;
    case 2:
        printf("February");
        break;
    case 3:
        printf("March");
        break;
    case 4:
        printf("April");
        break;
    case 5:
        printf("May");
        break;
    case 6:
        printf("June");
        break;
    case 7:
        printf("July");
        break;
    case 8:
        printf("August");
        break;
    case 9:
        printf("September");
        break;
    case 10:
        printf("October");
        break;
    case 11:
        printf("November");
        break;
    case 12:
        printf("December");
        break;
    default:
        printf("ERROR");
        break;
    }

    // Results
    printf(", 20%.2d.\n", year);

    return 0;
}