/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 **/

import { randomInt } from "crypto"

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 **/
type Category = {
    id: string,
    name: string,
    photo?: string
}

 /**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 **/
type Product = {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createdAt: string,
    oldPrice?: number,
    price: number,
    category: Category
}

 /**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 **/
type Operation = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Cost'
}

 /**
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
type Profit = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Profit'
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    
    const id: string = randomInt(1000, 9999).toString();

    return {
        id: id,
        name: "product_" + id,
        desc: "product " + id + " desc",
        photo: "photo_" + id,
        createdAt: createdAt,
        category: {
            id: "001",
            name: "Категория 1"
        },
        oldPrice: randomInt(100,1000),
        price: randomInt(100,1000)
    };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation= (createdAt: string): Operation  => {

    const id: string = randomInt(1000).toString();

    return {
        id: id,
        name: "operation_" + id,
        desc: "operation " + id + " created at " + createdAt,
        createdAt: createdAt,
        amount: randomInt(1000,10000),
        category: {
            id: "001",
            name: "Категория 1"
        },
        type: 'Cost'
    }
};
