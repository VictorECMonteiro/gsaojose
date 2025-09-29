import axios from "axios"

export const StrapiGet = async (route: string) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_StrapiAdress}/api/${route}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_StrapiToken}`,
        },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error("Strapi error:", e);
    throw e;
  }
};
