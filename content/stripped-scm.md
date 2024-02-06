CLEO scripts can be tested on any game, but to make your life easier you can use a special mini version of `main.scm`, free from any storyline missions and extra scripts. This could serve as the playground for testing and debugging your code before releasing it. Historically, this mini version is called _stripped SCM_.

Stripped SCM only provides bare minimum to run the game.

Stripped SCM for San Andreas can be found in `Sanny Builder\data\sa_sbl\stripped scm` folder. To use it, copy the `main.scm` into the `San Andreas\data\script` folder. Don't forget to make a backup of the original `main.scm` file.

Alternatively, you can open `main.txt` located in the same folder and run `Run`->`Compile + Copy` (or press `F7`). As long as you have the game directory set in Sanny's options (`F10`) this will compile the script and copy it there.

Now, run San Andreas and start the new game. If you did everything right, you should see CJ standing in Grove Street.

<img src="/img/tut-5.png" alt="Grove Street" />