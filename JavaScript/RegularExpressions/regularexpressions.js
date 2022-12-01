// Regular Expressions
// Regular expressions are patterns used to match character combinations in strings.
// In JavaScript, regular expressions are also objects. These patterns are used with
// the exec and test methods of RegExp, and with the match, replace, search, and
// split methods of String.

// Flags
// The following flags are supported:
// *=============================================================================*                                          
// |  FLAG                            | DESCRIPTION                              |
// |-----------------------------------------------------------------------------|
// |  g                               | Global search                            |
// |-----------------------------------------------------------------------------|
// |  i                               | Case-insensitive search                  |
// |-----------------------------------------------------------------------------|
// |  m                               | Multiline search                         |
// |-----------------------------------------------------------------------------|
// |  s                               | Allows . to match newline characters     |
// |-----------------------------------------------------------------------------|
// |  u                               | Treat pattern as a sequence of UTF-16    |
// |-----------------------------------------------------------------------------|
// |  y                               | Perform a "sticky" search that matches   |
// |                                  | starting at the current position in the  |
// |                                  | target string                            |
// *=============================================================================*

var text = "cat, bat, sat, fat";
var pattern = /.at/gi;

// The exec() method executes a search for a match in a specified string. Returns a
// result array, or null.
var matches = pattern.exec(text);
console.log(matches.index)
console.log(matches[0])

// The test() method executes a search for a match between a regular expression and
// a specified string. Returns true or false.
var pos = text.search(/at/);
console.log(pos)

// The replace() method returns a new string with some or all matches of a pattern
// replaced by a replacement. The pattern can be a string or a RegExp, and the
// replacement can be a string or a function to be called for each match. If pattern
// is a string, only the first occurrence will be replaced.
var result = text.replace(/at/, "ond");
var resultTwo = text.replace(/at/g, "ond");
console.log(result);
console.log(resultTwo);


// Meta Characters
// The following table lists the meta characters in regular expressions. These
// characters are interpreted differently than they are in normal strings.
// *==============================================================================*
// |  CHARACTER                        | DESCRIPTION                              |
// |------------------------------------------------------------------------------|
// |  ( )                              | Grouping                                 |
// |------------------------------------------------------------------------------|
// |  [ ]                              | Character Classes                        |
// |------------------------------------------------------------------------------|
// |  { }                              | Quantifiers                              |
// |------------------------------------------------------------------------------|
// |  \                                | Escape character aka Back Reference      |
// |------------------------------------------------------------------------------|
// |  ^                                | Start of input                           |
// |------------------------------------------------------------------------------|
// |  $                                | End of input                             |
// |------------------------------------------------------------------------------|
// |  .                                | Any character                            |
// |------------------------------------------------------------------------------|
// |  ?                                | Match zero or one of the preceding token |
// |------------------------------------------------------------------------------|
// |  *                                | Match zero or more of the preceding token|
// |------------------------------------------------------------------------------|
// |  +                                | Match one or more of the preceding token |
// |------------------------------------------------------------------------------|
// |  |                                | Alternation                              |
// |------------------------------------------------------------------------------|
// |  /                                | Line break                               |
// *==============================================================================*

// Character Classes
// Character classes allow you to define a group of characters you wish to match by
// placing them inside square brackets.
// *==============================================================================*
// |  CHARACTER                        | DESCRIPTION                              |
// |------------------------------------------------------------------------------|
// |  [abc]                            | A, B, or C                               |
// |------------------------------------------------------------------------------|
// |  [^abc]                           | Any character except A, B, or C          |
// |------------------------------------------------------------------------------|
// |  [a-zA-Z]                         | Any character in the range A through Z   |
// |------------------------------------------------------------------------------|
// |  [0-9]                            | Any character in the range 0 through 9   |
// |------------------------------------------------------------------------------|
// |  [a-d[m-p]]                       | a through d, or m through p: [a-dm-p]    |
// |------------------------------------------------------------------------------|
// |  [a-z&&[def]]                     | d, e, or f (intersection)                |
// |------------------------------------------------------------------------------|
// |  [a-z&&[^bc]]                     | a through z, except for b and c: [ad-z]  |
// |------------------------------------------------------------------------------|
// |  [a-z&&[^m-p]]                    | a through z, and not m to p: [a-lq-z]    |
// *==============================================================================*

// Quantifiers
// Quantifiers specify the number of times a character, group, or character class
// should be matched.
// *==============================================================================*
// |  CHARACTER                        | DESCRIPTION                              |
// |------------------------------------------------------------------------------|
// |  X?                               | X, once or not at all                    |
// |------------------------------------------------------------------------------|
// |  X*                               | X, zero or more times                    |
// |------------------------------------------------------------------------------|
// |  X+                               | X, one or more times                     |
// |------------------------------------------------------------------------------|
// |  X{n}                             | X, exactly n times                       |
// |------------------------------------------------------------------------------|
// |  X{n,}                            | X, at least n times                      |
// |------------------------------------------------------------------------------|
// |  X{n,m}                           | X, at least n but not more than m times  |
// *==============================================================================*

// Grouping
// Grouping parentheses are used to create subexpressions. The contents of a group
// can be retrieved after a match.
// *==============================================================================*
// |  CHARACTER                        | DESCRIPTION                              |
// |------------------------------------------------------------------------------|
// |  (X)                              | Capture group                            |
// |------------------------------------------------------------------------------|
// |  (?:X)                            | Non-capturing group                      |
// |------------------------------------------------------------------------------|
// |  (?=X)                            | Positive lookahead                       |
// |------------------------------------------------------------------------------|
// |  (?!X)                            | Negative lookahead                       |
// |------------------------------------------------------------------------------|
// |  (?<=X)                           | Positive lookbehind                      |
// |------------------------------------------------------------------------------|
// |  (?<!X)                           | Negative lookbehind                      |
// |------------------------------------------------------------------------------|
// |  (?>X)                            | Independent subexpression                |
// *==============================================================================*

// Back References
// Back references are used to match the same text as previously matched by a
// capturing group.
// *==============================================================================*
// |  CHARACTER                        | DESCRIPTION                              |
// |------------------------------------------------------------------------------|
// |  \n                               | Where n is a positive integer less than 9|
// |                                   | and less than the total number of        |
// |                                   | capturing groups in the regular          |
// |                                   | expression.                              |
// *==============================================================================*

// Boundary Matchers
// Boundary matchers match at positions that are not included in the match.
// *==============================================================================*
// |  CHARACTER                        | DESCRIPTION                              |
// |------------------------------------------------------------------------------|
// |  ^                                | Matches the beginning of a line          |
// |------------------------------------------------------------------------------|
// |  $                                | Matches the end of a line                |
// |------------------------------------------------------------------------------|
// |  \b                               | Matches a word boundary                  |
// |------------------------------------------------------------------------------|
// |  \B                               | Matches a non-word boundary              |
// |------------------------------------------------------------------------------|
// |  \A                               | Matches the beginning of the input       |
// |------------------------------------------------------------------------------|
// |  \G                               | Matches the end of the previous match    |
// |------------------------------------------------------------------------------|
// |  \Z                               | Matches the end of the input but for the |
// |                                   | final terminator, if any                 |
// |------------------------------------------------------------------------------|
// |  \z                               | Matches the end of the input             |
// *==============================================================================*

// Common Web Development Patterns
// *===============================================================================*
// |  CHARACTER                           | DESCRIPTION                            |
// |-------------------------------------------------------------------------------|
// |  ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+   | Email address                          |
// |-------------------------------------------------------------------------------|
// |  ^\d{3}-\d{3}-\d{4}$                 | Phone number                           |
// |-------------------------------------------------------------------------------|
// |  ^\d{5}(-\d{4})?$                    | US zip code                            |
// |-------------------------------------------------------------------------------|
// |^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$ | Password (8 characters, 1 uppercase,   |
// |                                      | 1 lowercase, 1 number)                 |
// *===============================================================================*


