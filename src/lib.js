import page from '//unpkg.com/page/page.mjs';
import { html, render } from '//unpkg.com/lit-html?module';
import { until } from '//unpkg.com/lit-html/directives/until?module';
import { cache } from '//unpkg.com/lit-html/directives/cache?module';

const topics = {
    it: 'Information Technology',
    languages: 'Languages',
    hardware: 'Hardware',
    software: 'Tools and Software',
    framework: 'Framework'
};

export {
    page,
    html,
    render,
    until,
    topics,
    cache
};
