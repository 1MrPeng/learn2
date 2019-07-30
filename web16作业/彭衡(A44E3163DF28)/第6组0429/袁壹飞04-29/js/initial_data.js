//初始化的数据

//====系统内置的账号密码===
var systemUsers = [{
	id: '1111',
	username: 'yangmitest',
	password: '123456',
	name:'杨幂',
	friendId: '2222'
},{
	id: '2222',
	username: 'liuyifeitest',
	password: '123456',
	name: '神仙姐姐',
	friendId: '1111'
}]

//把数据提供给外部引用的js文件使用
module.exports.systemUsers  = systemUsers;