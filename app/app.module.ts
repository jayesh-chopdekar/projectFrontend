import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NgModel, FormsModule,NgForm} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { PolicehomeComponent } from './police/policehome/policehome.component'
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service'
import { NgoComponent } from './ngo/ngo/ngo.component';
import { AdminComponent } from './admin/admin/admin.component';
import { PolicregComponent } from './police/policreg/policreg.component';
import { NgoregComponent } from './ngo/ngoreg/ngoreg.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { StatComponent } from './home/stat/stat.component';
import { OrgComponent } from './home/org/org.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { RegcaseComponent } from './police/regcase/regcase.component';
import { CasesComponent } from './police/cases/cases.component';
import { SearchComponent } from './police/search/search.component';
import { PoliceinboxComponent } from './police/policeinbox/policeinbox.component';
import { NgoinboxComponent } from './ngo/ngoinbox/ngoinbox.component';
import { UsersComponent } from './admin/users/users.component';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { AdmininboxComponent } from './admin/admininbox/admininbox.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { ShowusersComponent } from './police/showusers/showusers.component';
import { EditprofileComponent } from './police/editprofile/editprofile.component';
import { NgoshowusersComponent } from './ngo/ngoshowusers/ngoshowusers.component';
import { NgosearchComponent } from './ngo/ngosearch/ngosearch.component';
import { AdsearchComponent } from './admin/adsearch/adsearch.component';
import { AdusersearchComponent } from './admin/adusersearch/adusersearch.component';
import { AdmincomposeComponent } from './admin/admincompose/admincompose.component';
import { NgocomposeComponent } from './ngo/ngocompose/ngocompose.component';
import { PolicecomposeComponent } from './police/policecompose/policecompose.component';
import { NgcasesComponent } from './ngo/ngcases/ngcases.component';
import { VerifyComponent } from './admin/verify/verify.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PolicehomeComponent,
    NgoComponent,
    AdminComponent,
    PolicregComponent,
    NgoregComponent,
    GalleryComponent,
    StatComponent,
    OrgComponent,
    AboutusComponent,
    RegcaseComponent,
    CasesComponent,
    SearchComponent,
    PoliceinboxComponent,
    NgoinboxComponent,
    UsersComponent,
    AdduserComponent,
    AdmininboxComponent,
    EdituserComponent,
    ShowusersComponent,
    EditprofileComponent,
    NgoshowusersComponent,
    NgosearchComponent,
    AdsearchComponent,
    AdusersearchComponent,
    AdmincomposeComponent,
    NgocomposeComponent,
    PolicecomposeComponent,
    NgcasesComponent,
    VerifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"police",component:PolicehomeComponent},
      {path:"ngo",component:NgoComponent},
      {path:"admin",component:AdminComponent},
      {path:"policereg",component:PolicregComponent},
      {path:"ngoreg",component:NgoregComponent},
      {path:"gallery",component:GalleryComponent},
      {path:"stat",component:StatComponent},
      {path:"org",component:OrgComponent},
      {path:"about",component:AboutusComponent},
      {path:"regcase",component:RegcaseComponent},
      {path:"cases",component:CasesComponent},
      {path:"search",component:SearchComponent},
      {path:"policeinbox",component:PoliceinboxComponent},
      {path:"ngoinbox",component:NgoinboxComponent},
      {path:"users",component:UsersComponent},
      {path:"adduser",component:AdduserComponent},
      {path:"admininbox",component:AdmininboxComponent},
      {path:"edituser",component:EdituserComponent},
      {path:"showusers",component:ShowusersComponent},
      {path:"editprofile",component:EditprofileComponent},
      {path:"ngoshow",component:NgoshowusersComponent},
      {path:"ngosearch",component:NgosearchComponent},
      {path:"adsearch",component:AdsearchComponent},
      {path:"adusersearch",component:AdusersearchComponent},
      {path:"adcompose",component:AdmincomposeComponent},
      {path:"ngocompose",component:NgocomposeComponent},
      {path:"polcompose",component:PolicecomposeComponent},
      {path:"ngcases",component:NgcasesComponent},
      {path:"request",component:VerifyComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
