namespace App {
    export interface Component <T> {
        
        getElement():HTMLElement;

        configure(event:T):void;
    };
};