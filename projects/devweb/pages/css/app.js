
  function goSection(){
    let select = document.getElementById("atalho");
    let selected = select.options[select.selectedIndex].value;
    if (selected !== '') {
      let sectionDestiny = document.querySelector(selected);
      if (sectionDestiny) {
        window.scrollTo({
          top: sectionDestiny.offsetTop,
          behavior: 'smooth'
        });
      }
    }
}