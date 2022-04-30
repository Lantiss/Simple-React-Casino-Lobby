import data from "../data.json";

const uniqueCategories = data.reduce((accum, current) => {
  current.cats.forEach((codeObj) => {
    if (!accum.some((accumElement) => accumElement.title === codeObj.title)) {
      accum.push(codeObj);
    }
  });
  return accum;
}, []);

export default uniqueCategories;
