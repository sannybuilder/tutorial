The game is single-threaded. It means when the game executes your CLEO script, it can't do anything else, like rendering the screen or processing user input.

If your script expects a certain condition to be met, like a model to become available, a character to be in a certain place, or a button to be pressed, you must use the [wait](https://library.sannybuilder.com/#/sa/default/0001) command to stop executing current script and return the control back to the game, otherwise it will freeze.

When the script is paused, the game proceeds to the next script in the queue, and eventually goes back to the game loop to process other things. On the next frame, the game checks if the time has passed for the script to continue. If it has, the game will resume the script from where it left off.

wait can also be used for static delays with fixed amount of time. For example, if you want to wait for 5 seconds before doing something, you can use `wait 5000` (5000 milliseconds = 5 seconds):

```sb
int hours, minutes
hours, minutes = get_time_of_day
print_formatted "Current time: %d:%d" 250 hours minutes
wait 5000 // 5000ms or 5sec
hours, minutes = get_time_of_day
print_formatted "Current time: %d:%d" 250 hours minutes
```

This script will print the current time, wait for 5 seconds, and then print the time again. Note how the time changes between the two prints.
