import { ProductDTO } from "../models/ProductDTO";

const computers: ProductDTO[] = [
  {
    name: "Computador 1",
  },
  {
    name: "Computador 2",
  },
  {
    name: "Computador 3",
  },
];

export function findAllComputers(): ProductDTO[] {
    return computers;
}

const eletronics: ProductDTO[] = [
    {
      name: "Eletrônico 1",
    },
    {
      name: "Eletrônico 2",
    },
    {
      name: "Eletrônico 3",
    },
  ];

  export function findAllEletronics(): ProductDTO[] {
    return eletronics;
}

const books: ProductDTO[] = [
    {
      name: "Livro 1",
    },
    {
      name: "Livro 2",
    },
    {
      name: "Livro 3",
    },
  ];

  export function findAllBooks(): ProductDTO[] {
    return books;
}