require.config({
	baseUrl: "../../js",
	paths: {
		"jquery": ["./jquery_1.7.2"],
		"angular": ["./angular"],
		"ui-router": ["./angular-ui-router"]
	},
	//这个配置是你在引入依赖的时候的包名
	shim: {
		"angular": {
			exports: "angular"
		},
		'ui-router': {
			deps: ["angular"],
			exports: 'ui-router'
		}
	},
	//禁止缓存
	"urlArgs": "bust=" + (new Date()).getTime()
});

require.config({
	paths: {
		//app
		"app": ["./travel/app"],
		// 方向悬停特效
		"hoverdir": ["./common/jquery.hoverdir"],
		// 图片无缝轮播
		"slides": ["./common/jquery.slides"],
		// 图片延迟加载
		"imgLazyload": ["./common/jquery.imglazyload"]
	},
	shim: {
		'hoverdir': {
			deps: ["jquery"],
			exports: 'hoverdir'
		},
		'slides': {
			deps: ["jquery"],
			exports: 'slides'
		},
		'imgLazyload': {
			deps: ["jquery"],
			exports: 'imgLazyload'
		}
	}
});

require(["jquery", 'angular', 'ui-router', "app", "hoverdir", "slides", "imgLazyload"], function($, angular) {
	$(function() {
		// 启动angularjs
		// angular.bootstrap(document, ["app"]);
		//导入top
		$("#sale_top").load("./top/top.html", function() {});
		// 导入header
		$("#sale_header").load("./header/header.html", function() {});
		// 导入column
		$("#sale_column").load("./column/column.html", function() {});
		// 导入图片墙
		$("#sale_photo_wall").load("./sale_photo_wall/photo_wall.html", function() {
			// 创建图片轮播
			$('#slides').slidesjs({
				play: {
					active: true,
					auto: false,
					interval: 2000,
					swap: false
				},
				callback: {
					loaded: function() {
						$(".img_wall").each(function(i, v) {
							$("ul.slidesjs-pagination li:eq(" + i + ")").find("a").css("background-image", "url(" + $(v).attr("src") + ")").text("");
						});
					}
				}
			});
		});
		$("#sale_date").load("./sale_date/date.html", function() {
			// 日期table切换事件
			$(".data-switch").on("click", "a", function() {
				var $this = $(this);
				$(".data-switch .active").removeClass("active");
				$this.parent().addClass("active");

				$(".dates").find("table").addClass("hide");
				$($this.attr("data-switch")).removeClass("hide");
			});

			// 选择时间事件
			$(".dates").on("click","td.enable",function(){
				var $this=$(this);
				$(".dates").find("td.selected").removeClass("selected");
				$this.addClass("selected");
				var date=$this.attr('travel-data-date');
				$("#date").val(date);
			});

			$("#sale_order").load("./sale_order/order.html", function() {
				// 日期提醒事件
				$(".select-data").click(function() {
					sh_add(0, 100);
				});

			});
		});

		$("#sale_footer").load("./footer/footer.html");
	});

	// 闪烁提示
	function sh_add(times, time) {
		setTimeout(function() { //此处是过一定时间后自动消失 
			if (times == 3) {
				return;
			}
			$("#sale_date").addClass("remind");
			sh_remove(times, time);
		}, time);
	}

	function sh_remove(times, time) {
		setTimeout(function() { //此处是过一定时间后自动消失 
			$("#sale_date").removeClass("remind");
			sh_add(times / 1 + 1, time);
		}, time);
	}

});