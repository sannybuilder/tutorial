Many things in the game are extended in time or depend on the player feedback. A car driving to a destination, a model file loading from the disk, a button awaiting to be pressed all require a specific condition to become true. Did the car reach the point, was the specific button pressed, is the model available for use? If not, wait and check again later. 

We can validate certain condition continuosly, each frame, or with some delay. To achieve this in the code, a special construct exists: a loop.

The most common type of loop is a while loop. It will execute a block of code as long as the condition is true.

```
while <condition>
  <block of code>
end
```

For example, if we want to do something while the player can play (i.e. not dead or caught by the police), we can write:

```
while is_player_playing 0
  wait 0
end

terminate_this_script
```

The `wait 0` command is used to yield the execution for a frame, allowing the game to process other events and not freeze. It is crucial to have a `wait` command inside the loop body. 

Once the condition becomes false, the loop stops and the execution moves to `terminate_this_script` command.

The loop condition can be negated using the `not` operator. For example, if we want to wait until the model becomes available, we can write:

```
while not is_model_available 42
  wait 250
end
```

The script will be continuously checking if the model 42 is available, processing other game events between iterations.