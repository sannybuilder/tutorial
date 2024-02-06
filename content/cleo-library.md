_CLEO Library_ is a custom tool developed to extend the scripting capabilities of GTA San Andreas. 

The vanilla game has scripts that control the gameplay. They can be found in a binary file called `main.scm`. Editing game scripts is possible and many authors do so for larger mods, but it's far from being beginner-friendly. Any time you change `main.scm` you have to start a new game. `main.scm` has a very specific structure and the process of adding new scripts there is convoluted.

Here is where CLEO comes to the rescue. Managing CLEO scripts is much easier. Each script is a separate file, usually with `.cs` extension. To make the game aware of it, you just need to copy this file into the `CLEO` folder, which can be found in the game's root folder after you install CLEO Library. CLEO finds all `.cs` files in this folder and runs them automatically. You don't have to start a new game when you add a new CLEO script.

Removing a CLEO script is as easy as deleting its file from the `CLEO` folder.

CLEO Library can be found on the official website: https://cleo.li.
