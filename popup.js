var PopupController = function () {
	this.button_ = document.getElementById('openUrls_button');
	this.urls_txt = document.getElementById('urls_textArea');
	this.addListeners_();
};

PopupController.prototype = {
  button_: null,
  urls_txt: null,
  addListeners_: function () {
    this.button_.addEventListener('click', this.handleClick_.bind(this));
  },
	handleClick_: function () {
		var lines = this.urls_txt.value.split("\n");
		for(var i = 0;i<lines.length;i++){
		chrome.tabs.create({url:lines[i]});
		}
	}
};

document.addEventListener('DOMContentLoaded', function () {
	window.PopupController = new PopupController();
});