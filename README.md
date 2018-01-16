# [Codecov][1] TypeScript Example

[1]: https://codecov.io/
[2]: https://twitter.com/codecov
[3]: mailto:hello@codecov.io
[4]: https://github.com/codecov/codecov-bash

[![codecov](https://codecov.io/gh/codecov/example-typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/codecov/example-typescript)
[![Build Status](https://travis-ci.org/codecov/example-typescript.svg?branch=master)](https://travis-ci.org/codecov/example-typescript)

## Guide
### Travis Setup
Add to your `.travis.yml` file.
```yml
language: java
scripts
  - npm install codecov -g
after_success:
  - codecov -f coverage/*.json
```
### Producing Coverage Reports

#### [nyc](https://github.com/istanbuljs/nyc)
```
nyc report --reporter=json > coverage/coverage.json
```

## Support
### FAQ
- Q: Why no coverage reports showing up?<br/>A:Make sure you have enabled source mapping. `typings install && tsc -p . --sourcemap`

Or in your `tsconfig.json`

```json
{
  "compilerOptions": {
    "sourceMap": true,
  }
}
```
- Q: Is there a Node.js example?<br/>A: Yes, [codecov/example-node](https://github.com/codecov/example-node)
*That didn't work?* Sorry, looks like you need to use [SitePen/remap-istanbul](https://github.com/SitePen/remap-istanbul).

### Caveats
#### Private Repo
Repository tokens are required for (a) all private repos, (b) public repos not using Travis-CI, CircleCI or AppVeyor. Find your repository token at Codecov and provide via `codecov --token=:token` or `export CODECOV_TOKEN=":token"`

[1]: https://codecov.io/
