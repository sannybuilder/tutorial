Often times you want to run some code only if a certain condition is met. For example, you might want to show a message if a certain button pressed.

To do this, you can use the `if` statement. It has the following syntax:

```sb
if <condition>
then
// code to run if condition is true
end
```

where `<condition>` is a single conditional instruction. It is written just like any other command, but after execution it changes the status of the current `if` statement to `true` or `false`. 

If the status is `true`, the code inside the `then..end` block is executed. If the status is `false`, the code inside the `then..end` block is skipped:

```sb
if is_key_pressed 113 // F2
then
    print_help 'HELP_F2'
end
```

This script will show a help message only if the `F2` key is pressed. 