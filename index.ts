const { Search } = require('./src/search');

Search
    .execute()
    .then((links: string[]) => {
        console.log('liens: ', links);
    });