import {NgModule} from "@angular/core";
import {ServiceNamesPipe} from "./service-names.pipe";

@NgModule({
  declarations: [
    ServiceNamesPipe
  ],
  exports: [
    ServiceNamesPipe
  ]
})
export class ApplicationPipesModule {}
