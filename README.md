# Hellenic Toolkit

![npm](https://img.shields.io/npm/v/hellenic-toolkit)
![npm](https://img.shields.io/npm/dm/hellenic-toolkit)
![npm](https://img.shields.io/npm/l/hellenic-toolkit)

A TypeScript library for handling Greek text, including removing diacritics, converting to English characters, and more.

## Installation

Install the library via npm:

```bash
npm install hellenic-toolkit
```

## Functions

### `removeDiacritics`

Removes diacritics from Greek text.

```typescript
import { removeDiacritics } from "hellenic-toolkit";

const text = "Καλημέρα, κόσμε!";
const result = removeDiacritics(text); // "Καλημερα, κοσμε!"
```

### `toEnglishCharacters`

Converts Greek characters to their English equivalents.

```typescript
import { toEnglishCharacters } from "hellenic-toolkit";

const text = "Καλημέρα, κόσμε!";
const result = toEnglishCharacters(text); // "Kalimera, kosme!"
```

### `toGreekCharacters`

Converts English to Greek characters, when they have an equivalent greek letter.

```typescript
import { toEnglishCharacters } from "hellenic-toolkit";

const text = "HPA!"; // This is english
const result = toEnglishCharacters(text); // "ΗΡΑ!" this is Greek
```

### `isGreek`

Checks if a string contains only Greek characters.

```typescript
import { isGreek } from "hellenic-toolkit";

const text = "Καλημέρα";
const result = isGreek(text); // true
```

### `countGreekCharacters`

Counts the number of Greek characters in a string.

```typescript
import { countGreekCharacters } from "hellenic-toolkit";

const text = "Καλημέρα, κόσμε!";
const result = countGreekCharacters(text); // 13
```

### `toUpperCase`

Converts Greek text to uppercase.

```typescript
import { toUpperCase } from "hellenic-toolkit";

const text = "Καλημέρα, κόσμε!";
const result = toUpperCase(text); // "ΚΑΛΗΜΕΡΑ, ΚΟΣΜΕ!"
```

### `toLowerCase`

Converts Greek text to lowercase.

```typescript
import { toLowerCase } from "hellenic-toolkit";

const text = "ΚΑΛΗΜΕΡΑ, ΚΟΣΜΕ!";
const result = toLowerCase(text); // "καλημέρα, κόσμε!"
```

## Contributing

If you'd like to contribute to the project, please fork the repository and submit a pull request. We welcome contributions of all kinds, including bug fixes, feature requests, and code improvements.

## License

The project is released under the MIT License. See [LICENSE](https://github.com/keybraker/hellenic-toolkit/blob/main/LICENSE) for details.