require('colors');

const lib = require('./build-lib');

const targets = process.argv.slice(2);
const has = t => !targets.length || targets.includes(t);

console.log(
    `Building targets: ${targets.length ? targets.join(', ') : 'all'}\n`.green
);

Promise.all([
    has('lib') && lib(),
])
    .catch(err => {
        if (err.stack) {
            console.error(err.stack.red);
        } else {
            console.error(err.toString().red);
        }
        process.exit(1);
    });
