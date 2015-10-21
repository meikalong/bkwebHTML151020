$(document).ready(function() {
	$("#save").click(function() {
		$("#form").validate({
			rules: {
				username: {
					required: true,
					minlength: 5
				}
			},
			messages: {
				username: {
					required: "没有填写密码",
					minlength: jQuery.format("密码不能小于{0}个字符")
				}
			}
		});
	});
});