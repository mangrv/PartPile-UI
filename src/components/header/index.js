// Header component

import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/partpile-icon.svg" alt="PartPile Logo" height="32" width="32" />
			<h1>PartPile Inventory Solutions</h1>
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>
			<Link activeClassName={style.active} href="/login">
				Login
			</Link>
		</nav>
	</header>
);

export default Header;
