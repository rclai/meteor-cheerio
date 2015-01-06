Package.describe({
    summary: "Cheerio for meteor",
    version: "1.0.0",
    name: "rl:cheerio",
    git: "https://github.com/particle4dev/meteor-cheerio.git"
});

Npm.depends({cheerio: "0.18.0"});

Package.on_use(function (api) {
	api.versionsFrom("METEOR@0.9.3");
    api.add_files(['cheerio.js'], ['server']);
    api.export && api.export('cheerio');
});
