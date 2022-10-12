import Clock from './clock.jsx'
import json from "../../Untitled-1.json"
import styled from "../App.module.scss"

export default function Content(){
    return (
        <div  className={styled.content}>
            <Clock />

            {json.map((lesson) =>
            <div>
                <h1>{lesson.day}</h1>
                    <table>
                        {lesson.arrayLessons.map((less) => 
                        <tr>
                            <td className={styled.homeWorkName}>{lesson.arrayLessons.indexOf(less) + 1}{" "}{less.lessonInfo.name}</td>
                            <td className={styled.homeWorkInfo}>{less.lessonInfo.homeWork}</td>
                        </tr>)}
                </table>
            </div>
            )}

        </div>
    )
}