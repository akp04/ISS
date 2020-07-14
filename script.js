async function a(){
	
	const response = await fetch("http://api.open-notify.org/iss-now.json/");
	const data = await response.json();

			document.getElementById("root1").innerHTML = 
			"Latitude : " + JSON.stringify(data.iss_position.latitude)
			+ '<br/>' + "Longitude : " +  JSON.stringify(data.iss_position.longitude)
			+ '<br/>' + "Time stamp : " +  JSON.stringify(data.timestamp);
		

	const response1 = await fetch("http://api.open-notify.org/astros.json/");
	const data1 = await response1.json();
		
			document.getElementById("root2").innerHTML = 
			"Number of people in space right now : " + JSON.stringify(data1.number);

			let str="";
			for(let i = 0;i<data1.number;i++)
			{
				str = str + (i+1) + ". " + JSON.stringify(data1.people[i].name) + '<br/>';	
			}

			document.getElementById("root3").innerHTML = str;
		
}
