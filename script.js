const form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("main");
let hero =document.querySelector(".hero")
let org_form =document.querySelector(".org-form");
let icon2 = document.querySelector(".icon2");
let form_container= document.querySelector(".form-container");
let icon = document.querySelector(".icon");
let favcounter = document.querySelector(".favcount");
let favcount =0;

icon.addEventListener("click", function(){
    form_container.style.display="block";
    hero.style.display="none"
})


form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    const card = document.createElement("div");
    card.classList.add("card");

    const profile = document.createElement("div");
    profile.classList.add("profile");

    const h2 = document.createElement("h2");
  h2.textContent = `Artist : ${inputs[0].value}`;

    const h3 = document.createElement("h3");
 h3.textContent = `Song Name : ${inputs[1].value}`;

    const img = document.createElement("img");
    img.setAttribute("src", inputs[2].value );

    const rmvbtn = document.createElement("button");
rmvbtn.classList.add("remove");
rmvbtn.textContent="x"

    

     rmvbtn.addEventListener("click", function () {
      card.remove();
      favcount--;
      favcounter.textContent=favcount;
})

profile.appendChild(img);

card.appendChild(rmvbtn);
card.appendChild(profile);

card.appendChild(h2);
card.appendChild(h3);

hero.appendChild(card);

favcount++;
favcounter.textContent= favcount;

inputs.forEach(function(inp){
    inp.value="";
});

});


icon2.addEventListener("click", function(){
    form_container.style.display="none";
    hero.style.display="flex";
});



    