const gh = require('gh-pages');

gh.publish('../root', (err) => {
    console.error(err);
});