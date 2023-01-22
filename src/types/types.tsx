export interface IWeek {
    day: string;
    lessons: ILesson[];
}

export interface ILesson {
    name: string;
    homeWork: string;
}

export interface IData {
    data: IWeek[];
}
