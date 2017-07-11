const rpn = require('request-promise-native');

exports.Search = class Search {
    private static urlSearch(query: string) {
        return `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}`;
    }

    static async execute() {
        const [, , , linksAngular] = JSON.parse(await rpn(Search.urlSearch('angular')));
        const [, , , linksTypescript] = JSON.parse(await rpn(Search.urlSearch('typescript')));

        return [...linksAngular, ...linksTypescript];
    }
};
