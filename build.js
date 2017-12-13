const { rollup } = require('rollup');
const args = require('minimist')(process.argv.slice(2));

function getFormatAndName() {
    if (args.es) {
        return { format: 'es', name: 'index.es.js' };
    }
    return { format: 'cjs', name: 'index.cjs.js' };
}

function build() {
    const { format, name } = getFormatAndName();

    return rollup({
        entry: 'src/index.js'
    })
    .then(({ write }) => write({
        dest: `dist/${name}`,
        format
    }))
    .then(() => console.log(`Till built in ${format} format`))
    .then(err => console.error(err));
}

build();
