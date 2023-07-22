//* 1ra Entrega Backend

class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.code === id);
      if (product) {
        return product;
      } else {
        console.error("Producto No Encontrado");
        return null;
      }
    }
  }
  
 
  const manager = new ProductManager();
  
  // Agregar productos
  manager.addProduct({
    Title: "Producto 1",
    description: "Descripción del producto 1",
    price: 19.99,
    code: "P001",
    stock: 50
  });
  
  manager.addProduct({
    Title: "Producto 2",
    description: "Descripción del producto 2",
    price: 29.99,
    code: "P002",
    stock: 30
  });
  
  // Obtener todos los productos
  const allProducts = manager.getProducts();
  console.log(allProducts);
  
  // Obtener producto por ID
  const productId = "P001";
  const productById = manager.getProductById(productId);
  console.log(productById);
  
  // Intentar obtener un producto con un ID no existente
  const productoInexistenteId = "P003";
  const ProductoInexistente = manager.getProductById(productoInexistenteId);
  console.log(ProductoInexistente);