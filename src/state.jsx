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
	0: { name: "Ev", lastname: "Parker" },
	1: { name: "V", lastname: "Just V" },
	2: { name: "Judy", lastname: "Alvarez" },
	3: { name: "Panam", lastname: "Palmer" },
	4: { name: "Johny", lastname: "Silverhand" },
};

export function getUser() {
	return user;
}

export function getUsers() {
	return users;
}
