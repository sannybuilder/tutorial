The last piece to learn before writing a CLEO script is to understand how to compile it and see in the game.

Sanny Builder makes it trivial. You need to go to `File` -> `New CLEO script...`. 

<img src="/img/comp-2.png" alt="New CLEO script menu" width="400"/>

Sanny Builder will create a basic template for you:

```cs
{$CLEO .cs}
nop

terminate_this_custom_script
```

Here you can see two commands: `nop` and `terminate_this_custom_script`, one that we saw already. `nop` does nothing, it is just a placeholder, but it comes in handy when using loops. We will discuss them in the next chapter. For now you can simply ignore or delete this line.

The key part here is the first line: `{$CLEO .cs}`. Lines enclosed in `{$...}` are _directives_. They are special commands that alter Sanny Builder's behavior during [compilation](./sanny-builder). 

`$CLEO` directive tells Sanny Builder to compile the script as a separate file with `.cs` extension. All you need to do after it is to copy the compiled file into the game folder. Sanny Builder will do it for you if you press `F7` or go to `Run` -> `Compile + Copy`.

<img src="/img/comp-3.png" alt="Compile+Copy menu" width="400"/>


Without `{$CLEO}` this script will be compiled into a `main.scm` file.