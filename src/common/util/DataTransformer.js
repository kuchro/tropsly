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