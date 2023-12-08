function createTable() {
	let rn = parseInt(prompt("Input numbers of rows"));
	let cn = parseInt(prompt("Input numbers of columns"));
	let table = document.getElementById("myTable");
	table.innerHTML="";
	for(let i=0; i<rn; i++){
		
		let row=document.createElement("tr");
		
		for(let j=0; j<cn; j++){
			let coulmn=document.createElement("td");
			coulmn.innerText= "Row-"+i+" Column-"+j;
			row.appendChild(coulmn);
		}
		
		table.appendChild(row);
		
	}
}
