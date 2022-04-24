namespace App{

    export abstract class AbstractList <T> {

        protected list:T[] = [];

        constructor(){};

        abstract getList(): T[];

        abstract dragOverConfig(event:DragEvent):void;

        abstract dropConfig(event:DragEvent):void;
    };
    
};