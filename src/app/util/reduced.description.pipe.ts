import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
    name: 'reducedDescription'
})
export class ReducedDescription implements PipeTransform {
    transform(text: string): string {
        text = text.replace(/<\/?[^>]+(>|$)/g, "")
        text = text.replace(/&nbsp;/g, " ")

        if(text.length > 215) {
            return text.substr(0, 215) + "..."
        }
        return text
    }
}
