import React from 'react';
import "./styles/home.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

function Home() {
    return (
        <div className='home'>
            <div className="header">
                <div className="home__header__menu_bar">
                    <MenuIcon />
                </div>
                <div className="home__header__logo">
                    <h1><a href='#'>EdTube</a></h1>
                </div>
                <div className="home__header__search_bar">
                    <div className="home__header__search_bar__icon">
                        <SearchIcon />
                    </div>
                    <input type="text" placeholder="search" />
                </div>
                <div className="home__header__login_icon">
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <iframe src="https://www.youtube.com/embed/5QzzeYHApV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                </iframe>
                <iframe src="https://www.youtube.com/embed/vfs1wBDoqBY" title="CSS Tutorial for Beginners | Guide to Understand the CSS Box Model and Layout | in Tamil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                </iframe>
                <iframe src="https://www.youtube.com/embed/I-hZkUa9mIs" title="Templates in C++" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                </iframe>

                <iframe src="https://www.youtube.com/embed/jnfyH1k2c38" title="CSS Positioning Made Simple: A Beginner-Friendly Tutorial 🎨✨ | Tamil | EMC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                </iframe>
            </div>
        </div>
    );
}

export default Home;

