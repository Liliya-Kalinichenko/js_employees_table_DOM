function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}/* eslint-disable no-shadow */var n={name:"Name",position:"Position",office:"Office",age:"Age",salary:"Salary"},r=document.querySelector("body"),a=document.querySelector("tbody"),o=document.querySelector("tbody").children,i=document.querySelector("thead").children[0],c={sortedBy:"",order:1};r.insertAdjacentHTML("beforeend",'<form action="post" class="new-employee-form">\n  <label>\n    Name:\n    <input type="text" data-qa="name" name="name" required>\n  </label>\n  <label>\n    Position:\n    <input type="text" data-qa="position" name="position" required>\n  </label>\n  <label for="">Office:\n    <select data-qa="office" name="office">\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>\n    Age:\n    <input type="number" data-qa="age" name="age" required>\n  </label>\n  <label>\n    Salary:\n    <input type="number" data-qa="salary" name="salary" required>\n  </label>\n  <button type="submit">Save to table</button>\n</form>\n<div class="notification" data-qa="notification" hidden>\n  <p class="title"></p>\n</div>');var l=document.querySelector("form");function s(e,t,n){if(n.startsWith("$")){var r="$".concat(+e.value.toLocaleString("en-US"));t.innerText=r.length>2?r:n}else t.innerText=e.value.trim()||n}function d(e){return+e.slice(1).replaceAll(",","")}function u(e,t){var n=document.querySelector(".notification");n.classList.add(e),n.children[0].innerText=t,n.hidden=!1,setTimeout(function(){n.classList.remove(e),n.hidden=!0},3e3)}//# sourceMappingURL=index.293e7df7.js.map
a.addEventListener("click",function(e){var n=e.target.parentElement;t(o).forEach(function(e){e.classList=""}),n.classList.add("active")}),i.addEventListener("click",function(e){var r=t(i.children).indexOf(e.target);c.order=c.order>0?-1:1;var l=c.sortedBy===e.target.innerText?c.order:1,s=t(o).sort(function(t,a){var o=t.children[r].innerText,i=a.children[r].innerText;switch(e.target.innerText){case n.name:return c.sortedBy=n.name,o.localeCompare(i)*l;case n.position:return c.sortedBy=n.position,o.localeCompare(i)*l;case n.office:return c.sortedBy=n.office,o.localeCompare(i)*l;case n.age:return c.sortedBy=n.age,(+o-+i)*l;case n.salary:return c.sortedBy=n.salary,(d(o)-d(i))*l;default:return 0}});a.replaceChildren.apply(a,t(s))}),l.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(l),n=t.get("name"),r=t.get("position"),o=t.get("office"),i=t.get("age"),c=t.get("salary");if(n.length<4){u("error","Name can not be less than 4 characters");return}if(i<18||i>90){u("error","Please enter correct age");return}a.insertAdjacentHTML("beforeend","<tr>\n    <td>".concat(n,"</td>\n    <td>").concat(r,"</td>\n    <td>").concat(o,"</td>\n    <td>").concat(i,"</td>\n    <td>$").concat(parseFloat(c).toLocaleString("en-US"),"</td>\n  </tr>")),u("success","Employee was successfully added"),l.reset()}),a.addEventListener("dblclick",function(e){var t=e.target,n=t.innerText,r=document.createElement("input"),a=Number.isNaN(d(t.innerText))?"text":"number";r.classList.add("cell-input"),r.value=n,r.setAttribute("type",a),t.innerText="",t.append(r),r.focus(),r.addEventListener("blur",function(){s(r,t,n)}),r.addEventListener("keypress",function(e){"Enter"===e.key&&s(r,t,n)})});
//# sourceMappingURL=index.293e7df7.js.map
