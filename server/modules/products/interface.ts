export interface IProduct {
    readonly id: number,
    urlImagem: string,
    name: string,
    codigoDoProduto: string,
    codigoDeSoftware: string,
    urlFirmware: string,
    display: string
}

export function createProduct({ id, urlImagem, name, codigoDoProduto, codigoDeSoftware, urlFirmware, display }: any): IProduct {
    return {
        id, urlImagem, name, codigoDoProduto, codigoDeSoftware, urlFirmware, display
    }
}

export function createProducts(data: any[]): IProduct[] {
    return data.map(createProduct)
}
