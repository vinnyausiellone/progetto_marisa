export interface IntData {
    userId:number;
    id?: number;
    title:string;
    body: string;
    selected: boolean;   
}

export interface Task {
    name: string;
    completed: boolean;
    subtasks?: Task[];
  }