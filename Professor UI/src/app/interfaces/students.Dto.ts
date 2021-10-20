import { Guid } from "guid-typescript";

export interface StudentDto {
    StudentId:Guid;
    department: string;
    Fees: number;
    name: string;
    professorId: Guid;
    rollNumber: string;
}

export interface AddStudentDto {
    Name: string;
    RollNumber: string
    ProfessorId: Guid;
    Fees: number;
    Department: string;
}




export interface EditStudentDto {
    StudentId:Guid;
    Fees: number;
    name: string;
    professorId: Guid;
    rollNumber: string;
}
