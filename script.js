let a = () =>{
	
	fetch("http://api.open-notify.org/iss-now.json/")
	.then(response => response.json())
	.then(data =>{

			document.getElementById("root1").innerHTML = 
			"Latitude : " + JSON.stringify(data.iss_position.latitude)
			+ '<br/>' + "Longitude : " +  JSON.stringify(data.iss_position.longitude)
			+ '<br/>' + "Time stamp : " +  JSON.stringify(data.timestamp);
		
		}
		);

	fetch("http://api.open-notify.org/astros.json/")
	.then(response => response.json())
	.then(data =>{
		
			document.getElementById("root2").innerHTML = 
			"Number of people in space right now : " + JSON.stringify(data.number);

			let str="";
			for(let i = 0;i<data.number;i++)
			{
				str = str + (i+1) + ". " + JSON.stringify(data.people[i].name) + '<br/>';	
			}

			document.getElementById("root3").innerHTML = str;
		
		}
		);
}
