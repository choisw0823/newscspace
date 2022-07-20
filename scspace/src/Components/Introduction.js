import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Introduction extends Component{
    constructor(props){
        super(props);

        this.state = {
          info: [
            {which:'소개', text:'1ddd', clicked:true},
            {which:'사업소개', text:'2sdfs', clicked:false},
            {which:'회칙', text:'3sdss', clicked:false}
          ]
        }
    }

    OnClickEvent = (idx, e) =>{
        const copied_info = [...this.state.info];
        copied_info[idx].clicked = true;
        for (let i=0; i<3; i++)
          {
            if (i !== idx) {
              copied_info[i].clicked = false;
            }
          }
        this.setState({
            info:copied_info
        }) 
    }

    render() {return (
      <main id="main">
        <div  className="breadcrumbs">
          <div  className="container">
            <div  className="d-flex justify-content-between align-items-center">
              <h3>소개</h3>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/introduction">소개</Link></li>
              </ol>
            </div>
          </div>
        </div>
        <section>
          
            <div  className="section-header">
              <h2>학생문화공간위원회</h2>
              <p>Student Culture and Space Committee</p>
            
            <hr></hr>
          
        
          {/* 
                      KAIST 학생문화공간위원회(이하 공간위)는 장영신학생회관을 비롯한 KAIST 교내 학생 문화공간의
                      총체적인 관리 및 운영을 담당하고 진정한 학생 공간을 위하여 공간에 대한 학생의 권리 보장과
                      학생 문화 발전에 기여하기 위하여 설립된 KAIST 학부 총학생회 산하 상설위원회입니다.
                      <br/>쉽게 말하자면, 공간위는 KAIST 학우들을 위한 학생들의 다양한 문화활동을 지원할 수 있는
                      공간을 관리하고 기획하는 역할을 하고 있습니다. 이를 위해, 장영신학생회관 건립 전부터 준비위원회로서
                      학생들의 의견을 수렴하고 반영해 왔으며 앞으로도 KAIST 학우 모두가 함께 문화를 만들어 갈 수 있도록
                      언제나 학우들의 이야기에 귀를 기울이고 있습니다. 저희와 같이 학생문화를 가꾸어나가고 싶다면
                      부담 갖지 마시고 이야기를 공유해주세요. 우리 함께 장영신학생회관에서 카이스트만의 문화를 만들어봐요! */}
          <section id="portfolio"  className="portfolio">
              <div className="container-fluid">

                <div  className="portfolio-isotope" >

                  <ul  className="portfolio-flters">
          {this.state.info.map((contents, idx) => {
          return (
              <li onClick={this.OnClickEvent.bind(this, idx)}>{contents.which}</li>
          )
        }
      )}
                  </ul>
              </div>
          </div>
        </section>
  
            <p>
                {this.state.info.map((contents, idx) =>{
                    if (contents.clicked === true) { return (contents.text)}  
                })}
             </p>
          </div>
        </section>
      </main>
      )};
}

export default Introduction;