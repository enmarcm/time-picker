import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from '../enviroment';


const firebaseProviders = [  provideFirebaseApp(fbApp),  provideAuth(authApp),];


bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
}).catch((err) => console.error(err));