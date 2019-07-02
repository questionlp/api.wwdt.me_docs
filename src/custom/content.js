var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
module.exports =
  '# Introduction\n' +
  fs.readFileSync('./content/introduction.md', 'utf8') + '\n' +
  '# Specification\n' +
  fs.readFileSync('./content/response.md', 'utf8') + '\n' +
  '# Endpoints\n' +
  fs.readFileSync('./content/endpoints/general.md', 'utf8') + '\n' +
  fs.readFileSync('./content/endpoints/guest.md', 'utf8') + '\n' +
  fs.readFileSync('./content/endpoints/host.md', 'utf8') + '\n' +
  fs.readFileSync('./content/endpoints/location.md', 'utf8') + '\n' +
  fs.readFileSync('./content/endpoints/panelist.md', 'utf8') + '\n' +
  fs.readFileSync('./content/endpoints/scorekeeper.md', 'utf8') + '\n' +
  fs.readFileSync('./content/endpoints/show.md', 'utf8');
  