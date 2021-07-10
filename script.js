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


 const isWoman = person => person.gender === "female";

 const isOver30 = person => person.age > 30;
 
 const isCapricorn = person => person.sign === CAPRICORN;
 
 const sortByName = (person1, person2) =>
   sort_helper(person1.name > person2.name);
 
 const getCapricornWomen = personData =>
   personData.filter(isWoman).filter(isOver30).map(addStarSign).filter(isCapricorn).sort(sortByName);
 
 const generateCapricornWomanHTML = ({name,surname, photo, age, birthday }) => {
   
   const nameSpan = document.createElement("span");
   nameSpan.innerHTML = `${name} ${surname}`;
 
   const photoSpan = document.createElement("span");
   photoSpan.innerHTML = photo;
 
   const ageSpan = document.createElement("span");
   ageSpan.innerHTML = age;
 
   const birthdaySpan = document.createElement("span");
   birthdaySpan.innerHTML = birthday.dmy;
 
   const li = document.createElement("li");
   li.appendChild(nameSpan);
   li.appendChild(photoSpan);
   li.appendChild(ageSpan);
   li.appendChild(birthdaySpan)
 
   return li;
 };
 
 const displayCapricornWomen = () => {
   getCapricornWomen.map(generateCapricornWomanHTML).forEach(addToResultList);
 };
 
 document.querySelector("#list").addEventListener("click", displayCapricornWomen);
