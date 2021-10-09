import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home/home-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginRoutingModule } from './login/login-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeRoutingModule,
    LoginRoutingModule,
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'coffeeappmudather.us.auth0.com',
      clientId: 'ULWpnulFFXr6BOrZ1sJLlcoXSyweB5mV',
    
      // Request this audience at user authentication time
      audience: 'MoviesAppAPI',
    
      // Request this scope at user authentication time
      scope: 'read:movies',
    
      // Specify configuration for the interceptor              
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://coffeeappmudather.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://coffeeappmudather.us.auth0.com/api/v2/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'MoviesAppAPI',
    
              // The attached token should have these scopes
              scope: 'read:movies'
            }
          }
        ]
      }
    })
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
