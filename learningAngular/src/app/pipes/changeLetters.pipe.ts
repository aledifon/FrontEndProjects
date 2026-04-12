import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "changeLetters",
})
export class ChangeLettersPipe implements PipeTransform{

    transform(value: string, mayus: boolean = false) {

        let result = value.replaceAll("e", "3")
                    .replaceAll("i","1");

        if(mayus){
            result = result.toUpperCase();
        }

        return result;
    }
}

//Change 'e' char by 3 and 'i' char by 1