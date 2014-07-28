(function() {
	document.addEventListener("deviceready", function () {
		new kendo.mobile.Application(document.body, { skin: "flat" });
		$("#images").kendoMobileListView({
			dataSource: [
				"images/dog1.gif",
				"images/dog2.gif",
				"images/dog3.gif"
			],
			template: "<img src='#: data #''>"
		});
	});
}());