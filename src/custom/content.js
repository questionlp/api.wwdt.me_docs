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
  '# Components\n' +
  fs.readFileSync('./content/guest.md', 'utf8') + '\n' +
  fs.readFileSync('./content/host.md', 'utf8') + '\n' +
  fs.readFileSync('./content/location.md', 'utf8') + '\n' +
  fs.readFileSync('./content/panelist.md', 'utf8') + '\n' +
  fs.readFileSync('./content/scorekeeper.md', 'utf8') + '\n' +
  fs.readFileSync('./content/show.md', 'utf8');
