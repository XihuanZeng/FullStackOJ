import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollaborationService } from '../../services/collaboration.service';
// this will handle the submission request
import { DataService } from '../../services/data.service';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  public languages: string[] = ['Java', 'Python'];
  language: string = 'Java';
  sessionId: string;
  // placeholder for the output of submission
  output: string;

  defaultContent = {
  	'Java': `public class Example {
  		public static void main(String[] args) {
  			// Type your Java code here.
  		}
  	}`,
  	'Python': `class Solution:
  	def example():
  		# Type your Python code here`
  };

  constructor(private collaboration: CollaborationService, 
    private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // use problem id as session id
    // since we subscribe the changes, every time the params changes
    // sessionId will be updated and the editor will be initilized
    this.route.params
    .subscribe(params => {
    this.sessionId = params['id'];
    this.initEditor();
    this.collaboration.restoreBuffer();
    });
  }

  initEditor(): void {
  	this.editor = ace.edit("editor");
  	this.editor.setTheme("ace/theme/eclipse");
  	this.resetEditor();
  	this.collaboration.init(this.editor, this.sessionId);

  	this.editor.lastAppliedChange = null;

    // this.editor.on is also part of API of our ace library
  	this.editor.on("change", (e) => {
  		console.log('editor is changing: ' + JSON.stringify(e));

  		if (this.editor.lastAppliedChange != e) {
  			this.collaboration.change(JSON.stringify(e));
  		}
    });
    
    // this part is not working as expected because this.editor.on is a API,
    // it only listen to several events, like 'change', go to the API reference for more information
    this.editor.on('userChange', (data: string[]) => {
      console.log('collaboration: user changes ' + data);
    })
  }

  resetEditor(): void {
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
  }

  setLanguage(language: string): void {
  	this.language = language;
  	this.resetEditor();
  }

  submit(): void {
  	let userCode = this.editor.getValue();
  	console.log(userCode);

    const data = {
      usercode: userCode,
      lang: this.language.toLocaleLowerCase()
    };

    this.dataService.buildAndRun(data).then(res => this.output = res);
  }


}
