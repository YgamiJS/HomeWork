import { IWeek, IData } from "../../types/types";
import DairyList from "./DairyList";
import styled from "./Dairy.module.scss";

const Diary = ({ data }: IData) => {
    return (
        <div className={"container" + " " + styled.dairy}>
            <DairyList data={data} />
        </div>
    );
};

export default Diary;
