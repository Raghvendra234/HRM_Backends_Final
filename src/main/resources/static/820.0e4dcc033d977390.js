"use strict";(self.webpackChunkangular_frontend=self.webpackChunkangular_frontend||[]).push([[820],{820:(C,Z,a)=>{a.r(Z),a.d(Z,{RegistrationEmployeeModule:()=>l});var g=a(6895),m=a(7941),t=a(433),r=a(8448),e=a(1571),h=a(4416),_=a(8768),f=a(4371);function b(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"tr",62)(1,"td"),e._UZ(2,"input",63),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"input",64),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"input",65),e.qZA(),e.TgZ(7,"td")(8,"button",66),e.NdJ("click",function(){const c=e.CHM(n).index,A=e.oxw(2);return e.KtG(A.removeEmployee(c))}),e._UZ(9,"i",67),e.qZA()()()}2&i&&e.Q6J("formGroupName",o.index)}function y(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",25)(1,"div",26)(2,"div",27)(3,"div",56)(4,"label",8),e._uU(5,"Employee Experience"),e.qZA()()()(),e.TgZ(6,"div",57)(7,"table",58)(8,"tr")(9,"th"),e._uU(10,"Experience"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Previous Company Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Designation"),e.qZA(),e.TgZ(15,"th",59)(16,"button",60),e.NdJ("click",function(){e.CHM(n);const p=e.oxw();return e.KtG(p.addMoreEmployee())}),e._uU(17,"+Add"),e.qZA()()(),e.YNc(18,b,10,1,"tr",61),e.qZA(),e._UZ(19,"br"),e.qZA()()}if(2&i){const n=e.oxw();e.xp6(18),e.Q6J("ngForOf",n.myFormArray.controls)}}class d{constructor(o,n,u,p,c){this.employeeService=o,this.router=n,this.fb=u,this.toast=p,this.snack=c,this.employee=new r.RB,this.employeeId=new r.RB,this.isCreated=!1,this.employeeExist=!1,this.alert=!1,this.perAddress=new r.kL,this.curAddress=new r.kL,this.qualification10=new r.QU,this.qualification12=new r.QU,this.qualificationBachelor=new r.QU,this.qualificationMaster=new r.QU,this.check=!1,this.asd=!1,this.houseNumber="",this.city="",this.state="",this.pinCode="",this.name="Angular",this.selectedOption="Fresher",console.log("insisde add emp"),this.experienceForm=this.fb.group({temArr:new t.Oe([])}),this.curraddressForm=this.fb.group({pinCode:[""],houseNumber:[""],city:[""],state:[""],typeOfAddress:new t.NI("current")}),this.peraddressForm=this.fb.group({pinCode:[""],houseNumber:[""],city:[""],state:[""],typeOfAddress:new t.NI("parmanent")}),this.masterQualificationForm=this.fb.group({course:[""],board:[""],passingyear:[""],percentage:[""],status:[""]}),this.bechelorQualificationForm=this.fb.group({course:[""],board:[""],passingyear:[""],percentage:[""],status:[""]}),this.twelthQualificationForm=this.fb.group({course:[""],board:[""],passingyear:[""],percentage:[""],status:[""]}),this.tenthmasterQualificationForm=this.fb.group({course:[""],board:[""],passingyear:[""],percentage:[""],status:[""]}),this.employeeForm=this.fb.group({firstName:new t.NI(""),lastName:new t.NI(""),contact:new t.NI(""),emailId:new t.NI(""),aadharCard:new t.NI(""),panCard:new t.NI(""),bankName:new t.NI(""),accountNumber:new t.NI(""),cifNumber:new t.NI(""),toatalExperience:new t.NI(""),designation:new t.NI(""),password:new t.NI(""),gender:new t.NI(""),dateOfBirth:new t.NI(""),name:new t.NI(""),imageType:new t.NI(""),imageData:new t.NI(""),address:new t.Oe([this.peraddressForm,this.curraddressForm]),qualification:new t.Oe([this.masterQualificationForm,this.bechelorQualificationForm,this.twelthQualificationForm,this.tenthmasterQualificationForm]),employeeExperiences:new t.Oe([]),quantities:this.fb.array([])})}ngOnInit(){this.selectedOption="Fresher",console.log(this.employeeForm)}formSubmit(){""!=this.employeeForm.value.firstName.trim()&&null!=this.employeeForm.value.firstName?""!=this.employeeForm.value.lastName.trim()&&null!=this.employeeForm.value.lastName?""!=this.employeeForm.value.emailId.trim()&&null!=this.employeeForm.value.emailId?""!=this.employeeForm.value.contact&&null!=this.employeeForm.value.contact?""!=this.employeeForm.value.aadharCard.trim()&&null!=this.employeeForm.value.aadharCard?""!=this.employeeForm.value.panCard.trim()&&null!=this.employeeForm.value.panCard?""!=this.employeeForm.value.dateOfBirth.trim()&&null!=this.employeeForm.value.dateOfBirth?""!=this.employeeForm.value.gender.trim()&&null!=this.employeeForm.value.gender?""!=this.employeeForm.value.password.trim()&&null!=this.employeeForm.value.password?""!=this.employeeForm.value.designation.trim()&&null!=this.employeeForm.value.designation&&""!=this.employeeForm.value.designation.trim()&&null!=this.employeeForm.value.designation?""!=this.employeeForm.value.bankName.trim()&&null!=this.employeeForm.value.bankName?""!=this.employeeForm.value.accountNumber.trim()&&null!=this.employeeForm.value.accountNumber?""!=this.employeeForm.value.cifNumber.trim()&&null!=this.employeeForm.value.cifNumber?(console.log(this.employeeForm),this.employeeService.addEmployees(this.employeeForm.value).subscribe(o=>{this.employee=new r.RB,this.isCreated=!0,this.employeeExist=!1,this.employeeError=new r.RB,alert("Saved !!!"),this.toast.success({detail:"registration",summary:"Employee added successfully !!!",duration:1e3}),this.router.navigate(["admin/employeelist"])},o=>{this.employeeError=o.error,this.isCreated=!1,(400==o.status||500==o.status)&&(this.isCreated=!1,this.employeeExist=!0),console.log(o),this.EError=o.error.message,this.toast.error({detail:"failed...!",summary:o.error.message,duration:1e4})})):this.snack.open("IFCS Code is required !!","",{duration:3e3}):this.snack.open("Account Number is required !!","",{duration:3e3}):this.snack.open("Bankname is required !!","",{duration:3e3}):this.snack.open("Designation is required !!","",{duration:3e3}):this.snack.open("Password is required !!","",{duration:3e3}):this.snack.open("Gender is required !!","",{duration:3e3}):this.snack.open("Date_of_birth is required !!","",{duration:3e3}):this.snack.open("PanCard number is required and also should be 10 digits !!","",{duration:3e3}):this.snack.open("Aadhar number is required and also should be 12 digits !!","",{duration:3e3}):this.snack.open("Phone number is required and also should be 10 digits !!","",{duration:3e3}):this.snack.open("Email_id is required !!","",{duration:3e3}):this.snack.open("Lastname is required !!","",{duration:3e3}):this.snack.open("Firstname should be min 2 characters !!","",{duration:3e3})}closeAlert(){this.alert=!1}validate(){var o=document.getElementsByClassName("needs-validation")[0];!1===o.checkValidity()&&(event.preventDefault(),event.stopPropagation()),o.classList.add("was-validated")}setValue(){1==this.check?this.check=!1:(this.check=!0,console.log("true"),console.log(this.peraddressForm.value.houseNumber,"sdfghjhgfdsfg")),1==this.check?(this.houseNumber=this.curraddressForm.get("houseNumber")?.value,this.city=this.curraddressForm.get("city")?.value,this.state=this.curraddressForm.get("state")?.value,this.pinCode=this.curraddressForm.get("pinCode")?.value,this.peraddressForm.controls.houseNumber.setValue(this.houseNumber),this.peraddressForm.controls.city.setValue(this.city),this.peraddressForm.controls.state.setValue(this.state),this.peraddressForm.controls.pinCode.setValue(this.pinCode)):(this.peraddressForm.controls.houseNumber.setValue(""),this.peraddressForm.controls.city.setValue(""),this.peraddressForm.controls.state.setValue(""),this.peraddressForm.controls.pinCode.setValue(""))}sameAs(){1==this.check?(this.check=!1,console.log("false"),console.log(this.curraddressForm.value.houseNumber,"manisha")):(this.check=!0,console.log("true"),console.log(this.peraddressForm.value.houseNumber,"sdfghjhgfdsfg")),1==this.check?(this.curraddressForm.value.houseNumber=this.peraddressForm.value.houseNumber,this.curraddressForm.value.city=this.peraddressForm.value.city,this.curraddressForm.value.pinCode=this.peraddressForm.value.pinCode,this.curraddressForm.value.state=this.peraddressForm.value.state):(console.log("ts"),this.peraddressForm.value.houseNumber="",this.peraddressForm.value.city="",this.peraddressForm.value.pincode="",this.peraddressForm.value.state="")}get myFormArray(){return this.employeeForm.get("employeeExperiences")}quantities(){return this.employeeForm.get("quantities")}addMoreEmployee(){this.myFormArray.push(this.fb.group({experience:[""],previousCompanydesignations:[""],previousCompanyName:[""]}))}removeEmployee(o){this.myFormArray.removeAt(o)}onSubmit(){console.log(this.experienceForm.value)}}d.\u0275fac=function(o){return new(o||d)(e.Y36(h.G),e.Y36(m.F0),e.Y36(t.qu),e.Y36(_.s),e.Y36(f.ux))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-registration-employee"]],decls:455,vars:11,consts:[["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"bg_sol",2,"margin-top","60px"],[1,"container"],[1,"card",2,"margin-left","200px","text-align","center"],[1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"container","box"],[1,"col-12"],["for","inputname",1,"text-start","mb-0",2,"font-weight","500"],[1,"col-md-4","mt-4"],["type","text","formControlName","firstName","name","fisrtName",1,"input"],["type","text","formControlName","lastName","name","lastName",1,"input"],[1,"col-md-4","mt-3"],["type","email","formControlName","emailId","name","emailId",1,"input"],["type","number","formControlName","contact","name","contact",1,"input"],["type","number","maxlength","10","minlength","10",1,"input"],["type","text","formControlName","aadharCard","name","addharCard",1,"input"],["type","text","formControlName","panCard","name","panCard",1,"input"],["type","date","formControlName","dateOfBirth","name","dateOfBirth",1,"input"],["formControlName","gender","name","gender","id","validationDefault04","required","",1,"input"],["type","text","formControlName","password","name","password",1,"input"],["formControlName","designation","name","designation","id","validationDefault04","required","",1,"input"],["formControlName","toatalExperience","name","experience","id","validationDefault04","required","",1,"input",3,"ngModel","ngModelChange"],["value","Fresher",3,"selected"],["class","container box mt-4",4,"ngIf"],[1,"container","box","mt-4"],[1,"row",2,"height","30px"],[1,"col-"],["type","text","formControlName","bankName","name","bankName",1,"input"],["type","text","formControlName","accountNumber","name","accountNumber",1,"input"],[1,"col-md-3","mt-3"],["type","text","formControlName","cifNumber","name","cisfNumber",1,"input"],[1,"col-2"],[1,"container","mt-3"],[3,"formGroup"],["for","inputname",2,"font-weight","300","font-size","2"],[1,"col-4"],["type","text","formControlName","houseNumber","id","perhouseNumber",1,"input"],["type","text","formControlName","city","value","","id","percity",1,"input"],["type","text","formControlName","pinCode","id","perpinCode",1,"input"],["formControlName","state","id","perstate","required","",1,"input"],[1,"form-group","text-start"],["type","checkbox","id","checkBox",3,"checked","change"],["for","inputname"],["type","text","formControlName","houseNumber","name","houseNumber","id","curhouseNumber",1,"input"],["type","text","formControlName","city","id","curcity",1,"input"],["type","text","formControlName","pinCode","name","pinCode","id","curpinCode",1,"input"],["formControlName","state","id","curstate","required","",1,"input"],[1,"container","box","mt-5"],["type","text","formControlName","board","name","course",1,"input"],["type","text","formControlName","passingyear","name","board",1,"input"],["type","text","formControlName","percentage","name","percentage",1,"input"],["formControlName","status","id","curstate","required","",1,"input"],[1,"btn-group"],["type","submit",1,"button"],["type","reset",1,"button","can"],[1,"d-flex","justify-content-between"],["formArrayName","employeeExperiences",1,"container"],[1,"table","table-bordered"],["width","150px"],["type","button",1,"btn","btn-primary",2,"color","white","background-color","blue",3,"click"],[3,"formGroupName",4,"ngFor","ngForOf"],[3,"formGroupName"],["type","text","formControlName","experience",1,"form-control",2,"background-color","white","margin-top","15px"],["type","text","formControlName","previousCompanyName",1,"form-control",2,"background-color","white","margin-top","15px"],["type","text","formControlName","previousCompanydesignations",1,"form-control",2,"background-color","white","margin-top","15px"],[1,"btn","btn-danger",2,"color","white","background-color","red",3,"click"],[1,"fa","fa-trash",2,"width","25px"]],template:function(o,n){1&o&&(e.TgZ(0,"head"),e._UZ(1,"meta",0),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"form",4),e.NdJ("ngSubmit",function(){return n.formSubmit()}),e.TgZ(6,"h3"),e._uU(7,"Employee Registration"),e.qZA(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",5)(11,"div",7)(12,"label",8),e._uU(13,"Employee Informations"),e.qZA(),e._UZ(14,"hr"),e.qZA()()(),e.TgZ(15,"div",9)(16,"label"),e._UZ(17,"input",10),e.TgZ(18,"span"),e._uU(19,"First Name"),e.qZA()()(),e.TgZ(20,"div",9)(21,"label"),e._UZ(22,"input",11),e.TgZ(23,"span"),e._uU(24,"Last Name"),e.qZA()()(),e.TgZ(25,"div",12)(26,"label"),e._UZ(27,"input",13),e.TgZ(28,"span"),e._uU(29,"Email Id"),e.qZA()()()(),e.TgZ(30,"div",5)(31,"div",12)(32,"label"),e._UZ(33,"input",14),e.TgZ(34,"span"),e._uU(35,"Contact"),e.qZA()()(),e.TgZ(36,"div",12)(37,"label"),e._UZ(38,"input",15),e.TgZ(39,"span"),e._uU(40,"Contact ( optional )"),e.qZA()()(),e.TgZ(41,"div",12)(42,"label"),e._UZ(43,"input",16),e.TgZ(44,"span"),e._uU(45,"Aadhar-Card"),e.qZA()()()(),e.TgZ(46,"div",5)(47,"div",12)(48,"label"),e._UZ(49,"input",17),e.TgZ(50,"span"),e._uU(51,"Pan-Card"),e.qZA()()(),e.TgZ(52,"div",12)(53,"label"),e._UZ(54,"input",18),e.TgZ(55,"span"),e._uU(56,"DateOfBirth"),e.qZA()()(),e.TgZ(57,"div",12)(58,"label")(59,"select",19)(60,"option"),e._uU(61,"Female"),e.qZA(),e.TgZ(62,"option"),e._uU(63,"Male"),e.qZA()(),e.TgZ(64,"span"),e._uU(65,"Gender"),e.qZA()()(),e.TgZ(66,"div",12)(67,"label"),e._UZ(68,"input",20),e.TgZ(69,"span"),e._uU(70,"Password"),e.qZA()()(),e.TgZ(71,"div",12)(72,"label")(73,"select",21)(74,"option"),e._uU(75,"Android Developer"),e.qZA(),e.TgZ(76,"option"),e._uU(77,"Angular Developer"),e.qZA(),e.TgZ(78,"option"),e._uU(79,"Java Developer"),e.qZA(),e.TgZ(80,"option"),e._uU(81,".Net Developer"),e.qZA(),e.TgZ(82,"option"),e._uU(83,"Python Developer"),e.qZA(),e.TgZ(84,"option"),e._uU(85,"FrontEnd Developer"),e.qZA(),e.TgZ(86,"option"),e._uU(87,"BackEnd Developer"),e.qZA(),e.TgZ(88,"option"),e._uU(89,"Designer"),e.qZA(),e.TgZ(90,"option"),e._uU(91,"Tester"),e.qZA(),e.TgZ(92,"option"),e._uU(93,"IOT Department"),e.qZA(),e.TgZ(94,"option"),e._uU(95,"Other"),e.qZA()(),e.TgZ(96,"span"),e._uU(97,"Designation"),e.qZA()()(),e.TgZ(98,"div",12)(99,"label")(100,"select",22),e.NdJ("ngModelChange",function(p){return n.selectedOption=p}),e.TgZ(101,"option",23),e._uU(102,"Fresher"),e.qZA(),e.TgZ(103,"option"),e._uU(104,"0-1 year"),e.qZA(),e.TgZ(105,"option"),e._uU(106,"1-3 year"),e.qZA(),e.TgZ(107,"option"),e._uU(108,"3-5 year"),e.qZA(),e.TgZ(109,"option"),e._uU(110,"5-7 year"),e.qZA(),e.TgZ(111,"option"),e._uU(112,"7-9 year"),e.qZA(),e.TgZ(113,"option"),e._uU(114,"9-11 year"),e.qZA(),e.TgZ(115,"option"),e._uU(116,"11-13 year"),e.qZA(),e.TgZ(117,"option"),e._uU(118," 13+ year"),e.qZA()(),e.TgZ(119,"span"),e._uU(120,"Total Experience"),e.qZA()()()(),e.YNc(121,y,20,1,"div",24),e.TgZ(122,"div",25)(123,"div",26)(124,"div",27)(125,"label",8),e._uU(126,"Bank-Details"),e.qZA(),e._UZ(127,"hr"),e.qZA()()(),e.TgZ(128,"div",5)(129,"div",12)(130,"label"),e._UZ(131,"input",28),e.TgZ(132,"span"),e._uU(133,"Bank Name"),e.qZA()()(),e.TgZ(134,"div",12)(135,"label"),e._UZ(136,"input",29),e.TgZ(137,"span"),e._uU(138," Account Number"),e.qZA()()(),e.TgZ(139,"div",30)(140,"label"),e._UZ(141,"input",31),e.TgZ(142,"span"),e._uU(143,"IFSC Code"),e.qZA()()()(),e.TgZ(144,"div",25)(145,"div",26)(146,"div",32)(147,"label",8),e._uU(148,"Address "),e.qZA()()(),e._UZ(149,"hr"),e.qZA(),e.TgZ(150,"div",33)(151,"form",34)(152,"div",5)(153,"div",32)(154,"label",35),e._uU(155,"Current Address"),e.qZA()(),e.TgZ(156,"div",36)(157,"label"),e._UZ(158,"input",37),e.TgZ(159,"span"),e._uU(160,"house Number"),e.qZA()()(),e.TgZ(161,"div",32)(162,"label"),e._UZ(163,"input",38),e.TgZ(164,"span"),e._uU(165,"city"),e.qZA()()(),e.TgZ(166,"div",32)(167,"label"),e._UZ(168,"input",39),e.TgZ(169,"span"),e._uU(170,"pinCode"),e.qZA()()(),e.TgZ(171,"div",32)(172,"label")(173,"select",40)(174,"option"),e._uU(175,"Andhra Pradesh "),e.qZA(),e.TgZ(176,"option"),e._uU(177,"Arunachal Pradesh "),e.qZA(),e.TgZ(178,"option"),e._uU(179,"Assam"),e.qZA(),e.TgZ(180,"option"),e._uU(181,"Delhi"),e.qZA(),e.TgZ(182,"option"),e._uU(183,"Bihar"),e.qZA(),e.TgZ(184,"option"),e._uU(185,"Chhattisgarh"),e.qZA(),e.TgZ(186,"option"),e._uU(187,"Goa"),e.qZA(),e.TgZ(188,"option"),e._uU(189,"Gujarat"),e.qZA(),e.TgZ(190,"option"),e._uU(191,"Haryana"),e.qZA(),e.TgZ(192,"option"),e._uU(193,"Himachal Pradesh"),e.qZA(),e.TgZ(194,"option"),e._uU(195,"Jharkhand"),e.qZA(),e.TgZ(196,"option"),e._uU(197,"Karnataka"),e.qZA(),e.TgZ(198,"option"),e._uU(199,"Kerala"),e.qZA(),e.TgZ(200,"option"),e._uU(201,"Madhya Pradesh"),e.qZA(),e.TgZ(202,"option"),e._uU(203,"Maharashtra"),e.qZA(),e.TgZ(204,"option"),e._uU(205,"Meghalaya"),e.qZA(),e.TgZ(206,"option"),e._uU(207,"Mizoram"),e.qZA(),e.TgZ(208,"option"),e._uU(209,"Nagaland"),e.qZA(),e.TgZ(210,"option"),e._uU(211,"Odisha"),e.qZA(),e.TgZ(212,"option"),e._uU(213,"Punjab"),e.qZA(),e.TgZ(214,"option"),e._uU(215,"Rajasthan"),e.qZA(),e.TgZ(216,"option"),e._uU(217,"Sikkim"),e.qZA(),e.TgZ(218,"option"),e._uU(219,"Tamil Nadu"),e.qZA(),e.TgZ(220,"option"),e._uU(221,"Telangana"),e.qZA(),e.TgZ(222,"option"),e._uU(223,"Tripura"),e.qZA(),e.TgZ(224,"option"),e._uU(225,"Uttar Pradesh"),e.qZA(),e.TgZ(226,"option"),e._uU(227,"Uttarakhand"),e.qZA(),e.TgZ(228,"option"),e._uU(229,"West Bengal"),e.qZA()(),e.TgZ(230,"span"),e._uU(231,"state"),e.qZA()()()()()(),e.TgZ(232,"div",5)(233,"div",7)(234,"div",41)(235,"input",42),e.NdJ("change",function(){return n.setValue()}),e.qZA(),e._uU(236," Same as Per address "),e.qZA()()(),e.TgZ(237,"div",33)(238,"form",34)(239,"div",5)(240,"div",32)(241,"label",43),e._uU(242,"Permanent Address"),e.qZA()(),e.TgZ(243,"div",36)(244,"label"),e._UZ(245,"input",44),e.TgZ(246,"span"),e._uU(247,"house number"),e.qZA()()(),e.TgZ(248,"div",32)(249,"label"),e._UZ(250,"input",45),e.TgZ(251,"span"),e._uU(252,"city"),e.qZA()()(),e.TgZ(253,"div",32)(254,"label"),e._UZ(255,"input",46),e.TgZ(256,"span"),e._uU(257,"pincode"),e.qZA()()(),e.TgZ(258,"div",32)(259,"label")(260,"select",47)(261,"option"),e._uU(262,"Andhra Pradesh "),e.qZA(),e.TgZ(263,"option"),e._uU(264,"Arunachal Pradesh "),e.qZA(),e.TgZ(265,"option"),e._uU(266,"Assam"),e.qZA(),e.TgZ(267,"option"),e._uU(268,"Delhi"),e.qZA(),e.TgZ(269,"option"),e._uU(270,"Bihar"),e.qZA(),e.TgZ(271,"option"),e._uU(272,"Chhattisgarh"),e.qZA(),e.TgZ(273,"option"),e._uU(274,"Goa"),e.qZA(),e.TgZ(275,"option"),e._uU(276,"Gujarat"),e.qZA(),e.TgZ(277,"option"),e._uU(278,"Haryana"),e.qZA(),e.TgZ(279,"option"),e._uU(280,"Himachal Pradesh"),e.qZA(),e.TgZ(281,"option"),e._uU(282,"Jharkhand"),e.qZA(),e.TgZ(283,"option"),e._uU(284,"Karnataka"),e.qZA(),e.TgZ(285,"option"),e._uU(286,"Kerala"),e.qZA(),e.TgZ(287,"option"),e._uU(288,"Madhya Pradesh"),e.qZA(),e.TgZ(289,"option"),e._uU(290,"Maharashtra"),e.qZA(),e.TgZ(291,"option"),e._uU(292,"Meghalaya"),e.qZA(),e.TgZ(293,"option"),e._uU(294,"Mizoram"),e.qZA(),e.TgZ(295,"option"),e._uU(296,"Nagaland"),e.qZA(),e.TgZ(297,"option"),e._uU(298,"Odisha"),e.qZA(),e.TgZ(299,"option"),e._uU(300,"Punjab"),e.qZA(),e.TgZ(301,"option"),e._uU(302,"Rajasthan"),e.qZA(),e.TgZ(303,"option"),e._uU(304,"Sikkim"),e.qZA(),e.TgZ(305,"option"),e._uU(306,"Tamil Nadu"),e.qZA(),e._uU(307,"y "),e.TgZ(308,"option"),e._uU(309,"Telangana"),e.qZA(),e.TgZ(310,"option"),e._uU(311,"Tripura"),e.qZA(),e.TgZ(312,"option"),e._uU(313,"Uttar Pradesh"),e.qZA(),e.TgZ(314,"option"),e._uU(315,"Uttarakhand"),e.qZA(),e.TgZ(316,"option"),e._uU(317,"West Bengal"),e.qZA()(),e.TgZ(318,"span"),e._uU(319,"state"),e.qZA()()()()()(),e.TgZ(320,"div",48)(321,"div",26)(322,"div",32)(323,"label",8),e._uU(324,"Qualification"),e.qZA()(),e._UZ(325,"hr"),e.qZA()(),e.TgZ(326,"div",33)(327,"form",34)(328,"div",5)(329,"div",32)(330,"label",43),e._uU(331,"Master's degree"),e.qZA()(),e.TgZ(332,"div",36)(333,"label"),e._UZ(334,"input",49),e.TgZ(335,"span"),e._uU(336,"Course"),e.qZA()()(),e.TgZ(337,"div",32)(338,"label"),e._UZ(339,"input",50),e.TgZ(340,"span"),e._uU(341,"passsing year"),e.qZA()()(),e.TgZ(342,"div",32)(343,"label"),e._UZ(344,"input",51),e.TgZ(345,"span"),e._uU(346,"percentage"),e.qZA()()(),e.TgZ(347,"div",32)(348,"label")(349,"select",52)(350,"option"),e._uU(351,"Completed "),e.qZA(),e.TgZ(352,"option"),e._uU(353,"Persuing"),e.qZA()(),e.TgZ(354,"span"),e._uU(355,"status"),e.qZA()()()()()(),e.TgZ(356,"div",33)(357,"form",34)(358,"div",5)(359,"div",32)(360,"label",43),e._uU(361,"Bachelor's degree"),e.qZA()(),e.TgZ(362,"div",36)(363,"label"),e._UZ(364,"input",49),e.TgZ(365,"span"),e._uU(366,"Course"),e.qZA()()(),e.TgZ(367,"div",32)(368,"label"),e._UZ(369,"input",50),e.TgZ(370,"span"),e._uU(371,"passing year"),e.qZA()()(),e.TgZ(372,"div",32)(373,"label"),e._UZ(374,"input",51),e.TgZ(375,"span"),e._uU(376,"percentage"),e.qZA()()(),e.TgZ(377,"div",32)(378,"label")(379,"select",52)(380,"option"),e._uU(381,"Completed "),e.qZA(),e.TgZ(382,"option"),e._uU(383,"Persuing"),e.qZA()(),e.TgZ(384,"span"),e._uU(385,"status"),e.qZA()()()()()(),e.TgZ(386,"div",33)(387,"form",34)(388,"div",5)(389,"div",32)(390,"label",43),e._uU(391,"Intermediate/Diploma"),e.qZA()(),e.TgZ(392,"div",36)(393,"label"),e._UZ(394,"input",49),e.TgZ(395,"span"),e._uU(396,"Course"),e.qZA()()(),e.TgZ(397,"div",32)(398,"label"),e._UZ(399,"input",50),e.TgZ(400,"span"),e._uU(401,"passing year"),e.qZA()()(),e.TgZ(402,"div",32)(403,"label"),e._UZ(404,"input",51),e.TgZ(405,"span"),e._uU(406,"percentage"),e.qZA()()(),e.TgZ(407,"div",32)(408,"label")(409,"select",52)(410,"option"),e._uU(411,"Completed "),e.qZA(),e.TgZ(412,"option"),e._uU(413,"Persuing"),e.qZA()(),e.TgZ(414,"span"),e._uU(415,"status"),e.qZA()()()()()(),e.TgZ(416,"div",33)(417,"div",33)(418,"form",34)(419,"div",5)(420,"div",32)(421,"label",43),e._uU(422,"HighSchool"),e.qZA()(),e.TgZ(423,"div",36)(424,"label"),e._UZ(425,"input",49),e.TgZ(426,"span"),e._uU(427,"Course"),e.qZA()()(),e.TgZ(428,"div",32)(429,"label"),e._UZ(430,"input",50),e.TgZ(431,"span"),e._uU(432,"passing year"),e.qZA()()(),e.TgZ(433,"div",32)(434,"label"),e._UZ(435,"input",51),e.TgZ(436,"span"),e._uU(437,"percentage"),e.qZA()()(),e.TgZ(438,"div",32)(439,"label")(440,"select",52)(441,"option"),e._uU(442,"Completed "),e.qZA(),e.TgZ(443,"option"),e._uU(444,"Persuing"),e.qZA()(),e.TgZ(445,"span"),e._uU(446,"status"),e.qZA()()()()()()(),e._UZ(447,"br"),e.TgZ(448,"div",53)(449,"button",54)(450,"span"),e._uU(451,"Submit"),e.qZA()(),e.TgZ(452,"button",55)(453,"span"),e._uU(454,"reset"),e.qZA()()()()()()()),2&o&&(e.xp6(5),e.Q6J("formGroup",n.employeeForm),e.xp6(95),e.Q6J("ngModel",n.selectedOption),e.xp6(1),e.Q6J("selected",!0),e.xp6(20),e.Q6J("ngIf","Fresher"!=n.employeeForm.value.toatalExperience),e.xp6(30),e.Q6J("formGroup",n.curraddressForm),e.xp6(84),e.Q6J("checked",n.check),e.xp6(3),e.Q6J("formGroup",n.peraddressForm),e.xp6(89),e.Q6J("formGroup",n.masterQualificationForm),e.xp6(30),e.Q6J("formGroup",n.bechelorQualificationForm),e.xp6(30),e.Q6J("formGroup",n.twelthQualificationForm),e.xp6(31),e.Q6J("formGroup",n.tenthmasterQualificationForm))},dependencies:[g.sg,g.O5,t._Y,t.YN,t.Kr,t.Fj,t.wV,t.EJ,t.JJ,t.JL,t.Q7,t.sg,t.u,t.x0,t.CE],styles:['label[_ngcontent-%COMP%]{width:100%!important}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;background-color:#fff;padding:20px;border-radius:10px;position:relative;margin:auto!important}.message[_ngcontent-%COMP%]{color:#585757d2;font-size:14px}.flex[_ngcontent-%COMP%]{display:flex;width:100%;gap:6px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:15px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:15px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:30px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.input01[_ngcontent-%COMP%]{width:100%;padding:10px 10px 20px;outline:0;border:1px solid rgba(105,105,105,.397);border-radius:5px}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{position:absolute;left:10px;top:50px;color:gray;font-size:.9em;cursor:text;transition:.3s ease}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:placeholder-shown + span[_ngcontent-%COMP%]{top:40px;font-size:.9em}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{top:50px;font-size:.7em;font-weight:600}.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input01[_ngcontent-%COMP%]:valid + span[_ngcontent-%COMP%]{color:green}.fancy[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #CACACA;border-radius:0;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-weight:390;letter-spacing:2px;margin:0;outline:none;overflow:visible;padding:8px 30px;position:relative;text-align:center;text-decoration:none;text-transform:none;transition:all .3s ease-in-out;-webkit-user-select:none;user-select:none;font-size:13px}.fancy[_ngcontent-%COMP%]:before{content:" ";width:1.7rem;height:2px;background:#CACACA;top:50%;left:1.5em;position:absolute;transform:translateY(-50%);transform:translate(230%);transform-origin:center;transition:background .3s linear,width .3s linear}.fancy[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:1.125em;line-height:1.33333em;padding-left:2em;display:block;text-align:left;transition:all .3s ease-in-out;text-transform:lowercase;text-decoration:none;color:#818181;transform:translate(30%)}.fancy[_ngcontent-%COMP%]   .top-key[_ngcontent-%COMP%]{height:2px;width:1.5625rem;top:-2px;left:.625rem;position:absolute;background:white;transition:width .5s ease-out,left .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-1[_ngcontent-%COMP%]{height:2px;width:1.5625rem;right:1.875rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]   .bottom-key-2[_ngcontent-%COMP%]{height:2px;width:.625rem;right:.625rem;bottom:-2px;position:absolute;background:white;transition:width .5s ease-out,right .3s ease-out}.fancy[_ngcontent-%COMP%]:hover{color:#fff;background:#CACACA}.fancy[_ngcontent-%COMP%]:hover:before{width:1.5rem;background:white}.fancy[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%]{color:#fff;padding-left:1.5em}.fancy[_ngcontent-%COMP%]:hover   .top-key[_ngcontent-%COMP%]{left:-2px;width:0px}.fancy[_ngcontent-%COMP%]:hover   .bottom-key-1[_ngcontent-%COMP%], .fancy[_ngcontent-%COMP%]:hover   .bottom-key-2[_ngcontent-%COMP%]{right:0;width:0}.button[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#3d405b;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;width:100%;transition:all .5s;cursor:pointer;margin:5px}.can[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;background-color:#e04a4a;border:none;color:#fff;text-align:center;font-size:17px;padding:8px;transition:all .5s;cursor:pointer;margin:5px}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:.5s}.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"\\bb";position:absolute;opacity:0;top:0;right:-15px;transition:.5s}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{padding-right:15px}.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after{opacity:1;right:0}.bg_sol[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,#AFC6E6 0%,#E9E6EF 100%);padding:60px 30px 30px}@media screen and (max-width: 600px){h3[_ngcontent-%COMP%]{background-color:red}}']});const v=[{path:"",component:d}];class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.Bz.forChild(v),m.Bz]});var T=a(529);class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[g.ez,s,T.JF,t.u5,m.Bz,t.UX]})}}]);