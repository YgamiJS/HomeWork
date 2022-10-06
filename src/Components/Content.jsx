import {useState} from "react"
import styled from "../App.module.scss"

export default function Content(props){
    return (
        <div>
            <h1>{props.props.day}</h1>
        <table>
                {props.props.arrayLessons.map((lesson) => 
                 <tr>
                    <td className={styled.homeWorkName}>{props.props.arrayLessons.indexOf(lesson) + 1}{" "}{lesson.lessonInfo.name}</td>
                    <td className={styled.homeWorkInfo}>{lesson.lessonInfo.homeWork}</td>
                </tr>
                )}
        </table>
        </div>
    )
}