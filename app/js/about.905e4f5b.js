(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0de0":function(t,e,a){t.exports=a.p+"img/logo-smartlivery.49d598c4.png"},1626:function(t,e,a){},"17cc":function(t,e,a){"use strict";var i=a("a703"),r=a.n(i);r.a},"3fd1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-fade-transition",[i("v-flex",[i("v-slide-x-transition",{attrs:{"leave-absolute":""}},[i("v-container",{staticClass:"page-container registration-container",attrs:{fluid:"","fill-height":"","align-start":"","pa-0":""}},[t.demoVersion?i("demo-popup"):t._e(),i("v-app-bar",{staticClass:"page-app-bar registration-app-bar",class:{"navbar--hidden":t.navBarReduced},attrs:{app:"",height:"82px",color:"white",elevation:"1",top:""}},[i("img",{ref:"icon",staticClass:"back-icon",attrs:{src:a("8155"),alt:"Item Icon",width:"24",height:"24"},on:{click:t.closeRegistration}}),i("v-flex",{attrs:{"text-center":""}},[i("v-toolbar-title",{attrs:{"text-center":""}},[t._v(t._s(t.$t("Registrazione")))]),i("language-chooser-select"),i("cart-widget",{nativeOn:{click:function(e){return t.toggleCart(e)}}})],1)],1),i("v-content",{staticClass:"page-content"},[i("v-container",{staticClass:"inner-container align-start",attrs:{fluid:"","fill-height":"","pa-0":""}},[i("v-flex",[i("v-card",{staticClass:"invitation px-6",attrs:{elevation:"1"}},[i("v-card-title",{staticClass:"text-uppercase"},[t._v("Registro degli accessi")]),i("v-card-text",{staticClass:"text-left"},[t._v("    \n                                    Caro cliente, "),i("br"),t._v("\n                                    In ottemperanza delle norme emanate per contenere l'emergenza epidemiologica da COVID-19 ti chiediamo di registrarti"),i("br"),t._v("\n\n                                    Una semplice azione che puÃ² aiutare a prevenire la diffusione dei contagi. \n                                    Grazie Â ðð»\n                                ")])],1),i("v-form",{ref:"form",staticClass:"pt-4 px-12",model:{value:t.isFormValid,callback:function(e){t.isFormValid=e},expression:"isFormValid"}},[i("h3",{staticClass:"font-weight-bold text-center"},[t._v(" I tuoi dati: ")]),t._l(t.formFields,(function(e){return i("div",[e.special?t._e():i("v-text-field",{staticClass:"pt-2",attrs:{rules:[1!==e.pivot.required||t.required,"email"!=e.name||t.email,"fiscalcode"!=e.name||t.fiscalcode],label:t.$t(e.label)},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"field.value"}})],1)})),i("v-checkbox",{attrs:{rules:[function(t){return!!t||"Devi accettare le condizioni per poter registrarti"}],required:""},model:{value:t.user.privacy,callback:function(e){t.$set(t.user,"privacy",e)},expression:"user.privacy"}},[i("template",{staticClass:".d-flex",slot:"label"},[i("span",[t._v("  "+t._s("* "+t.$t("Ho letto ed accetto lâinformativa privacy ai sensi del GDPR 679/2016 e del D. Lgs. 196/2003 e successive modifiche"))+" "),i("a",{staticClass:"blue--text text--darken-1",on:{click:function(e){return t.showAccessPrivacy(e)}}},[t._v(" "+t._s("("+t.$t("visualizza informativa")+")"))])])])],2),i("v-checkbox",{attrs:{label:""},model:{value:t.user.marketing,callback:function(e){t.$set(t.user,"marketing",e)},expression:"user.marketing"}},[i("template",{staticClass:".d-flex",slot:"label"},[i("span",[t._v(t._s(t.$t("Acconsento a ricevere informazioni con sconti e offerte da parte del ristorante o azienda partner di Dishcovery, in cui sto effettuando lâordine"))),i("a",{staticClass:"blue--text text--darken-1",on:{click:function(e){return t.showPrivacy(e)}}},[t._v(" (privacy policy)")])])])],2),i("div",{staticClass:"d-flex justify-space-between"},[i("v-btn",{attrs:{disabled:t.waitingForServer},on:{click:t.reset}},[t._v("\n                                    Pulisci\n                                    ")]),i("v-btn",{attrs:{disabled:!t.isFormValid||t.waitingForServer,color:"success"},on:{click:t.validate}},[t._v("\n                                    Registrati\n                                    ")])],1)],2)],1)],1)],1),i("registration-popup",{attrs:{showDialog:t.showRegistrationPopup},on:{close:t.closeRegistrationPopup}})],1)],1),i("access-privacy-popup",{attrs:{showDialog:t.showAccessPrivacyPopup},on:{close:t.closeAccessPrivacyPopup}}),i("privacy-popup",{attrs:{showDialog:t.showPrivacyPopup},on:{close:t.closePrivacyPopup}})],1)],1)},r=[],o=a("2f62"),n=a("7fca"),s=(a("47cf"),a("7da6")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"justify-center":""}},[a("v-dialog",{attrs:{"content-class":"registration-popup",absolute:"",persistent:"","max-width":"290"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("v-icon",[t._v("mdi-check")])],1),a("v-card-text",[t._v("Grazie di aver inserito i tuoi dati. Prossimi step?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.closePopup(!1)}}},[t._v("\n          Nuova registrazione\n          ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.closePopup(!0)}}},[t._v("\n          Vai ai menÃ¹\n          ")])],1)],1)],1)],1)},l=[];function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f={props:["showDialog"],data:function(){return{}},computed:p({},Object(o["e"])("app",{appCurrentLanguage:function(t){return t.currentLanguage}})),methods:{closePopup:function(t){t?(this.saveUser(),this.$emit("close",1)):(this.saveUser(),this.$emit("close",0))},saveUser:function(){console.log("registro utente")}},created:function(){}},v=f,h=(a("4a93"),a("2877")),g=a("6544"),b=a.n(g),m=a("8336"),y=a("b0af"),w=a("99d9"),O=a("169a"),C=a("132d"),P=a("0fd9"),j=a("2fa4"),_=Object(h["a"])(v,c,l,!1,null,"3425f9ac",null),x=_.exports;b()(_,{VBtn:m["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VDialog:O["a"],VIcon:C["a"],VRow:P["a"],VSpacer:j["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-dialog",{attrs:{"content-class":"privacy-popup",scrollable:"",absolute:"",persistent:""},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline d-flex align-start justify-space-between popup-card-title"},[a("span",{staticClass:"popup-title"},[t._v(t._s(t.$t("Informativa trattamento dati")))]),a("v-btn",{staticClass:"elevation-0 btn-close",attrs:{color:"black",fab:"",small:"",dark:""},on:{click:function(e){return t.closePopup()}}},[a("v-icon",[t._v("mdi-window-close")])],1)],1),a("v-card-text",{staticClass:"pb-0 pt-4 ma-0 px-4"},[a("div",{staticClass:"d-block pb-4 text-start"},[a("p",[a("span",[a("b",[t._v("INFORMATIVA EX ARTT. 13 - 14 REG. UE N. 679/2016 "),a("br"),t._v(' \n                        PER IL TRATTAMENTO DEI DATI PERSONALI DEI CLIENTI NEL C.D. "REGISTRO PRESENZE"\n                        ')])])]),a("ol",[a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Oggetto del trattamento")])]),a("p",[t._v("Il titolare, per affrontare l'emergenza sanitaria in corso e la gestione dei rapporti con Lei in corso, tratta i Suoi dati personali, identificativi, di contatto (ad esempio: nome, cognome, telefono);")])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("FinalitÃ  del trattamento a base giuridica")])]),a("p",[t._v('I Suoi dati perosnali non particolari sono trattati esclusivamente per le finalitÃ  di conservazione nel c.d. "elenco presenze" istituito dalle "Linee di indirizzo per la riapertura delle AttivitÃ  Economiche, Produttive e Ricreative" approvate dalla Conferenza Stato-Regioni e dalle Linee Guida della Regione.')])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Base giuridica")])]),a("p",[t._v("I Suoi dati personali, identificativi e di contatto, sono trattati senza il Suo consenso ad adempiere un obbligo legale al quale Ã¨ soggetto il titolare (art. 6, par. 1, lett. c Reg. UE 679/2016) nonchÃ© necessario per la salvaguardia degli interessi vitali dell'interessato o di un'altra persona fisica (art.6, par. 1, lett. d Reg UE 679/2016), in ottemperanza dei citati provvedimenti normativi")])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Natura del conferimento dei dati e conseguenze del rifiuto di rispondere")])]),a("p",[t._v("Il conferimento dei dati per le finalitÃ  di cui al punto "),a("b",[t._v("2.a)")]),t._v(" Ã¨ obbligatorio e non necessita di consenso. In assenza di tali dati il titolare potrebbe non garantirLe la prenotazione/erogazione del servizio.")])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Accesso ai dati")])]),a("p",[t._v("I Suoi dati potranno essere resi accessibili per le finalitÃ  di cui al punto 2: ai dipendenti e collaboratori del Titolare nelle loro qualitÃ  di incaricati del trattamento o ad altri soggetti che svolgono tale attivitÃ  per conto del Titolare nella loro qualitÃ  di reponsabili esterni del trattamento.")])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Comunicazione di dati")])]),a("p",[t._v("I dati non saranno nÃ© diffusi nÃ© comunicati a terzi al di fuori delle specifiche previsioni normative (es. in caso di richiesta da parte dell'AutoritÃ  sanitaria, anche per la ricostruzione della filiare degli eventuali contatti stretti di un lavoratore risultato positivo al COVID-19, protezione civile ecc.). I Suoi dati non saranno diffusi.")])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Trasferimento di dati")])]),a("p",[t._v("I Suoi dati non saranno trasferiti al di fuori dell'Unione Europea")])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Conservazione dei dati")])]),a("p",[t._v("In caso di prenotazione, i Suoi dati identificativi e di contatto verranno conservati per 14 giorni cosÃ¬ come previsto dalle normative richiamate.")])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Diritti dell'interessato")])]),a("p",[t._v("Ai sensi degli articoli da 15 a 22 del Reg. UE n. 679/2016, all'interessato Ã¨ conferita la possibilitÃ  di esercitare specifici diritti. In particolare, l'interessato ha diritto a: a) ottenere la conferma dell'esistenza di trattamenti di dati personali che lo riguardano e, in tal caso, l'accesso a tali dati; b) ottenere la rettifica dei dati personali inesatti e l'integrazione dei dati personali incompleti; c) ottenere la cancellazione dei dati personali che lo riguardano, nei casi in cui ciÃ² sia consentito dal Regolamento; d) la limitazione del trattamento, nelle ipotesi previste dal Regolamento; e) ottenere la comunicazione, ai destinatari cui siano stati trasmessi i dati personali, delle richieste di rettifica/cancellazione dei dati personali e di limitazione del trattamento pervenute dall'Interessato, salvo che ciÃ² si riveli impossibile o implichi uno sforzo sproporzionato; f) ricevere, in un formato, strutturato, di uso comune e leggibile da dispositivo automatico, dei dati personali forniti al Titolare, nonchÃ© la trasmissione degli stessi a un altro titolare del trattamento, e ciÃ² in qualsiasi momento, anche alla cessazione dei rapporti eventualmente intrattenuti col Titolare; g) opporsi in qualsiasi momento, per motivi connessi alla sua situazione particolare, al trattamento dei dati personali che lo riguardano ai sensi dell'articolo 6, paragrafo 1, lettere e) o f), compresa la profilazione sulla base di tali disposizioni. Qualora i dati personali siano trattati per finalitÃ  di marketing diretto, l'interessato ha il diritto di opporsi in qualsiasi momento al trattamento dei dati personali che lo riguardano effettuato per tali finalitÃ , compresa la profilazione nella misura in cui sia connessa a tale marketing diretto; h) non essere sottoposto a una decisione basata unicamente sul trattamento automatizzato, compresa la profilazione, che produca effetti giuridici che lo riguardano o che incida in modo analogo significativamente sulla sua persona; i) proporre reclamo a un'autoritÃ  di controllo ai sensi dell'art. 77. PuÃ² esercitare i Suoi diritti scrivendo all'indirizzo mail del Titolare. ")])]),a("li",[a("p",{staticClass:"mb-0"},[a("b",[t._v("Responsabili esteni e incaricati")])]),a("p",[t._v("L'elenco aggiornato dei responsabili esterni e degli incaricati al trattamento Ã¨ custodito presso la sede legale del Titolare del trattamento.")])])]),a("p",{staticStyle:{"text-align":"right"}},[a("i",[t._v("La presente informativa Ã¨ aggiornata alla data del 21/05/2020")])]),a("hr",{staticStyle:{margin:"20px 5px"}}),a("p",[a("i",[t._v("Il presente documento Ã¨ stato redatto in data 21/05/2020 a mero titolo esemplificativo. Variazioni normative o provvedimenti interpretativi del Garante potrebbero rendere non piÃ¹ attuale il contenuto dello stesso. Il rilascio dell'informativa non solleva il Titolare dal rispetto di tutti gli altri adempimenti imposti dal Reg. UE n. 679/2016 (GDPR), specialmente qualora vengano adottate procedure per il rilevamento della temperatura dei clienti (il cui trattamento non Ã¨ stato preso in considerazione in questo esempio).")])])])]),a("v-card-actions",{staticClass:"pt-4 px-4 popup-card-actions"},[a("v-btn",{staticClass:"button-send d-flex col-12 mt-0 mb-4",attrs:{elevation:"0",dark:"",color:"black"},on:{click:function(e){return t.closePopup()}}},[a("span",{staticClass:"title"},[t._v(t._s(t.$t("Chiudi")))])])],1)],1)],1)],1)},k=[];function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?S(Object(a),!0).forEach((function(e){z(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function z(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var E={props:["showDialog"],data:function(){return{}},computed:D({},Object(o["e"])("app",{appCurrentLanguage:function(t){return t.currentLanguage}}),{},Object(o["e"])("restaurant",["name"])),methods:{closePopup:function(){this.$emit("close")}},created:function(){}},R=E,$=(a("d6a0"),a("e996"),a("a722")),L=Object(h["a"])(R,V,k,!1,null,"d79f3c68",null),T=L.exports;b()(L,{VBtn:m["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VDialog:O["a"],VIcon:C["a"],VLayout:$["a"]});var I=a("bb1d"),A=a("afbd"),B=(a("2ef0"),a("88c3")),N=a("7765");function F(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function M(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?F(Object(a),!0).forEach((function(e){q(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function q(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var U={components:{LanguageChooserSelect:n["a"],DemoPopup:N["a"],CartWidget:s["a"],RegistrationPopup:x,AccessPrivacyPopup:T,PrivacyPopup:I["a"]},props:{hash:String},data:function(){return{waitingForServer:!1,fullscreen:!1,showRegistrationPopup:!1,showPrivacyPopup:!1,showAccessPrivacyPopup:!1,isFormValid:!1,user:{privacy:!1,marketing:!1},required:function(t){return!!t||B["a"].t("Campo obbligatorio")},email:function(t){if(""===t)return!0;var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||B["a"].t("Email non valida")},fiscalcode:function(t){if(""===t)return!0;var e=/^(?:[A-Z][AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i;return e.test(t)||B["a"].t("Codice fiscale non valido")}}},computed:M({},Object(o["e"])("app",{appCurrentLanguage:function(t){return t.currentLanguage}}),{},Object(o["e"])("app",["navBarReduced","splashShown","showSnackbarErrorMessage","demoVersion"]),{},Object(o["e"])("registration",["formFields"])),created:function(){this.formFields.forEach((function(t){switch(t.value="",t.name){case"fullname":t.label="Nome e cognome";break;case"email":t.label="E-mail";break;case"address":t.label="Indirizzo";break;case"fiscalcode":t.label="Codice Fiscale";break;case"phone":t.label="Recapito";break;default:t.label=t.name;break}}))},methods:M({},Object(o["b"])("registration",["storeRegistration"]),{},Object(o["b"])("app",["showSnackbarErrorMessage"]),{closeRegistration:function(){this.$router.go(-1)},toggleCart:function(){this.$router.replace({name:"cart",params:{hash:this.hash}}),Object(A["a"])(this.$ga,"viewOrder")},validate:function(){var t=this;if(this.$refs.form.validate(),this.isFormValid){this.waitingForServer=!0;var e=!0,a=!1,i=void 0;try{for(var r,o=this.formFields[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var n=r.value;n.special||(this.user[n.id]=n.value)}}catch(s){a=!0,i=s}finally{try{e||null==o.return||o.return()}finally{if(a)throw i}}console.log(this.user),this.storeRegistration({hash:this.hash,contact:this.user}).then((function(e){var a=new Date;a.setTime(a.getTime()+108e5);var i={value:"1",expires:a};localStorage.setItem("regDone",JSON.stringify(i)),t.$store.commit("registration/setRegDone",!0),t.showRegistrationPopup=!0})).catch((function(e){t.showRegistrationPopup=!1,t.showSnackbarErrorMessage("Errore invio registrazione: "+e)})).finally((function(){t.waitingForServer=!1}))}},reset:function(){this.$refs.form.reset()},closeRegistrationPopup:function(t){this.showRegistrationPopup=!1,t?(this.$refs.form.reset(),this.$router.push({name:"restaurant",params:{hash:this.hash}})):this.$refs.form.reset()},showPrivacy:function(t){t.preventDefault(),t.stopPropagation(),this.showPrivacyPopup=!0},closePrivacyPopup:function(){this.showPrivacyPopup=!1},showAccessPrivacy:function(t){t.preventDefault(),t.stopPropagation(),this.showAccessPrivacyPopup=!0},closeAccessPrivacyPopup:function(){this.showAccessPrivacyPopup=!1}}),mounted:function(){this.splashShown||this.$router.push({name:"restaurant",params:{hash:this.hash}})}},G=U,Z=(a("17cc"),a("40dc")),H=a("ac7c"),X=a("a523"),J=a("a75b"),Q=a("0789"),W=a("0e8f"),K=a("58df"),Y=a("7e2b"),tt=a("3206");function et(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function at(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?et(Object(a),!0).forEach((function(e){it(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):et(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function it(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var rt=Object(K["a"])(Y["a"],Object(tt["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:at({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),ot=a("8654"),nt=a("2a7f"),st=Object(h["a"])(G,i,r,!1,null,"1a9661de",null);e["default"]=st.exports;b()(st,{VAppBar:Z["a"],VBtn:m["a"],VCard:y["a"],VCardText:w["b"],VCardTitle:w["c"],VCheckbox:H["a"],VContainer:X["a"],VContent:J["a"],VFadeTransition:Q["c"],VFlex:W["a"],VForm:rt,VSlideXTransition:Q["e"],VTextField:ot["a"],VToolbarTitle:nt["a"]})},"4a81":function(t,e,a){},"4a93":function(t,e,a){"use strict";var i=a("1626"),r=a.n(i);r.a},"52e6":function(t,e,a){},"6ccb":function(t,e,a){t.exports=a.p+"img/logo-diapason.fef5c060.png"},"9f15":function(t,e,a){"use strict";var i=a("e871"),r=a.n(i);r.a},a297:function(t,e,a){},a703:function(t,e,a){},b096:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-x-reverse-transition",mode:"out-in","leave-absolute":""}},[i("v-container",{directives:[{name:"touch",rawName:"v-touch",value:{right:function(){return t.closeCredits()}},expression:"{ right: () => closeCredits() }"}],staticClass:"page-container about-container",attrs:{fluid:"","fill-height":"","align-start":"","pa-0":""}},[i("v-app-bar",{staticClass:"page-app-bar about-app-bar",class:{"navbar--hidden":t.navBarReduced},attrs:{app:"",height:"82px",color:"white",elevation:"1",top:""}},[i("img",{ref:"icon",staticClass:"back-icon",attrs:{src:a("8155"),alt:"Item Icon",width:"24",height:"24"},on:{click:t.closeCredits}}),i("v-flex",{attrs:{"text-center":""}},[i("v-fade-transition",[i("v-toolbar-title",{staticStyle:{"max-width":"50%",margin:"0 auto"},attrs:{"text-center":"","text-truncate":""}},[t._v(t._s(t.$t("Credits")))])],1),i("language-chooser-select"),i("cart-widget",{nativeOn:{click:function(e){return t.toggleCart(e)}}})],1)],1),i("v-content",{staticClass:"page-content about-content"},[i("v-fade-transition",[i("v-container",{staticClass:"inner-container",attrs:{fluid:"","pa-0":""}},[i("v-sheet",{staticClass:"text-center my-6",attrs:{tile:""}},[i("v-img",{staticClass:"d-inline-block",attrs:{alt:"logo-dishcovery",title:"Dishcovery Logo",src:a("9b19"),width:"150",height:"150","aspect-ratio":"1",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"yellow"}})],1)]},proxy:!0}])}),i("div",{staticClass:"credits-box credits-box-dishcovery mt-2"},[i("p",{staticClass:"payoff"},[t._v("MenÃ¹ digitali multilingua e multimediali")]),i("a",{attrs:{href:"https://dishcovery.menu/",target:"_blank"}},[t._v("https://dishcovery.menu/")])])],1),i("v-divider",{staticClass:"mx-4"}),i("v-sheet",{staticClass:"text-center my-6",attrs:{tile:""}},[i("p",{staticClass:"madewithlove mb-0"},[t._v("DEVELOPED with "),i("i",{staticClass:"far fa-heart"}),t._v(" by")]),i("v-img",{staticClass:"d-inline-block",attrs:{alt:"logo-diapason",title:"Diapason Logo",src:a("6ccb"),width:"100",height:"100","aspect-ratio":"1",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"yellow"}})],1)]},proxy:!0}])}),i("div",{staticClass:"credits-box credits-box-dishcovery mt-0 d-block"},[i("p",{staticClass:"payoff"},[t._v("Sviluppo creativo e "),i("br"),t._v("strategie digitali")]),i("a",{attrs:{href:"https://diapason.digital/",target:"_blank"}},[t._v("https://diapason.digital/")])])],1),i("v-divider",{staticClass:"mx-4"}),i("v-sheet",{staticClass:"text-center mt-6 mb-6",attrs:{tile:""}},[i("p",{staticClass:"madewithlove"},[t._v("Design by")]),i("v-img",{staticClass:"d-inline-block",attrs:{alt:"logo-diapason",title:"UX Boutique Logo",src:a("bf03"),width:"100",height:"17",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"yellow"}})],1)]},proxy:!0}])}),i("div",{staticClass:"credits-box credits-box-dishcovery mt-2 d-block"},[i("p",{staticClass:"payoff"},[t._v("User Experience Boutique")]),i("a",{attrs:{href:"https://userexperience.boutique/",target:"_blank"}},[t._v("https://userexperience.boutique/")])])],1),i("v-divider",{staticClass:"mx-4"}),i("v-sheet",{staticClass:"text-center mt-6 mb-12",attrs:{tile:""}},[i("p",{staticClass:"madewithlove mb-2"},[t._v("Partner")]),i("v-img",{staticClass:"d-inline-block",attrs:{alt:"logo-diapason",title:"UX Boutique Logo",src:a("0de0"),width:"100",height:"55",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"yellow"}})],1)]},proxy:!0}])}),i("div",{staticClass:"credits-box credits-box-dishcovery mt-2 d-block"},[i("a",{attrs:{href:"https://www.smartlivery.it/",target:"_blank"}},[t._v("https://www.smartlivery.it/")])])],1)],1)],1)],1)],1)],1)},r=[],o=a("2f62"),n=a("7fca"),s=(a("47cf"),a("7da6")),c=(a("0e25"),a("7a86"),a("afbd"));function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={components:{LanguageChooserSelect:n["a"],CartWidget:s["a"]},props:{hash:String},data:function(){return{}},computed:u({},Object(o["e"])("app",{appCurrentLanguage:function(t){return t.currentLanguage}}),{},Object(o["e"])("restaurant",["description","image","name","logo"]),{},Object(o["e"])("cart",["aboutsCount"]),{},Object(o["e"])("app",["navBarReduced","splashShown"])),methods:{closeCredits:function(){this.$router.go(-1)},toggleCart:function(){this.$router.replace({name:"cart",params:{hash:this.hash}}),Object(c["a"])(this.$ga,"viewOrder")}},mounted:function(){this.splashShown||this.$router.push({name:"restaurant",params:{hash:this.hash}}),Object(c["a"])(this.$ga,"page","credits")}},f=d,v=(a("ba47"),a("2877")),h=a("6544"),g=a.n(h),b=a("40dc"),m=a("a523"),y=a("a75b"),w=a("ce7e"),O=a("0789"),C=a("0e8f"),P=a("adda"),j=a("490a"),_=a("0fd9"),x=a("8dd9"),V=a("2a7f"),k=Object(v["a"])(f,i,r,!1,null,"510f6d5a",null);e["default"]=k.exports;g()(k,{VAppBar:b["a"],VContainer:m["a"],VContent:y["a"],VDivider:w["a"],VFadeTransition:O["c"],VFlex:C["a"],VImg:P["a"],VProgressCircular:j["a"],VRow:_["a"],VSheet:x["a"],VToolbarTitle:V["a"]})},ba47:function(t,e,a){"use strict";var i=a("4a81"),r=a.n(i);r.a},bf03:function(t,e,a){t.exports=a.p+"img/logo-ux-boutique.e994a262.png"},d6a0:function(t,e,a){"use strict";var i=a("52e6"),r=a.n(i);r.a},e871:function(t,e,a){},e996:function(t,e,a){"use strict";var i=a("a297"),r=a.n(i);r.a},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-x-reverse-transition",mode:"out-in","leave-absolute":""}},[i("v-container",{directives:[{name:"touch",rawName:"v-touch",value:{right:function(){return t.closeAbout()}},expression:"{ right: () => closeAbout() }"}],staticClass:"page-container about-container",attrs:{fluid:"","fill-height":"","align-start":"","pa-0":""}},[i("v-app-bar",{staticClass:"page-app-bar about-app-bar",class:{"navbar--hidden":t.navBarReduced},attrs:{app:"",height:"82px",color:"white",elevation:"1",top:""}},[i("img",{ref:"icon",staticClass:"back-icon",attrs:{src:a("8155"),alt:"Item Icon",width:"24",height:"24"},on:{click:t.closeAbout}}),i("v-flex",{attrs:{"text-center":""}},[i("v-fade-transition",[t.name?i("v-toolbar-title",{staticStyle:{"max-width":"50%",margin:"0 auto"},attrs:{"text-center":"","text-truncate":""}},[t._v(t._s(t.name))]):t._e()],1),i("language-chooser-select"),i("cart-widget",{nativeOn:{click:function(e){return t.toggleCart(e)}}})],1)],1),i("v-content",{staticClass:"page-content about-content"},[i("v-fade-transition",[i("v-container",{staticClass:"inner-container",attrs:{fluid:"","fill-height":"","pa-0":""}},[i("v-flex",{attrs:{"justify-start":"","align-start":"","flex-direction":"column"}},[t.logo?i("v-sheet",{staticClass:"restaurant-logo-container",attrs:{tile:""}},[i("v-img",{staticClass:"d-inline-block logo-image",attrs:{src:t.logo,width:"260","aspect-ratio":260/70,contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"yellow"}})],1)]},proxy:!0}],null,!1,2631675555)})],1):t._e(),t.image?i("v-sheet",{staticClass:"pa-0 restaurant-image-sheet"},[i("v-img",{staticClass:"restaurant-image",attrs:{src:t.image,width:"100%","aspect-ratio":1.5,cover:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"yellow"}})],1)]},proxy:!0}],null,!1,2631675555)})],1):t._e(),i("v-sheet",{staticClass:"pa-6 pb-9 text-start"},[i("span",{staticClass:"restaurant-description",domProps:{innerHTML:t._s(t.description)}})])],1)],1)],1)],1)],1)],1)},r=[],o=a("2f62"),n=a("7fca"),s=(a("47cf"),a("7da6")),c=(a("0e25"),a("7a86"),a("afbd"));function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={components:{LanguageChooserSelect:n["a"],CartWidget:s["a"]},props:{hash:String},data:function(){return{}},computed:u({},Object(o["e"])("app",{appCurrentLanguage:function(t){return t.currentLanguage}}),{},Object(o["e"])("restaurant",["description","image","name","logo"]),{},Object(o["e"])("cart",["aboutsCount"]),{},Object(o["e"])("app",["navBarReduced","splashShown"])),methods:{closeAbout:function(){this.$router.go(-1)},toggleCart:function(){this.$router.replace({name:"cart",params:{hash:this.hash}}),Object(c["a"])(this.$ga,"viewOrder")}},mounted:function(){this.splashShown||this.$router.push({name:"restaurant",params:{hash:this.hash}}),Object(c["a"])(this.$ga,"page","welcome")}},f=d,v=(a("9f15"),a("2877")),h=a("6544"),g=a.n(h),b=a("40dc"),m=a("a523"),y=a("a75b"),w=a("0789"),O=a("0e8f"),C=a("adda"),P=a("490a"),j=a("0fd9"),_=a("8dd9"),x=a("2a7f"),V=Object(v["a"])(f,i,r,!1,null,"62d611de",null);e["default"]=V.exports;g()(V,{VAppBar:b["a"],VContainer:m["a"],VContent:y["a"],VFadeTransition:w["c"],VFlex:O["a"],VImg:C["a"],VProgressCircular:P["a"],VRow:j["a"],VSheet:_["a"],VToolbarTitle:x["a"]})}}]);
