import React from "react";
import '../App.css'


const Header = ({page}) => {
    return (
        <header className="fixHeader" role="banner">
            <div id="execphp-8" className="widget widget_execphp">
                <div className="execphpwidget">
                    <div className="container-fluid">
                        <div className="span7 logo clearfix"><a href="/"><span
                            className="logodecoration">S</span>cook</a></div>
                    </div>
                </div>
            </div>
            <div id="inner-header" className="clearfix">
                <div className="navbar navbar-fixed-top">
                    <div className="navbar-inner">
                        <div className="container-fluid nav-container">
                            <nav role="navigation">
                                <a className="btn btn-navbar" data-toggle="collapse"
                                   data-target=".nav-collapse"> <span
                                    className="icon-bar"></span> <span
                                    className="icon-bar"></span> <span
                                    className="icon-bar"></span> </a>


                                <div className="nav-collapse">
                                    <ul id="menu-main-menu" className="nav">
                                        <li id="menu-item-94"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active">
                                            <a href="/"><i
                                                className="icon-home"></i> Home</a></li>

                                        <li id="menu-item-95"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                            <a href="#">Page: {page}</a></li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header