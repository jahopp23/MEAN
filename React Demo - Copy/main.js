var React = require('react');
var ReactDOM = require('react-dom');

var NinjaButton = React.createClass({
    render: function (){
        return <button onClick={this.myFunction}></button>
    },
    myFunction: function(){
        alert('Hello!')
    }
});

var MyComponent = React.createClass({
    getInitialState: function(){
        return {
        gold: 0
        }
    },
	render: function (){
	    return (
	            <div style={{margin:"20px",textAlign:"center"}}>
	                <p>Your Gold: <input readOnly value={this.state.gold} /></p>
					<div style={{border:"1px solid black",height:"150px",width:"150px",display:"inline-block",margin:"10px 20px 20px 0px",verticalAlign:"top"}}>
						<h3>Farm</h3>
						<p>(earns 10-20 golds)</p>
						<button>Find Gold!</button>
					</div>
					<div style={{border:"1px solid black",height:"150px",width:"150px",display:"inline-block",margin:"10px 20px 20px 0px",verticalAlign:"top"}}>
						<h3>Cave</h3>
						<p>(earns 5-10 golds)</p>
						<button>Find Gold!</button>
					</div>
					<div style={{border:"1px solid black",height:"150px",width:"150px",display:"inline-block",margin:"10px 20px 20px 0px",verticalAlign:"top"}}>
						<h3>House</h3>
						<p>(earns 2-5 golds)</p>
						<button>Find Gold!</button>
					</div>
					<div style={{border:"1px solid black",height:"150px",width:"150px",display:"inline-block",margin:"10px 20px 20px 0px",verticalAlign:"top"}}>
						<h3>Casino</h3>
						<p>(earns +/- 50 golds)</p>
						<button>Find Gold!</button>
					</div>
					<p>Activities:</p>
					<div style={{border:"1px solid black",height:"200px",width:"700px",display:"inline-block",margin:"10px 20px 20px 0px",verticalAlign:"top"}}></div>
	            </div>
	        )
	},
	handleNameChange: function(event){
    	this.setState({name: event.target.value});
	},
	handleAgeChange: function(event){
	    this.setState({age: event.target.value});
	},
	handleOccupationChange: function(event){
	    this.setState({occupation: event.target.value});
	}
});

ReactDOM.render(<MyComponent />, document.getElementById('react-container'));