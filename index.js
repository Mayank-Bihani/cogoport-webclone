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
