const globby = require('globby');
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

module.exports = async (input, output) => {
  const paths = await globby(input.split(',').map((f) => f.trim()));
  console.log(
    chalk.green(
      `\n✓ ${paths.length} input files read: \n  ${paths.join('\n  ')}`
    )
  );
  const fileContents = await Promise.all(paths.map((p) => read(p, 'utf8')));
  const [headers] = fileContents[0].split('\n');
  const headerlessContents = fileContents.map((fileStr) => {
    // chop out the headers
    return fileStr.substring(fileStr.indexOf('\n') + 1);
  });

  await write(
    output,
    [headers, ...headerlessContents].join('\n').replace(/\n\n/g, '\n'),
    'utf8'
  );
  console.log(chalk.blue`\n✓ ${output} file written`);
};
