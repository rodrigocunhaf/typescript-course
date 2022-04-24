namespace App{

    export class Validation {

        constructor(){};

        static isValid( inputs:string[], maxId:number) {
            let text='';

            !inputs[0] ? text+=ErrosList.TITLE : "";

            !inputs[1] ? text+=ErrosList.DESCRIPTION : "";

            !+inputs[2] ? text+=ErrosList.PEOPLES : "";

            if (text.length > 0){
                alert(text);
                return;

            } else {
                return new Project( maxId, inputs[0], inputs[1], +inputs[2],ProjectStatus.PROGRESS);
            };
        };
    };

};