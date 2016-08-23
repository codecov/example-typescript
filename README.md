# TypeScript Example
| [https://codecov.io][1] | [@codecov][2] | [hello@codecov.io][3] | IRC #codecov |
| ----------------------- | ------------- | --------------------- | ------------ |

[1]: https://codecov.io/
[2]: https://twitter.com/codecov
[3]: mailto:hello@codecov.io
[4]: https://github.com/codecov/codecov-bash

[![codecov](https://codecov.io/gh/codecov/example-typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/codecov/example-typescript)
[![Build Status](https://travis-ci.org/codecov/example-typescript.svg?branch=master)](https://travis-ci.org/codecov/example-typescript)

Run npm install:
```shell
npm install
```

Test:
```shell
npm test
```

# Frequently Asked Questions

####❔ No coverage reports are showing up?

Make sure you have enabled source mapping.

`typings install && tsc -p . --sourcemap`

Or in your `tsconfig.json`

```json
{
  "compilerOptions": {
    "sourceMap": true,
  }
}
```
