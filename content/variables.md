A _variable_ is a named storage for a value. This value can change over time through the operation called assignment. A variable can be assigned a literal (e.g. a number or a string) or a value of another variable. For example:

```sb
int hour = 12
int minute = 30

hour = 13
minute = 0

hour = minute
```

The first two lines declare two variables, `hour` and `minute`, and assign them values `12` and `30` respectively. The next two lines change the values of these variables to `13` and `0`. Finally, the last line assigns the value of `minute` to `hour`. After this line, both `hour` and `minute` will have the value of `0`.

Variables that hold integer values are declared with the `int` keyword. You can then use them in commands that expect an integer number. For example:

```sb
int hour = 12
int minute = 30

set_time_of_day hour minute
```

This script will set the time of day to `12:30`.

Variables that hold floating-point values are declared with the `float` keyword. You can then use them in commands that expect a floating-point number. For example:

```sb
float timeScale = 0.5

set_time_scale timeScale
```

Variables that hold string values are declared with either `string` or `longstring` keywords. Again, we will discuss the difference between them later. You can then use string variables in commands that expect a string. For example:

```sb
string gxtKey = 'GXT_KEY'
longstring spriteName = "DOWN"

print_help gxtKey
load_sprite 1 spriteName
```
