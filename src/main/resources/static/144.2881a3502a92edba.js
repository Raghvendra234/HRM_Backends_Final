"use strict";(self.webpackChunkangular_frontend=self.webpackChunkangular_frontend||[]).push([[144],{6429:(x,u,r)=>{r.r(u),r.d(u,{LeaveReportModule:()=>d});var f=r(6895),L=r(529),p=r(433),h=r(7941),y=r(7652),e=r(1571),M=r(8463),_=r(4416),C=r(4120),O=r(8768);const P=function(g){return{display:g}};class m{constructor(n,t,o,l,a){this.leaveService=n,this.employeeService=t,this.router=o,this.loginService=l,this.toast=a,this.leaveEmployee=new y.k,this.leaveManage=new y.x,this.displayStyle="none"}ngOnInit(){this.token=this.loginService.getToken(),this.empId=this.token.employeeId,console.log("Emp ========= "),console.log(this.empId),this.empId>0&&this.employeeService.getEmployeeById(this.empId).subscribe(t=>{console.log("Only drop dwon +++++++++++"),console.log(this.token.employeeId),console.log(t),this.employeeData=t,console.log("employeeData +++++++++"),console.log(this.employeeData)})}selectFile(n){console.log(n),console.log(n.target),this.selectedFile=n.target.files[0]}formSubmit(){console.log(this.leaveEmployee),this.typesOfLeave=this.leaveEmployee.typesOfLeave,console.log("Days=======================");var n=new Date(this.leaveEmployee.fromDate),o=(new Date(this.leaveEmployee.toDate).getTime()-n.getTime())/864e5;console.log("days ++++++++++++++++"+o),this.leaveService.getleftLeaveByEmployeeId(this.leaveEmployee.employeeId).subscribe(l=>{if(console.log("Left Leave ++++++++"),console.log(l),this.leftLeave=l,this.casualLeavevar=this.leftLeave.casualLeave,this.sickLeavevar=this.leftLeave.sickLeave,this.marriageLeavevar=this.leftLeave.marriageLeave,this.maternityLeavevar=this.leftLeave.maternityLeave,this.paternityLeavevar=this.leftLeave.paternityLeave,this.bareavementLeavevar=this.leftLeave.bareavementLeave,this.earnedLeavevar=this.leftLeave.earnedLeave,console.log("Types of Leave ========================="),console.log(this.typesOfLeave),"CasualLeave"==this.typesOfLeave||"SickLeave"==this.typesOfLeave||"MarriageLeave"==this.typesOfLeave||"MaternityLeave"==this.typesOfLeave||"PaternityLeave"==this.typesOfLeave||"BareavementLeave"==this.typesOfLeave||"EarnedLeave"==this.typesOfLeave)if("CasualLeave"==this.typesOfLeave){var a=this.casualLeavevar-o;console.log("Saved Leave ++++++++++++++"),console.log(a),0==a||a>0?this.leaveService.updateCasualLeave(a,this.leaveEmployee.employeeId,this.leaveManage).subscribe(b=>{this.res=b,console.log(b),this.res>0?(alert("You have a casual leave"),this.leaveService.saveLeave(this.leaveEmployee).subscribe(s=>{alert("Saved Leave !!!"),this.router.navigate(["admin/leavereport"])},s=>{alert("Failed !!!")})):alert("You have no casual leave 2")}):(this.toast.info({detail:"Leave Details",summary:"You have no casual leave !!",duration:1e4}),this.router.navigate(["admin/leavereport"]))}else"SickLeave"==this.typesOfLeave?(a=this.sickLeavevar-o,console.log("Inside Sick Leave"),console.log(a),console.log(this.typesOfLeave),0==a||a>0?this.leaveService.updateSickLeave(a,this.leaveEmployee.employeeId,this.leaveManage).subscribe(s=>{if(this.res=s,this.res>0){const i=new FormData;i.append("leaveEmployee",JSON.stringify(this.leaveEmployee)),i.append("file",this.selectedFile),this.leaveService.saveLeave(this.leaveEmployee).subscribe(v=>{alert("Saved Leave !!!"),this.router.navigate(["leavelist"])},v=>{alert("Something went wrong, Try again later !!!")})}else alert("You have no Sick leave !!!")}):(alert("You have no Sick leave !!!"),this.router.navigate(["leavelist"]))):"MarriageLeave"==this.typesOfLeave?0==(a=this.marriageLeavevar-o)||a>0?this.leaveService.updateMarriageLeave(a,this.leaveEmployee.employeeId,this.leaveManage).subscribe(s=>{if(this.res=s,this.res>0){const i=new FormData;i.append("leaveEmployee",JSON.stringify(this.leaveEmployee)),i.append("file",this.selectedFile),this.leaveService.saveLeave(this.leaveEmployee).subscribe(v=>{alert("Saved Leave !!!"),this.router.navigate(["leavelist"])},v=>{alert("Failed !!!")})}else alert("You have no Marriage leave !!!")}):(alert("You have no Marriage leave !!!"),this.router.navigate(["leavelist"])):"MaternityLeave"==this.typesOfLeave?(0==(a=this.maternityLeavevar-o)||a>0)&&this.leaveService.updateMaternityLeave(a,this.leaveEmployee.employeeId,this.leaveManage).subscribe(s=>{if(this.res=s,this.res>0){const i=new FormData;i.append("leaveEmployee",JSON.stringify(this.leaveEmployee)),i.append("file",this.selectedFile),this.leaveService.saveLeave(this.leaveEmployee).subscribe(v=>{this.router.navigate(["leavelist"])},v=>{})}}):"PaternityLeave"==this.typesOfLeave?(0==(a=this.paternityLeavevar-o)||a>0)&&this.leaveService.updatePaternityLeave(a,this.leaveEmployee.employeeId,this.leaveManage).subscribe(s=>{if(this.res=s,this.res>0){const i=new FormData;i.append("leaveEmployee",JSON.stringify(this.leaveEmployee)),i.append("file",this.selectedFile),this.leaveService.saveLeave(this.leaveEmployee).subscribe(v=>{this.router.navigate(["leavelist"])},v=>{alert("Failed !!!")})}}):"BareavementLeave"==this.typesOfLeave?(0==(a=this.bareavementLeavevar-o)||a>0)&&this.leaveService.updateBareavementLeave(a,this.leaveEmployee.employeeId,this.leaveManage).subscribe(s=>{if(this.res=s,this.res>0){const i=new FormData;i.append("leaveEmployee",JSON.stringify(this.leaveEmployee)),i.append("file",this.selectedFile),this.leaveService.saveLeave(this.leaveEmployee).subscribe(v=>{this.router.navigate(["leavelist"])},v=>{alert("Failed !!!")})}}):"EarnedLeave"==this.typesOfLeave&&(0==(a=this.earnedLeavevar-o)||a>0)&&this.leaveService.updateEarnLeave(a,this.leaveEmployee.employeeId,this.leaveManage).subscribe(s=>{if(this.res=s,this.res>0){const i=new FormData;i.append("leaveEmployee",JSON.stringify(this.leaveEmployee)),i.append("file",this.selectedFile),this.leaveService.saveLeave(this.leaveEmployee).subscribe(v=>{this.router.navigate(["leavelist"])},v=>{})}})})}openPopup(){this.displayStyle="block",this.token=this.loginService.getToken(),this.empId=this.token.employeeId,this.leaveService.getSingleEmployeeLeave(this.empId).subscribe(n=>{console.log(n),this.leaveRecords=n})}closePopup(){this.displayStyle="none"}}m.\u0275fac=function(n){return new(n||m)(e.Y36(M.e),e.Y36(_.G),e.Y36(h.F0),e.Y36(C.r),e.Y36(O.s))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-leave-report-employee"]],decls:116,vars:21,consts:[[1,"card","bg_sol",2,"margin-left","200px","margin-top","60px"],[2,"margin-left","920px","margin-bottom","10px"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","bth-success",2,"color","black","background-color","rgb(220, 209, 231)",3,"click"],[1,"form"],[2,"text-align","center"],[1,"row"],[1,"col-sm-12","col-md-6"],["type","date","name","fromDate","placeholder","",1,"input",3,"ngModel","ngModelChange"],["type","date","name","toDate","placeholder","",1,"input",3,"ngModel","ngModelChange"],["name","employeeId","id","validationDefault04","required","",1,"input",3,"ngModel","ngModelChange"],[3,"value"],["name","typesOfLeave","id","validationDefault04","required","",1,"input",3,"ngModel","ngModelChange"],["selected","","disabled","","value",""],[1,"col-12"],["for","inputname"],["name","reasonToLeave","id","exampleFormControlTextarea1","rows","3",1,"input",3,"ngModel","ngModelChange"],["type","submit",1,"button",3,"click"],["type","reset",1,"button","can"],["tabindex","-1","role","dialog",1,"modal",2,"background-color","powderblue",3,"ngStyle"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"padding-left","140px"],[1,"modal-body"],[1,"first",2,"color","rgb(153, 238, 55)"],[2,"padding-left","63px"],[1,"first",2,"color","brown"],[2,"padding-left","40px","color","brown"],[1,"first"],[1,"left"],[1,"modal-footer"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return t.openPopup()}),e._uU(3," Show Leave"),e.qZA()(),e.TgZ(4,"form",3)(5,"h3",4),e._uU(6,"Leave Request"),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"label")(10,"input",7),e.NdJ("ngModelChange",function(l){return t.leaveEmployee.fromDate=l}),e.qZA(),e.TgZ(11,"span"),e._uU(12,"Starting Date"),e.qZA()()(),e.TgZ(13,"div",6)(14,"label")(15,"input",8),e.NdJ("ngModelChange",function(l){return t.leaveEmployee.toDate=l}),e.qZA(),e.TgZ(16,"span"),e._uU(17,"Ending Date"),e.qZA()()()(),e.TgZ(18,"div",5)(19,"div",6)(20,"label")(21,"select",9),e.NdJ("ngModelChange",function(l){return t.leaveEmployee.employeeId=l}),e.TgZ(22,"option"),e._uU(23,"Select One"),e.qZA(),e.TgZ(24,"option",10),e._uU(25),e.qZA()(),e.TgZ(26,"span"),e._uU(27,"Employee"),e.qZA()()(),e.TgZ(28,"div",6)(29,"label")(30,"select",11),e.NdJ("ngModelChange",function(l){return t.leaveEmployee.typesOfLeave=l}),e.TgZ(31,"option",12),e._uU(32,"Choose..."),e.qZA(),e.TgZ(33,"option"),e._uU(34,"CasualLeave"),e.qZA(),e.TgZ(35,"option"),e._uU(36,"SickLeave"),e.qZA(),e.TgZ(37,"option"),e._uU(38,"MarriageLeave"),e.qZA(),e.TgZ(39,"option"),e._uU(40,"MaternityLeave"),e.qZA(),e.TgZ(41,"option"),e._uU(42,"PaternityLeave"),e.qZA(),e.TgZ(43,"option"),e._uU(44,"EarnedLeave"),e.qZA()(),e.TgZ(45,"span"),e._uU(46,"Types of leave"),e.qZA()()()(),e.TgZ(47,"div",5)(48,"div",13)(49,"label"),e._UZ(50,"label",14),e.TgZ(51,"textarea",15),e.NdJ("ngModelChange",function(l){return t.leaveEmployee.reasonToLeave=l}),e.qZA(),e.TgZ(52,"span"),e._uU(53,"Reason to Leave"),e.qZA()()()(),e.TgZ(54,"button",16),e.NdJ("click",function(){return t.formSubmit()}),e.TgZ(55,"span"),e._uU(56,"Submit"),e.qZA()(),e.TgZ(57,"button",17)(58,"span"),e._uU(59,"Cancel"),e.qZA()()()(),e.TgZ(60,"div",18)(61,"div",19)(62,"div",20)(63,"div",21)(64,"h4",22),e._uU(65,"Remaining Leave"),e.qZA()(),e.TgZ(66,"div",23)(67,"tr")(68,"th",24),e._uU(69,"Employee_Name"),e.qZA(),e.TgZ(70,"td",25),e._uU(71),e.qZA()(),e.TgZ(72,"table")(73,"tr")(74,"th",26),e._uU(75,"Types_Of_Leave"),e.qZA(),e.TgZ(76,"th",27),e._uU(77,"Left_Leave"),e.qZA()(),e.TgZ(78,"tr")(79,"th",28),e._uU(80,"Casual_Leave"),e.qZA(),e.TgZ(81,"td",29),e._uU(82),e.qZA()(),e.TgZ(83,"tr")(84,"th",28),e._uU(85,"Sick_Leave"),e.qZA(),e.TgZ(86,"td",29),e._uU(87),e.qZA()(),e.TgZ(88,"tr")(89,"th",28),e._uU(90,"Marriage_Leave"),e.qZA(),e.TgZ(91,"td",29),e._uU(92),e.qZA()(),e.TgZ(93,"tr")(94,"th",28),e._uU(95,"Maternity_Leave"),e.qZA(),e.TgZ(96,"td",29),e._uU(97),e.qZA()(),e.TgZ(98,"tr")(99,"th",28),e._uU(100,"Paternity_Leave"),e.qZA(),e.TgZ(101,"td",29),e._uU(102),e.qZA()(),e.TgZ(103,"tr")(104,"th",28),e._uU(105,"Bereavement_Leave"),e.qZA(),e.TgZ(106,"td",29),e._uU(107),e.qZA()(),e.TgZ(108,"tr")(109,"th",28),e._uU(110,"Earned_Leave"),e.qZA(),e.TgZ(111,"td",29),e._uU(112),e.qZA()()()(),e.TgZ(113,"div",30)(114,"button",31),e.NdJ("click",function(){return t.closePopup()}),e._uU(115," Close "),e.qZA()()()()()),2&n&&(e.xp6(10),e.Q6J("ngModel",t.leaveEmployee.fromDate),e.xp6(5),e.Q6J("ngModel",t.leaveEmployee.toDate),e.xp6(6),e.Q6J("ngModel",t.leaveEmployee.employeeId),e.xp6(3),e.Q6J("value",t.employeeData.employeeId),e.xp6(1),e.AsE(" ",t.employeeData.firstName," (",t.employeeData.emailId,") "),e.xp6(5),e.Q6J("ngModel",t.leaveEmployee.typesOfLeave),e.xp6(21),e.Q6J("ngModel",t.leaveEmployee.reasonToLeave),e.xp6(9),e.Q6J("ngStyle",e.VKq(19,P,t.displayStyle)),e.xp6(11),e.lnq("",t.employeeData.firstName," "," ","",t.employeeData.lastName,""),e.xp6(11),e.Oqu(t.leaveRecords.casualLeave),e.xp6(5),e.Oqu(t.leaveRecords.sickLeave),e.xp6(5),e.Oqu(t.leaveRecords.marriageLeave),e.xp6(5),e.Oqu(t.leaveRecords.maternityLeave),e.xp6(5),e.Oqu(t.leaveRecords.paternityLeave),e.xp6(5),e.Oqu(t.leaveRecords.bareavementLeave),e.xp6(5),e.Oqu(t.leaveRecords.earnedLeave))},dependencies:[f.PC,p._Y,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.JL,p.Q7,p.On,p.F],styles:['.left[_ngcontent-%COMP%]{padding-left:75px}label[_ngcontent-%COMP%]{width:100%!important}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;background-color:#fff;padding:20px;border-radius:10px;position:relative;margin:auto!important}.message[_ngcontent-%COMP%]{color:#585757d2;font-size:14px}.flex[_ngcontent-%COMP%]{display:flex;width:100%;gap:6px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:15px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:15px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:30px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.input01[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:50px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:40px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:50px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.fancy[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #CACACA;border-radius:0;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-weight:390;letter-spacing:2px;margin:0;outline:none;overflow:visible;padding:8px 30px;position:relative;text-align:center;text-decoration:none;text-transform:none;transition:all .3s ease-in-out;-webkit-user-select:none;user-select:none;font-size:13px}.fancy[_ngcontent-%COMP%]:before{content:" ";width:1.7rem;height:2px;background:#CACACA;top:50%;left:1.5em;position:absolute;transform:translateY(-50%);transform:translate(230%);transform-origin:center;transition:background .3s linear,width .3s linear}.fancy[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.125em;line-height:1.33333em;padding-left:2em;display:block;text-align:left;transition:all .3s ease-in-out;text-transform:lowercase;text-decoration:none;color:#818181;transform:translate(30%)}.fancy[_ngcontent-%COMP%]   .top-key[_ngcontent-%COMP%]{height:2px;width:1.5625rem;top:-2px;left:.625rem;position:absolute;background:white;transition:width .5s ease-out,left .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-1[_ngcontent-%COMP%]{height:2px;width:1.5625rem;right:1.875rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-2[_ngcontent-%COMP%]{height:2px;width:.625rem;right:.625rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]:hover{color:#fff;background:#CACACA}.fancy[_ngcontent-%COMP%]:hover:before{width:1.5rem;background:white}.fancy[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]{color:#fff;padding-left:1.5em}.fancy[_ngcontent-%COMP%]:hover   .top-key[_ngcontent-%COMP%]{left:-2px;width:0px}.fancy[_ngcontent-%COMP%]:hover   .bottom-key-1[_ngcontent-%COMP%], .fancy[_ngcontent-%COMP%]:hover   .bottom-key-2[_ngcontent-%COMP%]{right:0;width:0}.button[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#3d405b;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;width:100%;transition:all .5s;cursor:pointer;margin:5px}.can[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#e04a4a;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;width:500px;transition:all .5s;cursor:pointer;margin:5px}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:.5s}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"\\bb";position:absolute;opacity:0;top:0;right:-15px;transition:.5s}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{padding-right:15px}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{opacity:1;right:0}.bg_sol[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,#AFC6E6 0%,#E9E6EF 100%);padding:60px 30px 30px;height:100%}']});const Z=[{path:"",component:m}];class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[h.Bz.forChild(Z),h.Bz]});class d{}d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[f.ez,c,L.JF,p.u5,h.Bz]})}}]);