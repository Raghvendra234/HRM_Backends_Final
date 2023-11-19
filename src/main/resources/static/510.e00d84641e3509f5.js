"use strict";(self.webpackChunkangular_frontend=self.webpackChunkangular_frontend||[]).push([[510],{8159:(j,u,r)=>{r.r(u),r.d(u,{AddProjectsModule:()=>s});var h=r(6895),C=r(529),o=r(433),p=r(7941),l=r(5535),t=r(1571),P=r(1897),_=r(4416),M=r(8768),x=r(4371),f=r(3056);function y(a,e){if(1&a&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&a){const n=e.$implicit;t.Q6J("value",n.teamLeader),t.xp6(1),t.hij(" ",n.teamLeader," ")}}function O(a,e){if(1&a&&(t.TgZ(0,"option",35),t._uU(1),t.qZA()),2&a){const n=e.$implicit;t.Q6J("value",n.employeeId),t.xp6(1),t.AsE(" ",n.firstName," (",n.emailId,") ")}}function v(a,e){if(1&a){const n=t.EpF();t.TgZ(0,"tr",27)(1,"td")(2,"select",28)(3,"option"),t._uU(4,"Select One"),t.qZA(),t.YNc(5,O,2,3,"option",29),t.qZA()(),t.TgZ(6,"td")(7,"select",30)(8,"option",31),t._uU(9,"Choose..."),t.qZA(),t.TgZ(10,"option"),t._uU(11,"Frontend"),t.qZA(),t.TgZ(12,"option"),t._uU(13,"Backend"),t.qZA(),t.TgZ(14,"option"),t._uU(15,"FullStack"),t.qZA(),t.TgZ(16,"option"),t._uU(17,"Others"),t.qZA()()(),t.TgZ(18,"td"),t._UZ(19,"input",32),t.qZA(),t.TgZ(20,"td")(21,"button",33),t.NdJ("click",function(){const m=t.CHM(n).index,g=t.oxw();return t.KtG(g.removeEmployee(m))}),t._UZ(22,"i",34),t.qZA()(),t._UZ(23,"br"),t.qZA()}if(2&a){const n=e.index,c=t.oxw();t.Q6J("formGroupName",n),t.xp6(5),t.Q6J("ngForOf",c.employeeData)}}class d{constructor(e,n,c,b,m,g){this.addProjectService=e,this.employeeService=n,this.router=c,this.fb=b,this.toast=m,this.snack=g,this.addProject=new l.ZA,this.isCreated=!1,this.projectExist=!1,this.alert=!1,this.dropdownListTech=[],this.dropdownSettingsTech={},this.dropdownListDatabase=[],this.dropdownSettingsDatabase={},this.dropArrayTech=[],this.dropArrayDatabase=[],this.techObj=new l.S9,this.databaseObj=new l.S9,this.projectForm=this.fb.group({projectName:"",clientName:"",fromDate:"",toDate:"",projectManager:"",teamLeader:"",technology:"",databaseTech:"",quantities:this.fb.array([])})}ngOnInit(){this.employeeService.getDropdown().subscribe(n=>{console.log(n),this.employeeData=n}),this.addProjectService.getProjects().subscribe(n=>{this.teamLeaders=n}),this.dropdownListTech=[{itemId:1,technologyName:"HTML"},{itemId:2,technologyName:"CSS"},{itemId:3,technologyName:"Bootstrap"},{itemId:4,technologyName:"JavaScript"},{itemId:5,technologyName:"TypeScript"},{itemId:6,technologyName:"Angular"},{itemId:7,technologyName:"React"},{itemId:8,technologyName:"Java"},{itemId:9,technologyName:"Hibernate"},{itemId:10,technologyName:"Spring JDBC"},{itemId:11,technologyName:"Spring Framework"},{itemId:12,technologyName:"Spring Boot"},{itemId:13,technologyName:"JPA"},{itemId:14,technologyName:".Net"},{itemId:15,technologyName:"Python"}],this.dropdownSettingsTech={idField:"itemId",textField:"technologyName"},this.dropdownListDatabase=[{itemId:1,databaseName:"MySQL"},{itemId:2,databaseName:"Oracle"},{itemId:3,databaseName:"MongoDB"},{itemId:4,databaseName:"PostgreSQL"},{itemId:5,databaseName:"MS SQL Server"},{itemId:6,databaseName:"IBM Db2"},{itemId:7,databaseName:"Redis"},{itemId:8,databaseName:"Cassandra"},{itemId:9,databaseName:"MariaDB"},{itemId:10,databaseName:"Elasticsearch"}],this.dropdownSettingsDatabase={idField:"itemId",textField:"databaseName"}}formSubmit(){console.log("this tech fiels ..............."),console.log(this.projectForm.value.tech),""!=this.projectForm.value.projectName.trim()&&null!=this.projectForm.value.projectName?""!=this.projectForm.value.clientName.trim()&&null!=this.projectForm.value.clientName?""!=this.projectForm.value.projectManager.trim()&&null!=this.projectForm.value.projectManager&&""!=this.projectForm.value.projectManager.trim()&&null!=this.projectForm.value.projectManager?""!=this.projectForm.value.fromDate&&null!=this.projectForm.value.fromDate?""!=this.projectForm.value.technology&&null!=this.projectForm.value.technology?""!=this.projectForm.value.databaseTech&&null!=this.projectForm.value.databaseTech?this.addProjectService.saveProject(this.projectForm.value).subscribe(e=>{this.addProject=new l.ZA,this.isCreated=!0,this.projectExist=!1,this.projectError=new l.ZA,this.toast.success({detail:"Project Detail",summary:"Project has been saved !!!",duration:1e3}),this.router.navigate(["/admin/projectlist"])},e=>{this.projectError=e.error,this.isCreated=!1,(400==e.status||500==e.status)&&(this.isCreated=!1,this.projectExist=!0,this.EError=e.error.message,this.toast.error({detail:"Project Details",summary:e.error.message,duration:1e4}))}):this.snack.open("Please select Database !!!","",{duration:3e3}):this.snack.open("Please select technology !!!","",{duration:3e3}):this.snack.open("Starting Date is  required !!!","",{duration:3e3}):this.snack.open("Project Manager is  required !!!","",{duration:3e3}):this.snack.open("Client Name is  required !!!","",{duration:3e3}):this.snack.open("Project Name is  required !!!","",{duration:3e3})}validate(){var e=document.getElementsByClassName("needs-validation")[0];!1===e.checkValidity()&&(event.preventDefault(),event.stopPropagation()),e.classList.add("was-validated")}quantities(){return this.projectForm.get("quantities")}addNewEmployee(){return this.fb.group({employeeId:"",technologies:"",remark:""})}addMoreEmployee(){this.quantities().push(this.addNewEmployee())}removeEmployee(e){this.quantities().removeAt(e)}}d.\u0275fac=function(e){return new(e||d)(t.Y36(P.e),t.Y36(_.G),t.Y36(p.F0),t.Y36(o.qu),t.Y36(M.s),t.Y36(x.ux))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-add-project"]],decls:72,vars:7,consts:[[1,"card","bg_sol",2,"margin-left","200px","margin-top","60px"],[1,"form",3,"formGroup","ngSubmit"],[2,"text-align","center"],[1,"row"],[1,"col-sm-12","col-md-4"],["type","text","formControlName","projectName","name","projectName","required","",1,"input"],["type","text","formControlName","clientName","name","clientName","required","",1,"input"],["type","text","formControlName","projectManager","name","projectManager","placeholder","","required","",1,"input"],["type","date","formControlName","fromDate","name","fromDate","required","",1,"input"],[2,"margin-top","13px"],["type","date","formControlName","toDate","name","toDate","required","",1,"input"],["formControlName","teamLeader","name","teamLeader","placeholder","Team-Leader","required","",1,"input"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-6"],["for","inputname"],["formControlName","technology",3,"settings","data"],["formControlName","databaseTech",3,"settings","data"],[1,"container"],["formArrayName","quantities",1,"table","table-bordered"],[2,"margin-left","5px"],["width","150px"],["type","button",1,"btn","btn-primary",2,"color","white","background-color","blue",3,"click"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"btn-group"],["type","submit",1,"button"],["type","reset",1,"button","can"],[3,"value"],[3,"formGroupName"],["formControlName","employeeId","name","employeeId","id","validationDefault04","required","",1,"form-select",2,"margin-top","15px"],["formControlName","employeeId",3,"value",4,"ngFor","ngForOf"],["name","","formControlName","technologies","id","validationDefault04","required","",1,"form-select",2,"margin-top","15px","margin-left","10px"],["selected","","disabled","","value",""],["type","text","formControlName","remark",1,"form-control",2,"margin-top","15px","margin-left","20px"],[1,"btn","btn-danger",2,"color","white","background-color","red","margin-left","30px",3,"click"],[1,"fa","fa-trash",2,"width","25px"],["formControlName","employeeId",3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return n.formSubmit()}),t.TgZ(2,"h3",2),t._uU(3,"Add Projects"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"label"),t._UZ(7,"input",5),t.TgZ(8,"span"),t._uU(9,"Project Name"),t.qZA()()(),t.TgZ(10,"div",4)(11,"label"),t._UZ(12,"input",6),t.TgZ(13,"span"),t._uU(14,"Client Name"),t.qZA()()(),t.TgZ(15,"div",4)(16,"label"),t._UZ(17,"input",7),t.TgZ(18,"span"),t._uU(19,"Project Manager"),t.qZA()()()(),t.TgZ(20,"div",3)(21,"div",4)(22,"label"),t._UZ(23,"input",8),t.TgZ(24,"span",9),t._uU(25,"Starting Date"),t.qZA()()(),t.TgZ(26,"div",4)(27,"label"),t._UZ(28,"input",10),t.TgZ(29,"span",9),t._uU(30,"Ending Date"),t.qZA()()(),t.TgZ(31,"div",4)(32,"label")(33,"select",11)(34,"option"),t._uU(35,"Select One"),t.qZA(),t.YNc(36,y,2,2,"option",12),t.qZA(),t.TgZ(37,"span"),t._uU(38,"Team Leader"),t.qZA()()()(),t.TgZ(39,"div",3)(40,"div",13)(41,"label",14)(42,"span"),t._uU(43,"Technologies"),t.qZA(),t._UZ(44,"ng-multiselect-dropdown",15),t.qZA()(),t.TgZ(45,"div",13)(46,"label",14)(47,"span"),t._uU(48,"Databases"),t.qZA(),t._UZ(49,"ng-multiselect-dropdown",16),t.qZA()()(),t.TgZ(50,"div",17)(51,"table",18)(52,"tr")(53,"th"),t._uU(54,"Employee Name"),t.qZA(),t.TgZ(55,"th"),t._uU(56,"Technologies"),t.qZA(),t.TgZ(57,"th",19),t._uU(58,"Remark"),t.qZA(),t.TgZ(59,"th",20)(60,"button",21),t.NdJ("click",function(){return n.addMoreEmployee()}),t._uU(61,"+Add Employee"),t.qZA()()(),t._UZ(62,"br"),t.YNc(63,v,24,2,"tr",22),t.qZA(),t._UZ(64,"br"),t.qZA(),t.TgZ(65,"div",23)(66,"button",24)(67,"span"),t._uU(68,"Submit"),t.qZA()(),t.TgZ(69,"button",25)(70,"span"),t._uU(71,"Reset"),t.qZA()()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.projectForm),t.xp6(35),t.Q6J("ngForOf",n.teamLeaders),t.xp6(8),t.Q6J("settings",n.dropdownSettingsTech)("data",n.dropdownListTech),t.xp6(5),t.Q6J("settings",n.dropdownSettingsDatabase)("data",n.dropdownListDatabase),t.xp6(14),t.Q6J("ngForOf",n.quantities().controls))},dependencies:[h.sg,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.sg,o.u,o.x0,o.CE,f.OP],styles:['label[_ngcontent-%COMP%]{width:100%!important}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;background-color:#fff;padding:20px;border-radius:10px;position:relative;margin:auto!important}.message[_ngcontent-%COMP%]{color:#585757d2;font-size:14px}.flex[_ngcontent-%COMP%]{display:flex;width:100%;gap:6px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:15px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:15px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:30px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.input01[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:50px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:40px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:50px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.fancy[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #CACACA;border-radius:0;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-weight:390;letter-spacing:2px;margin:0;outline:none;overflow:visible;padding:8px 30px;position:relative;text-align:center;text-decoration:none;text-transform:none;transition:all .3s ease-in-out;-webkit-user-select:none;user-select:none;font-size:13px}.fancy[_ngcontent-%COMP%]:before{content:" ";width:1.7rem;height:2px;background:#CACACA;top:50%;left:1.5em;position:absolute;transform:translateY(-50%);transform:translate(230%);transform-origin:center;transition:background .3s linear,width .3s linear}.fancy[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.125em;line-height:1.33333em;padding-left:2em;display:block;text-align:left;transition:all .3s ease-in-out;text-transform:lowercase;text-decoration:none;color:#818181;transform:translate(30%)}.fancy[_ngcontent-%COMP%]   .top-key[_ngcontent-%COMP%]{height:2px;width:1.5625rem;top:-2px;left:.625rem;position:absolute;background:white;transition:width .5s ease-out,left .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-1[_ngcontent-%COMP%]{height:2px;width:1.5625rem;right:1.875rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-2[_ngcontent-%COMP%]{height:2px;width:.625rem;right:.625rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]:hover{color:#fff;background:#CACACA}.fancy[_ngcontent-%COMP%]:hover:before{width:1.5rem;background:white}.fancy[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]{color:#fff;padding-left:1.5em}.fancy[_ngcontent-%COMP%]:hover   .top-key[_ngcontent-%COMP%]{left:-2px;width:0px}.fancy[_ngcontent-%COMP%]:hover   .bottom-key-1[_ngcontent-%COMP%], .fancy[_ngcontent-%COMP%]:hover   .bottom-key-2[_ngcontent-%COMP%]{right:0;width:0}.button[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#3d405b;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;width:100%;transition:all .5s;cursor:pointer;margin:5px}.can[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#e04a4a;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;transition:all .5s;cursor:pointer;margin:5px}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:.5s}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"\\bb";position:absolute;opacity:0;top:0;right:-15px;transition:.5s}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{padding-right:15px}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{opacity:1;right:0}.bg_sol[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,#AFC6E6 0%,#E9E6EF 100%);padding:60px 30px 30px}']});const Z=[{path:"",component:d}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(Z),p.Bz]});class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.ez,i,o.u5,p.Bz,C.JF,o.UX,f.ZQ.forRoot()]})}}]);