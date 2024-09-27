export const loadingDataforHome = async () => {
  try {
    const res = await fetch("data.json");
    const data = res.json();
    return data;
  } catch (err) {
    return err;
  }
};
