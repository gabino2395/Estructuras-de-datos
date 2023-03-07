class MyArray {
    constructor() { this.length = 0; this.data = {}; }


    get(index) { return this.data[index]; }

    push(item) { this.data[this.length] = item; this.length++; return this.data; }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]; this.length--; return lastItem;
    }

    delete(index) {
        const item = this.data[index]; this.shiftIndex(index); return item;
    }
    shift() {
        return this.delete(0);
    }
    shift2() {
        if (this.length === 0) {
            return undefined
        }

        const itemDeleted = this.data[0]

        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

        this.length--
        delete this.data[this.length]
        return itemDeleted
    }
    unshift(item) {
        if (!item) {
            return this.length
        }
        if (this.length !== 0) {
            for (let i = this.length - 1; i >= 0; i--) {
                this.data[i + 1] = this.data[i];
            }
        }

        this.data[0] = item;
        this.length++;
        return this.length
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) { this.data[i] = this.data[i + 1]; }
        delete this.data[this.length - 1]; this.length--;
    }
}
const myArray = new MyArray();


// En este desafío tendrás que crear tu propia implementación del método unshift.

// La implementación del método unshift nos debe permitir agregar un elemento al inicio de un array y retornar la nueva longitud del array. En caso de no enviar ningún elemento, este de igual forma nos retornará la longitud actual.
export class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    unshift(item) {
        if (!item) {
            return this.length
        }
        if (this.length !== 0) {
            for (let i = this.length - 1; i >= 0; i--) {
                this.data[i + 1] = this.data[i];
            }
        }

        this.data[0] = item;
        this.length++;
        return this.length
    }
}