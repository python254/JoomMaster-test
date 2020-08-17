$(document).ready(function() {
			$("#btn-close").click(function() {
				$(".full").hide();
				$(".popup").hide();
			});
			$(".full").click(function() {
				$(".full").hide();
				$(".popup").hide();
			});
			$("#men").click(function() {
				$(".men").toggle();
			});
			$("#women").click(function() {
				$(".women").toggle();
			});
			$("#blog").click(function() {
				$(".box-blog").toggle();
			});
			$("#page").click(function() {
				$(".box-page").toggle();
			});
			$("#cart").click(function() {
				$(".cart-drop").toggle();
			});
			$("#search").click(function() {
				$(".box-search").toggle();
			});
			$("#usa").click(function() {
				$(".drop-usa").toggle();
			});
			$("#eng").click(function() {
				$(".drop-eng").toggle();
			});
		});