var mocca = 0;
var syaim = 0;
var arabiga = 0;
var amerigan = 0;
//mocca
function minus_moc() {
  if (mocca <= 0) {
    document.getElementById("mocca").innerText = mocca -= 0;
  } else {
    document.getElementById("mocca").innerText = mocca -= 1;
  }
}
function plus_moc() {
  document.getElementById("mocca").innerText = mocca += 1;
}
function card_moc() {}
function select_mocca() {
  if (mocca > 0) {
    document.getElementById("mocca_pack").innerText =
      "เมล็ดกาแฟ มอคค่า (คั่วเข้ม) 200 กรัม";
    document.getElementById("mocca_count").innerText = mocca;
    document.getElementById("mocca_price").innerText = mocca * 144.0;
  } else {
  }
  sum = (mocca * 144.0) + (syaim * 121) + (arabiga * 193.0) +(amerigan * 126.0);
  if (sum >= 1000) {
    document.getElementById("sum_price").innerText = sum=sum - (sum* 0.1) ;
  } else {
    document.getElementById("sum_price").innerText = sum ;
  }
}
//syaim
function minus_syaim() {
  if (syaim <= 0) {
    document.getElementById("syaim").innerText = syaim -= 0;
  } else {
    document.getElementById("syaim").innerText = syaim -= 1;
  }
}
function plus_syaim() {
  document.getElementById("syaim").innerText = syaim += 1;
}
function select_syaim() {
  if (syaim > 0) {
    document.getElementById("syaim_pack").innerText =
      "เมล็ดกาแฟ สยามเบลนด์ (คั่วกลางเกือบเข้ม) 200 กรัม";
    document.getElementById("syaim_count").innerText = syaim;
    document.getElementById("syaim_price").innerText = syaim * 121;
  } else {
  }
  sum = (mocca * 144.0) + (syaim * 121) + (arabiga * 193.0) +(amerigan * 126.0);
  if (sum >= 1000) {
    document.getElementById("sum_price").innerText = sum=sum - (sum* 0.1) ;
  } else {
    document.getElementById("sum_price").innerText = sum ;
  }
}
//arabiga
function minus_arabiga() {
  if (arabiga <= 0) {
    document.getElementById("arabiga").innerText = arabiga -= 0;
  } else {
    document.getElementById("arabiga").innerText = arabiga -= 1;
  }
}
function plus_arabiga() {
  document.getElementById("arabiga").innerText = arabiga += 1;
}
function select_arabiga() {
  if (arabiga > 0) {
    document.getElementById("arabiga_pack").innerText =
      "เมล็ดกาแฟ อราบิก้า 100% (คั่วกลางเกือบเข้ม) 250 กรัม";
    document.getElementById("arabiga_count").innerText = arabiga;
    document.getElementById("arabiga_price").innerText = arabiga * 193.0;
  } else {
  }
  sum = (mocca * 144.0) + (syaim * 121) + (arabiga * 193.0) +(amerigan * 126.0);
  if (sum >= 1000) {
    document.getElementById("sum_price").innerText = sum=sum - (sum* 0.1) ;
  } else {
    document.getElementById("sum_price").innerText = sum ;
  }
}
//amerigan
function minus_amerigan() {
  if (amerigan <= 0) {
    document.getElementById("amerigan").innerText = amerigan -= 0;
  } else {
    document.getElementById("amerigan").innerText = amerigan -= 1;
  }
}
function plus_amerigan() {
  document.getElementById("amerigan").innerText = amerigan += 1;
}
function select_amerigan() {
  if (amerigan > 0) {
    document.getElementById("amerigan_pack").innerText =
      "เมล็ดกาแฟ อเมริกัน โรสท์ (คั่วกลาง) 200 กรัม";
    document.getElementById("amerigan_count").innerText = amerigan;
    document.getElementById("amerigan_price").innerText = amerigan * 126.0;
  } else {
  }
  sum = (mocca * 144.0) + (syaim * 121) + (arabiga * 193.0) +(amerigan * 126.0);
  if (sum >= 1000) {
    document.getElementById("sum_price").innerText = sum=sum - (sum* 0.1) ;
  } else {
    document.getElementById("sum_price").innerText = sum ;
  }
}

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  // Reset quantities to 0
  mocca = 0;
  syaim = 0;
  arabiga = 0;
  amerigan = 0;

  // Update displayed quantities
  document.getElementById("mocca").innerText = mocca;
  document.getElementById("syaim").innerText = syaim;
  document.getElementById("arabiga").innerText = arabiga;
  document.getElementById("amerigan").innerText = amerigan;

  // Reset displayed selections and prices
  document.getElementById("mocca_pack").innerText = "";
  document.getElementById("syaim_pack").innerText = "";
  document.getElementById("arabiga_pack").innerText = "";
  document.getElementById("amerigan_pack").innerText = "";
  document.getElementById("mocca_count").innerText = "";
  document.getElementById("syaim_count").innerText = "";
  document.getElementById("arabiga_count").innerText = "";
  document.getElementById("amerigan_count").innerText = "";
  document.getElementById("mocca_price").innerText = "";
  document.getElementById("syaim_price").innerText = "";
  document.getElementById("arabiga_price").innerText = "";
  document.getElementById("amerigan_price").innerText = "";

  // Reset total price
  document.getElementById("sum_price").innerText = "0.00";
});

