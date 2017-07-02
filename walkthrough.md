## install howler

npm install -g bower

bower install yarn --save

```
ember-cli-build.js

...
app.import('bower_components/howler.js/dist/howler.core.min.js');
...

```

```

eslintrc.js
```

...
  globals: {
    Howl: true
  }
...

```

## part 2

bower install lz-string --save

```
  globals: {
    Howl: true,
    LZString
  }
```

eslintrc.js
// turns debugger off...a default setting
//extends: 'eslint:recommended',