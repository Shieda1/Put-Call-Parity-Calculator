// https://www.omnicalculator.com/finance/put-call-parity

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const spotpriceoftheunderlyingassetRadio = document.getElementById('spotpriceoftheunderlyingassetRadio');
const europeancalloptionpriceRadio = document.getElementById('europeancalloptionpriceRadio');
const europeanputoptionpriceRadio = document.getElementById('europeanputoptionpriceRadio');
const presentvalueofstrikepriceRadio = document.getElementById('presentvalueofstrikepriceRadio');

let spotpriceoftheunderlyingasset;
let europeancalloptionprice = v1;
let europeanputoptionprice = v2;
let presentvalueofstrikeprice = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

spotpriceoftheunderlyingassetRadio.addEventListener('click', function() {
  variable1.textContent = 'European call option price';
  variable2.textContent = 'European put option price';
  variable3.textContent = 'Present value of strike price';
  europeancalloptionprice = v1;
  europeanputoptionprice = v2;
  presentvalueofstrikeprice = v3;
  result.textContent = '';
});

europeancalloptionpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Spot price of the underlying asset';
  variable2.textContent = 'European put option price';
  variable3.textContent = 'Present value of strike price';
  spotpriceoftheunderlyingasset = v1;
  europeanputoptionprice = v2;
  presentvalueofstrikeprice = v3;
  result.textContent = '';
});

europeanputoptionpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Spot price of the underlying asset';
  variable2.textContent = 'European call option price';
  variable3.textContent = 'Present value of strike price';
  spotpriceoftheunderlyingasset = v1;
  europeancalloptionprice = v2;
  presentvalueofstrikeprice = v3;
  result.textContent = '';
});

presentvalueofstrikepriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Spot price of the underlying asset';
  variable2.textContent = 'European call option price';
  variable3.textContent = 'European put option price';
  spotpriceoftheunderlyingasset = v1;
  europeancalloptionprice = v2;
  europeanputoptionprice = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(spotpriceoftheunderlyingassetRadio.checked)
    result.textContent = `Spot price of the underlying asset = ${computespotpriceoftheunderlyingasset().toFixed(2)}`;

  else if(europeancalloptionpriceRadio.checked)
    result.textContent = `European call option price = ${computeeuropeancalloptionprice().toFixed(2)}`;

  else if(europeanputoptionpriceRadio.checked)
    result.textContent = `European put option price = ${computeeuropeanputoptionprice().toFixed(2)}`;

  else if(presentvalueofstrikepriceRadio.checked)
    result.textContent = `Present value of strike price = ${computepresentvalueofstrikeprice().toFixed(2)}`;
})

// calculation

function computespotpriceoftheunderlyingasset() {
  return Number(presentvalueofstrikeprice.value) + Number(europeancalloptionprice.value) - Number(europeanputoptionprice.value);
}

function computeeuropeancalloptionprice() {
  return Number(europeanputoptionprice.value) + Number(spotpriceoftheunderlyingasset.value) - Number(presentvalueofstrikeprice.value);
}

function computeeuropeanputoptionprice() {
  return Number(europeancalloptionprice.value) + Number(presentvalueofstrikeprice.value) - Number(spotpriceoftheunderlyingasset.value);
}

function computepresentvalueofstrikeprice() {
  return Number(europeanputoptionprice.value) + Number(spotpriceoftheunderlyingasset.value) - Number(europeancalloptionprice.value);
}