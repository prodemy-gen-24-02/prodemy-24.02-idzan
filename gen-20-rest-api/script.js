// const { default: axios } = require("axios");

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
    .get(productApiURL + "/" + id)
    .then((response) => {
      console.log("Product: ", response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

// Method Product
const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(productApiURL + '/add', newProduct, {
      headers: {
        'Content-type': 'application/json'
      }
    });
    console.log("Created Product: ", response.data);
  } catch (error) {
    console.error("Error creating product:", error);
  }
};


const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(productApiURL + "/" + id, updatedProduct);
    console.log("Updated Product: ", response.data);
  } catch (error) {
    console.error("Error updating product:", error);
  }
};


const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(productApiURL + "/" + id);
    console.log("Deleted Product: ", response.data);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};


// Method User
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
    const response = await axios.get(userApiURL + "/" + id);
    const users = response.data;
    console.log("User:", users);
  } catch (error) {
    console.error("Error getting user:", error);
  }
};


// CREATE user
const createUser = async (newUser) => {
  try {
    const response = await axios.post(userApiURL + '/add', newUser, {
      headers: {
        'Content-type': 'application/json'
      }
    });
    console.log("Created User: ", response.data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};


const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(userApiURL + "/" + id, updatedUser);
    console.log("Updated User: ", response.data);
  } catch (error) {
    console.error("Error updating user:", error);
  }
};


const deleteUser = async (id) => {
  try {
    const response = await axios.delete(userApiURL + "/" + id);
    console.log("Deleted User: ", response.data);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};


// CRUD produk
createProduct({
  title: "New Product",
  description: "Ini Produk baru",
  price: 100,
  brand: "BrandName",
  category: "category",
});


updateProduct(10, {
  title: "Updated Product",
  price: 120,
});


deleteProduct(10);


getProductById(10);



// CRUD User
createUser({
  firstName: "Jiyan",
  lastName: "Wuwa",
  age: 21,
  username: "JiyanWuwa",
  email: "test@example.com",
});


updateUser(1, {
  firstName: "Kazuha",
  age: 20,
});


deleteUser(1);

getUsers();
getUsersbyId(1);