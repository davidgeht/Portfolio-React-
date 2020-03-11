import React, { Component } from 'react';
import Projectcard from '../components/projectcard';
import Bucketpic from '../images/bucketpic.png';
import FitTracker from '../images/fitnessTracker.png';
import PartyBuddy from'../images/partybuddy.png';
import transTracker from '../images/TransactTracker.png';
import EmployeeDirect from '../images/EmployeeDirect.png';
import burger from '../images/burger.png';
class Project extends Component {
	render(){
		return(
			<div className="condiv home">
				<h1 id="PortTitle">Portfolio</h1>
				<div class="row">

			<Projectcard title='BuckEatList' description="foodies heaven" img={Bucketpic} linktogb=" https://github.com/davidgeht/BuckEATlist" linktoapp="https://buckeatlist.herokuapp.com/login"></Projectcard>
			<Projectcard title='Fitness Tracker' description="tracks your fitness" img={FitTracker} linktogb="https://github.com/davidgeht/Fitness-Tracker" linktoapp="https://afternoon-beach-76169.herokuapp.com/?id=5e45a3ec670abe2d16cf3fa7"></Projectcard>
			</div>
			<div class="row">
			<Projectcard title="PWA: Transaction Tracker" description="A transaction tracker that works offline" img={transTracker} linktogb="https://github.com/davidgeht/PWA-BudgetTracker" linktoapp=" https://damp-bayou-92654.herokuapp.com/"></Projectcard>
			<Projectcard title='Party Buddy' description='A Buddy to help you plan a party' img={PartyBuddy} linktogb="https://github.com/jondam1985/party-buddy"></Projectcard>
			</div>
			<div class="row">
			<Projectcard title='Employee Directory' description="A react based employee directory app" img={EmployeeDirect} linktogb=" https://github.com/davidgeht/Employee-Directory" linktoapp=" https://fathomless-bastion-75533.herokuapp.com/"></Projectcard>
			<Projectcard title='Burger Eater' description ="Node Js with handlebars application" img={burger} linktogb=" https://github.com/davidgeht/Eat-The-Burger" linktoapp="https://polar-dawn-91505.herokuapp.com/"></Projectcard>
			</div>
			</div>
		)
		
	}
}
	
export default Project