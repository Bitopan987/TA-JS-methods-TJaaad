Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

- Parameter: (seperator) Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.

  - Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
  - Example:

    ```js
    const elements = ["Fire", "Air", "Water"];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"

    console.log(elements.join(""));
    // expected output: "FireAirWater"

    console.log(elements.join("-"));
    // expected output: "Fire-Air-Water"

    var a = ["Wind", "Water", "Fire"];
    a.join(); // 'Wind,Water,Fire'
    a.join(", "); // 'Wind, Water, Fire'
    a.join(" + "); // 'Wind + Water + Fire'
    a.join(""); // 'WindWaterFire'
    ```

  - The string conversions of all array elements are joined into one string.
  - No it does not mutate the original array

3. `flat`

- Parameter:(depth - optional) The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
- Return: A new array with the sub-array elements concatenated into it.

  - Example:

    ```js
    const arr1 = [1, 2, [3, 4]];
    arr1.flat();
    // [1, 2, 3, 4]

    const arr2 = [1, 2, [3, 4, [5, 6]]];
    arr2.flat();
    // [1, 2, 3, 4, [5, 6]]

    const arr3 = [1, 2, [3, 4, [5, 6]]];
    arr3.flat(2);
    // [1, 2, 3, 4, 5, 6]

    const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    arr4.flat(Infinity);
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ```

  - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  - No it does not mutate the original array

4. `push`

- Parameter:(element) The element(s) to add to the end of the array.
- Return: The new length property of the object upon which the method was called.

  - Example:

    ```js
    const animals = ["pigs", "goats", "sheep"];

    const count = animals.push("cows");
    console.log(count);
    // expected output: 4
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]

    animals.push("chickens", "cats", "dogs");
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
    ```

  - The push method appends values to an array.
  - It mutate the original array

5. `indexOf`

- Parameter:(search element) Element to locate in the array.
- fromIndex - The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched.
- Return: The first index of the element in the array; -1 if not found.

  - Example:

    ```js
    const beasts = ["ant", "bison", "camel", "duck", "bison"];

    console.log(beasts.indexOf("bison"));
    // expected output: 1

    // start from index 2
    console.log(beasts.indexOf("bison", 2));
    // expected output: 4

    console.log(beasts.indexOf("giraffe"));
    // expected output: -1
    ```

  - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  - No it does not mutate the original array

6. `lastIndexOf`

- Parameter:(search element) Element to locate in the array.
- fromIndex - The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), i.e. the whole array will be searched.
- Return: The last index of the element in the array; -1 if not found.

  - Example:

    ```js
    var numbers = [2, 5, 9, 2];
    numbers.lastIndexOf(2); // 3
    numbers.lastIndexOf(7); // -1
    numbers.lastIndexOf(2, 3); // 3
    numbers.lastIndexOf(2, 2); // 0
    numbers.lastIndexOf(2, -2); // 0
    numbers.lastIndexOf(2, -1); // 3
    const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

    console.log(animals.lastIndexOf("Dodo"));
    // expected output: 3

    console.log(animals.lastIndexOf("Tiger"));
    // expected output: 1
    ```

  - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
  - No it does not mutate the original array

7. `includes`

- Parameter:(value ToFind) Element to locate in the array.
- fromIndex - The position in this array at which to begin searching for valueToFind.
- Return: A Boolean which is true if the value valueToFind is found within the array (or the part of the array indicated by the index fromIndex, if specified).

  - Example:

    ```js
    [1, 2, 3]
      .includes(2) // true
      [(1, 2, 3)].includes(4) // false
      [(1, 2, 3)].includes(3, 3) // false
      [(1, 2, 3)].includes(3, -1) // true
      [(1, 2, NaN)].includes(NaN); // true
    ```

  - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
  - No it does not mutate the original array

8. `reverse`

- Return: The reversed array.

  - Example:

    ```js
    const array1 = ["one", "two", "three"];
    console.log("array1:", array1);
    // expected output: "array1:" Array ["one", "two", "three"]

    const reversed = array1.reverse();
    console.log("reversed:", reversed);
    // expected output: "reversed:" Array ["three", "two", "one"]

    // Careful: reverse is destructive -- it changes the original array.
    console.log("array1:", array1);
    // expected output: "array1:" Array ["three", "two", "one"]
    ```

  - The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.
  - It mutates the original array

9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
