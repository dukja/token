import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform Designer Portfolio</title>
        <meta name="description" content="Platform Designer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pageMax pageWrap pagePading about">
        <div className='pageGrid'>
          <div className='cs1 ce-1 cs-lg1 ce-lg5 side'>
            <div className="t-body-sm t-weight-thin">
                <div className="t-body-sm-strong">Working Tools</div>
                <div>
                      Figma, Sketch, ProtoPie, Principle, Framer, Axure, Notion, HTML5, SCSS, jquery, react, Next js, Bootstrap, Eclipse, Git, Jira, Slack
                </div>                            
            </div>
            <div className=" t-body-sm t-weight-thin">
                <div className="t-body-sm-strong p32-t">Experience</div>
                <ul className="list-none p0 m0">
                  <li>Cafe24 · 디자인시스템</li>
                  <li>Fassto · 풀필먼트 서비스</li>
                  <li>CoordiSpace · 비콘위치 추적 서비스</li>
                  <li>Hanwith · 통합관제 클라우드 플랫폼</li>
                  <li>Secuve · 보안솔루션 개발 업체</li>
                  <li>Synapsoft · 네이버오피스 개발 업체</li>
                </ul>                            
            </div>
          </div>
          <div className='cs1 ce-1 cs-lg7 ce-lg13 main'>
            <div className='t-display-xs p32-b'>Now&Forward</div>
            <div className='t-body-sm-strong'>About Me</div>
            <div className="m16-b">
                "주로 소프트웨어 회사에서 인하우스 디자이너로서 대시보드, 앱, 웹의 UI/UX 디자인 및 퍼블리싱 작업을 했습니다. 
            </div>
            <div className="m16-b">
            일관성·확장성을 고려한 디자인을 좋아해 디자인 시스템을 연구합니다. 디자인을 코드로 구현하는 데 관심이 많아 자바스크립트를 좋아합니다.
            </div>
            <div>
                앞으로도 웹을 더 이해하고 빠른 구축을 위한 디자인시스템 개선을 할 것입니다."
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}
