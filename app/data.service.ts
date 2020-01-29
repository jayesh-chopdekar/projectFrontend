import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper: HttpClient) { }

  Validate(credentials)
  {
    return this.helper.post("http://localhost:8080/Project/user/login",credentials);
  }

  RegCase(vicadd)
  {
    return this.helper.post("http://localhost:8080/Project/police/regcase",vicadd);
  }
  ShowCases()
  {
    return this.helper.get("http://localhost:8080/Project/police/showcases");
  }
  Search(name)
  {
    return this.helper.get("http://localhost:8080/Project/police/search/"+name);
  }
  AddUser(userAdd)
  {
    return this.helper.post("http://localhost:8080/Project/admin/adduser",userAdd);
  }
  ShowUsers()
  {
    return this.helper.get("http://localhost:8080/Project/admin/showusers/");
  }
  AddNgo(ngo)
  {
    return this.helper.post("http://localhost:8080/Project/ngo/ngoadd",ngo);
  }
  AddPolice(formData)
  {
    return this.helper.post("http://localhost:8080/Project/police/poladd",formData);
  }
  RemUser(id)
  {
    return this.helper.delete("http://localhost:8080/Project/admin/deluser/"+id);
  }
  EditUser(id,user)
  {
    return this.helper.put("http://localhost:8080/Project/admin/edituser/"+id,user);
  }
  SearchUser(name)
  {
    debugger;
    return this.helper.get("http://localhost:8080/Project/admin/searchuser/"+name);
  }
  EditPolice(id,user)
  {
    return this.helper.put("http://localhost:8080/Project/police/editpol/"+id,user);
  }
  Inbox(id)
  {
    return this.helper.get("http://localhost:8080/Project/user/inbox/"+id);
  }
  SendMsg(msg)
  {
    return this.helper.post("http://localhost:8080/Project/user/send",msg);
  }
  UnVer()
  {
    return this.helper.get("http://localhost:8080/Project/admin/request");
  }
  Verify(uid)
  {
    return this.helper.get("http://localhost:8080/Project/admin/verify/"+uid);
  }
}
