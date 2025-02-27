import { FaGithub, FaHouse, FaLinkedin, FaLinkedinIn, FaReact } from "react-icons/fa6";
import { Galgame, Portfolio } from "../assets";
import { FcAbout, FcContacts } from "react-icons/fc";
import { BiFace } from "react-icons/bi";
import { RiToolsFill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";

export const Menus = [
    {
        id:`home-${Date.now()}`,
        Icon: FaHouse,
        url: "#home",
        name:"Home",
    },
    {
        id:`home-${Date.now()}`,
        Icon: BiFace,
        url: "#about",
        name:"About",
    },
    {
        id:`home-${Date.now()}`,
        Icon: RiToolsFill,
        url: "#skills",
        name:"Skills",
    },
    {
        id:`home-${Date.now()}`,
        Icon: FaReact,
        url: "#projects",
        name:"Projects",
    },
    {
        id:`home-${Date.now()}`,
        Icon: MdContactPage,
        url: "#contact",
        name:"Projects",
    },
]

export const Socials = [
    {
        id:`LinkedIn-${Date.now()}`,
        Icon: FaLinkedinIn,
        url:"https://www.linkedin.com/in/xing-liu-17a228346/",
        color:"#1877F2"
    },
    {
        id:`Github-${Date.now()}`,
        Icon: FaGithub,
        url:"",
        color:"#0072b1",
    },
]

export const ProjectsData = [
    {
        id:`Jules Portfolio-${Date.now()}`,
        name: "Jules Portfolio",
        imgSrc: Portfolio,
        gitUrl:"https://github.com/JulesLiu390/ProtfolioJulesLiu",
    },
    {
        id:`Online virtual chat-${Date.now()}`,
        name: "Online Galgame",
        imgSrc: Galgame,
        gitUrl:"https://www.linkedin.com/in/xing-liu-17a228346/",
    },
]