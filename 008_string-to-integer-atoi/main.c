#include <stdio.h>
#include <limits.h>
#include <ctype.h>

int myAtoi(char *str)
{
    if (str == NULL || *str == '\0')
        return 0;

    int res = 0, sign = 1, c = 0;
    char *p = str;

    /* 排除空格 */
    for (; isspace(*p); p++)
        ;

    /* 确定符号 */
    if (*p == '-') {
        sign = -1;
        p++;
    } else if (*p == '+') {
        p++;
    }

    for (; *p != '\0' && isdigit(*p); p++) {
        c = *p - '0';

        /* 溢出检查 */
        if ((res > INT_MAX / 10) || (res == INT_MAX / 10 && c > 7))
            return INT_MAX;
        if ((res < INT_MIN / 10) || (res == INT_MIN / 10 && c > 8))
            return INT_MIN;

        res = res * 10 + sign * c;
    }
    return res;
}

/* 测试 */
int main(int argc, char const *argv[])
{
    char *strs[] = {
        "",
        "42",
        "+1",
        "   -42",
        "4193 with words",
        "words and 987",
        "-91283472332",
        "-2147483649"
    };
    for (int i = 0; i < 8; ++i)
    {
        int result = myAtoi(strs[i]);
        printf("\"%s\" => %d\n", strs[i], result);
    }
    return 0;
}
