// This function is used for fetch data form data.json file
export const loadingDataforHome = async () => {
  try {
    const res = await fetch("data.json");
    const data = res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const singleBookLoader = async ({ params }) => {
  try {
    const res = await fetch(`data-${params.bookId}.json`);
    const data = res.json();
    return data;
  } catch (err) {
    return err;
  }
};
