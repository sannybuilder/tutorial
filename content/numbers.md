Numbers are the most common type of data in CLEO scripts. They are used to represent many things, such as coordinates, time, or money.

There are two types of numbers: integers and floats. Integers are whole numbers, such as `1`, `2`, `3`, `-100`, etc. They usually represent counts of something, such as the number of bullets in a gun, or IDs of objects in the game world.

Floats are numbers with a decimal point, such as `1.0`, `2.5`, `3.14`, etc. They usually represent physical quantities, such as speed and time, or coordinates of objects in the game world.

```sb
set_time_scale 0.5
set_car_density_multiplier 1.0
```

Note that `1.0` is a float, whereas `1` is an integer. The compiler and the game treat them differently. Always check the command description to see what type of number it expects. If it needs a float, you must write a number with a decimal point. If it needs an integer, you must write a number without a decimal point.
