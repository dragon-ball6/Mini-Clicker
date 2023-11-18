// base_money is clicks
// money types = ["white pieces", "new coins", "ancestral dimes", "dimensional gems"];

// init
{
let clicks = document.getElementById("cliks");
let clicker = document.getElementById("click");
let upgrade = document.getElementById("upgrade");

let monies = {
	clicks: 0,
	white_pieces: 0,
	new_coins: 0,
	ancestral_dimes: 0,
	dimensional_gems: 0
};
let increase = 1;
let auto = 0;
let trade = 0;

// auto click every 5 secs
setInterval(function() { monies.clicks += auto }, 5000)

clicker.addEventListener("mousedown", function() {
	monies.clicks += increase;
});

class Upgrade {
	constructor(type, qty) {
		this.type = ["click","auto","trade"][type];
		this.qty = (this.type!="trade") ? this.qty : 1;
	}
	update() {
		switch (this.type) {
			case "click":
				increase += this.qty;
			break;
			case "auto":
				auto += this.qty;
			break;
			case "trade":
				trade++;
			break;
		}
	}
	display() {
		return `+${this.qty} ${this.type}${(this.type=="trade") ? "progress" : ""}`;
	}
}
}