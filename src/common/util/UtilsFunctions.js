export const getRoutePath = (productCatId,catData) => {
  return catData.find((x) => x.id == productCatId).name;
};
