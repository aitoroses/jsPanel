function panel(title, src) {
	$.jsPanel({
		title: title,
			position: "center",
			controls: {buttons: 'closeonly'},
			resizable: {
				handles:   "e, s, w, se, sw",
			},
			size: {
				width: 1024,
				height: 600
			},
			iframe: {
				src: src,
				frameborder: 0,
				name: title.replace(' ', ''),
			style: {'border': '10px solid transparent'}
			}
	});
}
