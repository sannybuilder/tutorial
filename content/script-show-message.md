Let's write our first script. We already know all the necessary elements to get started.

Create a new CLEO script file by clicking `File` -> `New CLEO Script...`.

<img src="/img/comp-2.png" alt="New CLEO script menu" width="400"/>

After `nop` add a new line:

```cs
print_string_now "Hello, world!" 2000
```

Your script should look like this:

```cs
{$CLEO .cs}
nop

print_string_now "Hello, world!" 2000

terminate_this_custom_script
```


Save the file under any name, e.g. `show_message.txt`. Click `Run` -> `Compile + Copy` or press `F7` to compile the script and copy it to the game folder.

<img src="/img/comp-3.png" alt="Compile+Copy menu" width="400"/>

If it did not work, set the path to the game folder in the settings `F10`.

<img src="/img/comp-4.png" alt="Game Directory setting" width="200"/>

Now click `Run` -> `Run San Andreas` or press `F8` to run the game.

Start a new game or load a save. You should see a message:

<img src="/img/hands-on-1.png" alt="Hello, world!" width="400"/>

Congratulations! If you are curious to know what `2000` means in `print_string_now`, check the [documentation](https://library.sannybuilder.com/#/sa/CLEO/0ACD). It controls how long the message is displayed. The value is in milliseconds. Try changing it to `20000` and see what happens.

*If you don't see the text, check the CLEO folder in the game directory. It should contain the compiled script file with the same name as the source file (e.g. `show_message.cs`). If it is there but the message is still not showing, check the CLEO log file (`.cleo.log`) in the CLEO folder. It may contain error messages.*

What's next?

Try changing the text and recompile the script. Run a new game and observe the changes. Try to replace `print_string_now` with `print_big_string`. Note that `print_big_string` has an extra third parameter, which is the style of the text. You can find more information about it in [SBL](https://library.sannybuilder.com/#/sa/CLEO/0ACB).