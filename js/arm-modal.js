function generateModal(){$("body").append('<div id="show-img">\n<span id="img-modal-close">&times;</span>\n<img id="img-modal-img" src="">\n<div id="title" class="caption"></div>\n<div id="description" class="caption"></div>\n</div>\n')}$(document).ready(function(){generateModal(),$(".img-modal").click(function(){$("#show-img").css("display","block");var i=this.getAttribute("data-big");null===i&&(i=this.src),$("#img-modal-img").attr({src:i}),$("#img-modal-close").click(function(){$("#show-img").css("display","none")}),$("#show-img").click(function(){$("#show-img").css("display","none")});var t=this.getAttribute("data-title");t&&$("#title").text(t);var s=this.getAttribute("data-description");s&&$("#description").text(s)})});