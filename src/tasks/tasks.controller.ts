import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  //   taskService: TasksService;
  //   constructor(taskService: TasksService) {
  //     this.taskService = taskService;
  //   } this is commonly use in OOPs from constructor
  // this is shorted form in TS to access instance

  constructor(private taskService: TasksService) {}
  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  @Post()
  createTask(
    // @Body() Body, this is for the whole body as urlencoded format
    // @Body('title') title: string, // for particuler title value pass 'title' key in @Body()
    // @Body('description') description: string,
    @Body() createTaskDto: CreateTaskDto, // implement dto for params
  ) {
    console.log('request=>', createTaskDto);
    return this.taskService.createTask(createTaskDto);
  }
}
