When checking for a condition, you can also specify what to do if the condition is not met. This is done with the `else` keyword.

An `if` statement with `else` has the following syntax:

```cs
if <condition>
then
// code to run if condition is true
else
// code to run if condition is false
end
```

Note that you can't use `else` without `then`, and the `else` block must follow the `then` block.

Example:

```cs
if is_key_pressed 113 // F2
then
    print_help 'HELP_F2' // show message if F2 is pressed
else
    terminate_this_custom_script // otherwise terminate the script
end
```
