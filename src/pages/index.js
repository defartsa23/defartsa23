import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="sections">
        <h2 className="section-title">Skills</h2>
        <div className="list-card">
          <div>
            <h3>Programming language &amp; frameworks</h3>
            <span>
              TS/JS (Node.js backend), NestJS, ExpressJs, Socket.IO, Codeigniter, FastAPI
            </span>
          </div>
        </div>
        <div className="list-card">
          <div>
            <h3>Deployment tools</h3>
            <span>
              Docker, Portainer, Git
            </span>
          </div>
        </div>
        <div className="list-card">
          <div>
            <h3>Database</h3>
            <span>
              SQL(MariaDb, MySql), NoSql(MongoDb, Redis)
            </span>
          </div>
        </div>
      </div>
      <div className="sections">
        <h2 className="section-title">Interests</h2>
        <div className="list-card">
          <div>
            <h3>Languages</h3>
            <span>TS/JS, Python</span>
          </div>
        </div>
        <div className="list-card">
          <div>
            <h3>Hacking</h3>
            <span>API (REST/Websocket), Microservices</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container cards" style={{paddingTop:1}}>
      
    </div>

    <div className="container">
      <ol className="timeline">
        <li>
          <p className="line">Experiences</p>
          <span className="point"></span>
          <a className="description" href="https://intama.info" target="_blank">
            Software Engineer @ Intama
          </a>
          <span className="date">Today - Jan. 2022</span>
        </li>
        <li>
          <span className="point"></span>
          <a
            className="description"
            href="https://azsolusindo.info"
            target="_blank"
          >
            Software Engineer @ AZ Solusindo Teknologi
          </a>
          <span className="date">Aug. 2018 - Dec. 2021</span>
        </li>
      </ol>
    </div>
  </Layout>
)

export default IndexPage
