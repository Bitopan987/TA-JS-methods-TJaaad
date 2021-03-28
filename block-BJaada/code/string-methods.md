Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Return:A new string representing the calling string converted to upper case.
   - Example:
     ```js
     const sentence = "The quick brown fox jumps over the lazy dog.";
     console.log(sentence.toUpperCase()); //"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
     ```
   - The toUpperCase() method returns the value of the string converted to lowercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

3. `toLowerCase`

- Return:A new string representing the calling string converted to lower case.
  - Example:
    ```js
    const sentence = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";
    console.log(sentence.toUpperCase()); //"The quick brown fox jumps over the lazy dog."
    ```
  - The toLowerCase() method returns the value of the string converted to lowercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

4. `trim`

- Return:A new string representing the str stripped of whitespace from both ends.
  - Example:
    ```js
    var orig = "   foo  ";
    console.log(orig.trim()); // 'foo'
    var orig = "foo    ";
    console.log(orig.trim()); // 'foo'
    ```
  - The trim() method returns the string stripped of whitespace from both ends. trim() does not affect the value of the str itself.

5. `trimEnd`

- Return: A new string representing the calling string stripped of whitespace from its (right) end.

  - Example:

    ```js
    var str = "   foo  ";
    console.log(str.length); // 8
    str = str.trimEnd();
    console.log(str.length); // 6
    console.log(str); // ' foo'
    ```

  - The trimEnd() / trimRight() methods return the string stripped of whitespace from its right end. trimEnd() or trimRight() do not affect the value of the string itself.

6. `trimStart`

- Return:A new string representing the calling string stripped of whitespace from its beginning (left end).
  - Example:
    ```js
    var str = "   foo  ";
    console.log(str.length); // 8
    str = str.trimStart();
    console.log(str.length); // 5
    console.log(str); // 'foo  '
    ```
  - The trimStart() / trimLeft() methods return the string stripped of whitespace from its left end. trimLeft() or trimStart() do not affect the value of the string itself.

7. `concat`

- Parameter: Strings to concatenate to str.
- Return:A new string containing the combined text of the strings provided.

  - Example:

    ```js
    const str1 = "Hello";
    const str2 = "World";

    console.log(str1.concat(" ", str2));
    // expected output: "Hello World"

    console.log(str2.concat(", ", str1));
    // expected output: "World, Hello"
    ```

  - The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.

8. `endsWith`

- Parameter:(searchstring) - The characters to be searched for at the end of str. - length (optional)-If provided, it is used as the length of str. Defaults to str.length.
- Return:true if the given characters are found at the end of the string; otherwise, false.

  - Example:

    ```js
    const str1 = "Cats are the best!";

    console.log(str1.endsWith("best", 17));
    // expected output: true

    const str2 = "Is this a question";

    console.log(str2.endsWith("?"));
    // expected output: false
    ```

- This method lets you determine whether or not a string ends with another string. This method is case-sensitive.

9. `includes`

- Parameter:(searchstring) - A string to be searched for within str. - Position -The position within the string at which to begin searching for searchString. (Defaults to 0.)
- Return:true if the given characters are found at the end of the string; otherwise, false.

  - Example:

    ```js
    "Blue Whale".includes("blue"); // returns false
    const str = "To be, or not to be, that is the question.";
    console.log(str.includes("To be")); // true
    console.log(str.includes("question")); // true
    console.log(str.includes("nonexistent")); // false
    console.log(str.includes("To be", 1)); // false
    console.log(str.includes("TO BE")); // false
    console.log(str.includes("")); // true
    ```

- This method lets you determine whether or not a string includes another string.

10. `indexOf`

- Parameter:(searchValue) -The string value to search for.
  If no string is explicitly provided, searchValue will be coerced to "undefined", and this value will be searched for in str.
  So, for example: 'undefined'.indexOf() will return 0, as undefined is found at position 0 in the string undefined. 'undefine'.indexOf() however will return -1, as undefined is not found in the string undefine.
  -(fromIndex)An integer representing the index at which to start the search. Defaults to 0.

For fromIndex values lower than 0, or greater than str.length, the search starts at index 0 and str.length, respectively.

For example, 'hello world'.indexOf('o', -5) will return 4, as it starts at position 0, and o is found at position 4. On the other hand, 'hello world'.indexOf('o', 11) (and with any fromIndex value greater than 11) will return -1, as the search is started at position 11, a position after the end of the string.

- Return:The index of the first occurrence of searchValue, or -1 if not found.

  - Example:

    ```js
    "hello world".indexOf(""); // returns 0
    "hello world".indexOf("", 0); // returns 0
    "hello world".indexOf("", 3); // returns 3
    "hello world".indexOf("", 8); // returns 8
    "Blue Whale".indexOf("Blue"); // returns  0
    "Blue Whale".indexOf("Blute"); // returns -1
    "Blue Whale".indexOf("Whale", 0); // returns  5
    "Blue Whale".indexOf("Whale", 5); // returns  5
    "Blue Whale".indexOf("Whale", 7); // returns -1
    "Blue Whale".indexOf(""); // returns  0
    "Blue Whale".indexOf("", 9); // returns  9
    "Blue Whale".indexOf("", 10); // returns 10
    "Blue Whale".indexOf("", 11); // returns 10
    ```

- Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character of a string called stringName is stringName.length - 1.

11. `lastIndexOf`

- Parameter:(searchValue) - A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.
- fromIndex -The index of the last character in the string to be considered as the beginning of a match. The default value is +Infinity. If fromIndex >= str.length, the whole string is searched. If fromIndex < 0, the behavior will be the same as if it would be 0.
  Return value
- Return:The index of the last occurrence of searchValue; -1 if not found.

  - Example:

    ```js
    "canal".lastIndexOf("a"); // returns 3
    "canal".lastIndexOf("a", 2); // returns 1
    "canal".lastIndexOf("a", 0); // returns -1
    "canal".lastIndexOf("x"); // returns -1
    "canal".lastIndexOf("c", -5); // returns 0
    "canal".lastIndexOf("c", 0); // returns 0
    "canal".lastIndexOf(""); // returns 5
    "canal".lastIndexOf("", 2); // returns 2
    ```

- Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character is str.length - 1.

12. `padEnd`

- Parameter:(targetLength) - The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
- PadString(optional)-The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).
- Return:A String of the specified targetLength with the padString applied at the end of the current str.

  - Example:

    ```js
    "abc".padEnd(10); // "abc       "
    "abc".padEnd(10, "foo"); // "abcfoofoof"
    "abc".padEnd(6, "123456"); // "abc123"
    "abc".padEnd(1); // "abc"
    ```

- The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`

- Parameter:(targetLength) - The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
- PadString(optional)-The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end. The default value is " " (U+0020 'SPACE').
- Return:A String of the specified targetLength with padString applied from the start.

  - Example:

    ```js
    "abc".padStart(10); // "       abc"
    "abc".padStart(10, "foo"); // "foofoofabc"
    "abc".padStart(6, "123465"); // "123abc"
    "abc".padStart(8, "0"); // "00000abc"
    "abc".padStart(1); // "abc"
    ```

- The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

14. `repeat`

- Parameter:(count) - An integer between 0 and +Infinity, indicating the number of times to repeat the string.
- Return:A new string containing the specified number of copies of the given string.

  - Example:

    ```js
    "abc".repeat(-1); // RangeError
    "abc".repeat(0); // ''
    "abc".repeat(1); // 'abc'
    "abc".repeat(2); // 'abcabc'
    "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
    "abc".repeat(1 / 0); // RangeError
    ```

- The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`

- Parameter:(substr) - A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
- newSubstr - The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.
- Return:A new string, with some or all matches of a pattern replaced by a replacement.

  - Example:

    ```js
    let str = "Twas the night before Xmas...";
    let newstr = str.replace(/xmas/i, "Christmas");
    console.log(newstr); // Twas the night before Christmas...
    ```

- The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

16. `slice`

- Parameter:(beginIndex) - The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0.
  If beginIndex is greater than or equal to str.length, an empty string is returned.
  - endIndex - If endIndex is specified, endIndex should be greater than beginIndex, otherwise an empty string is returned. (For example, slice(-3, 0), slice(-1, -3), or slice(3, 1) returns "".)
- Return:A new string containing the extracted section of the string.

  - Example:

    ```js
    let str1 = "The morning is upon us."; // the length of str1 is 23.
    (str2 = str1.slice(1, 8)),
      (str3 = str1.slice(4, -2)),
      (str4 = str1.slice(12)),
      (str5 = str1.slice(30));
    console.log(str2); // OUTPUT: he morn
    console.log(str3); // OUTPUT: morning is upon u
    console.log(str4); // OUTPUT: is upon us.
    console.log(str5); // OUTPUT: ""
    ```

- The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`

- Parameter:(seperator) - The pattern describing where each split should occur. The separator can be a simple string or it can be a regular expression.
  - limit - A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.
- Return:An Array of strings, split at each point where the separator occurs in the given string.

  - Example:

    ```js
    const myString = "";
    const splits = myString.split();
    console.log(splits);
    ```

- The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

18. `substring`

- Parameter:(indexStart) - The index of the first character to include in the returned substring.
  - indexEnd -The index of the first character to exclude from the returned substring.
- Return:A new string containing the specified part of the given string.

  - Example:

    ```js
    let text = "Mozilla";
    console.log(text.substring(5, 2)); // => "zil"
    console.log(text.slice(5, 2)); // => ""
    console.log(text.substring(-5, 2)); // => "Mo"
    console.log(text.substring(-5, -2)); // => ""
    ```

- The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

```

```
