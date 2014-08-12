(function() {
	document.addEventListener("deviceready", function () {

		window.listView = kendo.observable({
			addImage: function() {
				navigator.camera.getPicture(function( data ) {
					$( "#images" )
						.data( "kendoMobileListView" )
						.prepend([ "data:image/jpeg;base64," + data ]);
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

		var app = new kendo.mobile.Application(document.body, { skin: "flat" });

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