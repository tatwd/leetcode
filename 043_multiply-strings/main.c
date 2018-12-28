#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
   1 2 3
 x 4 5 6
--------------
   4 5 6
   0 9 1 2
 + 0 1 3 6 8
--------------
   5 6 0 8 8
*/

char* multiply(char* num1, char* num2)
{
    if (*num1 == '0' || *num2 == '0') return "0";

    int m = strlen(num1), n = strlen(num2);
    int len = (m > n ? m : n) * 2;
    char *s = malloc(sizeof(char) * len);

    for (int i = 0; i < len; ++i)
        *(s + i) = '\0';

    for (int i = 0; i < m; ++i) {
        int v1 = num1[i] - '0';
        int x = v1, r = 0, z = 0;
        char *p = s + i;

        for (int j = 0; j < n; ++j) {
            int old = *p == '\0' ? 0 : (*p - '0');
            int cur = x * (num2[j] - '0');

            z = cur / 10;
            int v = z + old + r;

            *p = (v % 10) + '0';
            for (char *q = p - 1; v >= 10; q--) {
                v = (*q + 1) - '0';
                *q = v % 10 + '0';
            }
            p++;
            r = cur % 10;
        }
        if (r != 0) *p++ = r + '0';
        *p = '\0';
        printf("s: %s\n", s);
    }
    return *s == '0' ? s + 1 : s;
}

// 测试
int main(void)
{
    // char *s2 = multiply("123", "456");
    // printf("%s\n", s2);
    // free(s2);

    char *s3 = multiply("123456789", "987654321");
    printf("%s\n", s3); /* should output "121932631112635269" */
    free(s3);

    // char *s4 = multiply("9333", "0");
    // printf("%s\n", s4);
    // free(s4);

    // char *s5 = multiply("999", "999");
    // printf("%s\n", s5);
    // free(s5);

    return 0;
}



