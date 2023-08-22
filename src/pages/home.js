import * as React from 'react';
import Card from 'react-bootstrap/Card';
import MyImage from '../assets/images/Maldives01.png';
import MyImage2 from '../assets/images/thailand-home.png';
import MyImage3 from '../assets/images/hawaii.png';
import CardGroup from 'react-bootstrap/CardGroup';

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home(title, desc, link) {

	const Endpoint = "https://jsonplaceholder.typicode.com/users";
	const [userData, setUserData] = useState([]);

	const getUserData = async () => {
		try {
			const fetchData = await axios.get(Endpoint, {
				headers: {
					authorization: "Bearer JWT Token",
				},
			});
			setUserData(fetchData.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		window.addEventListener("load", getUserData);
		console.log(userData);
		return () => {
			window.removeEventListener("load", getUserData);
		};
	}, [userData]);




	return (
		<>
			<CardGroup>
				<Card style={{ width: '22rem' }}>
					<img src={MyImage} alt='Avijits Travel Blog' width="560" height="300" />
					<Card.Body>
						<Card.Title>Maldives</Card.Title>
						<Card.Text>
							The Maldives is a tropical paradise located in the Indian Ocean,
							southwest of India and Sri Lanka. It is an archipelago consisting of 26 atolls,
							which are made up of over 1,000 coral islands. The country is known for its
							stunning white-sand beaches, crystal-clear turquoise waters, and vibrant marine life,
							making it a popular tourist destination, especially for honeymooners and beach enthusiasts.
						</Card.Text>
					</Card.Body>
					<Card.Body>
						<Card.Link href="#">More on this....</Card.Link>
					</Card.Body>
				</Card>
				<Card style={{ width: '22rem' }}>
					<img src={MyImage2} alt='Avijits Travel Blog' width="560" height="300" />
					<Card.Body>
						<Card.Title>Thailand</Card.Title>
						<Card.Text>
						Thailand, officially known as the Kingdom of Thailand, is a country located 
						in Southeast Asia. It is known for its rich cultural heritage, 
						stunning natural landscapes, vibrant cities, and delicious cuisine. Thailand is situated 
						in the Indochinese Peninsula and shares borders with Myanmar (Burma) to the west, 
						Laos to the north, Cambodia to the east, and Malaysia to the south. The country's 
						geography varies widely, from lush jungles and tropical rainforests to picturesque 
						beaches and mountainous terrain. The Chao Phraya River flows through the central 
						plains and is a significant waterway.
						</Card.Text>
					</Card.Body>
					<Card.Body>
						<Card.Link href="#">More on this....</Card.Link>
					</Card.Body>
				</Card>
				<Card style={{ width: '22rem' }}>
				<img src={MyImage3} alt='Avijits Travel Blog' width="560" height="300" />
				<Card.Body>
					<Card.Title>Hawaii</Card.Title>
					<Card.Text>
					Hawaii is a group of islands located in the central Pacific Ocean and is part of the 
					United States. It is renowned for its stunning natural beauty, diverse ecosystems, 
					unique culture, and popular tourist attractions. Hawaii's diverse landscapes include white sandy beaches, 
					lush rainforests, active volcanoes, waterfalls, and unique geological formations. The islands offer 
					opportunities for outdoor activities such as surfing, snorkeling, hiking, and whale-watching.
					</Card.Text>
				</Card.Body>
				<Card.Body>
					<Card.Link href="#">More on this....</Card.Link>
				</Card.Body>
			</Card>
			</CardGroup>
		</>
	);
}


