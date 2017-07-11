const rpn = require('request-promise-native');

exports.Search = class Search {
    private urlSearch(query: string) {
        return `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}`;
    }

    private async search() {
        const [, , , linksAngular] = JSON.parse(await rpn(this.urlSearch('angular')));
        const [, , , linksTypescript] = JSON.parse(await rpn(this.urlSearch('typescript')));

        return [...linksAngular, ...linksTypescript];
    }

    async execute() {
        const links = await this.search();

        console.log('liens: ', links);
    }
};
