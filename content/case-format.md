Keywords and variable names in Sanny Builder are case insensitive. `INT variable` and `int Variable` are the same thing.

```cs
INT variable = 1

Variable = 2
```

String literals are encoded as is.

```cs
string key1 = 'GXT_KEY'
string key2 = 'gxt_key'
```

Compiled file will contain two character sequences `GXT_KEY` and `gxt_key`. The game will treat them as different strings. The game might not work as expected if you use the wrong case.
