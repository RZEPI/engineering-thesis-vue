import { CSSProperties } from "vue";
import { AlignItemsOptions } from "./AlignItemsOptions";
import { JustifyContentOptions } from "./JustifyContentOptions";

export class FlexClasses {
    wrapping: boolean = false;
    direction: boolean = false;
    justifyContent: JustifyContentOptions = JustifyContentOptions.CENTER
    alignItems: AlignItemsOptions = AlignItemsOptions.CENTER

    constructor(){
    }

    toggleWrapping() : void
    {
        this.wrapping = !this.wrapping;
    }
    toggleDirection() : void
    {
        this.direction = !this.direction
    }

    getStyleObject() : CSSProperties
    {
        return {
            'flex-wrap': this.wrapping ? 'wrap' : 'nowrap',
            'flex-direction': this.direction ? 'column' : 'row',
            'justify-content': this.justifyContent  as string,
            'align-items': this.alignItems as string
        }
    }
}