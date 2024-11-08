export interface IntData {
    userId: number;
    id?: number;
    title: string;
    body: string;
    selected?: boolean; //solo front end (punto interrogativo per farla diventare opzionale)
}

export interface Task {
    name: string;
    completed: boolean;
    subtasks?: Task[];
}