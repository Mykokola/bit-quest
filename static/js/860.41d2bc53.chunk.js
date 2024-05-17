"use strict";(self.webpackChunkbit_quest=self.webpackChunkbit_quest||[]).push([[860],{204:(o,e,a)=>{a.d(e,{A:()=>t});const _="Button_button__W+joq";var s=a(579);const t=o=>{let{additionalClass:e,buttonText:a,type:t,onClick:r}=o;const i=e?" ".concat(e):"",u=t?" ".concat(t):"button";return(0,s.jsx)("button",{className:"".concat(_," ").concat(i),type:u,onClick:r,children:a})}},560:(o,e,a)=>{a.d(e,{A:()=>u});var _=a(43);const s={sign_up:"FeedbackForm_sign_up__2xZuJ",sign_up_title:"FeedbackForm_sign_up_title__0NwA5",sign_up_form_title:"FeedbackForm_sign_up_form_title__wvigm",sign_up_form:"FeedbackForm_sign_up_form__3zm6f",button:"FeedbackForm_button__ZmMRO",hidden:"FeedbackForm_hidden__sj3v+",sign_up_backdrop:"FeedbackForm_sign_up_backdrop__NL2Do",navLogo:"FeedbackForm_navLogo__9Pd-d",sign_up_cover_title:"FeedbackForm_sign_up_cover_title__OljZu"};var t=a(204),r=a(888),i=a(579);const u=()=>{const[o,e]=(0,_.useState)({name:"",phoneNumber:"",email:"",message:""}),[a,u]=(0,_.useState)(!1),n=a=>{e({...o,[a.target.name]:a.target.value})},c=s.button;return(0,i.jsxs)("section",{className:s.sign_up,id:"feedback",children:[(0,i.jsx)("h2",{className:s.sign_up_title,children:"Do you want to join us? Fill out the form below and we will contact you!"}),a?(0,i.jsxs)("div",{className:s.sign_up_backdrop,children:[(0,i.jsx)("svg",{className:s.navLogo,width:"57",height:"50",children:(0,i.jsx)("use",{href:r.A+"#icon-logo"})}),(0,i.jsx)("h2",{className:s.sign_up_cover_title,children:"Thank you for your application, we will contact you soon! :)"})]}):(0,i.jsxs)("form",{autoComplete:"off",className:a?"".concat(s.hidden," ").concat(s.sign_up_form," "):s.sign_up_form,onSubmit:e=>{e.preventDefault(),u(!0),console.log(o)},children:[(0,i.jsx)("p",{className:s.sign_up_form_title,children:"Feedback Form"}),(0,i.jsx)("label",{className:s.label_name,children:(0,i.jsx)("input",{className:s.input_name,name:"name",type:"text",value:o.name,placeholder:"Name",onChange:n,required:!0})}),(0,i.jsx)("label",{children:(0,i.jsx)("input",{className:s.input_phone_number,name:"phoneNumber",type:"tel",value:o.phoneNumber,placeholder:"Phone number",onChange:n,required:!0})}),(0,i.jsx)("label",{children:(0,i.jsx)("input",{className:s.input_email,name:"email",type:"email",value:o.email,placeholder:"Email",onChange:n,required:!0})}),(0,i.jsx)("label",{children:(0,i.jsx)("textarea",{className:s.input_message,name:"message",value:o.message,placeholder:"Message",onChange:n})}),(0,i.jsx)(t.A,{additionalClass:c,buttonText:"Send",type:"submit"})]})]})}},741:(o,e,a)=>{a.d(e,{A:()=>l});var _=a(43);const s="Slider_gallery__zdZSj",t="Slider_title__dldDA",r="Slider_slider__32Mjd",i="Slider_active__qeCiN",u="Slider_prev__mu23h",n="Slider_next__96Q5x",c="Slider_dots__iSABm",p="Slider_dot__fKhFu",h="Slider_dotActive__TEz5t";var g=a(579);const l=o=>{let{imageGallery:e}=o;const a=e,[l,m]=(0,_.useState)(0),d=a.length,x=()=>{m((l+1)%d)},b=()=>{m((l-1+d)%d)};return(0,g.jsxs)("section",{className:s,children:[(0,g.jsx)("h2",{className:t,children:"Our photos"}),(0,g.jsxs)("div",{className:r,children:[(0,g.jsx)("button",{className:u,onClick:b}),a.map(((o,e)=>(0,g.jsx)("img",{src:o.src,srcSet:"".concat(o.image_1280_1x," 1x, ").concat(o.image_1280_2x," 2x"),alt:o.alt,className:e===l?i:""},e))),(0,g.jsx)("button",{className:n,onClick:x})]}),(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)("span",{className:0===l?h:p,onClick:b}),(0,g.jsx)("span",{className:0!==l&&l!==d-1?h:p}),(0,g.jsx)("span",{className:l===d-1?h:p,onClick:x})]})]})}},84:(o,e,a)=>{a.r(e),a.d(e,{default:()=>M});const _="Hero_hero__YlKDV",s="Hero_hero_title_button__Ffx5c",t="Hero_hero_title__s3VUW";var r=a(204),i=a(579);const u=function(){const o=s;return(0,i.jsx)("section",{className:_,children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h1",{className:t,children:"All about ballet, development in the field of ballet culture, professional ballet training.we can show and tell we do it so well!"}),(0,i.jsx)(r.A,{onClick:()=>{window.location.href="#feedback"},additionalClass:o,buttonText:"Order for Feedback"})]})})},n="About_about__IKhRQ",c="About_about_title__h-0N2",p="About_about_info__YoJfR",h="About_about_button__BSj+Y",g="About_navLogoMobile__qItSG";var l=a(475),m=a(888);const d=()=>(0,i.jsx)("section",{className:n,children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("h2",{className:c,children:["Ballet Studio T&Y ",(0,i.jsx)("span",{children:"Tkachuk and Yapparova"})]}),(0,i.jsx)("p",{className:p,children:"Hello everyone! My name is Sabina, and together with my husband, a professional dancer who continues his work at the National Ballet of Canada, I am delighted to welcome you today to our presentation about the ballet studio in Toronto. We both have gone from novice dancers to leading artists at the Mikhailovsky Theatre, where our talent and dedication to ballet have been recognized by many audiences and critics. Our twenty years of experience in this beautiful art form have allowed us to deeply understand and fall in love with the ballet world, from corps de ballet to leading roles. With our knowledge and experience, we have created this studio to share our expertise and passion with other ballet enthusiasts. Our goal is to inspire and help our students unleash their potential and reach new heights in this beautiful art. Our studio offers not only professional training but also a unique atmosphere of community and understanding, where every dancer can feel like part of our ballet family. Join us, and let's dive together into the fascinating world of ballet! Thank you for your attention."}),(0,i.jsxs)(l.N_,{className:h,to:"/teachers",children:[(0,i.jsx)("span",{children:"More about us"}),(0,i.jsx)("svg",{className:g,width:"12",height:"8",children:(0,i.jsx)("use",{href:m.A+"#icon-arrow-right"})})]})]})}),x={title:"TrainingProgram_title__GK-NZ",details:"TrainingProgram_details__298Le",list:"TrainingProgram_list__r7UdM",listTitle:"TrainingProgram_listTitle__VK7dp",listItem:"TrainingProgram_listItem__603gZ",button_black:"TrainingProgram_button_black__29yfw",contentContainer:"TrainingProgram_contentContainer__38kA7",leftColumn:"TrainingProgram_leftColumn__rdXbJ",rightColumn:"TrainingProgram_rightColumn__+HJMy",img:"TrainingProgram_img__GcIgT"},b=a.p+"static/media/training_360_1x.2bd003da58d067905a0d.jpg",j=a.p+"static/media/training_360_2x.ade9c0624b9636789dee.jpg",f=a.p+"static/media/training_1280_1x.9605e1a768a1f2409e60.jpg",N=a.p+"static/media/training_1280_2x.c7228f6d81f7d3935364.jpg",y="ButtonBlack_button__xUqu5",v=o=>{let{additionalClass:e,buttonText:a,type:_,onClick:s}=o;const t=e?" ".concat(e):"",r=_?" ".concat(_):"button";return(0,i.jsx)("button",{className:"".concat(y," ").concat(t),type:r,onClick:s,children:a})},k=()=>{const o=x.button_black;return(0,i.jsxs)("section",{className:x.training_program,children:[(0,i.jsx)("h2",{className:x.title,children:"Training program"}),(0,i.jsxs)("div",{className:x.contentContainer,children:[(0,i.jsx)("div",{className:x.leftColumn,children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:"".concat(b," 1x, ").concat(j," 2x"),media:"(min-width: 250px)",type:"image/jpeg"}),(0,i.jsx)("source",{srcSet:"".concat(f," 1x, ").concat(N," 2x"),media:"(min-width: 768px)",type:"image/jpeg"}),(0,i.jsx)("img",{className:x.img,src:j,srcSet:"".concat(b," 1x, ").concat(j," 2x"),alt:"Opera dancer",width:"360"})]})}),(0,i.jsxs)("div",{className:x.rightColumn,children:[(0,i.jsx)("p",{className:x.details,children:"From 0 to the stage. For the soul and professionally."}),(0,i.jsx)("p",{className:x.listTitle,children:"With us you will learn and master:"}),(0,i.jsxs)("ul",{className:x.list,children:[(0,i.jsx)("li",{className:x.listItem,children:"Ballet technique: you will learn basic body positions, movements and support."}),(0,i.jsx)("li",{className:x.listItem,children:"Coordination and balance: You will learn to control your body, establish balance and coordinate movements in space."}),(0,i.jsx)("li",{className:x.listItem,children:"Learn to stand on pointe."}),(0,i.jsx)("li",{className:x.listItem,children:"You will dance in a duet, which will help you interact better with your partner."}),(0,i.jsx)("li",{className:x.listItem,children:"Knowledge of the history and culture of ballet: You will learn more about the history of ballet, outstanding ballet choreographers and performers."}),(0,i.jsx)("li",{className:x.listItem,children:"We also offer a private session where you can improve your ballet technique by training one on one."})]}),(0,i.jsx)(l.N_,{to:"/training-program",children:(0,i.jsx)(v,{additionalClass:o,buttonText:"More details"})})]})]})]})};var w=a(741);const T="Theaters_theaters__bT1bv",C="Theaters_theaters_title__j09C0",S="Theaters_theaters_listItem__iAAWG",A="Theaters_theaters_list__Y5za2",O=()=>(0,i.jsx)("section",{className:T,children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{className:C,children:"Theaters where we danced"}),(0,i.jsx)("ul",{className:A,children:[{id:1,name:"National Opera of Ukraine, Kyiv."},{id:2,name:"Mikhailovsky Theater, St. Petersburg."},{id:3,name:" Mariinsky Theater, St. Petersburg."},{id:4,name:" Alexandrinsky Theater, St. Petersburg."},{id:5,name:" Hermitage Theater, St. Petersburg."},{id:6,name:"Moscow Academic Musical Theater named after K. S. Stanislavskyi and V. I. Nemirovich-Danchenko, Moscow."},{id:7,name:"Bolshoi Theater, Moscow."},{id:8,name:"Champs Elysees Theater, Paris."},{id:9,name:"London Coliseum Theatre, London."},{id:10,name:"David H. Koch Theatre, New York."},{id:11,name:"Segerstrom Center for the Arts in Costa Mesa."},{id:12,name:"Auditorium Theater, Chicago."},{id:13,name:"Royal Albert Hall, London."},{id:14,name:"Grand Theater of La Fenice, Venice."},{id:15,name:"Le Palais des Congr\xe8s de Paris, Paris."},{id:16,name:"Tokyo Bunka Kaikan, Tokyo."},{id:17,name:"Star Performing Arts Centre, Singapore."},{id:18,name:"Hong Kong Cultural Centre, Hong Kong."},{id:19,name:"NHK Osaka Hall, Osaka."},{id:20,name:"Aichi Prefecture Art Theater (Aichi Nagoya)."},{id:21,name:"Four Seasons Center for the Performing Arts, Toronto."},{id:22,name:"China National Performing Arts Center, Beijing."},{id:23,name:"Municipal Theater of Santiago, Santiago, Chile."}].map((o=>(0,i.jsx)("li",{className:S,children:o.name},o.id)))})]})});var F=a(560),P=a(305);const M=()=>{const{homePageGallery:o}=P.A;return(0,i.jsxs)("main",{children:[(0,i.jsx)(u,{}),(0,i.jsx)(d,{}),(0,i.jsx)(k,{}),(0,i.jsx)(w.A,{imageGallery:o}),(0,i.jsx)(O,{}),(0,i.jsx)(F.A,{})]})}},305:(o,e,a)=>{a.d(e,{A:()=>_});const _={homePageGallery:[{id:1,src:"src/images/about_us/our_photos/our_photo_1_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_1_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_1_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_1_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_1_1280_2x.jpg",alt:"Stage rehearsal Spartak"},{id:2,src:"src/images/about_us/our_photos/our_photo_2_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_2_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_2_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_2_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_2_1280_2x.jpg",alt:"Opera dancer"},{id:3,src:"src/images/about_us/our_photos/our_photo_3_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_3_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_3_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_3_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_3_1280_2x.jpg",alt:"Opera dancer"},{id:4,src:"src/images/about_us/our_photos/our_photo_4_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_4_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_4_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_4_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_4_1280_2x.jpg",alt:"Opera dancer"},{id:5,src:"src/images/about_us/our_photos/our_photo_5_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_5_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_5_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_5_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_5_1280_2x.jpg",alt:"Opera dancer"},{id:6,src:"src/images/about_us/our_photos/our_photo_6_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_6_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_6_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_6_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_6_1280_2x.jpg",alt:"Opera dancer"},{id:7,src:"src/images/about_us/our_photos/our_photo_7_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_7_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_7_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_7_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_7_1280_2x.jpg",alt:"Opera dancer"},{id:8,src:"src/images/about_us/our_photos/our_photo_8_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_8_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_8_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_8_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_8_1280_2x.jpg",alt:"Opera dancer"}],someOtherGallery:[{id:1,src:"src/images/about_us/our_photos/our_photo_1_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_1_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_1_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_1_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_1_1280_2x.jpg",alt:"Stage rehearsal Spartak"},{id:2,src:"src/images/about_us/our_photos/our_photo_2_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_2_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_2_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_2_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_2_1280_2x.jpg",alt:"Opera dancer"},{id:3,src:"src/images/about_us/our_photos/our_photo_3_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_3_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_3_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_3_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_3_1280_2x.jpg",alt:"Opera dancer"},{id:4,src:"src/images/about_us/our_photos/our_photo_4_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_4_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_4_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_4_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_4_1280_2x.jpg",alt:"Opera dancer"},{id:5,src:"src/images/about_us/our_photos/our_photo_5_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_5_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_5_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_5_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_5_1280_2x.jpg",alt:"Opera dancer"},{id:6,src:"src/images/about_us/our_photos/our_photo_6_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_6_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_6_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_6_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_6_1280_2x.jpg",alt:"Opera dancer"},{id:7,src:"src/images/about_us/our_photos/our_photo_7_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_7_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_7_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_7_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_7_1280_2x.jpg",alt:"Opera dancer"},{id:8,src:"src/images/about_us/our_photos/our_photo_8_1280_1x.jpg",image_360_1x:"src/images/about_us/our_photos/our_photo_8_360_1x.jpg",image_360_2x:"src/images/about_us/our_photos/our_photo_8_360_2x.jpg",image_1280_1x:"src/images/about_us/our_photos/our_photo_8_1280_1x.jpg",image_1280_2x:"src/images/about_us/our_photos/our_photo_8_1280_2x.jpg",alt:"Opera dancer"}],teacersPageGallery:[{id:1,src:"src/images/teachers/photo/photo_1_1280_1x.jpg",image_360_1x:"src/images/teachers/photo/photo_1_360_1x.jpg",image_360_2x:"src/images/teachers/photo/photo_1_360_2x.jpg",image_1280_1x:"src/images/teachers/photo/photo_1_1280_1x.jpg",image_1280_2x:"src/images/teachers/photo/photo_1_1280_2x.jpg",alt:"Opera dancer"},{id:2,src:"src/images/teachers/photo/photo_2_1280_1x.png",image_360_1x:"src/images/teachers/photo/photo_2_360_1x.png",image_360_2x:"src/images/teachers/photo/photo_2_360_2x.png",image_1280_1x:"src/images/teachers/photo/photo_2_1280_1x.jpg",image_1280_2x:"src/images/teachers/photo/photo_2_1280_2x.jpg",alt:"Opera dancer"},{id:3,src:"src/images/teachers/photo/photo_3_1280_1x.jpg",image_360_1x:"src/images/teachers/photo/photo_3_360_1x.jpg",image_360_2x:"src/images/teachers/photo/photo_3_360_2x.jpg",image_1280_1x:"src/images/teachers/photo/photo_3_1280_1x.jpg",image_1280_2x:"src/images/teachers/photo/photo_3_1280_2x.jpg",alt:"Opera dancer"},{id:4,src:"src/images/teachers/photo/photo_4_1280_1x.jpg",image_360_1x:"src/images/teachers/photo/photo_4_360_1x.jpg",image_360_2x:"src/images/teachers/photo/photo_4_360_2x.jpg",image_1280_1x:"src/images/teachers/photo/photo_4_1280_1x.jpg",image_1280_2x:"src/images/teachers/photo/photo_4_1280_2x.jpg",alt:"Opera dancer"}]}}}]);
//# sourceMappingURL=860.41d2bc53.chunk.js.map