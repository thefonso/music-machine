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

## part 3

Note: what is serialization?

**Serialization** is the process of converting an object into a stream of bytes in order to store the object or transmit it to memory, a database, or a file. Its main purpose is to save the state of an object in order to be able to recreate it when needed. The reverse process is called deserialization.
