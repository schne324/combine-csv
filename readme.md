# combine-csv

> Combine multiple csv files into 1

**NOTE**: each input file must have the same exact headers

```sh
$ npm i -g combine-csv
```

## usage

```sh
$ combine-csv --input ~/Code/foo-*.csv --output ~/Code/combined.csv
```

### cli args

### `--help`

Prints out help for combine-csv usage

#### `--input` (shorthand: `-i`)

The input files: can be globs and/or comma separated globs/paths.

**NOTE**: refer to [`globby`](https://www.npmjs.com/package/globby) to see what type of globs are supported.

#### `--output` (shorthand: `-o`)

The desired output file.
