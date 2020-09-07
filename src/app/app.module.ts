import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableAkitaProdMode } from '@datorama/akita';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { enableMapSet, enablePatches } from 'immer';


if (environment.production) {
  enableAkitaProdMode();
}

enableMapSet();
enablePatches();

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
