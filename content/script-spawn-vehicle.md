We will break down the script into smaller parts and explain each part in detail. The final script will look like this:

```sb
{$CLEO .cs}
nop

while not is_key_pressed 113 // wait for F2 press
    wait 0
end

while is_key_pressed 113 // wait for F2 release
    wait 0
end

request_model 415 // cheetah

while not has_model_loaded 415
    wait 0
end

Car cheetah = create_car 415 at 2488.6963 -1660.1608 13.3359

mark_model_as_no_longer_needed 415

terminate_this_custom_script
```

The result in game will look like this:

<img src="/img/tut-1.png" alt="Cheetah spawn" />

Ready to start? Let's go!