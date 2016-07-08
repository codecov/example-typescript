# Typescript Example
| [https://codecov.io][1] | [@codecov][2] | [hello@codecov.io][3] | IRC #codecov |
| ----------------------- | ------------- | --------------------- | ------------ |

[1]: https://codecov.io/
[2]: https://twitter.com/codecov
[3]: mailto:hello@codecov.io
[4]: https://github.com/codecov/codecov-bash

[![codecov](https://codecov.io/gh/codecov/example-typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/eddiemoore/example-typescript)
[![Build Status](https://travis-ci.org/codecov/example-typescript.svg?branch=master)](https://travis-ci.org/eddiemoore/example-typescript)

Run npm install:
```shell
npm install
```

Test:
```shell
npm test
```

##Istanbul Tool

In case you use istanbul instead of nyc to remap your .ts files, make sure your coverage-final.json file get remapped in the posttest
 task.
Your posttest task in this case should look like this:

```json
"posttest": "node_modules/.bin/remap-istanbul -i coverage/report/coverage-final.json -o coverage/report/coverage-final.json",
```

This configuration can slightly change based on the name and the position of your coverage file.
