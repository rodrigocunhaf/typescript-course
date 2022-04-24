abstract class AbstractList <T> {

    protected list:T[] = [];

    constructor(){};

    abstract getList(): T[];
};

export { AbstractList };