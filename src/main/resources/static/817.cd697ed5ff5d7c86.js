"use strict";(self.webpackChunkangular_frontend=self.webpackChunkangular_frontend||[]).push([[817],{5817:(h,u,r)=>{r.r(u),r.d(u,{UpdatesalaryModule:()=>g});var c=r(6895),l=r(433),i=r(7941),m=r(8448),C=r(434),n=r(1571),M=r(2761);const _=function(){return["salarylist"]};class s{constructor(a,e,o){this.salaryService=a,this.route=e,this.router=o,this.addSalary=new C.Mt,this.employee=new m.RB,this.route.params.subscribe(t=>{console.log(t),this.salaryId=t.id})}ngOnInit(){this.salaryService.getSalaryById(this.salaryId).subscribe(a=>{console.log(a),this.addSalary=a},a=>console.log(a))}updateSalary(){}getEmployeeId(a){console.log(a)}formSubmit(){this.salaryService.updateSalary(this.salaryId,this.addSalary).subscribe(a=>{console.log(a),console.log("Printing Employee..............Id"),console.log(this.addSalary.employeeId),alert("Updated !!!"),this.router.navigate(["admin/salarylist"])},a=>{alert("failed")})}}s.\u0275fac=function(a){return new(a||s)(n.Y36(M.M),n.Y36(i.gz),n.Y36(i.F0))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-update-salary"]],decls:99,vars:19,consts:[[1,"card","bg_sol",2,"margin-left","200px","margin-top","60px"],[1,"form"],[2,"text-align","center"],[1,"row"],[1,"col-sm-12","col-md-4"],["name","employeeId","id","validationDefault04","required","",1,"input",3,"ngModel","click","ngModelChange"],["type","text","name","uanNumber","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","esiCode","required","",1,"input",3,"ngModel","ngModelChange"],["type","text","name","basicSalary","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","houseRentAllowance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","dearnessAllowance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","grossSalary","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","pf","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","esi","required","",1,"input",3,"ngModel","ngModelChange"],[2,"margin-top","13px"],["type","number","name","fromDate","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","childrenEducationAllowance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","splAllowance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","incentives","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","groupInsurance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","taxDeductedAtSources","required","",1,"input",3,"ngModel","ngModelChange"],[1,"btn-group"],["type","submit",1,"button",3,"click"],["type","reset",1,"button","can"],[2,"text-decoration","none",3,"routerLink"]],template:function(a,e){1&a&&(n.TgZ(0,"div",0)(1,"form",1)(2,"h3",2),n._uU(3,"Update Salary"),n.qZA(),n.TgZ(4,"div",3)(5,"div",4)(6,"label")(7,"select",5),n.NdJ("click",function(){return e.getEmployeeId(e.addSalary.employee.employeeId)})("ngModelChange",function(t){return e.addSalary.employeeId=t}),n.TgZ(8,"option"),n._uU(9,"Select One"),n.qZA(),n.TgZ(10,"option"),n._uU(11),n.qZA()(),n.TgZ(12,"span"),n._uU(13,"Employee"),n.qZA()()(),n.TgZ(14,"div",4)(15,"label")(16,"input",6),n.NdJ("ngModelChange",function(t){return e.addSalary.uanNumber=t}),n.qZA(),n.TgZ(17,"span"),n._uU(18,"UAN Number"),n.qZA()()(),n.TgZ(19,"div",4)(20,"label")(21,"input",7),n.NdJ("ngModelChange",function(t){return e.addSalary.esiCode=t}),n.qZA(),n.TgZ(22,"span"),n._uU(23,"ESI Number"),n.qZA()()()(),n.TgZ(24,"div",3)(25,"div",4)(26,"label")(27,"input",8),n.NdJ("ngModelChange",function(t){return e.addSalary.basicSalary=t}),n.qZA(),n.TgZ(28,"span"),n._uU(29,"Basic Salary"),n.qZA()()(),n.TgZ(30,"div",4)(31,"label")(32,"input",9),n.NdJ("ngModelChange",function(t){return e.addSalary.houseRentAllowance=t}),n.qZA(),n.TgZ(33,"span"),n._uU(34,"House Rent Allowance"),n.qZA()()(),n.TgZ(35,"div",4)(36,"label")(37,"input",10),n.NdJ("ngModelChange",function(t){return e.addSalary.dearnessAllowance=t}),n.qZA(),n.TgZ(38,"span"),n._uU(39,"Dearness Allowance"),n.qZA()()()(),n.TgZ(40,"div",3)(41,"div",4)(42,"label")(43,"input",11),n.NdJ("ngModelChange",function(t){return e.addSalary.grossSalary=t}),n.qZA(),n.TgZ(44,"span"),n._uU(45,"Gross Salary"),n.qZA()()(),n.TgZ(46,"div",4)(47,"label")(48,"input",12),n.NdJ("ngModelChange",function(t){return e.addSalary.pf=t}),n.qZA(),n.TgZ(49,"span"),n._uU(50,"Provident Fund(%)"),n.qZA()()(),n.TgZ(51,"div",4)(52,"label")(53,"input",13),n.NdJ("ngModelChange",function(t){return e.addSalary.esi=t}),n.qZA(),n.TgZ(54,"span",14),n._uU(55,"E.S.I(%)"),n.qZA()()()(),n.TgZ(56,"div",3)(57,"div",4)(58,"label")(59,"input",15),n.NdJ("ngModelChange",function(t){return e.addSalary.medicalInsurance=t}),n.qZA(),n.TgZ(60,"span"),n._uU(61,"Health Insurance"),n.qZA()()(),n.TgZ(62,"div",4)(63,"label")(64,"input",16),n.NdJ("ngModelChange",function(t){return e.addSalary.childrenEducationAllowance=t}),n.qZA(),n.TgZ(65,"span"),n._uU(66,"ChildrenEducationAllowance"),n.qZA()()(),n.TgZ(67,"div",4)(68,"label")(69,"input",17),n.NdJ("ngModelChange",function(t){return e.addSalary.splAllowance=t}),n.qZA(),n.TgZ(70,"span"),n._uU(71,"SPL Allowance"),n.qZA()()()(),n.TgZ(72,"div",3)(73,"div",4)(74,"label")(75,"input",18),n.NdJ("ngModelChange",function(t){return e.addSalary.incentives=t}),n.qZA(),n.TgZ(76,"span"),n._uU(77,"Incentives"),n.qZA()()(),n.TgZ(78,"div",4)(79,"label")(80,"input",19),n.NdJ("ngModelChange",function(t){return e.addSalary.groupInsurance=t}),n.qZA(),n.TgZ(81,"span"),n._uU(82,"Group Insurance"),n.qZA()()(),n.TgZ(83,"div",4)(84,"label")(85,"input",20),n.NdJ("ngModelChange",function(t){return e.addSalary.taxDeductedAtSources=t}),n.qZA(),n.TgZ(86,"span"),n._uU(87,"TaxDeductedAtSources"),n.qZA()()()(),n.TgZ(88,"div",21)(89,"button",22),n.NdJ("click",function(){return e.formSubmit()}),n.TgZ(90,"span"),n._uU(91,"Submit"),n.qZA()(),n.TgZ(92,"button",23)(93,"span"),n._uU(94,"Reset"),n.qZA()(),n.TgZ(95,"button",23)(96,"span")(97,"a",24),n._uU(98,"Cancel"),n.qZA()()()()()()),2&a&&(n.xp6(7),n.Q6J("ngModel",e.addSalary.employeeId),n.xp6(4),n.AsE("",e.addSalary.employee.firstName,"(",e.addSalary.employee.emailId,")"),n.xp6(5),n.Q6J("ngModel",e.addSalary.uanNumber),n.xp6(5),n.Q6J("ngModel",e.addSalary.esiCode),n.xp6(6),n.Q6J("ngModel",e.addSalary.basicSalary),n.xp6(5),n.Q6J("ngModel",e.addSalary.houseRentAllowance),n.xp6(5),n.Q6J("ngModel",e.addSalary.dearnessAllowance),n.xp6(6),n.Q6J("ngModel",e.addSalary.grossSalary),n.xp6(5),n.Q6J("ngModel",e.addSalary.pf),n.xp6(5),n.Q6J("ngModel",e.addSalary.esi),n.xp6(6),n.Q6J("ngModel",e.addSalary.medicalInsurance),n.xp6(5),n.Q6J("ngModel",e.addSalary.childrenEducationAllowance),n.xp6(5),n.Q6J("ngModel",e.addSalary.splAllowance),n.xp6(6),n.Q6J("ngModel",e.addSalary.incentives),n.xp6(5),n.Q6J("ngModel",e.addSalary.groupInsurance),n.xp6(5),n.Q6J("ngModel",e.addSalary.taxDeductedAtSources),n.xp6(12),n.Q6J("routerLink",n.DdM(18,_)))},dependencies:[l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.Q7,l.On,l.F,i.rH],styles:['label[_ngcontent-%COMP%]{width:100%!important}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;background-color:#fff;padding:20px;border-radius:10px;position:relative;margin:auto!important}.message[_ngcontent-%COMP%]{color:#585757d2;font-size:14px}.flex[_ngcontent-%COMP%]{display:flex;width:100%;gap:6px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:15px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:15px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:30px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.input01[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:50px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:40px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:50px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.fancy[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #CACACA;border-radius:0;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-weight:390;letter-spacing:2px;margin:0;outline:none;overflow:visible;padding:8px 30px;position:relative;text-align:center;text-decoration:none;text-transform:none;transition:all .3s ease-in-out;-webkit-user-select:none;user-select:none;font-size:13px}.fancy[_ngcontent-%COMP%]:before{content:" ";width:1.7rem;height:2px;background:#CACACA;top:50%;left:1.5em;position:absolute;transform:translateY(-50%);transform:translate(230%);transform-origin:center;transition:background .3s linear,width .3s linear}.fancy[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.125em;line-height:1.33333em;padding-left:2em;display:block;text-align:left;transition:all .3s ease-in-out;text-transform:lowercase;text-decoration:none;color:#818181;transform:translate(30%)}.fancy[_ngcontent-%COMP%]   .top-key[_ngcontent-%COMP%]{height:2px;width:1.5625rem;top:-2px;left:.625rem;position:absolute;background:white;transition:width .5s ease-out,left .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-1[_ngcontent-%COMP%]{height:2px;width:1.5625rem;right:1.875rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-2[_ngcontent-%COMP%]{height:2px;width:.625rem;right:.625rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]:hover{color:#fff;background:#CACACA}.fancy[_ngcontent-%COMP%]:hover:before{width:1.5rem;background:white}.fancy[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]{color:#fff;padding-left:1.5em}.fancy[_ngcontent-%COMP%]:hover   .top-key[_ngcontent-%COMP%]{left:-2px;width:0px}.fancy[_ngcontent-%COMP%]:hover   .bottom-key-1[_ngcontent-%COMP%], .fancy[_ngcontent-%COMP%]:hover   .bottom-key-2[_ngcontent-%COMP%]{right:0;width:0}.button[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#3d405b;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;width:100%;transition:all .5s;cursor:pointer;margin:5px}.can[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#e04a4a;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;transition:all .5s;cursor:pointer;margin:5px}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:.5s}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"\\bb";position:absolute;opacity:0;top:0;right:-15px;transition:.5s}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{padding-right:15px}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{opacity:1;right:0}.bg_sol[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,#AFC6E6 0%,#E9E6EF 100%);padding:60px 30px 30px}']});const y=[{path:"",component:s}];class d{}d.\u0275fac=function(a){return new(a||d)},d.\u0275mod=n.oAB({type:d}),d.\u0275inj=n.cJS({imports:[i.Bz.forChild(y),i.Bz]});var f=r(529);class g{}g.\u0275fac=function(a){return new(a||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[c.ez,l.u5,i.Bz,d,f.JF]})}}]);