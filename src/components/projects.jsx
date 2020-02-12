import React, {Component} from 'react';
import Pagination from './pagination/pagination';
import Prev from './pagination/prev';
import Next from './pagination/next';
import Popup from './popup';
// import './assets/css/style.css';


export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prev: 'Prev',
			count: [],
			next: null,
			projects: [],
			// history: [{
		 //    	project: Array(9).fill(null),
		 //    }],
			project: [],
			perPages: [],
			isPaginate: false,
			color: '',
		}
		this.random = this.random.bind(this);
		this.paginateProjectPage = this.paginateProjectPage.bind(this);
		this.paginatePrev = this.paginatePrev.bind(this);
		this.paginateNext = this.paginateNext.bind(this);
		
	}

	random(min,max) {
	  const num = Math.floor(Math.random()*(max-min)) + min;
	  return num;
	}

	componentDidMount() {
		
		// window.addEventListener('load', this.randomColor)
		this.state.projects.push(
			{
				id: 1,
				backgroundImage: 'url(assets/img/projects/bouncing-ball-png.png)',
				title: 'Bouncing Balls',
				features: ['HTML5', 'CSS3', 'Canvas', 'Javascript'],
				description: [
								'A Bouncing ball re-created from ', 
								<a className="desc_extra_link" rel="noopener noreferrer" target="_blank" href="https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html">mdn</a>
							 ],
				demoLink: '#popup-1',
				popupID: 'popup-1',
				popupImage: 'assets/img/projects/bouncing-ball-gif.gif',
				popupImageAlt: 'Bouncing Balls',
				popupTitle: 'Bouncing Balls',
				popupDescription: [
									'The Bouncing Balls now bounces off when colided with each other. See difference in ', 
									<a rel="noopener noreferrer" target="_blank" href="https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html">mdn</a>
								  ],
				href: 'https://github.com/Ecodes-lab/bouncing-balls',
				hrefLabel: 'Source Code',
			},
			{
				id: 2,
				backgroundImage: 'url(assets/img/projects/car-search-png.png)',
				title: 'Car Search Engine',
				features: ['HTML5', 'CSS3', 'Canvas | Threejs', 'Javascript'],
				description: [
								'A Car Search Engine Created with threejs, that searches cars by there name',
							 ],
				demoLink: '#popup-2',
				popupID: 'popup-2',
				popupImage: 'assets/img/projects/car-search-gif.gif',
				popupImageAlt: 'Car Search Engine',
				popupTitle: 'Car Search Engine',
				popupDescription: [
									'A Car Search Engine Created with threejs, that searches cars by there name Eg: "BMW" ',
								  ],
				href: 'https://#',
				hrefLabel: 'Source Code',
			},
			
		)

		this.setState((state) => ({
			projects: this.state.projects,
			project: (this.state.projects.map((val, key) => {
				let color1 = this.random(0,200);
				let color2 = this.random(0,200);
				let color3 = this.random(0,200);

				return(
					<div key={val.id} className="col-1-of-3">
	                    <div className="card">
	                        <div className="card__side card__side--front">
	                            <div style={{backgroundImage: 'linear-gradient(to right bottom, #eca026, rgba(' + color1 + ',' + color2 + ',' + color3 + ', 0.911)),'+ val.backgroundImage}} className="card__picture">
	                                &nbsp;
	                            </div>
	                            <img src="assets/img/EricTylon.png" className="card__svg-icon spin" alt="" />
	                            <h4 className="card__heading">

	                                <span style={{backgroundImage: 'linear-gradient(to right bottom, #eca026, rgba(' 
										+ ((color1 === 100) ? color1 - 10 : color1 - 30) + ',' 
										+ ((color2 === 100) ? color2 - 10 : color2 - 30) + ',' 
										+ ((color3 === 100) ? color3 - 10 : color3 - 30) + ', 0.9))'}}>
	                                    {val.title}
	                                </span>
	                            </h4>
	                            <div className="card__details">
	                                <ul>
	                                    {
	                                    	val.features.map((v, k) => {
		                                    	return <li key={k}>{v}</li>
		                                    })
	                                    }
	                                </ul>
	                            </div>
	                        </div>
	                        <div style={{backgroundImage: 'linear-gradient(to right bottom, #eca026, rgba(' + color1 + ',' + color2 + ',' + color3 + ', 0.5)),'+ val.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center center'}} className="card__side card__side--back">

	                            <div className="card__cta">

	                                <div className="card__box">
	                                    <div className="card__description">
	                                        <p>
	                                            {
	                                            	val.description.map((v, k) => {
				                                    	return (<span key={k}>{v}</span>)
				                                    })
	                                            }
	                                        </p>
	                                    </div>
	                                </div>
	                                <a href={val.demoLink} className="btn btn--white btn--github">Demo</a>
	                            </div>
	                        </div>
	                    </div>
	                    <Popup
	                    	popupID={val.popupID}
	                    	popupImage={val.popupImage}
	                    	popupImageAlt={val.popupImageAlt}
	                    	popupTitle={val.popupTitle}
	                    	popupFeatures={val.features.join.call(val.features, ", ").replace(" |", ", ")}
	                    	popupDescription={
	                    						val.popupDescription.map((v, k) => {
					                        		return (<span key={k}>{v}</span>)
					                        	})
	                    					  }
	                    	btnStyle={{backgroundImage: 'linear-gradient(to right bottom, #eca026, rgba(' + color1 + ',' + color2 + ',' + color3 + '))',
	                    	    color: 'white'} }
	                    	titleStyle={{backgroundImage: 'linear-gradient(to right bottom, #eca026, rgb(' + color1 + ',' + color2 + ',' + color3 + '))'}}
	                    	href={val.href} 
	                    	hrefLabel={val.hrefLabel} 
	                    />
	                </div>
	                
				)
				
				
			})),
		}));

		
		
	}


	paginateProjectPage(i) {
		alert('Pagination #' + i.target.textContent + ' Coming Soon')
	}

	paginatePrev(i) {
		alert('Pagination "' + i.target.textContent + '" Coming Soon')
	}

	paginateNext(i) {
		alert('Pagination "' + i.target.textContent + '" Coming Soon')
	}


	render() {

		const {project} = this.state
		// if(isPaginate === false) {
		// 	project.length = 1


		// 	if (project.length === 1){

		// 		// pag = projects.map((val, key) =>{
		// 		// 	return <Pagination key={key} count={key} />
		// 		// })
		// 		// projects.length - project.length;
		// 		// for (project.length; project.length < projects.length; project.length++) {
		// 		// 	let check = projects.length - project.length;
		// 		// 	perPage.unshift([check])
		// 		// }

		// 		perPages = projects.map((v, k) => {
	 //            			return <Pagination key={v.id} onPagination={() => this.paginateProjectPage(v.id)} count={v.id} />
	 //            		})
		// 	}
		// }

		// this.randomColor('url(assets/img/gears.png')

		return (
			<section className="section-tours" id="projects">
	            <div className="u-center-text u-margin-bottom-big">
	                <h2 className="heading-secondary">
	                    Project Portfolio
	                </h2>
	            </div>
	            <div className="row">

	            	{project}
	                
                </div>
                <div className="pagination">
	                <Prev onPrev={(i) => this.paginatePrev(i)} prev="Prev" />
	                <ul>
	                	<Pagination onPagination={(i) => this.paginateProjectPage(i)} count={1} />
	                	<Pagination onPagination={(i) => this.paginateProjectPage(i)} count={2} />
	                	<Pagination onPagination={(i) => this.paginateProjectPage(i)} count={3} />
	                	<Pagination onPagination={(i) => this.paginateProjectPage(i)} count={4} />
	                </ul>
	                <Next onNext={(i) => this.paginateNext(i)} next="Next" />
	            </div>
	        </section>
		);
	}


	// componentWillUnmount() {
		// window.removeEventListener('load', this.randomColor('url(assets/img/gears.png'))
	// }
}