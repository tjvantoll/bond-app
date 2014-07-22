(function() {
	var files = new kendo.data.DataSource({
		data: [
			{
				id: 1,
				name: "foo.jpg",
				description: "foo",
				src: "http://media.giphy.com/media/Pij3hAnY2TNn2/giphy.gif"
			},
			{
				id: 2,
				name: "bar.png",
				description: "bar",
				src: "http://media.giphy.com/media/mWCXHLTASb9W8/giphy.gif"
			},
			{
				id: 3,
				name: "bang.gif",
				description: "bang",
				src: "http://media.giphy.com/media/JtaG8G135ar72/giphy.gif"
			}
		]
	});

	document.addEventListener("deviceready", function () {
		new kendo.mobile.Application(document.body);
		$("#files").kendoMobileListView({
			dataSource: files,
			template: $("#file-template").html()
		});
		window.app = {
			showDetails: function(event) {
				var file = files.get(event.view.params.id),
					templateHtml = $("#file-details-template").html(),
					template = kendo.template(templateHtml);
				$("#file-details").html(template(file));
			}
		}
	});
}());