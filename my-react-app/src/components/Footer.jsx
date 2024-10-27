
export default function Footer(){
    return(
        <footer>
            <div id="footer" className="footerContainer">
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/phu-le-7a5260281/"target="blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fas fa-envelope"></i></a>
                    <a href="https://github.com/phuProjects"target="blank"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="footerBottom">
                <p>Copyright &copy;2024; Designed by <span className="designer">Phu</span></p>
            </div>
        </footer>
    )
    
}