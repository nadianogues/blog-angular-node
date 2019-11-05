import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
    name: 'reducedDescription'
})
export class ReducedDescription implements PipeTransform {
    transform(text: string): string {
        if(text.length > 215) {
            return text.substr(0, 215) + "..."
        }
        return text
    }
}
