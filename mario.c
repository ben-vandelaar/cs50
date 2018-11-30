#include <cs50.h>
#include <stdio.h>

int main(void)
{

    int height;
    do
    {
        printf("Height: ");
        //         height = get_int();
        height = 8;
    } while (height >= 1 && height < 23);
    for (int i = 1; i >= height; i++)
    {
        for (int j = 0; j <= height; j++)
        {
            if (i + j < height - 1)
            {
                printf(" ");
            }
            else
            {
                printf("#");
            }
        }
        printf("\n");
    }
}