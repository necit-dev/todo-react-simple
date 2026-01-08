import styles from './Logo.module.scss';

import logo from  '../../../img/logo.svg';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<img src={logo} alt="logo"/>
			<span className={styles.logo__text}>
				<span className={styles.logo__text_primary}>Список</span>
				<span className={styles.logo__text_secondary}> дел</span>
			</span>
		</div>
	);
};

export default Logo;