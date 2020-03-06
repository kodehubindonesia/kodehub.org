
import React, { FunctionComponent } from 'react';
import Card from '@components/Card'

import frontend from '../static/frontend.png';
const Index: FunctionComponent = props => {
  return (
    <React.Fragment>
      <main className="py-12 flex sm:flex-row justify-center border-b-2 border-danger text-black">
        <div className="sm:w-2/5 flex flex-col items-center">
          <h1 className="uppercase text-6xl">KODEHUB</h1>
          <p>Komunitas Forum developers Indonesia</p>
        </div>
      </main>

      {/* <div className=" lg:flex-col md:flex-col sm:flex-col flex justify-content container mx-auto py-12 items-center"> */}
      <div className="flex py-12 flex-col container mx-auto">
        <h3 className="uppercase text-3xl text-center ">Trending Forum</h3>
        <div className="border-b-8 w-20   mx-auto pb-5 border-red-400"></div>
        <div className="flex flex-wrap -mx-2 py-4">
          <div className="lg:w-1/2 w-full px-2 mb-2 ">
            <Card img={frontend} title="Frontend" description="Find Something that you interested in" topics='3' lastTopic="Belajar React Typescript" Activity='2' User='100' />
          </div>
          <div className="lg:w-1/2 w-full px-2 mb-2">
            <Card img={frontend} title="Backend" description="Backend Only" topics='3' lastTopic="Trend Backend framework 2020" Activity='2' User='100' />
          </div>
          <div className="lg:w-1/2 w-full px-2 mb-2">
            <Card img={frontend} title="Lounge" description="Cakap sikit-sikit" topics='3' lastTopic="alur belajar untuk jago fullstack" Activity='2' User='100' />
          </div>
          <div className="lg:w-1/2 w-full px-2 mb-2">
            <Card img={frontend} title="DevOps" description="DevOps Maniaa???" topics='3' lastTopic="MANTAPPPP" Activity='2' User='100' />
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Index;
