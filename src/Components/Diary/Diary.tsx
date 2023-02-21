import { IWeek, IData } from "@/types/types";
import { DairyList } from "./DairyList";
import styled from "./Dairy.module.scss";

export const Diary = ({ data }: IData) => {
    return (
        <div className={"container" + " " + styled.dairy}>
            <DairyList data={data} />
        </div>
    );
};
