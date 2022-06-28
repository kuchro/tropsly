export const MaterialMapper = (material) => {
  return Object.entries(material).map(([k, v]) => (
      <span key={k}>
        {k}:{v+" "}
      </span>
  ));
};


export const selectCategoryData = (name,catData) =>{
  return Object.entries(catData).find(([k,v]) => v.catName===name)[1].data;
}

export const capitalizeFirstLetter=(str)=>{
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}