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
language: node_js
scripts:
  - npm install codecov -g
after_success:
  - codecov
```
### Producing Coverage Reports

#### [nyc](https://github.com/istanbuljs/nyc)
```
nyc report --reporter=json > coverage/coverage.json
```
## Caveats
### Private Repo
Repository tokens are required for (a) all private repos, (b) public repos not using Travis-CI, CircleCI or AppVeyor. Find your repository token at Codecov and provide via `codecov --token=:token` or `export CODECOV_TOKEN=":token"`

## Support
### FAQ
- Q: Why no coverage reports showing up?<br/>A:Make sure you have enabled source mapping. `tsc -p . --sourcemap`

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


1. More documentation at https://docs.codecov.io
2. Configure codecov through the `codecov.yml`  https://docs.codecov.io/docs/codecov-yaml

We are happy to help if you have any questions. Please contact email our Support at [support@codecov.io](mailto:support@codecov.io)

[1]: https://codecov.io/
