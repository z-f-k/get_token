//公共查询token的参数
var base = 'http://baidu.com';
var query = {
	tel: '12345678901',
	pass: '123456'
}

//项目的配置
var config = [{
	name: '项目名称1',
	type: '1',
	baseURL:'服务器地址1'
},{
	name: '项目名称2',
	type: '2',
	baseURL:'服务器地址2'
}]

window.onload = function() {
	var li = '';
	config.forEach(function(item){
		li += "<option value="+item.type+">"+item.name+"</option>"
	})
	$('.form-control').append(li);
	
	if(query.tel != '' || query.tel != undefined ){
		$('#user').val(query.tel);
	}
	if(query.pass != ''|| query.pass != undefined){
		$('#pass').val(.query.pass);
	}
	$('.getToken').on('click', function() {
		query.tel = $('#user').val();
		query.pass = $('#pass').val();
		axios({
			method: 'post',
			data: query,
			baseURL: base,
			timeout: 1000,
		}).then(function(res) {
			if(res.data.result == 1) {
				$('#token').html(res.data.data.token);
			};
		});
	})

	$('.form-control').on('change', function(e) {
		var index = $(this).val();
		for(var i in config){
			if(index == config[i].type){
				base =  config[i].baseURL;
			}
		}
	})
}