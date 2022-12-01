//In javaScript everything is Object except Primitive Datatypes...

// There Are two Selection Methods
/*	1) Single Selection Method 
		a)document.getElementById()  ==> Document Object
		b)document.queryselector()	 ==> Document Object
		
		when we select any HTML element in JS file that element got from HTML Document so it is called Document Object....
		That element is converted into Document Object...
		
		
	2) Multiple Selection method
		a)document.getElementsByClassName()  ==> HTML Collection
		b)document.getElementsByTagName()	 ==> HTMLCollection
		c)document.querySelectorAll()		 ==> NodeList
*/		
		
	// we should use ID selector because it is fastest Method....
	
	
	// ClassList is a property value without Function 
	// ClassList is property of Document Object...
	// addEventListener is Method 
	
	// btn.classList.add()
	// btn is Main Object...classList is Nested Object...add() is Method....
	
	//DOM Selection
	
const showModalBtn = document.getElementById("showModal");
const backDrop = document.getElementById("backDrop"); 
const myModal = document.getElementById("myModal");	
const titleControl = document.getElementById("title");
const imgUrlControl = document.getElementById("imgUrl");
const ratingControl = document.getElementById("rating");
const myClose = Array.from(document.querySelectorAll(".myClose"));
const movieInfo = document.getElementById("movieInfo");
const movieForm = document.getElementById("movieForm");
	
let movieArry = [];
	
	
	//CallBack function
	
	
	const showModalHandler = function(){
		// console.log("clicked");
		
		backDrop.classList.remove("d-none");
		myModal.classList.remove("d-none");
	}
	
	const hideModalHandler = function(){
		backDrop.classList.add("d-none");
		myModal.classList.add("d-none");
	}
	
	const onMovieAddHandler = function(eve){
		eve.preventDefault();
		// console.log(eve.target);
		
		let obj = {
			title : titleControl.value,
			imgUrl :imgUrlControl.value,
			rating : ratingControl.value
		}
		movieArry.push(obj);
		templating(movieArry);
		console.log(obj);
		
		
		console.log(this.value);
		// eve.target.reset();
		this.reset();
		hideModalHandler();
	}
	
	
	
	
	//Event Binding
	
	showModalBtn.addEventListener("click", showModalHandler);
	backDrop.addEventListener("click" , hideModalHandler);
	
	movieForm.addEventListener("submit", onMovieAddHandler);
	
	myClose.forEach(function(ele){
		console.log(ele);
		ele.addEventListener("click", hideModalHandler)
	})
	
	
	
	function templating(arr){
		let result = '';
		arr.forEach(function(ele){
		result +=`
			div class="col-md-4">
				<div class="card">
					<div class="card-body">
						<figure>
							<h3> ${ele.title} </h3>
							<img src="${ele.imgUrl}" alt="${ele.title}" title= "${ele.title}" class="img-fluid">
				
							<figcaption>
							<p>${ele.rating}/5</p>
							</figcaption>
				
						<figure>
					</div>
				</div>
			</div>`	
			
			movieInfo.innerHTML = result;
		})
	}
	
	
	