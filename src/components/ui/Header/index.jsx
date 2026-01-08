import styles from './Header.module.scss';
import Logo from "../../common/Logo/index.jsx";

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
		</header>
	);
};

export default Header;