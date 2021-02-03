import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { RunScriptsService } from './run-scripts.service';

@Component({
  selector: 'app-run-scripts',
  templateUrl: './run-scripts.component.html',
  styleUrls: ['./run-scripts.component.css']
})
export class RunScriptsComponent implements OnInit {

  public output:any
  public dict:Record<string, string>={'0':"list of bug ids",'1':"list of pcn ids",'2':"Query"}
  public dict2:Record<string, string>={'0':"Bug Customer Visibility Details Script",'1':"Pcn report script",'2':"Topic Search for Service Requests Script"}
  public input_disp:string=""
  public input:string=""
  public value:string=""
  public selection:string=""
  public title:string=""
  constructor(private runscriptsservice: RunScriptsService,private modalService:ModalService) { }

  ngOnInit() {
    
  }
  showDialog(id:string){
    this.input_disp=this.dict[id]
    this.title=this.dict2[id]
    this.selection=id
    let modal_t:any = document.getElementById('modal-default')
    modal_t.classList.remove('hide')
    modal_t.classList.add('show');
}
closeDialog() {
    let modal_t :any= document.getElementById('modal-default')
    modal_t.classList.remove('show')
    modal_t.classList.add('hide');
    this.value=""
}
runscript(inp:string){
  //this.input=inp;
  //this.runscriptsservice.getConfig(inp,'Blob').subscribe((data:any) =>{this.output=data;this.downloadFile();});
  if(this.selection=='0'){
  this.runscriptsservice.getConfig(inp,'arraybuffer','http://localhost:8000/api/test?p=').subscribe(data => this.downLoadFile(data, "application/vnd.ms-excel","report.xlsx"));
  }
  else if(this.selection=='1')
  {
    this.runscriptsservice.getConfig(inp,'arraybuffer','http://localhost:8000/api/pcn?p=').subscribe(data => this.downLoadFile(data, "application/vnd.openxmlformats-officedocument.presentationml.presentation","report.pptx"));

  }
  else if(this.selection=='2'){
    this.runscriptsservice.getConfig(inp,'arraybuffer','http://localhost:8000/api/topic?p=').subscribe(data => this.downLoadFile(data, "application/vnd.ms-excel","report.xlsx"));
  }
  
}
downLoadFile(data: any, type: string, name :string) {
  let blob = new Blob([data], { type: type});
  const file = new File([blob], name,{ type: type });

    
  let url = window.URL.createObjectURL(file);
  let pwa = window.open(url);
  if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
  }
}
  
  

}
