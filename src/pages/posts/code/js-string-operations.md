---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "JavaScript: String Operations"
pubDate: 01/04/2024
description: "Useful string operations in JavaScript."
author: "James Bridge"
url: "js-string-operations"
tags: ["Developement", "JavaScript", "TypeScript", "strings", "functions"]
---

Below are a range of useful string operations available in JavaScript

## Table of Contents

- [Basic Operations](#basic-operations)
  - [Concatenation](#concatenation)
  - [Length](#length)
- [Finding and Extracting](#finding-and-extracting)
  - [indexOf](#indexof)
  - [lastIndexOf](#lastindexof)
  - [slice](#slice)
  - [substring](#substring)
  - [substr](#substr) (Deprecated)
- [Comparison](#comparison)
  - [localeCompare](#localecompare)
- [Transformation](#transformation)
  - [toLowerCase](#tolowercase)
  - [toUpperCase](#touppercase)
  - [trim](#trim)
- [Matching](#matching)
  - [match](#match)
  - [matchAll](#matchall)
  - [startsWith](#startswith)
  - [endsWith](#endswith)
  - [includes](#includes)
- [Replacement](#replacement)
  - [replace](#replace)
  - [replaceAll](#replaceall)
- [Splitting](#splitting)
  - [split](#split)

## Basic Operations

### Concatenation

Combine two or more strings.

```javascript
let greeting = "Hello, ";
let name = "World!";
console.log(greeting + name); // "Hello, World!"
```

### Length

Find out how many characters are in a string

```javascript
let text = "Hello, World!";
console.log(text.length); // 13
```

## Finding and Extracting

### IndexOf

Find the first index number for a substring

```javascript
let text = "Hello, World!";
console.log(text.indexOf("World")); // 7
```

### LastIndexOf

Find the last index number for a substring

```javascript
let text = "Hello, World, Hello!";
console.log(text.lastIndexOf("Hello")); // 13
```

### Slice

Extracts a section of a string from startIndex to, but not including, endIndex. If endIndex is not provided, it extracts till the end of the string. If endIndex is negative, it's treated as strLength + endIndex where strLength is the string's length.

```javascript
let text = "Hello, World!";
console.log(text.slice(7, 12)); // "World"
```

### Substring

Extracts characters from startIndex up to, but not including, endIndex. If endIndex is not specified, extraction goes to the end of the string. Unlike slice(), if endIndex is less than startIndex, substring will swap the two arguments; slice will not.

```javascript
let text = "Hello, World!";
console.log(text.substring(7, 12)); // "World"
```

## Comparison

### localeCompare

Compares two strings in the current locale.

```javascript
console.log("a".localeCompare("b")); // -1
console.log("a".localeCompare("a")); // 0
console.log("b".localeCompare("a")); // 1
```

## Transform

### toLowerCase

Converts a string to lowercase letters.

```javascript
let text = "Hello, World!";
console.log(text.toLowerCase()); // "hello, world!"
```

### toUpperCase

Converts a string to uppercase letters.

```javascript
let text = "Hello, World!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"
```

### Trim

```javascript
let text = "   Hello, World!   ";
console.log(text.trim()); // "Hello, World!"
```

## Matching

### Match

Retrieves the result of matching a string against a regular expression.

```javascript
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/g)); // ["ain", "ain", "ain"]
```

### MatchAll

Returns an iterator of all results matching a string against a regular expression.

```javascript
let text = "The rain in SPAIN stays mainly in the plain";
let regex = /ain/g;
console.log(Array.from(text.matchAll(regex))); // [Array with matches]
```

### StartsWith

Determines whether a string begins with the characters of a specified string.

```javascript
let text = "Hello, World!";
console.log(text.startsWith("Hello")); // true
```

### EndsWith

Determines whether a string ends with the characters of a specified string.

```javascript
let text = "Hello, World!";
console.log(text.endsWith("World!")); // true
```

### Includes

Determines whether one string may be found within another string.

```javascript
let text = "Hello, World!";
console.log(text.includes("World")); // true
```

## Replacement

### Replace

Replaces occurrences of a substring with another substring in a string.

```javascript
let text = "Hello, World!";
console.log(text.replace("World", "JavaScript")); // "Hello, JavaScript!"
```

### ReplaceAll

Replaces all occurrences of a substring with another substring in a string.

```javascript
let text = "Hello, World! World is great.";
console.log(text.replaceAll("World", "JavaScript")); // "Hello, JavaScript! JavaScript is great."
```

## Splitting

### Split

Splits a string into an array of substrings based on a specified separator.

```javascript
let text = "Hello, World! How are you?";
console.log(text.split(" ")); // ["Hello,", "World!", "How", "are", "you?"]
console.log(text.split(", ")); // ["Hello", "World! How are you?"]
console.log(text.split("")); // Splits every character into an array
```
