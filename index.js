function animateValue(obj, start, end, duration,showplus){
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if(showplus){
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
      }
      else{
        obj.innerHTML = Math.floor(progress * (end - start) + start);
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const country = document.getElementById("country-count");
  const port = document.getElementById("port-count");
  const cargo = document.getElementById("cargo-count");
  const container = document.getElementById("container-count");
  

  animateValue(country, 0, 180, 2000,true);
  animateValue(port, 0, 10000, 2000,false);
  animateValue(cargo, 0, 30000, 2000,true);
  animateValue(container, 0, 700000, 2000,false);



// For color change of navbar
const navBar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  
  if (y==0){
  navBar.style.backgroundColor = `#fbdc00`;
  navBar.style.boxShadow="0 0 0 white";

  }
  else{
  navBar.style.backgroundColor = `white`;
  navBar.style.boxShadow="0 1px 6px rgba(169,188,218,.65)";

  }
})




const op1 = document.querySelector(".productContainer");
const  sb1 = op1.querySelector(".productButton");


const op2 = document.querySelector(".partnerContainer");
const  sb2 = op2.querySelector(".partnerButton");


const op3 = document.querySelector(".toolContainer");
const  sb3 = op3.querySelector(".toolButton");


const op4 = document.querySelector(".companyContainer");
const  sb4 = op4.querySelector(".companyButton");



const op5 = document.querySelector(".knowledgeContainer");
const  sb5 = op5.querySelector(".knowledgeButton");

sb1.addEventListener("click", () =>
  op1.classList.toggle("active")
);

sb2.addEventListener("click", () =>
  op2.classList.toggle("active")
);

sb3.addEventListener("click", () =>
  op3.classList.toggle("active")
);

sb4.addEventListener("click", () =>
  op4.classList.toggle("active")
);

sb5.addEventListener("click", () =>
  op5.classList.toggle("active")
);
