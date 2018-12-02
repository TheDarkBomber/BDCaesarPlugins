//META{"name":"Caesar"}*//

class Caesar {
	getName() {return "Caesar Plugin Library";}
    getDescription() {return "Library for plugins written by Caesar.";} 
    getVersion() {return "1.0.0";} 
    getAuthor() {return "Caesar TheDarkBomber";}
	load(){}
	dummy() {
		console.log("dummy function");
	}
	Alert(title, content) {
		content = content.replace(/¦H/g, '<h1 style="color:#DD2211;">');
		content = content.replace(/¦h/g, '</h1>');
		content = content.replace(/¦B/g, '<b>');
		content = content.replace(/¦A/g, '<p style="color:MediumSeaGreen;">');
		content = content.replace(/¦R/g, '<p style="color:Tomato;">');
		content = content.replace(/¦N/g, '<p style="color:Orange;">');
		content = content.replace(/¦p/g, '</p>');
		content = content.replace(/¦l/g, '<br>');
		BdApi.alert(title, content);
	}
	start() {
		
	}
	stop(){}
}

