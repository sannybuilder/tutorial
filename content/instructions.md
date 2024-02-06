An `instruction` is a single operation in a CLEO script. It is the smallest unit of code. Sometimes, it is also called a `command`, or an `opcode`. Although there are some subtle differences, for the sake of simplicity we are going use these terms interchangeably.

In Sanny Builder each instruction is written on a separate line. An instruction ends at the end of the line.

Let's have a look at the shortest possible script that has only one instruction:

```cs
terminate_this_custom_script
```

`terminate_this_custom_script` is the command name. Like all names, it describes what this command does. Even if you never wrote a script before, you can probably guess it. Once the game encounters this command, it will stop executing the script. Without it, the game would try to read the next instruction that doesn't exist and crash.

Sanny Builder knows all available commands and their names. It is done thanks to the information available in Sanny Builder data files. [Sanny Builder Library](https://library.sannybuilder.com) is the website that serves as the source of this information. You can use it to learn more about available commands.
