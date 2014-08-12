(function() {
	var apiKey = "nMfdN0aMrPrHIqgv";
	var el = new Everlive(apiKey);
	everliveImages.init(apiKey);

	document.addEventListener("deviceready", function () {
		window.listView = kendo.observable({
			addImage: function() {
				navigator.camera.getPicture(function(data) {
					el.Files.create({
						Filename: Math.random().toString(36).substring(2, 15)
							+ ".jpg",
						ContentType: "image/jpeg",
						base64: data
					}).then(loadImages);
				}, function() {
					navigator.notification.alert(
						"Unfortunately we could not add the image"
					);
				}, {
					destinationType: Camera.DestinationType.DATA_URL,
					targetWidth: 300,
					targetHeight: 400
				});
			}
		});

		function loadImages() {
			el.Files.get().then(function(data) {
				var files = [];
				data.result.forEach(function(image) {
					files.push(image.Uri);
				});
				$("#images").kendoMobileListView({
					dataSource: files,
					template: "<img data-src='#: data #' class='resimgs'>"
				});
				everliveImages.responsiveAll();
			});
		}

		var app = new kendo.mobile.Application(document.body, { skin: "flat" });
		loadImages();
	});
}());