export const MaterialMapper = (material) => {
  return Object.entries(material).map(([k, v]) => (
      <span key={k}>
        {k}:{v+" "}
      </span>
  ));
};
