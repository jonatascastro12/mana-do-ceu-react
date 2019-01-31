const fs = require('fs');


const manaPath = '../public/manas';


const file = fs.readFileSync('sql', 'utf8');
let lines = file.split('\n');

const ROWS = {
    ID: 0,
    SLUG: 3,
    TITLE: 4,
    CONTENT: 5,
    CITATION: 6,
    REFERENCE: 7
};

let index = [];

for (let line of lines) {
    const rows = line.split('\t');

    let obj = {
        slug: rows[ROWS.SLUG],
        title: rows[ROWS.TITLE],
        content: rows[ROWS.CONTENT],
        citation: rows[ROWS.CITATION],
        reference: rows[ROWS.REFERENCE],
    };

    index.push(obj.slug);

    fs.writeFileSync(`${manaPath}/${obj.slug}.json`, JSON.stringify(obj));
}

// write index
fs.writeFileSync(`${manaPath}/_index.json`, JSON.stringify(index));
