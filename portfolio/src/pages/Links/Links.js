import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './Links.css';
import githubImage from "../../images/5847f98fcef1014c0b5e48c0.png"

export default function Links() {
  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <h2>Links</h2>
        <div className='card'>
          <Link to=''>
            <img alt="#" src='#'>
            </img>
            <h5>I also do photography! Take a look here!</h5>
          </Link>
          <a className='github-link' href='https://github.com/samsmeyer17'>
            <img className='github-image' alt="" src={githubImage}></img>
            <h6 className='github-text'>GitHub</h6>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}