# Word-Number-Word Converter 🔢↔️🔠

A lightweight, type-safe JavaScript/TypeScript library to convert numbers to words (e.g., `42` → `"forty-two"`) and vice versa. Supports **React, Node.js, Next.js**, and **CLI usage**.

## Features

- ✅ Convert numbers to words (up to trillions)
- ✅ Convert words to numbers (e.g., `"seven"` → `7`)
- ✅ Supports **negative numbers** and **decimals** (`-5.2` → `"minus five point two"`)
- ✅ **TypeScript** and **ESM/CommonJS** compatible
- ✅ Includes **CLI tool** for terminal usage

## Install

```bash
npm install word-number-word
```

## Usage

### JavaScript/TypeScript

```ts
import { numberToWord, wordToNumber } from "word-number-word";

console.log(numberToWord(42)); // "forty-two"
console.log(wordToNumber("seven")); // 7
```

## API

| Function                     | Description              | Example                                            |
| ---------------------------- | ------------------------ | -------------------------------------------------- |
| `numberToWord(num: number)`  | Converts number to words | `numberToWord(123)` → `"one hundred twenty-three"` |
| `wordToNumber(word: string)` | Converts words to number | `wordToNumber("five")` → `5`                       |

## License

MIT © [Hridoy Saha](https://github.com/hridoysaha969/word-number-word?tab=MIT-1-ov-file)
