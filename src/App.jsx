import {useState} from "react"
import { Header , Footer } from './Components/HeaderFooter.jsx'
import Content from './Components/Content.jsx'
import styled from './App.module.scss'



export default function App() {
  
  const [stateTime , setStateTime] = useState(new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() )
  setInterval( () => setStateTime(new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()) , 60000)

  return (
    <>
      <Header />
      <div className={styled.content}>
        <h2>{stateTime}</h2>
        <Content props={{day: "monday" ,arrayLessons: [{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }}]}} />
        <Content props={{day: "monday" ,arrayLessons: [{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }}]}} />
        <Content props={{day: "monday" ,arrayLessons: [{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }}]}} />
        <Content props={{day: "monday" ,arrayLessons: [{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }}]}} />
        <Content props={{day: "monday" ,arrayLessons: [{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} ,{ lessonInfo: {name: "name" ,  homeWork: "homeWork" }} , { lessonInfo: {name: "name" ,  homeWork: "homeWork" }}]}} />
      </div>
      <Footer />
    </>
  )
}
