import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  @Get('/:id')
  //Similar to @Body('title') to fetch value from body
  getTaskById(@Param('id') id: string): Task | undefined {
    // Task | undefined type because id is not defined,
    // declared : Task, which is incorrect if id is not found.
    return this.taskService.getTaskById(id);
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

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): void {
    return this.taskService.deleteTaskById(id);
  }
}
