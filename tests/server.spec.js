import { deleteProduct, getProductos, nonexistentId, postLogin, postProduct } from "../helpers/testingHelpers";

// IMPORTANTE: PARA REALIZAR LOS TESTING ES NECESARIO TENER CREADO AL MENOS 1 PRODUCTO.
describe("Operaciones CRUD de marketplace", () => {
    // 1°
    it("Obteniendo 200 y tipo de dato Array al hacer GET de productos", async() => {
        const response = await getProductos();
        const {body} = response
        const status = response.statusCode;

        expect(status).toBe(200);
        expect(body.productos).toBeInstanceOf(Array);
    });

    // 2°
    it("Obteniendo 401 al borrar producto sin token", async() => {  
        const res = await getProductos();
        const {body} = res
        const response = await deleteProduct(body)
        const status = response.statusCode;

        expect(status).toBe(401);
    });
    
    // 3°
    it("Creando un nuevo producto", async() => {
        const res = await getProductos();
        const {body} = res;
        const {productos: productosArray} = body;

        const newId = nonexistentId(productosArray)

        const nuevoProducto = { id: newId, nombre: "Nuevo Producto", descripcion: "tester", precio: "15400", img1: "img1", img2: "img2", id_categoria: "123456", id_usuario: "123456" };
        const response = await postProduct(nuevoProducto)
        const {body: productos} = response
        const status = response.statusCode;

        expect(productos.producto).toEqual(nuevoProducto);
        expect(status).toBe(201)
    });

    // 4°
    it("Obteniendo 401 al hacer login con contraseña o password erroneo", async() => {
        const userData = {password: "121232", email: "tester@tester.com"}
        const login = await postLogin(userData)
        const status = login.statusCode;
        expect(status).toBe(401)
    });

});
