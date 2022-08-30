const user = {
	name: "Rouge",
	lastname: "Amendiares",
	email: "afterlife@nc.com",
	id: "1",
	about: "Мои увлечения и хобби",
	avatar:
		"https://i.pinimg.com/236x/65/9b/b9/659bb94b9af4ab4a3da370e10b22ea0d.jpg",
};

const users = {
	0: { name: "Ev", lastname: "Parker", id: 12 },
	1: { name: "V", lastname: "Just V", id: 3 },
	2: { name: "Judy", lastname: "Alvarez", id: 2 },
	3: { name: "Panam", lastname: "Palmer", id: 6 },
	4: { name: "Johny", lastname: "Silverhand", id: 4 },
};

export function getUser(userId) {
	for (let i = 0; i < Object.keys(users).length; i++) {
		if (users[i].id == userId) return users[i];
	} return user;
}

export function getUsers() {
	return users;
}
