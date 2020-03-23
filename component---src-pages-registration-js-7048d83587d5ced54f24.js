(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{K2Fk:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=a("TJpk"),c=a("FqMQ"),i=a("Bl7J"),m=a("vrFN");t.default=function(){return l.a.createElement(i.a,null,l.a.createElement(m.a,{title:"registration"}),l.a.createElement(o.Helmet,{script:[{type:"text/javascript",src:"js/prism.js"},{type:"text/javascript",src:"js/prism-line-highlight.js"}]}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12"},l.a.createElement("h1",{className:"header center "+c.a+"-text"},"Registration"),l.a.createElement("h3",{className:"header center light"},"Create a JSON File and submit it via a GitHub Pull Request"),l.a.createElement("p",null,"To register for JSCraftCamp you have to add a json file with your name and some other information to our"," ",l.a.createElement("a",{href:"https://github.com/jscraftcamp/website",rel:"noreferrer noopener",target:"_blank"},"GitHub Repository")," ","via a"," ",l.a.createElement("a",{href:"http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request",rel:"noreferrer noopener",target:"_blank"},"Pull Request"),". Registration is free of charge. Your json file should follow the naming scheme ",l.a.createElement("code",null,"$firstname_$lastname.json")," and must be placed in the folder ",l.a.createElement("code",null,"participants"),". The structure of the file is described below."),l.a.createElement("p",null,"To test if your json file is a valid registration you can run"," ",l.a.createElement("code",null,"npm test")," (more details about this are in the"," ",l.a.createElement("a",{href:"https://github.com/jscraftcamp/website/blob/master/README.md",rel:"noreferrer noopener",target:"_blank"},"README"),"). Invalid registrations will be rejected.",l.a.createElement("br",null),"If you need any help with registration, don't hesitate to contact one of ",l.a.createElement("a",{href:"./theteam"},"the team"),"."),l.a.createElement("p",null,"Out of these files a page with information about"," ",l.a.createElement(r.Link,{to:"/participants"},"all participants")," will be generated."),l.a.createElement("p",null),l.a.createElement("p",null,"To unregister please write another pull request or"," ",l.a.createElement("a",{href:"mailto:team@jscraftcamp.org"},"let us know"),".")),l.a.createElement("div",{className:"col s12 m12"},l.a.createElement("h4",{className:"header center colorOfTheYear-text"},"The JSON Format")),l.a.createElement("div",{className:"col s12 m12"},l.a.createElement("pre",{className:"card-panel language-json",style:{background:"white"}},l.a.createElement("code",{className:"language-json",dangerouslySetInnerHTML:{__html:'\n{\n    "name": "Your real name (OR a nickname)",\n    "company": "optionally, your company name",\n    "when": {\n    "friday": true,\n    "friday_party": true,\n    "saturday": true\n},\n    "tags": ["any", "tag", "you like"],\n    "vegan": true/false,\n    "vegetarian": true/false,\n    "allergies": "...",\n    "what_is_my_connection_to_javascript": "Say something about you and JS ...",\n    "what_can_i_contribute": "How can you contribute to the event? If you don\'t know yet, feel free to give it some thought ...",\n    "tshirt": "W-S",\n    "twitter": "handle"\n}\n'}}))),l.a.createElement("div",{className:"col s12 m12",style:{background:"white"}},l.a.createElement("table",{className:"bordered"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"name"),"*"),l.a.createElement("td",null,"first name and last name or a nick name")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"company")),l.a.createElement("td",null,"A company name")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"when.friday"),"*"),l.a.createElement("td",null,"If you are attending on Friday (Boolean value)")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"when.friday_party"),"*"),l.a.createElement("td",null,"If you want to join us on the free Party that will happen Friday after the event (same location). Drinks and food sponsored!")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"when.saturday"),"*"),l.a.createElement("td",null,"If you are attending on Saturday (Boolean value)")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"tags"),"*"),l.a.createElement("td",null,"Share what you think is important, use at least one tag. (Array of strings)")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"vegan"),"*"),l.a.createElement("td",null,"Let us know if you are a vegan** (Boolean value)")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"vegetarian"),"*"),l.a.createElement("td",null,"Let us know if you are a vegetarian** (Boolean value)")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"allergies")),l.a.createElement("td",null,"Tell us if you have any special dietary requirements**")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"what_is_my_connection_to_javascript"),"*"),l.a.createElement("td",null," ","2-5 sentences about your experience with JavaScript or related technologies.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"what_can_i_contribute")),l.a.createElement("td",null,"1-3 sentences about what you would like to contribute to the BarCamp.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"tshirt")),l.a.createElement("td",null,"We will have a limited number of t-shirts with the event and sponsor logos. If you want one: fit (W=women, M=Man) and size (S,M,L,XL), e.g. W-S or M-XL. If your rregistration is shortly before the event there might be no time to have a T-Shirt produced for you, please be aware.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"twitter")),l.a.createElement("td",null,"Your Twitter handle without the leading ",l.a.createElement("code",null,"@"),"."))),l.a.createElement("p",null,"*: mandatory field"),l.a.createElement("p",null,"**: This is a free and completely sponsored event. Even though we want to try, we can not guarantee to be able to respect every dietary requirement")))))}}}]);
//# sourceMappingURL=component---src-pages-registration-js-7048d83587d5ced54f24.js.map