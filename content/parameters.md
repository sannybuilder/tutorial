Most of the commands require additional information to work. For example, the command `create_car` requires a model of the car and the coordinates of the spawn location. This additional information is called _parameters_. Parameters are separated from the command name by a space:

```cs
set_time_of_day 12 30
```

`set_time_of_day` sets the game clock. It needs two integer numbers, one for the hour and one for the minute, which is why it's followed by `12` and `30`. When the game encounters this instruction, it will set the time of day to `12:30`.

Parameters can be numbers, strings, or variables. We will discuss variables later. For now, let's focus on numbers and strings. For the purpose of this tutorial, we will call them _literals_.