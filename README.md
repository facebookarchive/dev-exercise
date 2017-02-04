# Vidpresso Take Home Developer Exercise

## Instructions

There are 5 functions in this exercise:
- createObject
- findChildren
- getElement
- readFile
- say


For each function, there are associated tests that are all currently failing. To complete this exercise, make all the tests pass.

To run the tests:
`$ npm test`

You are free to implement each function as you see fit, but none of the specs themselves are allowed to change. The specs could be a good place to get some hints for how to do your implementation. All the specs are in `spec` folder.

## How each function should work

### createObject

This function should take one string as an argument that returns an object with a `getMessage` function. When `getMessage` is called, it should simply return the string that was supplied to `createObject`. The function `getMessage` should be defined on the object's prototype, not the object itself.


### findChildren

This function takes two arguments. The first argument is a string `id` and the second argument is a `tree` object. Each node in the tree has an `id` and `children` property. `children` is an array of nodes that each have their on `id` and `children` property.

This function should find the node with the supplied `id` and return its children. If no node is found, it should return null.


### getElement

This function takes a document and a valid CSS selector string as an argument. It should return the first element from the document that matches the selector. If no element is found, should return null.

### readFile

This function should open a file and read its contents as JSON. The argument to this function is the path of the file to be opened. If file doesn't exist, it should reject the promise.

### say

This function takes a single string as an argument. It's return value should allow you to supply another string that can be added to the first string.
