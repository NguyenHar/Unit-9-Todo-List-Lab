// To parse this data:
//
//   import { Convert } from "./file";
//
//   const employee = Convert.toEmployee(json);

export interface Employee {
    id:    number;
    name:  string;
    hours: number;
    title: string;
}

// Converts JSON strings to/from your types
export class ConvertEmployee {
    public static toEmployee(json: string): Employee[] {
        return JSON.parse(json);
    }

    public static employeeToJson(value: Employee[]): string {
        return JSON.stringify(value);
    }
}

// To parse this data:
//
//   import { Convert } from "./file";
//
//   const todos = Convert.toTodos(json);

export interface Todos {
    id:          number;
    name:        string;
    description: string;
    assignedTo:  number;
    isCompleted: boolean;
}

// Converts JSON strings to/from your types
export class ConvertTodos {
    public static toTodos(json: string): Todos[] {
        return JSON.parse(json);
    }

    public static todosToJson(value: Todos[]): string {
        return JSON.stringify(value);
    }
}
