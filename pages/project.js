
import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap";
import classNames from "classnames"
import styled, { css } from "styled-components"
import { motion, useMotionValue, useTransform,useElementScroll} from "framer-motion"
import Progress from "../component/progress"
const ease = "cubic-bezier(0, 0.55, 0.45, 1)"
const projects=[
  {co:"카페24",project:"Cafe24",text:`Design System`,link:"https://www.cafe24.com/",hover:"#006EB8"},  
  {co:"파스토",project:"FASSTO",text:`Homepage UI`,link:"https://www.fassto.ai/",hover:"#00855B"},  
  {co:"파스토",project:"FASSTO Self",text:`Fulfillment Service UI`,link:"https://www.fasstoself.com/",hover:"#00B480"},  
  {co:"파스토",project:"FASSTO App",text:`Fulfillment App UI`,link:"https://play.google.com/store/apps/details?id=ai.fassto.fms.app.com.android&hl=ko&gl=US",hover:"#00855B"},  
  {co:"한위드정보기술",project:"hdaas",text:`Server Virtualization  Dashboard UI`,link:"http://dyha.cafe24.com/dy/2016/hdaas/php/dashboard-v1.php",hover:"#E8820D"},  
  {co:"네이버",project:"NAVER Office",text:"Cloud Office UI",link:"https://office.naver.com/",hover:"#03C75A"},
  {co:"코디스페이스",project:"Incheon Airport",text:"Cloud Office App UI",link:"http://dyha.cafe24.com/dy/hello/images-dyha/Incheon-Airport.pdf",hover:"#00AAB4"},
  {co:"코디스페이스",project:"Incheon Airport",text:"Airbeacon Admin UI",link:"http://dyha.cafe24.com/dy/coordi/airbeacon/dashBoardList.html#.pdf",hover:"#00AAB4"},
  {co:"코디스페이스",project:"Incheon Airport",text:"Node Admin UI",link:"http://dyha.cafe24.com/dy/hello/images-dyha/node.png",hover:"#EC641F"}
]
const cardVariant = {
  select:{
    opacity:1,
    scale:1,
  },
  unSelect:{
    opacity:0.4,
    scale:0.9
  },
  visible: (index) => {
    return {
      scale:1,
    };
  },
}
const CardImg = styled(motion.div)`
  ${(props) =>{
    // console.log("props",projects[props.index].hover)
    return((props.index % 2) === 0 ?
    css`
    height: 240px;
    width: 200px;
    .img:hover{
      background-color: ${projects[props.index].hover && projects[props.index].hover} !important
  `:css`
    height: 320px;
    width: 280px;
    .img:hover{
      background-color: ${projects[props.index].hover && projects[props.index].hover} !important
  `)}} 
`

const CardText = styled.div`
  ${(props) =>
    (props.index % 2) === 0 ?
    css`
    bottom: -24px;
  `:css`
    top: -24px;
  `} 
`
export default function About (){
  const tl = useRef();
  const cardsRef = useRef();
  const imgWrap = gsap.utils.selector(cardsRef);
  const img = gsap.utils.selector(cardsRef);
  const data = gsap.utils.selector(cardsRef);
  const { scrollXProgress } = useElementScroll(cardsRef);
  const [select, setSeclect] = useState();
  const [scroll, setScroll] = useState()
  useEffect(()=>{
    tl.current = gsap
      .timeline()
      .from(imgWrap(".imgWrap"),{
        height: 0,
        opacity:0,
        stagger:0.2,
        duration:0.8,
        ease,
        transformOrigin:"left bottom"
      })
      .from(data(".data"),{
        opacity:0,
        duration:0.8,
      })
  },[])
  const scrollScale = () => {
    scrollXProgress.onChange(()=>{
      setScroll(scrollXProgress.get())
      gsap.fromTo(img(".img"),{scale:1.2},{scale:1})
    })
    // requestAnimationFrame(() => scrollScale());
  }
  useEffect(()=>{
      scrollScale()
  },[scroll])
  // useEffect(()=>{
  //   requestAnimationFrame(() => scrollScale());
  // },[scroll])
  const setHandle = (index) => {
    setSeclect(index)
  }
  const className = classNames(
   `t-metadata-sm project`,
  )
    return(
      <>
      <div 
      ref={cardsRef} 
      className="pageWrap projects"
      style={{
        overflow:"scroll",
        display:"flex",
        alignItems:"center"
      }} 
             
      >  
        {projects.map((project,index)=>(
            <motion.div 
              className={`${className} card`}
              key={index}
              index={index}
              onMouseEnter={()=>setHandle(index)}
              onMouseLeave={()=>setHandle(undefined)} 
              variants={cardVariant}
              transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
              animate={select !== undefined ? select === index ? "select" : "unSelect" : "visible"}
              custom={index}
            >
              <div className="data" index={index}>{index > 8  ? `${index+1}`: `0${index+1}`}</div> 
              <CardImg 
                className="imgWrap" 
                index={index}>
                  <a className="img" style={{display:"block",width:"100%",height:"100%"}} href={project.link} target="_blank" >
                    <div  className="project">{project.project}</div>
                    <div className="text">{project.text}</div>                  
                  </a>
                  <CardText className="co data" index={index}>{project.co}</CardText>  
                </CardImg>          
              
            </motion.div> 
        ))}
      </div>
      <Progress scaleX={scrollXProgress}/>   
      </>
    )
}