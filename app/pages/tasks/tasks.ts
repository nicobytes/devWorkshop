import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { TasksService } from '../../providers/tasks/tasks';
import { ITask } from '../../interfaces/task';

/*
  Generated class for the TasksPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tasks/tasks.html',
  providers: [ TasksService ]
})
export class TasksPage {

  tasks: ITask[] = [];

  constructor(
    private navCtrl: NavController,
    private tasksService: TasksService,
    private load: LoadingController,
    private alertController: AlertController
  ) {
    this.loadData();
  }

  create(){
     let prompt = this.alertController.create({
      title: 'New tAsk',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.tasksService.createTask({
              title: data.title,
              completed: false
            })
            .then(data => {
              this.tasks.unshift( data )
            })
          }
        }
      ]
    });
    prompt.present();
  }

  delete(task: ITask, index: number){
    this.tasksService.deleteTask(task.id)
    .then(data =>{
      this.tasks.splice(index,1);
    })
  }

  private loadData(){
    let load = this.load.create();
    load.present();
    this.tasksService.getTasks()
    .then(tasks => {
      this.tasks = tasks;
      load.dismiss();
    })
  }

}
