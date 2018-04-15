import { Injectable } from '@angular/core';

// this should be globalvar
declare var io: any;

@Injectable()
export class CollaborationService {
  collaborationSocket: any;
  constructor() { }

  init(editor: any, sessionId: string): void {
  	this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId});


    // wait for 'message' event
    // when receive the message, for now just print the message
    // this.collaborationSocket.on("message", (message) => {
    //   console.log('message received from the server: ' + message);
    // })
    this.collaborationSocket.on("change", (delta: string) => {
  		console.log('collaboration editor changes ' + delta);
  		delta = JSON.parse(delta);
  		editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });
  }
  change(delta: string): void {
  	this.collaborationSocket.emit("change", delta);
  }

  restoreBuffer(): void {
    this.collaborationSocket.emit("restoreBuffer");
  }
}
