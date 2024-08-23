To optimize your code and check for multiple conditions at once, you can use `if and`.

The `if and` statement allows up to `8` conditional instructions and executes the code only if _all_ of them return true:

```sb
if and
    is_key_pressed 114
    is_key_pressed 115
then
    // This code will execute only if both `F3` and `F4` keys are pressed.
end
```

Similarly, the `if or` statement also allows up to `8` conditional instructions but executes the code if any one of them returns true:

```sb
if or
    is_key_pressed 114
    is_key_pressed 115
then
    // This code will execute if either `F3` or `F4` key is pressed.
end
```

Unlike many programming languages, conditions in GTA scripts are not [lazy](https://en.wikipedia.org/wiki/Lazy_evaluation). The game will always evaluate all of them. It may result in a crash if conditions assume the result of the preceding conditions. For example, you can't check if a character exists and then check its location in the same if statement:

```sb
if and
    does_char_exist testChar
    not locate_char_any_means_char_3d testChar plc 100.0 100.0 100.0 false
then
...
end
```

This will crash the game if the character doesn't exist because the game will still try to check its location using an invalid handle.

<img src="/img/lazy-crash.png" alt="SCRLog Crash report" />

Instead, you should split these checks into separate if statements:

```sb
if 
    does_char_exist testChar
then
    if 
        not locate_char_any_means_char_3d testChar plc 100.0 100.0 100.0 false
    then
        ...
    end
end
```
