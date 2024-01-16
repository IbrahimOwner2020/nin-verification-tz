# tanzanian-nin-verifier

**Verify Tanzanian National Identification Numbers (NIN) with ease using the `tanzanian-nin-verifier` npm package.**

## Features

-   **Easy Integration:** Quickly integrate NIN verification into your Node.js applications.
-   **Robust Error Handling:** Handle errors gracefully and receive detailed error messages for effective debugging.
-   **Asynchronous:** Leverage asynchronous operations for non-blocking verification requests.
-   **TypeScript Support:** Written in TypeScript for enhanced code quality and static type checking.

## Usage

### Installation

```bash
npm install nin-verification-tz
```

### Importing

```javascript
import { verifyNIN } from "nin-verification-tz";
```

### Verifying NIN

```javascript
const nin = "1234567890123";
const result = await verifyNIN(nin);
console.log(result);
```
