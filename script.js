function updateTextInput(val,elementid) {
          document.getElementById(elementid).value=val; 
          calculate_rr_ratio();
          //4) calculate risk and reward
			risk = document.getElementById("risk");
			reward = document.getElementById("reward");
			risk.innerHTML = "";
			reward.innerHTML = "";

			risk_value = (document.getElementById("stopLoss").value - document.getElementById("entryprice").value)*position_size_value.toFixed(3);
			risk.innerHTML = risk_value.toFixed(3) + " (HKD:" + (risk_value.toFixed(3)*7.85).toFixed(3) + ")";

			reward_value = (document.getElementById("entryprice").value - document.getElementById("takeProfit").value)*position_size_value.toFixed(3);
			reward.innerHTML = reward_value.toFixed(3) + " (HKD:" + (reward_value.toFixed(3)*7.85).toFixed(3) + ")";

}


function updateSlider(val,elementid) {
          document.getElementById(elementid).value=val; 
          calculate_rr_ratio();
          //4) calculate risk and reward
			risk = document.getElementById("risk");
			reward = document.getElementById("reward");
			risk.innerHTML = "";
			reward.innerHTML = "";

			risk_value = (document.getElementById("stopLoss").value - document.getElementById("entryprice").value)*position_size_value.toFixed(3);
			risk.innerHTML = risk_value.toFixed(3) + " (HKD:" + (risk_value.toFixed(3)*7.85).toFixed(3) + ")";

			reward_value = (document.getElementById("entryprice").value - document.getElementById("takeProfit").value)*position_size_value.toFixed(3);
			reward.innerHTML = reward_value.toFixed(3) + " (HKD:" + (reward_value.toFixed(3)*7.85).toFixed(3) + ")";
}

function calculate_rr_ratio(){

	risk = document.getElementById("stopLoss").value - document.getElementById("entryprice").value;

	reward = document.getElementById("entryprice").value - document.getElementById("takeProfit").value;

	rr_ratio = document.getElementById("rr_ratio");

	rr_ratio.innerHTML = "";

	rr_ratio.innerHTML = "1:" + (Math.round(100*reward/risk)/100);

}


function calculate(){
	//1) calculate position size
	position_size = document.getElementById("position_size");
	position_size.innerHTML = "";
	position_size_value = (document.getElementById("leverage").value*document.getElementById("margin").value)/document.getElementById("entryprice").value;
	position_size.innerHTML = position_size_value.toFixed(3);

	//2) calculate contract value
	contract_value = document.getElementById("contract_value");
	contract_value.innerHTML = "";
	contract_value.innerHTML = position_size_value.toFixed(3)*document.getElementById("entryprice").value

	//3) calculate rr ratio
	calculate_rr_ratio();

	//4) calculate risk and reward
	risk = document.getElementById("risk");
	reward = document.getElementById("reward");
	risk.innerHTML = "";
	reward.innerHTML = "";

	risk_value = (document.getElementById("stopLoss").value - document.getElementById("entryprice").value)*position_size_value.toFixed(3);
	risk.innerHTML = risk_value.toFixed(3) + " (HKD:" + (risk_value.toFixed(3)*7.85).toFixed(3) + ")";

	reward_value = (document.getElementById("entryprice").value - document.getElementById("takeProfit").value)*position_size_value.toFixed(3);
	reward.innerHTML = reward_value.toFixed(3) + " (HKD:" + (reward_value.toFixed(3)*7.85).toFixed(3) + ")";


}





function backupCalculate() {
const CP = document.querySelector(".cost__price").value;
const SP = document.querySelector(".selling__price").value;

const profit__loss = document.querySelector(".profit__loss");
const percentage = document.querySelector(".profit__loss__percentage");
const nothing = document.querySelector(".nothing");

profit__loss.innerHTML = "";
percentage.innerHTML = "";
nothing.innerHTML = "";

if (SP > CP) {
	const profit = SP - CP;
	const profit_percent = ((profit / CP) * 100).toFixed(2);

	profit__loss.innerHTML = "Profit : " + profit;
	percentage.innerHTML = "Profit Percentage : " + profit_percent;
}
if (SP < CP) {
	const loss = CP - SP;
	const loss_percent = ((loss / CP) * 100).toFixed(2);

	profit__loss.innerHTML = "Loss : " + loss;
	percentage.innerHTML = "Loss Percentage : " + loss_percent;
}
if (SP == CP) {
	nothing.innerHTML = "No Profit No Loss";
}
};
