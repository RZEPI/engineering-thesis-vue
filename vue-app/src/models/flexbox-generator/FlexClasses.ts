import { AlignItemsOptions } from "./AlignItemsOptions";
import { JustifyContentOptions } from "./JustifyContentOptions";

export class FlexClasses {
    wrapping: boolean = false;
    direction: boolean = false;
    justifyContent: JustifyContentOptions = JustifyContentOptions.center
    alignItems: AlignItemsOptions = AlignItemsOptions.center

    constructor(){
    }

    toggleWrapping()
    {
        this.wrapping != this.wrapping;
    }
    toggleDirection()
    {
        this.direction != this.direction
    }
}