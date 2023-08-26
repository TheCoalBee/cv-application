import React, {useState} from 'react'
import Experience from './Experience.jsx'

export default function Section({className, id, label}) {
  return (
    <>
        <div className={className} id={id}>
            <h1>{label}</h1>
            <Experience className={'experience'} label={'Starbucks Coffee Company'} description={"This is a random description of my time working at Starbucks and what I did at Starbucks. I didn't really know what to say in this one to be completely honest lol"} startYear={2011} endYear={2015}/>
            <Experience className={'experience'} label={'Starbucks Coffee Company'} description={"This is a random description of my time working at Starbucks and what I did at Starbucks. I didn't really know what to say in this one to be completely honest lol"} startYear={2011} endYear={2015}/>
            <Experience className={'experience'} label={'Starbucks Coffee Company'} description={"This is a random description of my time working at Starbucks and what I did at Starbucks. I didn't really know what to say in this one to be completely honest lol"} startYear={2011} endYear={2015}/>
        </div>
    </>
  )
}
