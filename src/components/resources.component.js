import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./resources.component.css"
  
export default class Resources extends Component {
render() {
    return (
        <div className='resources-slide'>
            <div>
                <h1 className="title">extra resources for your financial journey!</h1>
                <p>
                    read a complete guide with <span> </span>
                    <a href="https://www.investopedia.com/personal-finance-4427760/">
                        investopedia
                    </a>
                </p>
                <p>
                    learn the basics lesson-by-lesson using<span> </span>
                    <a href="https://www.khanacademy.org/college-careers-more/personal-finance/">
                        khan academy
                    </a>
                </p>
                <p>
                    follow current financial news at<span> </span>
                    <a href="https://www.cnbc.com/personal-finance/">
                        cnbc
                    </a>
                </p>
            </div>
        </div>
    )
    }
}