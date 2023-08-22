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
						<img src='AvijitTravelBlog.png' alt='Avijits Travel Blog' width="120" height="70" />
					</NavLink>
					<NavLink to='/seabeaches' activeStyle>
						Sea Beaches
					</NavLink>
					<NavLink to='/hills' activeStyle>
						Hills
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
