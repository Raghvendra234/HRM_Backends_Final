"use strict";(self.webpackChunkangular_frontend=self.webpackChunkangular_frontend||[]).push([[197],{4197:(T,m,r)=>{r.r(m),r.d(m,{ProjectsListModule:()=>s});var h=r(6895),g=r(7941),b=r(8448),j=r(5535),e=r(1571),Z=r(1897),d=r(433);function f(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"a",29),e._uU(5),e.qZA()(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td")(17,"button",30)(18,"a",31),e._UZ(19,"i",32),e.qZA()()(),e.TgZ(20,"td")(21,"button",33),e.NdJ("click",function(){const l=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.deleteProject(l.projectId))}),e._UZ(22,"i",34),e.qZA()()()}if(2&n){const t=o.$implicit,a=o.index,c=e.oxw();e.xp6(2),e.Oqu(c.pageObject.size*c.pageObject.page+a+1),e.xp6(2),e.MGl("routerLink","projectdetailspage/",t.projectId,""),e.xp6(1),e.Oqu(t.projectName),e.xp6(2),e.Oqu(t.clientName),e.xp6(2),e.Oqu(t.projectManager),e.xp6(2),e.Oqu(t.teamLeader),e.xp6(2),e.Oqu(t.fromDate),e.xp6(2),e.Oqu(t.toDate),e.xp6(3),e.MGl("routerLink","admin/projectlist/",t.projectId,"")}}class p{constructor(o,t){this.addProjectService=o,this.router=t,this.addProj=new j.ZA,this.pageObject={page:0,size:10,totalPage:0,totalElements:1,numberofElement:0},this.employee=new b.RB}ngOnInit(){this.getPagination()}getPagination(){this.addProjectService.getProjectPagination(this.pageObject.page,this.pageObject.size).subscribe(t=>{console.log(t),this.addProjects=t.response.content,this.pageObject.page=t.response.number,console.log("page"),console.log(this.pageObject.page),this.pageObject.totalPage=t.response.totalPages,console.log(this.pageObject.totalPage),this.pageObject.totalElements=t.response.totalElements,this.pageObject.numberofElement=t.response.numberofElements,console.log(t.response.numberofElements)})}myFuction(o,t){"prev"==o&&(this.pageObject.page=t-1,this.pageObject.page>-1&&"prev"==o&&this.pageObject.totalPage>this.pageObject.page&&(this.getPagination(),console.log("prev B"))),"next"==o&&(this.pageObject.page=t+1,"next"==o&&this.pageObject.totalPage>this.pageObject.page?(this.getPagination(),console.log("Next b")):alert("This is last Page !!!"))}updateProject(o){this.router.navigate(["updateproject",o])}deleteProject(o){confirm("Are you sure to delete the record ?")&&this.addProjectService.setIsDeletedTrue(o).subscribe(t=>{alert("Project Details Updated !!!"),this.router.navigate(["admin/projectlist"])},t=>{alert("Failed !!!")})}getProjectDetailsPage(o){this.router.navigate(["projectlist/projectdetailspage/",o])}SearchValue(o,t,a,c){console.log("Search box is working .............."),console.log(o),console.log(t),console.log(a),console.log(c),this.addProjectService.advanceSearch(o,t,a,c).subscribe(l=>{console.log(l),this.addProjects=l})}search(o){console.log("Printing key value========== in Globale Search"),console.log(o),this.addProjectService.searchRecord(o).subscribe(t=>{console.log(t),this.addProjects=t})}}p.\u0275fac=function(o){return new(o||p)(e.Y36(Z.e),e.Y36(g.F0))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-projects-list"]],decls:70,vars:1,consts:[[1,"content",2,"margin-left","210px","margin-top","60px","width","1120px"],[1,"card","mb-3",2,"max-width","80rem","background-color","#ebeae8","height","100%","overflow-y","auto","overflow-x","hidden"],[1,"card-body"],[1,"card-title"],[1,"card-core"],[1,"row"],[1,"col-4"],["mdbInput","","type","search","placeholder","Search.....","name","projectName",1,"form-control"],["projectName",""],["mdbInput","","type","search","placeholder","Search.....","name","clientName",1,"form-control"],["clientName",""],["mdbInput","","type","search","placeholder","Search.....","name","projectManager",1,"form-control"],["projectManager",""],[1,"row","mt-1"],["mdbInput","","type","search","placeholder","Search.....","name","teamLeader",1,"form-control"],["teamLeader",""],[1,"col-2","mt-4",2,"margin-left","0px"],["type","Submit",1,"btn","btn-info",2,"margin-left","40px","height","35px",3,"click"],["type","reset",1,"btn","btn-danger",2,"margin-left","px","height","35px"],[1,"content",2,"margin-left","210px","margin-top","30px","width","1120px"],[1,"card","mb-3",2,"max-width","80rem","background-color","white","height","100%","overflow-y","auto","overflow-x","hidden"],[1,"navbar",2,"margin-top","25px","background-color","rgb(34, 38, 65)","height","44px","margin-left","00px"],[1,"container-fluid"],[2,"color","aliceblue"],[1,"table","mt-","table-bordered"],["scope","col"],[4,"ngFor","ngForOf"],["type","button",2,"background-color","rgb(189, 189, 228)","border-radius","15px","margin-left","30px","margin-top","15px",3,"click"],["type","button",2,"background-color","rgb(189, 189, 228)","border-radius","15px","margin-left","10px",3,"click"],[2,"color","blue","cursor","pointer","text-decoration","none",3,"routerLink"],[1,"btn","btn-success"],[2,"color","white",3,"routerLink"],[1,"fa","fa-edit"],[1,"btn","btn-danger",2,"color","white","background-color","red",3,"click"],[1,"fa","fa-trash"]],template:function(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"h5",3),e.TgZ(4,"div",4)(5,"form")(6,"div",5)(7,"div",6)(8,"label"),e._uU(9,"Project Name"),e.qZA(),e._UZ(10,"input",7,8),e.qZA(),e.TgZ(12,"div",6)(13,"label"),e._uU(14,"Client Name"),e.qZA(),e._UZ(15,"input",9,10),e.qZA(),e.TgZ(17,"div",6)(18,"label"),e._uU(19,"Project Manager"),e.qZA(),e._UZ(20,"input",11,12),e.qZA()(),e.TgZ(22,"div",13)(23,"div",6)(24,"label"),e._uU(25,"Team Leader"),e.qZA(),e._UZ(26,"input",14,15),e.qZA(),e.TgZ(28,"div",16)(29,"button",17),e.NdJ("click",function(){e.CHM(a);const l=e.MAs(11),u=e.MAs(16),A=e.MAs(21),x=e.MAs(27);return e.KtG(t.SearchValue(l.value,u.value,A.value,x.value))}),e._uU(30,"Search"),e.qZA()(),e.TgZ(31,"div",16)(32,"button",18),e._uU(33,"reset"),e.qZA()()()()()()()(),e.TgZ(34,"div",19)(35,"div",20)(36,"div",2),e._UZ(37,"h5",3),e.TgZ(38,"div",4)(39,"nav",21)(40,"div",22)(41,"h5",23),e._uU(42,"All Projects"),e.qZA()()(),e.TgZ(43,"table",24)(44,"thead")(45,"tr")(46,"th",25),e._uU(47,"index"),e.qZA(),e.TgZ(48,"th",25),e._uU(49,"ProjectName"),e.qZA(),e.TgZ(50,"th",25),e._uU(51,"ClientName"),e.qZA(),e.TgZ(52,"th",25),e._uU(53,"ProjectManager"),e.qZA(),e.TgZ(54,"th",25),e._uU(55,"TeamLeader"),e.qZA(),e.TgZ(56,"th",25),e._uU(57,"StartingDate"),e.qZA(),e.TgZ(58,"th",25),e._uU(59,"EndingDate"),e.qZA(),e.TgZ(60,"th",25),e._uU(61,"Edit"),e.qZA(),e.TgZ(62,"th",25),e._uU(63,"Delete"),e.qZA()()(),e.TgZ(64,"tbody"),e.YNc(65,f,23,9,"tr",26),e.qZA()(),e.TgZ(66,"button",27),e.NdJ("click",function(){return t.myFuction("prev",t.pageObject.page)}),e._uU(67,"<"),e.qZA(),e.TgZ(68,"button",28),e.NdJ("click",function(){return t.myFuction("next",t.pageObject.page)}),e._uU(69,">"),e.qZA()()()()()}2&o&&(e.xp6(65),e.Q6J("ngForOf",t.addProjects))},dependencies:[h.sg,g.rH,d._Y,d.JL,d.F]});const P=[{path:"",component:p}];class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(P),g.Bz]});var v=r(159);class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[h.ez,i,g.Bz,d.u5,v.AdminModule]})}}]);