import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';

export default function Navbar() {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/home' activeStyle>
						Home
					</NavLink>
					<NavLink to='/hills' activeStyle>
						Hills
					</NavLink>
					<NavLink to='/seabeaches' activeStyle>
						Sea Beaches
					</NavLink>
					<NavLink to='/historicsites' activeStyle>
						Historic Sites
					</NavLink>
					<NavLink to='/about' activeStyle>
						About
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

// export default Navbar;
