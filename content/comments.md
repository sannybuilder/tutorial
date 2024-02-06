A _comment_ is a piece of text that is ignored by the compiler. Comments may serve as extra documentation, or to temporarily disable a part of the code.

Line comments start with `//` and end with the end of the line. For example:

```cs
// End of script
terminate_this_custom_script;
```

Or:

```cs
terminate_this_custom_script; // End of script
```

Block comments start with `/*` and end with `*/`. They can span multiple lines:

```cs
/*
 This is a multi-line comment.
 It spans multiple lines.
*/
```

Or used in the middle of the code:

```cs
set_time_of_day /* hours */ 12 /* minutes */ 30
```

Block comments can not be nested. For example, the following code is invalid:

```cs
/* This is a comment /* This is a nested comment */ */
```
