"use strict";(self.webpackChunkangular_frontend=self.webpackChunkangular_frontend||[]).push([[24],{5024:(b,u,r)=>{r.r(u),r.d(u,{AddSalaryModule:()=>g});var c=r(6895),m=r(529),l=r(433),p=r(7941),C=r(434),n=r(1571),M=r(2761),y=r(4416),_=r(4371);function f(d,a){if(1&d&&(n.TgZ(0,"option",24),n._uU(1),n.qZA()),2&d){const e=a.$implicit;n.Q6J("value",e.employeeId),n.xp6(1),n.AsE(" ",e.firstName," (",e.emailId,") ")}}class s{constructor(a,e,o,t){this.salaryService=a,this.employeeService=e,this.router=o,this.snack=t,this.addSalary=new C.Mt}ngOnInit(){this.employeeService.getDropdown().subscribe(e=>{console.log(e),this.employeeData=e})}formSubmit(){null!=this.addSalary.employeeId?""!=this.addSalary.basicSalary&&null!=this.addSalary.basicSalary?""!=this.addSalary.houseRentAllowance&&null!=this.addSalary.houseRentAllowance?this.salaryService.saveSalary(this.addSalary).subscribe(a=>{alert("Saved !!!"),this.router.navigate(["admin/salarylist"])},a=>{alert(" Failed !!!")}):this.snack.open("House Rent Allowance is required!!!","",{duration:3e3}):this.snack.open("Basic Salary is required!!!","",{duration:3e3}):this.snack.open("Please select employee !!!","",{duration:3e3})}validate(){var a=document.getElementsByClassName("needs-validation")[0];!1===a.checkValidity()&&(event.preventDefault(),event.stopPropagation()),a.classList.add("was-validated")}}s.\u0275fac=function(a){return new(a||s)(n.Y36(M.M),n.Y36(y.G),n.Y36(p.F0),n.Y36(_.ux))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-add-salary"]],decls:94,vars:16,consts:[[1,"card","bg_sol",2,"margin-left","200px","margin-top","60px"],[1,"form"],[2,"text-align","center"],[1,"row"],[1,"col-sm-12","col-md-4"],["name","employeeId","id","validationDefault04","required","",1,"input",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","text","name","uanNumber","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","esiCode","required","",1,"input",3,"ngModel","ngModelChange"],["type","text","name","basicSalary","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","houseRentAllowance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","dearnessAllowance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","grossSalary","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","pf","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","esi","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","fromDate","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","childrenEducationAllowance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","splAllowance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","incentives","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","groupInsurance","required","",1,"input",3,"ngModel","ngModelChange"],["type","number","name","taxDeductedAtSources","required","",1,"input",3,"ngModel","ngModelChange"],[1,"btn-group"],["type","submit",1,"button",3,"click"],["type","reset",1,"button","can"],[3,"value"]],template:function(a,e){1&a&&(n.TgZ(0,"div",0)(1,"form",1)(2,"h3",2),n._uU(3,"Add Salary"),n.qZA(),n.TgZ(4,"div",3)(5,"div",4)(6,"label")(7,"select",5),n.NdJ("ngModelChange",function(t){return e.addSalary.employeeId=t}),n.TgZ(8,"option"),n._uU(9,"Select One"),n.qZA(),n.YNc(10,f,2,3,"option",6),n.qZA(),n.TgZ(11,"span"),n._uU(12,"Employee"),n.qZA()()(),n.TgZ(13,"div",4)(14,"label")(15,"input",7),n.NdJ("ngModelChange",function(t){return e.addSalary.uanNumber=t}),n.qZA(),n.TgZ(16,"span"),n._uU(17,"UAN Number"),n.qZA()()(),n.TgZ(18,"div",4)(19,"label")(20,"input",8),n.NdJ("ngModelChange",function(t){return e.addSalary.esiCode=t}),n.qZA(),n.TgZ(21,"span"),n._uU(22,"ESI Number"),n.qZA()()()(),n.TgZ(23,"div",3)(24,"div",4)(25,"label")(26,"input",9),n.NdJ("ngModelChange",function(t){return e.addSalary.basicSalary=t}),n.qZA(),n.TgZ(27,"span"),n._uU(28,"Basic Salary"),n.qZA()()(),n.TgZ(29,"div",4)(30,"label")(31,"input",10),n.NdJ("ngModelChange",function(t){return e.addSalary.houseRentAllowance=t}),n.qZA(),n.TgZ(32,"span"),n._uU(33,"House Rent Allowance"),n.qZA()()(),n.TgZ(34,"div",4)(35,"label")(36,"input",11),n.NdJ("ngModelChange",function(t){return e.addSalary.dearnessAllowance=t}),n.qZA(),n.TgZ(37,"span"),n._uU(38,"Dearness Allowance"),n.qZA()()()(),n.TgZ(39,"div",3)(40,"div",4)(41,"label")(42,"input",12),n.NdJ("ngModelChange",function(t){return e.addSalary.grossSalary=t}),n.qZA(),n.TgZ(43,"span"),n._uU(44,"Gross Salary"),n.qZA()()(),n.TgZ(45,"div",4)(46,"label")(47,"input",13),n.NdJ("ngModelChange",function(t){return e.addSalary.pf=t}),n.qZA(),n.TgZ(48,"span"),n._uU(49,"Provident Fund(%)"),n.qZA()()(),n.TgZ(50,"div",4)(51,"label")(52,"input",14),n.NdJ("ngModelChange",function(t){return e.addSalary.esi=t}),n.qZA(),n.TgZ(53,"span"),n._uU(54,"E.S.I(%)"),n.qZA()()()(),n.TgZ(55,"div",3)(56,"div",4)(57,"label")(58,"input",15),n.NdJ("ngModelChange",function(t){return e.addSalary.medicalInsurance=t}),n.qZA(),n.TgZ(59,"span"),n._uU(60,"Health Insurance"),n.qZA()()(),n.TgZ(61,"div",4)(62,"label")(63,"input",16),n.NdJ("ngModelChange",function(t){return e.addSalary.childrenEducationAllowance=t}),n.qZA(),n.TgZ(64,"span"),n._uU(65,"ChildrenEducationAllowance"),n.qZA()()(),n.TgZ(66,"div",4)(67,"label")(68,"input",17),n.NdJ("ngModelChange",function(t){return e.addSalary.splAllowance=t}),n.qZA(),n.TgZ(69,"span"),n._uU(70,"SPL Allowance"),n.qZA()()()(),n.TgZ(71,"div",3)(72,"div",4)(73,"label")(74,"input",18),n.NdJ("ngModelChange",function(t){return e.addSalary.incentives=t}),n.qZA(),n.TgZ(75,"span"),n._uU(76,"Incentives"),n.qZA()()(),n.TgZ(77,"div",4)(78,"label")(79,"input",19),n.NdJ("ngModelChange",function(t){return e.addSalary.groupInsurance=t}),n.qZA(),n.TgZ(80,"span"),n._uU(81,"Group Insurance"),n.qZA()()(),n.TgZ(82,"div",4)(83,"label")(84,"input",20),n.NdJ("ngModelChange",function(t){return e.addSalary.taxDeductedAtSources=t}),n.qZA(),n.TgZ(85,"span"),n._uU(86,"TaxDeductedAtSources"),n.qZA()()()(),n.TgZ(87,"div",21)(88,"button",22),n.NdJ("click",function(){return e.formSubmit()}),n.TgZ(89,"span"),n._uU(90,"Submit"),n.qZA()(),n.TgZ(91,"button",23)(92,"span"),n._uU(93,"Reset"),n.qZA()()()()()),2&a&&(n.xp6(7),n.Q6J("ngModel",e.addSalary.employeeId),n.xp6(3),n.Q6J("ngForOf",e.employeeData),n.xp6(5),n.Q6J("ngModel",e.addSalary.uanNumber),n.xp6(5),n.Q6J("ngModel",e.addSalary.esiCode),n.xp6(6),n.Q6J("ngModel",e.addSalary.basicSalary),n.xp6(5),n.Q6J("ngModel",e.addSalary.houseRentAllowance),n.xp6(5),n.Q6J("ngModel",e.addSalary.dearnessAllowance),n.xp6(6),n.Q6J("ngModel",e.addSalary.grossSalary),n.xp6(5),n.Q6J("ngModel",e.addSalary.pf),n.xp6(5),n.Q6J("ngModel",e.addSalary.esi),n.xp6(6),n.Q6J("ngModel",e.addSalary.medicalInsurance),n.xp6(5),n.Q6J("ngModel",e.addSalary.childrenEducationAllowance),n.xp6(5),n.Q6J("ngModel",e.addSalary.splAllowance),n.xp6(6),n.Q6J("ngModel",e.addSalary.incentives),n.xp6(5),n.Q6J("ngModel",e.addSalary.groupInsurance),n.xp6(5),n.Q6J("ngModel",e.addSalary.taxDeductedAtSources))},dependencies:[c.sg,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.Q7,l.On,l.F],styles:['label[_ngcontent-%COMP%]{width:100%!important}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;background-color:#fff;padding:20px;border-radius:10px;position:relative;margin:auto!important}.message[_ngcontent-%COMP%]{color:#585757d2;font-size:14px}.flex[_ngcontent-%COMP%]{display:flex;width:100%;gap:6px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:15px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:15px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:30px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.input01[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:50px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:40px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:50px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.fancy[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #CACACA;border-radius:0;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-weight:390;letter-spacing:2px;margin:0;outline:none;overflow:visible;padding:8px 30px;position:relative;text-align:center;text-decoration:none;text-transform:none;transition:all .3s ease-in-out;-webkit-user-select:none;user-select:none;font-size:13px}.fancy[_ngcontent-%COMP%]:before{content:" ";width:1.7rem;height:2px;background:#CACACA;top:50%;left:1.5em;position:absolute;transform:translateY(-50%);transform:translate(230%);transform-origin:center;transition:background .3s linear,width .3s linear}.fancy[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.125em;line-height:1.33333em;padding-left:2em;display:block;text-align:left;transition:all .3s ease-in-out;text-transform:lowercase;text-decoration:none;color:#818181;transform:translate(30%)}.fancy[_ngcontent-%COMP%]   .top-key[_ngcontent-%COMP%]{height:2px;width:1.5625rem;top:-2px;left:.625rem;position:absolute;background:white;transition:width .5s ease-out,left .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-1[_ngcontent-%COMP%]{height:2px;width:1.5625rem;right:1.875rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-2[_ngcontent-%COMP%]{height:2px;width:.625rem;right:.625rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]:hover{color:#fff;background:#CACACA}.fancy[_ngcontent-%COMP%]:hover:before{width:1.5rem;background:white}.fancy[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]{color:#fff;padding-left:1.5em}.fancy[_ngcontent-%COMP%]:hover   .top-key[_ngcontent-%COMP%]{left:-2px;width:0px}.fancy[_ngcontent-%COMP%]:hover   .bottom-key-1[_ngcontent-%COMP%], .fancy[_ngcontent-%COMP%]:hover   .bottom-key-2[_ngcontent-%COMP%]{right:0;width:0}.button[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#3d405b;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;width:100%;transition:all .5s;cursor:pointer;margin:5px}.can[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#e04a4a;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;transition:all .5s;cursor:pointer;margin:5px}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:.5s}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"\\bb";position:absolute;opacity:0;top:0;right:-15px;transition:.5s}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{padding-right:15px}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{opacity:1;right:0}.bg_sol[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,#AFC6E6 0%,#E9E6EF 100%);padding:60px 30px 30px;height:100%}']});const h=[{path:"",component:s}];class i{}i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[p.Bz.forChild(h),p.Bz]});class g{}g.\u0275fac=function(a){return new(a||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[c.ez,i,m.JF,l.u5,p.Bz]})}}]);