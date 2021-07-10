const landen = document.getElementById('landen');
const vrouwen =document.getElementById('vrouwen');

const getLanden = landen => {
    let regions = randomPersonData.map( land => {
        return land.region});
    let landRegion =regions.sort();

    landRegion.forEach(e => {
        let newLi = document.createElement('li');
        document.querySelector('#list').appendChild(newLi);
        newLi.textContent = e
    })}
 landen.addEventListener('click', getLanden)

 const getVrouwen =  () => {
    let steenbok = randomPersonData.filter( e =>{
        let month = e.birthday.dmy.slice(3, 5);
        let day = e.birthday.dmy.slice(0, 2);
        if (month === "12" || month === "01") {
        return ( e.gender === "female" && e.age > 30 &&
        day >= 19 && day <= 22 )
    }
  })}
 
    let persons = steenbok.map( e => {
    return e.name + " " + e.surname + " " + e.photo;
  });
  
    let sortedPersons = persons.sort();
  
    sortedPersons.forEach(e => {
        let newLi = document.createElement("li");
   
    document.querySelector("#list").appendChild(newLi);
    newLi.textContent = e;
  });

  vrouwen.addEventListener('click', getVrouwen)


