import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


function WorkCard(props) {
  const {
    title,
    previewImg,
    description
  } = props;
  return (
    <div className="card bg-dark text-white">
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
      <div className=""><img className="card-img" src={previewImg} alt={title}/></div>
    </div>
  );
}

function WorksPage(props) {
  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-12 col-md-8"><WorkCard title="Deep Dive" previewImg="http://heylight.com/wp-content/uploads/2010/10/helmet15a.jpeg.scaled1000-284x211.jpg" description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." /></div>
        <div className="col-6 col-md-4"><WorkCard title="Telus Hippo" previewImg="http://heylight.com/wp-content/uploads/2013/05/hippoV_thumb-284x211.png" description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." /></div>
      </div>

      <div className="row">
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>
    </div>
  );
}

function _Works(props) {
  return (
    <div className="bg-light p-5">
      <nav id="navbar-example3" className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link" href="#item-1">Item 1</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ml-3 my-1" href="#item-1-1">Item 1-1</a>
            <a className="nav-link ml-3 my-1" href="#item-1-2">Item 1-2</a>
          </nav>
          <a className="nav-link" href="#item-2">Item2</a>
          <a className="nav-link" href="#item-3">Item3</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link ml-3 my-1" href="#item-3-1">Item 3-1</a>
            <a className="nav-link ml-3 my-1" href="#item-3-2">Item 3-2</a>
          </nav>
        </nav>
      </nav>

      <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
        <h4 id="item-1">Item 1</h4>
        <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
        <h5 id="item-1-1">Item 1-1</h5>
        <p>Amet tempor mollit aliquip pariatur excepteur commodo do ea cillum commodo Lorem et occaecat elit qui et. Aliquip labore ex ex esse voluptate occaecat Lorem ullamco deserunt. Aliqua cillum excepteur irure consequat id quis ea. Sit proident ullamco aute magna pariatur nostrud labore. Reprehenderit aliqua commodo eiusmod aliquip est do duis amet proident magna consectetur consequat eu commodo fugiat non quis. Enim aliquip exercitation ullamco adipisicing voluptate excepteur minim exercitation minim minim commodo adipisicing exercitation officia nisi adipisicing. Anim id duis qui consequat labore adipisicing sint dolor elit cillum anim et fugiat.</p>
        <h5 id="item-1-2">Item 2-2</h5>
        <p>Cillum nisi deserunt magna eiusmod qui eiusmod velit voluptate pariatur laborum sunt enim. Irure laboris mollit consequat incididunt sint et culpa culpa incididunt adipisicing magna magna occaecat. Nulla ipsum cillum eiusmod sint elit excepteur ea labore enim consectetur in labore anim. Proident ullamco ipsum esse elit ut Lorem eiusmod dolor et eiusmod. Anim occaecat nulla in non consequat eiusmod velit incididunt.</p>
        <h4 id="item-2">Item 2</h4>
        <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>
        <h4 id="item-3">Item 3</h4>
        <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
        <h5 id="item-3-1">Item 3-1</h5>
        <p>Deserunt quis elit Lorem eiusmod amet enim enim amet minim Lorem proident nostrud. Ea id dolore anim exercitation aute fugiat labore voluptate cillum do laboris labore. Ex velit exercitation nisi enim labore reprehenderit labore nostrud ut ut. Esse officia sunt duis aliquip ullamco tempor eiusmod deserunt irure nostrud irure. Ullamco proident veniam laboris ea consectetur magna sunt ex exercitation aliquip minim enim culpa occaecat exercitation. Est tempor excepteur aliquip laborum consequat do deserunt laborum esse eiusmod irure proident ipsum esse qui.</p>
        <h5 id="item-3-2">Item 3-2</h5>
        <p>Labore sit culpa commodo elit adipisicing sit aliquip elit proident voluptate minim mollit nostrud aute reprehenderit do. Mollit excepteur eu Lorem ipsum anim commodo sint labore Lorem in exercitation velit incididunt. Occaecat consectetur nisi in occaecat proident minim enim sunt reprehenderit exercitation cupidatat et do officia. Aliquip consequat ad labore labore mollit ut amet. Sit pariatur tempor proident in veniam culpa aliqua excepteur elit magna fugiat eiusmod amet officia.</p>
      </div>
      {/* {("abcdefghijklmnopqrstuvwxyz").split("").map(e => e == 'a'?  <p key={e} id="fat"><b>{e} foo</b><br/>asdfkjlaskd</p> : <p key={e}><b>{e}</b><br/>asdf</p>)} */}
    </div>
  );
}

export default WorksPage;
