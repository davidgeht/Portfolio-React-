import React, { Component } from 'react';
import Projectcard from '../components/projectcard';
import Bucketpic from '../images/bucketpic.png';
import FitTracker from '../images/fitnessTracker.png';
import PartyBuddy from'../images/partybuddy.png';
import transTracker from '../images/TransactTracker.png';
import EmployeeDirect from '../images/EmployeeDirect.png';
import burger from '../images/burger.png';
import Modal from '../components/modal';
class Project extends Component {
	render(){
		return(
			<div className="condiv home">
				<h1>Portfolio</h1>
				<div class="row">

			<Projectcard title='BuckEatList' description="foodies heaven" img={Bucketpic} ></Projectcard>
			<Projectcard title='Fitness Tracker' description="tracks your fitness" img={FitTracker}></Projectcard>
			</div>
			<div class="row">
			<Projectcard title="Progressive Web App: Transaction Tracker" description="A transaction tracker that works offline" img={transTracker} linktogb="https://github.com/davidgeht/PWA-BudgetTracker" linktoapp=" https://damp-bayou-92654.herokuapp.com/"></Projectcard>
			<Projectcard title='Party Buddy' description='A Buddy to help you plan a party' img={PartyBuddy}></Projectcard>
			</div>
			<div class="row">
			<Projectcard title='Employee Directory' description="A react based employee directory app" img={EmployeeDirect}></Projectcard>
			<Projectcard title='Burger Eater' description ="Node Js with handlebars application" img={burger}></Projectcard>
			</div>
			</div>
		)
		
	}
}
	
export default Project