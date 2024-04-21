

import "./header.scss";
import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
//<div className="slogan">المصدر الأول للمحنك المصري</div>
const Header = ()=>{
    return (


           <section>
               <p data-item='هاي بلوك'>هاي بلوك </p>
           <nav>
               <ul class="menuItems">
                  <li><Link className="link" to='media' data-item='About'>ميديا</Link></li>
                  <li><Link className="link" to='articles' data-item='Projects'>مقالات</Link></li>
                  <li><Link className="link" to='commentary' data-item='Blog'>تحليل</Link></li>
                  <li><Link className="link" to='news' data-item='Blog'>اخبار</Link></li>
                  <li><Link className="link" to='/' data-item='Contact'>الصفحة الرئيسية</Link></li>
              </ul>
            </nav>

          </section>

    );
};

export default Header;