Package.describe({
    summary: "Cheerio for Meteor. More updated version as of Jan 6th, 2015.",
    version: "1.0.0",
    name: "rclai89:cheerio",
    git: "https://github.com/rclai/meteor-cheerio.git"
});

Npm.depends({cheerio: "0.18.0"});

Package.on_use(function (api) {
	api.versionsFrom("METEOR@0.9.3");
    api.add_files(['cheerio.js'], ['server']);
    api.export && api.export('cheerio');
});
