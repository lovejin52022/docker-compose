db = db.getSiblingDB('news-feed'); // 创建一个名为"newDB"的DB
db.createUser( // 创建一个名为"shon"的用户，设置密码和权限
	{
		user: "news-feed",
		pwd: "password",
		roles: [{
			role: "readWrite",
			db: "news-feed"
		}]
	}
);
db.createCollection("news");