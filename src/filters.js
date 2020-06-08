const { offices } = require('./data'); 


filterParent = (loc) => {
  return offices.filter(office => office.location.name.includes(loc));
}

filterChild = (loc) => {

}

const region = 'United States';

const parentOfficeFound = filterParent(region);

parentOfficeFound.forEach(parent => {
  console.log(parent.children);
});