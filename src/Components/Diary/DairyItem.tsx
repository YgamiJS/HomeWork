import { FC } from "react";
import { IWeek } from "../../types/types";
import styled from "./Dairy.module.scss";

interface Data {
    lesson: IWeek;
}

const DairyItem: FC<Data> = ({ lesson }) => {
    return (
        <table className={styled.table}>
            {lesson.lessons.map((less) => (
                <tr>
                    <td className={styled.homeWorkName}>
                        {lesson.lessons.indexOf(less) + 1} {less.name}
                    </td>
                    <td className={styled.homeWorkTask}>{less.homeWork}</td>
                </tr>
            ))}
        </table>
    );
};

export default DairyItem;
