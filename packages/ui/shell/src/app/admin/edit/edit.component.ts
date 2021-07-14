import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ShellService } from 'src/app/services/shell.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(
    private router: Router,
    private shellService: ShellService) { }

  ngOnInit(): void {
  }
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
          },
        },
        {
          type: 'input',
          key: 'remote',
          templateOptions: {
            label: 'Remote',
          }
        },
        {
          type: 'input',
          key: 'module',
          templateOptions: {
            label: 'Module',
          }
        },
        {
          type: 'input',
          key: 'path',
          templateOptions: {
            label: 'Path',
          }
        },
        {
          type: 'input',
          key: 'url',
          templateOptions: {
            label: 'Url',
          }
        },
      ],
    },
  ];

  submit() {
    this.shellService.saveModule(this.model).subscribe(()=>{
      this.router.navigate(['/admin/list'])
    })
  }

}
