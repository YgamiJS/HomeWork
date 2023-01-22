import { IWeek, IData } from "../../types/types";
import DairyItem from "./DairyItem";
import styled from "./Dairy.module.scss";

const DairyList = ({ data }: IData) => {
    return (
        <div>
            {data.map((lesson) => (
                <div>
                    <h1 className={styled.h1}>{lesson.day}</h1>
                    <DairyItem lesson={lesson} />
                </div>
            ))}
        </div>
    );
};

export default DairyList;
