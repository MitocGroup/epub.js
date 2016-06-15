var Book = require('./book');
var EpubCFI = require('./epubcfi');
var Highlighter = require('./highlighter');
var RSVP = require('rsvp')

function ePub(_url) {
	return new Book(_url);
};

ePub.VERSION = "0.3.0";
ePub.CFI = EpubCFI;
ePub.Highlighter = Highlighter;
ePub.RSVP = RSVP;

module.exports = ePub;
