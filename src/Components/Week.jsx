import Clock from './clock.jsx'
import Content from './Content.jsx'
import styled from '../App.module.scss'

export default function Week (){
    return (
        <div className={styled.content}>
            <Clock />
            <Content props={{day: "понедельник" ,arrayLessons: [{ lessonInfo: {name: "Иностранный язык " ,  homeWork: "" }} , { lessonInfo: {name: "Информатика" ,  homeWork: "" }} , { lessonInfo: {name: "Русский язык" ,  homeWork: "" }} ,{ lessonInfo: {name: "Биология" ,  homeWork: "" }} ,{ lessonInfo: {name: "Математика" ,  homeWork: "" }} ,{ lessonInfo: {name: "Физическая культура" ,  homeWork: "" }} , { lessonInfo: {name: "" ,  homeWork: "" }}]}} />
            <Content props={{day: "вторник" ,arrayLessons: [{ lessonInfo: {name: "Физика" ,  homeWork: "" }} , { lessonInfo: {name: "ИЗО" ,  homeWork: "" }} , { lessonInfo: {name: "Русский язык" ,  homeWork: "" }} ,{ lessonInfo: {name: "История" ,  homeWork: "" }} ,{ lessonInfo: {name: "Литература" ,  homeWork: "" }} ,{ lessonInfo: {name: "Математика" ,  homeWork: "" }} , { lessonInfo: {name: "Музыка" ,  homeWork: "" }}]}} />
            <Content props={{day: "среда" ,arrayLessons: [{ lessonInfo: {name: "Технология" ,  homeWork: "" }} , { lessonInfo: {name: "Технология" ,  homeWork: "" }} , { lessonInfo: {name: "Литература" ,  homeWork: "" }} ,{ lessonInfo: {name: "Иностранный язык" ,  homeWork: "" }} ,{ lessonInfo: {name: "Математика" ,  homeWork: "" }} ,{ lessonInfo: {name: "ОНДКР" ,  homeWork: "" }} , { lessonInfo: {name: "История" ,  homeWork: "" }}]}} />
            <Content props={{day: "четверг" ,arrayLessons: [{ lessonInfo: {name: "Математика" ,  homeWork: "" }} , { lessonInfo: {name: "Родная литература" ,  homeWork: "" }} , { lessonInfo: {name: "Русский язык" ,  homeWork: "" }} ,{ lessonInfo: {name: "География" ,  homeWork: "" }} ,{ lessonInfo: {name: "Физика" ,  homeWork: "" }} ,{ lessonInfo: {name: "Физическая культура" ,  homeWork: "" }} , { lessonInfo: {name: "" ,  homeWork: "" }}]}} />
            <Content props={{day: "пятница" ,arrayLessons: [{ lessonInfo: {name: "Иностранный язык" ,  homeWork: "" }} , { lessonInfo: {name: "Обществознание" ,  homeWork: "" }} , { lessonInfo: {name: "Русский язык" ,  homeWork: "" }} ,{ lessonInfo: {name: "Математика" ,  homeWork: "" }} ,{ lessonInfo: {name: "География" ,  homeWork: "" }} ,{ lessonInfo: {name: "Физическая культура" ,  homeWork: "" }} , { lessonInfo: {name: "" ,  homeWork: "" }}]}} />
        </div>
    )
}