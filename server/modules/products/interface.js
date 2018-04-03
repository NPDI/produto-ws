export function createProduct({ id, urlImagem, name, codigoDoProduto, codigoDeSoftware, urlFirmware, display }) {
    return {
        id, urlImagem, name, codigoDoProduto, codigoDeSoftware, urlFirmware, display
    }
}

export function createProducts(data) {
    return data.map(createProduct);
}
