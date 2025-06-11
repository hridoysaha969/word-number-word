# Word-Number-Word 🔢 ↔️ 🔠

[![npm version](https://img.shields.io/npm/v/word-number-word.svg)](https://www.npmjs.com/package/word-number-word)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Types](https://img.shields.io/badge/%F0%9F%93%9D-TypeScript-blue)](https://www.typescriptlang.org/)
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)

> Convert numbers to words and words back to numbers — now with support for currency. Simple, accurate, and type-safe. Works seamlessly with JavaScript, TypeScript, Node.js, React, Next.js, and even from the CLI.

---

## ✨ Features

- 🔁 **Bi-directional conversion**
  - `42 → "forty-two"`
  - `"seven point five"` → `7.5`
- ✅ Supports **integers**, **negatives**, and **decimal numbers**
- 💰 Currency support (e.g., `10.25` ↔️ `"ten dollars and twenty-five cents"`)
- 🌍 Handles numbers up to **trillions**
- 💻 Works with **Node.js**, **browser environments**, and **CLI**
- 📦 Built with **TypeScript** & supports **ESM** and **CommonJS**
- 🔧 Lightweight and dependency-free

---

## 📦 Installation

```bash
npm install word-number-word
# or
yarn add word-number-word
```

---

## 🚀 Usage

### JavaScript / TypeScript

```ts
import {
  numberToWord,
  wordToNumber,
  currencyToWord,
  wordToCurrencyNumber,
} from "word-number-word";

// Basic usage
console.log(numberToWord(42)); // "forty-two"
console.log(wordToNumber("minus three")); // -3

// Currency support
console.log(currencyToWord(10.25, "usd")); // "ten dollars and twenty-five cents"
console.log(wordToCurrencyNumber("ten dollars and five cents", "usd")); // 10.05
```

### CLI Usage

```bash
npx word-number-word 123
# Output: "one hundred twenty-three"

npx word-number-word "two thousand and five"
# Output: 2005
```

---

## 📚 API Reference

| Function                                | Description                                                | Example                                                         |
| --------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| `numberToWord(num: number)`             | Converts a number to its word form                         | `numberToWord(123)` → `"one hundred twenty-three"`              |
| `wordToNumber(str: string)`             | Converts a word string into a number                       | `wordToNumber("five")` → `5`                                    |
| `currencyToWord(num: number, currency)` | Converts currency number to words (with major/minor units) | `currencyToWord(4.5, "usd")` → `"four dollars and fifty cents"` |
| `wordToCurrency(str, currency)`         | Converts word form currency to number                      | `wordToCurrency("ten dollars and five cents", "usd")` → `10.05` |

> **Note:** Currency codes supported `"usd"`, `"bdt"`, `"eur"`, `"gbp"`. Handles both `"forty-two"` and `"forty two"` formats.

---

## 🌐 Supported Environments

- ✅ Node.js (v14+)
- ✅ Modern Browsers
- ✅ TypeScript & JavaScript
- ✅ Frameworks: **React**, **Next.js**, **Express**, **Vite**, etc.
- ✅ CLI (via `npx` or install globally)

---

## 🧪 Examples

| Input                                                       | Output                           |
| ----------------------------------------------------------- | -------------------------------- |
| `123`                                                       | `"one hundred twenty-three"`     |
| `-99.5`                                                     | `"minus ninety-nine point five"` |
| `"fourteen"`                                                | `14`                             |
| `"minus two"`                                               | `-2`                             |
| `"three point one four"`                                    | `3.14`                           |
| `currencyToWord(4.5, "usd")`                                | `"four dollars and fifty cents"` |
| `wordToCurrencyNumber("ten dollars and five cents", "usd")` | `10.05`                          |

---

## 🛠️ CLI Installation (Optional)

Install globally for quick conversions in your terminal:

```bash
npm install -g word-number-word
```

Then use it anywhere:

```bash
word-number-word 456
# → "four hundred fifty-six"
```

---

## 📄 License

MIT License © [Hridoy Saha](https://github.com/hridoysaha969)

---

## 🙌 Contributing

Contributions, suggestions, and improvements are welcome!  
Feel free to [open an issue](https://github.com/hridoysaha969/word-number-word/issues) or submit a pull request.

---

## 📫 Contact

For support or feedback, reach out via [GitHub](https://github.com/hridoysaha969/word-number-word) or [LinkedIn](https://www.linkedin.com/in/sahahridoy/).
