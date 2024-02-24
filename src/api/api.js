import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://knj-cms-system-11bdd0096622.herokuapp.com/api/products?populate=*"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the products:", error);
    return { data: [], error: "Failed to fetch products." };
  }
};

export default fetchProducts;
