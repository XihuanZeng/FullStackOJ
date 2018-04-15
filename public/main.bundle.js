webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
var new_problem_component_1 = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var editor_component_1 = __webpack_require__("./src/app/components/editor/editor.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                problem_detail_component_1.ProblemDetailComponent,
                new_problem_component_1.NewProblemComponent,
                editor_component_1.EditorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routes_1.routing
            ],
            providers: [
                data_service_1.DataService,
                collaboration_service_1.CollaborationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var new_problem_component_1 = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
// a list of objects
var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full' // exact match
    },
    {
        path: 'problems',
        component: problem_list_component_1.ProblemListComponent
    },
    {
        // handling random url 
        path: 'new',
        component: new_problem_component_1.NewProblemComponent,
        pathMatch: 'full' // exact match
    },
    {
        path: 'problems/:id',
        component: problem_detail_component_1.ProblemDetailComponent
    },
    {
        // handling random url 
        path: '**',
        redirectTo: 'problems'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen { \n  #editor { \n    height: 600px; \n  } \n \n  .lang-select { \n    width: 100px; \n    margin-right: 10px; \n  } \n \n  header .btn { \n    margin: 0 5px; \n  } \n \n  footer .btn { \n    margin: 0 5px; \n  } \n \n  .editor-footer, .editor-header { \n    margin: 10px 0; \n  } \n \n  .cursor { \n    /*position:absolute;*/ \n    background: rgba(0, 250, 0, 0.5); \n    z-index: 40; \n    width: 2px!important \n  } \n } "

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <header class=\"editor-header\">\n    <div class=\"row\">\n      <select class=\"form-control pull-left lang-select\" name=\"language\"\n        [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n      <option *ngFor=\"let language of languages\" [value]=\"language\">\n        {{language}}\n      </option>\n      </select>\n      <!--reset button -->\n      <!-- Button trigger modal -->\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n        Reset\n      </button>\n\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              You will lose current code in the editor, are you sure?\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n              (click)=\"resetEditor()\">Reset</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <div id=\"editor\">\n  </div><!-- This is the body --> \n  <div>\n    {{output}}\n  </div>\n  <footer class=\"editor-footer\">\n      <button type=\"button\" class=\"btn btn-success pull-right\" \n      (click)=\"submit()\">Submit Solution</button>\n  </footer>\n</section>"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
// this will handle the submission request
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route, dataService) {
        this.collaboration = collaboration;
        this.route = route;
        this.dataService = dataService;
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            'Java': "public class Example {\n  \t\tpublic static void main(String[] args) {\n  \t\t\t// Type your Java code here.\n  \t\t}\n  \t}",
            'Python': "class Solution:\n  \tdef example():\n  \t\t# Type your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // use problem id as session id
        // since we subscribe the changes, every time the params changes
        // sessionId will be updated and the editor will be initilized
        this.route.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
            _this.collaboration.restoreBuffer();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/eclipse");
        this.resetEditor();
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        // this.editor.on is also part of API of our ace library
        this.editor.on("change", function (e) {
            console.log('editor is changing: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
        // this part is not working as expected because this.editor.on is a API,
        // it only listen to several events, like 'change', go to the API reference for more information
        this.editor.on('userChange', function (data) {
            console.log('collaboration: user changes ' + data);
        });
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent[this.language]);
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        var userCode = this.editor.getValue();
        console.log(userCode);
        var data = {
            usercode: userCode,
            lang: this.language.toLocaleLowerCase()
        };
        this.dataService.buildAndRun(data).then(function (res) { return _this.output = res; });
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor',
            template: __webpack_require__("./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("./src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService,
            router_1.ActivatedRoute, data_service_1.DataService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- problem-list.component.html -->\n<div>\n    <form #formRef = \"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"problemName\">Problem name</label>\n        <input name = \"problemName\" id=\"problemName\" class=\"form-control\"\n          type=\"text\" required placeholder=\"Please enter problem name\" \n          [(ngModel)] = \"newProblem.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"problemDesc\">problem description</label>\n        <textarea name = \"problemDesc\" id=\"problemDesc\" class=\"form-control\"\n         placeholder=\"Please enter problem description\" \n          [(ngModel)] = \"newProblem.desc\" rows=\"3\">\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"problemDifficulty\">Difficulty</label> \n         <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\"\n         [(ngModel)] = \"newProblem.difficulty\">\n          <option *ngFor = \"let difficulty of difficulties\" [value] = \"difficulty\">\n            {{difficulty}}\n          </option>\n         </select>\n      </div>\n      <div class=\"row\">\n        <div class = \"col-md-12\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\"\n            (click) = \"addProblem()\"\n          > Add problem </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <br/>\n  <br/>"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem);
        // now you also have to change it back
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("./src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- problem-detail.component.html -->\n<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"col-sm-12 col-md-4\">\n    <div>\n      <h2>\n      {{problem.id}}.{{problem.name}}\n      </h2>\n      <p>\n          {{problem.desc}}\n      </p>\n    </div>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-editor></app-editor>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // always this.route.params.subscribe
        this.route.params.subscribe(function (params) {
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
            template: __webpack_require__("./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports) {

module.exports = ".difficulty {\n    min-width: 65px;\n    margin-right: 18px;\n    }\n    .label.difficulty {\n    padding-top: 0.6em;\n    color: #fbfdfa;\n    font-size: 12px;\n    }\n    .title {\n    font-size: 1.2em;\n    }\n    .diff-easy {\n    background-color: #42ebf4;\n    }\n    .diff-medium {\n    background-color: #92cf5c;\n    }\n    .diff-hard {\n    background-color: #dd0d1e;\n    }\n    .diff-super{\n    background-color: #8d16e2;\n    }"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-new-problem></app-new-problem>\n  <div class=\"list-group\">\n  <a class=\"list-group-item\" *ngFor=\"let problem of problems\"\n  [routerLink]=\"['/problems', problem.id]\">\n  <span class=\"{{'pull-left badge difficulty diff-' +\n  problem.difficulty.toLocaleLowerCase()}}\">\n  {{problem.difficulty}}\n  </span>\n  <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n  </a>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProblems.unsubscribe();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        // wait for 'message' event
        // when receive the message, for now just print the message
        // this.collaborationSocket.on("message", (message) => {
        //   console.log('message received from the server: ' + message);
        // })
        this.collaborationSocket.on("change", function (delta) {
            console.log('collaboration editor changes ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit("restoreBuffer");
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
//import { PROBLEMS } from "../mock-problem"
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this._problemSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.httpClient.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res);
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.httpClient.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post('api/v1/problems', problem, options)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.buildAndRun = function (data) {
        var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        // this will call API in Node, which will then forward to the Python flask build_and_run function
        return this.httpClient.post('api/v1/build_and_run', data, options)
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map