// URL API DummyJSON
const productApiURL = "https://dummyjson.com/products";
const userApiURL = "https://dummyjson.com/users";

axios
  .get(productApiURL)
  .then((response) => {
    console.log("Products: ", response.data.products);
  })
  .catch((error) => {
    console.error(error);
  });

const getProductById = (id) => {
  axios
    .get(productApiURL + "/" + `${id}`)
    .then((response) => {
      console.log("Product: ", response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

// User
const getUsers = async () => {
  try {
    const response = await axios.get(userApiURL);
    const users = response.data.users;
    console.log("Users:", users);
  } catch (error) {
    console.error("Error getting users:", error);
  }
};

const getUsersbyId = async (id) => {
  try {
    const response = await axios.get(userApiURL + "/" + `${id}`);
    const users = response.data;
    console.log("User:", users);
  } catch (error) {
    console.error("Error getting user:", error);
  }
};

getUsers();
getProductById(10);
getUsersbyId(1);
