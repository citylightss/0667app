import styles from "./Profile.module.css";

const Profile = () => {
	return (
		<div className="row">
			<div className="col-sm-4">
				<img
					src="https://pfpmaker.com/_nuxt/img/profile-5-1.1d185ab.png"
					alt=""
				/>
			</div>
			<div className="col-sm-8"></div>
			<h1 className={styles.about}>Имя и фамилия</h1>
			<h2 style={{backgroundColor: "green"}}>Обо мне</h2>
			<h3>E-mail</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nemo,
				quibusdam maiores numquam quaerat facilis odit asperiores neque fugiat.
				Dolorum unde deserunt dolorem omnis impedit fugit nam blanditiis veniam
				qui!
			</p>
		</div>
	);
};

export default Profile;
