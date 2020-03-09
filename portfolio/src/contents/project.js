import React, { Component } from 'react';
import Projectcard from '../components/projectcard';
import Bucketpic from '../images/bucketpic.png';
import FitTracker from '../images/fitnessTracker.png';
import PartyBuddy from'../images/partybuddy.png';
import Modal from '../components/modal';
class Project extends Component {
	render(){
		return(
			<div className="condiv home">
				<h1>Portfolio</h1>
				<div class="row">
					<div class="col">
			<Projectcard title='BuckEatList' description="foodies heaven" img={Bucketpic} ></Projectcard>
			<Projectcard title='Fitness Tracker' description="tracks your fitness" img={FitTracker}></Projectcard>
			</div></div>
			<div class="row">
			<Projectcard title='Party Buddy' description='A Buddy to help you plan a party' img={PartyBuddy}></Projectcard>
			</div>
			</div>
		)
		
	}
}
	
export default Project