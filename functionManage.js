var funcContainer = {};
(function(e) {
	var topics = {}; // 回调函数存放的数组
	//绑定方法
	e.bind = function(topic, func) {
		if(!topics[topic]) {
			topics[topic] = [];
		}
		var token = topic;
		topics[topic].push({
			token: token,
			func: func
		});
		return token;
	};
	// 触发方法
	e.trigger = function(topic, args) {
		if(!topics[topic]) {
			return false;
		}
		setTimeout(function() {
			var listener = topics[topic],
				len = listener ? listener.length : 0;
			while(len--) {
				listener[len].func(topic, args);
			}
		}, 0);
		return true;
	};
	e.triggerAll = function(args) {
		for(var topic in topics) {
			funcContainer.trigger(topic, args);
		}
	};

	//移除方法
	e.removeOne = function(token) {
		for(var m in topics) {
			if(topics[m]) {
				for(var i = 0, j = topics[m].length; i < j; i++) {
					if(topics[m][i].token === token) {
						topics[m].splice(i, 1);
						return token;
					}
				}
			}
		}
		return false;
	};
	e.remove = function(token) {
		while(true) {
			var sign = funcContainer.removeOne(token);
			if(!sign) break;
		}
	};
	e.removeAll = function() {
		for(var top in topics) {
			topics[top].splice(0, topics[top].length);
		}
	};
}(funcContainer));