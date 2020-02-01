const fields = {
  id: "Id",
  category: "Вид продукции",
  subCategory: "Вид товаров",
  title: "Наменование"
};

const nullable = "NULL";

const filterKeysFromNullable = items =>
  Object.keys(items).reduce(
    (result, key) => ({
      ...result,
      ...(!items[key] || items[key] === nullable
        ? undefined
        : { [key]: items[key] })
    }),
    {}
  );

export const normalizeSearchData = (data = []) => {
  // console.log(data)
  const normalizedData = data.map(item => {
    const {
      [fields.id]: id,
      [fields.category]: category,
      [fields.subCategory]: subCategory,
      [fields.title]: title,
      ...allRestItems
    } = item;

    return {
      id,
      category,
      subCategory,
      title,
      ...filterKeysFromNullable(allRestItems)
    };
  });

  return normalizedData;
};
