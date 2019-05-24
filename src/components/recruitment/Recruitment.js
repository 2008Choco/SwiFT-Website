import React from 'react'
import RecruitmentApplication from './RecruitmentApplication';

const banner_placeholder = require("../../assets/placeholder_banner.png");

export default function Recruitment() { 
  return (
    <div>
      <p>Recruitment</p>
      <div id="recruitment-container">
        <RecruitmentApplication name="freestyler" banner={banner_placeholder}/>
        <RecruitmentApplication name="competitive" banner={banner_placeholder}/>
        <RecruitmentApplication name="esports" banner={banner_placeholder}/>
        <RecruitmentApplication name="designer" banner={banner_placeholder}/>
        <RecruitmentApplication name="editor" banner={banner_placeholder}/>
      </div>
    </div>
  )
}
