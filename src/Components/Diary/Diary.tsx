import DairyItem from "./DairyItem";
import { FC } from "react";
import { IWeek } from "../../types/types";
import styled from "./Dairy.module.scss";

interface Data {
    data: IWeek[];
}

const Diary: FC<Data> = ({ data }) => {
    return (
        <div className="container">
            {data.map((lesson) => (
                <div>
                    <h1 className={styled.h1}>{lesson.day}</h1>
                    <DairyItem lesson={lesson} />
                </div>
            ))}
        </div>
    );
};

export default Diary;
