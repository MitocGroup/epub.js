var Book = require('./book');
var EpubCFI = require('./epubcfi');
var Highlighter = require('./highlighter');

function ePub(_url) {
	return new Book(_url);
};

ePub.VERSION = "0.3.0";
ePub.CFI = EpubCFI;
ePub.Highlighter = Highlighter;

module.exports = ePub;
