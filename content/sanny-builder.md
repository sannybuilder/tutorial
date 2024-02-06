In essense, a CLEO _script_ is a set of instructions. It's original text form is called _source code_. Sanny Builder is the tool that reads the source and encodes each instruction into a format the game understands. It outputs a binary file, usually with a file extension `.cs` or `.scm`. This process is called _compilation_. The game reads the compiled script and executes the instructions in order, one at a time.

Sanny Builder can be downloaded from [https://sannybuilder.com](https://sannybuilder.com).

To compile a script, open it in Sanny Builder and run `Tools` -> `Compile`, or press `F6`. The compiled script will be saved next to the source code file. You may see something like this:

<img src="/img/comp-1.png" alt="Sanny Builder compilation report" />

Sanny Builder displays a report after compilation. Also the toolbar at the bottom of the window shows the time it took to compile the script (`16` ms in this case).

In addition to compiling scripts, Sanny Builder can also open compiled scripts and translate them back into text. This process is called _disassembling_. The output might differ from the original source code, as many things, such as variable names or comments, are lost during compilation.

Sanny Builder also offers a number of tools that help with writing scripts. For example, it can highlight the syntax, show the list of available commands, or automatically complete command names.

Information on available hotkeys and other features can be found in the [official documentation](https://docs.sannybuilder.com/editor/hotkeys).
