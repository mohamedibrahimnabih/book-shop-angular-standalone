export interface IProduct {
    id: number;
    title: string;
    author: string;
    description: string;
    isbn: string;
    price: number;
    imgs: string[];

    categoryId: number;
}
