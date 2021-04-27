export class Todo {
    id: number;
    title: string;
    completed: boolean;
    // optional?: string; - If you wanted to add an optional property, you'd need to add the "?" 
}

// This model will be importend and used in todos.component.ts