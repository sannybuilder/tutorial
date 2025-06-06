`while true` is an infinite loop. It ends only with the `break` command or when the script is ended (e.g. using `terminate_this_script`).

It is often used to create the main body of a CLEO script which constantly awaits for the player input.

```
while true
    wait 0
    if
        is_key_pressed 113 // F2
    then
        break
    end

    add_score {player} 0 {money} 10
end
terminate_this_script
```

This loop adds $1 to the player's account each frame until the F2 button is pressed to exit the loop. Note that after breaking from the loop, the script continues to the next command, which is `terminate_this_script`.

