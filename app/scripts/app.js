(function() {
	document.addEventListener("deviceready", function () {
		new kendo.mobile.Application(document.body);
		$("#files").kendoMobileListView({
			dataSource: ["images/dog1.gif", "images/dog2.gif", "images/dog3.gif"],
			template: $("#file-template").html()
		});
		window.app = {
			showDetails: function(event) {
				var templateHtml = $("#file-details-template").html();
				var template = kendo.template(templateHtml);
				$("#file-details").html(template(event.view.params.img));
			}
		}
	});
}());