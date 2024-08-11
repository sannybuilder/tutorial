To invert the condition and produce a truthy result when the conditions is not met, use the `not` operator. This operator negates the condition that follows it.

```sb
if
    not is_player_playing 0
then
    // execute this code if the player is not playing
end
```

`not` can be used with math expressions as well:

```sb
if not x > 5 // if x is not greater than 5
then
    //
end
```

Some operators have a negated version, i.e. an operator that does the opposite. For example, `==` is the equality operator, and `<>` is the inequality operator. The following two conditions are equivalent:

```sb
not x == 5
x <> 5
```

Here is a list of negated operators:

| Operator | Negated operator |
| -------- | ---------------- |
| `==`     | `<>`             |
| `>`      | `<=`             |
| `<`      | `>=`             |
| `>=`     | `<`              |
| `<=`     | `>`              |
