require.config({
	baseUrl:"../../js",
	paths: {
		"jquery": ["./jquery_1.7.2"],
		"angular": ["./angular"],
	},
    //这个配置是你在引入依赖的时候的包名
    shim:{
        "angular":{
            exports:"angular"
        }
    }
});

require.config({
	paths: {
		"user": ["./backstage/controller/user/user"]
	}
});

require(["jquery",'angular',"user"],function($,angular,user){
})