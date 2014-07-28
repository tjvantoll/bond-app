(function() {
	document.addEventListener("deviceready", function () {

		window.listView = kendo.observable({
			addImage: function() {
				$( "#images" )
					.data( "kendoMobileListView" )
					.prepend([ "http://google.com/favicon.ico" ]);
			}
		});

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