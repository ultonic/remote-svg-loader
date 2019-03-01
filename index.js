import axios from 'axios'
import parseXML from 'xml-parse-from-string'

export default class {
    constructor() {
        let svgLogs = [];
        let loader = this;

        for (let svg of document.getElementsByTagName('svg')) {
            let link = svg.dataset.svgSrc;
            let symbol = svg.dataset.symbol;

            if (!link || !symbol) return;

            if (svgLogs.indexOf(link) === -1) {
                loader.getSvg(link);
                svgLogs.push(link);
            }

            loader.renderUse(svg, symbol);
        }
    }

    getSvg(link) {
        axios.get(link)
            .then(function (response) {
                let svg = parseXML(response.data).querySelector('svg');
                document.body.appendChild(svg);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    renderUse(target, symbol) {
        console.log(target);
        let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', symbol);

        target.appendChild(use);
    }
}
