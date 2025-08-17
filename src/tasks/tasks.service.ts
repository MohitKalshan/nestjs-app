import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // Task[] is array of type 'Task'
  public getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task); // push to tasks array
    return task; // return the object as response
  }
  getTaskById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskById(id: string): void {
    // const idx = this.tasks.findIndex((task) => task.id === id);
    // this.tasks.splice(idx, 1);
    // or using filter
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
