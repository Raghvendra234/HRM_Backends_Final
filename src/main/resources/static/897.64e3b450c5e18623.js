"use strict";(self.webpackChunkangular_frontend=self.webpackChunkangular_frontend||[]).push([[897],{6897:(A,h,o)=>{o.r(h),o.d(h,{SalaryListModule:()=>l});var m=o(6895),c=o(7941),y=o(159),b=o(8448),t=o(1571),Z=o(2761),p=o(433);function f(r,e){if(1&r){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"button",25)(19,"a",26),t._UZ(20,"i",27),t.qZA()()(),t.TgZ(21,"td")(22,"button",28),t.NdJ("click",function(){const u=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.deleteSalary(u.salaryId))}),t._UZ(23,"i",29),t.qZA()()()}if(2&r){const a=e.$implicit,i=e.index,s=t.oxw();t.xp6(2),t.Oqu(s.pageObject.size*s.pageObject.page+i+1),t.xp6(2),t.Oqu(a.employee.firstName),t.xp6(2),t.Oqu(a.employee.emailId),t.xp6(2),t.Oqu(a.employee.designation),t.xp6(2),t.Oqu(a.dearnessAllowance),t.xp6(2),t.Oqu(a.houseRentAllowance),t.xp6(2),t.Oqu(a.basicSalary),t.xp6(2),t.Oqu(a.grossSalary),t.xp6(3),t.MGl("routerLink","admin/salarylist/",a.salaryId,"")}}class g{constructor(e,a){this.salaryService=e,this.router=a,this.salaryList=[],this.pageObject={page:0,size:10,totalPage:0},this.emplpoyee=new b.RB}ngOnInit(){this.getPagination()}getPagination(){this.salaryService.getSalaryPagination(this.pageObject.page,this.pageObject.size).subscribe(e=>{console.log("Printing Salary Slip "),console.log(e),this.salary=e.content,this.pageObject.page=e.number,console.log(this.pageObject.page),this.pageObject.totalPage=e.totalPages})}myFuction(e,a){"prev"==e&&(this.pageObject.page=a-1,this.pageObject.page>-1&&"prev"==e&&this.pageObject.totalPage>this.pageObject.page&&(this.getPagination(),console.log("prev B"))),"next"==e&&(this.pageObject.page=a+1,"next"==e&&this.pageObject.totalPage>this.pageObject.page?(console.log(this.pageObject.totalPage),this.getPagination(),console.log("Next b")):alert("This is last Page !!!"))}updateSalary(e){this.router.navigate(["updatesalary",e])}getSalaryById(e){}deleteSalary(e){confirm("Are you sure to delete the record ?")&&this.salaryService.setIsDeletedTrue(e).subscribe(i=>{this.salary=i,this.router.navigate(["admin/salarylist"])})}downloadSalarySlip(e){console.log("Salary Pdf"),console.log(e),this.salaryService.salarySlip(e).subscribe(a=>{console.log(a)})}searchFilter(e,a){console.log("Inside the Salary list ==========="),console.log(e),console.log(a),this.salaryService.advanceSearch(e,a).subscribe(i=>{this.salary=i})}}g.\u0275fac=function(e){return new(e||g)(t.Y36(Z.M),t.Y36(c.F0))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-salary-list"]],decls:62,vars:1,consts:[[1,"content",2,"margin-left","210px","margin-top","60px","width","1120px"],[1,"card","mb-3",2,"max-width","80rem","background-color","#ebeae8","height","100%","overflow-y","auto","overflow-x","hidden"],[1,"card-body"],[1,"card-title"],[1,"card-core"],[1,"row"],[1,"col-4"],["mdbInput","","type","search","placeholder","Search.....","name","projectName",1,"form-control"],["basicSalary",""],["mdbInput","","type","search","placeholder","Search.....","name","clientName",1,"form-control"],["grossSalary",""],[1,"col-2","mt-3"],["type","Submit",1,"btn","btn-info",2,"margin-left","40px","height","35px",3,"click"],["type","reset",1,"btn","btn-danger",2,"margin-left","px","height","35px"],[1,"content",2,"margin-left","210px","margin-top","30px","width","1120px"],[1,"card","mb-3",2,"max-width","80rem","background-color","white","height","100%","overflow-y","auto","overflow-x","hidden"],[1,"navbar",2,"margin-top","25px","background-color","rgb(34, 38, 65)"],[1,"container-fluid"],[2,"color","aliceblue"],[2,"margin-left","px","margin-right","px","width","1086px"],[1,"table","mt-","table-bordered"],["scope","col"],[4,"ngFor","ngForOf"],["type","button",2,"background-color","rgb(189, 189, 228)","border-radius","15px","margin-left","30px","margin-top","15px",3,"click"],["type","button",2,"background-color","rgb(189, 189, 228)","border-radius","15px","margin-left","10px",3,"click"],[1,"btn","btn-success"],[2,"color","white",3,"routerLink"],[1,"fa","fa-edit"],[1,"btn","btn-danger",2,"color","white","background-color","red",3,"click"],[1,"fa","fa-trash"]],template:function(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"h5",3),t.TgZ(4,"div",4)(5,"form")(6,"div",5)(7,"div",6)(8,"label"),t._uU(9,"Basic Salary"),t.qZA(),t._UZ(10,"input",7,8),t.qZA(),t.TgZ(12,"div",6)(13,"label"),t._uU(14,"Gross Salary"),t.qZA(),t._UZ(15,"input",9,10),t.qZA(),t.TgZ(17,"div",11)(18,"button",12),t.NdJ("click",function(){t.CHM(i);const u=t.MAs(11),d=t.MAs(16);return t.KtG(a.searchFilter(u.value,d.value))}),t._uU(19,"Search"),t.qZA()(),t.TgZ(20,"div",11)(21,"button",13),t._uU(22,"reset"),t.qZA()()()()()()()(),t.TgZ(23,"div",14)(24,"div",15)(25,"div",2),t._UZ(26,"h5",3),t.TgZ(27,"div",4)(28,"nav",16)(29,"div",17)(30,"h5",18),t._uU(31,"Salary_Page"),t.qZA()()(),t.TgZ(32,"diV",19)(33,"table",20)(34,"thead")(35,"tr")(36,"th",21),t._uU(37,"#"),t.qZA(),t.TgZ(38,"th",21),t._uU(39,"Name"),t.qZA(),t.TgZ(40,"th",21),t._uU(41,"EmailId"),t.qZA(),t.TgZ(42,"th",21),t._uU(43,"Designation"),t.qZA(),t.TgZ(44,"th",21),t._uU(45,"DearnessAllowance"),t.qZA(),t.TgZ(46,"th",21),t._uU(47,"HouseRentAllowance"),t.qZA(),t.TgZ(48,"th",21),t._uU(49,"BasicSalary"),t.qZA(),t.TgZ(50,"th",21),t._uU(51,"GrossSalary"),t.qZA(),t.TgZ(52,"th",21),t._uU(53,"Edit"),t.qZA(),t.TgZ(54,"th",21),t._uU(55,"Delete"),t.qZA()()(),t.TgZ(56,"tbody"),t.YNc(57,f,24,9,"tr",22),t.qZA()(),t.TgZ(58,"button",23),t.NdJ("click",function(){return a.myFuction("prev",a.pageObject.page)}),t._uU(59,"<"),t.qZA(),t.TgZ(60,"button",24),t.NdJ("click",function(){return a.myFuction("next",a.pageObject.page)}),t._uU(61,">"),t.qZA()()()()()()}2&e&&(t.xp6(57),t.Q6J("ngForOf",a.salary))},dependencies:[m.sg,c.rH,p._Y,p.JL,p.F]});const S=[{path:"",component:g}];class n{}n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(S),c.Bz]});class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[m.ez,n,c.Bz,p.u5,y.AdminModule]})}}]);