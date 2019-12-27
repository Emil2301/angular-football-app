import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

const MaterialComponents = [
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
