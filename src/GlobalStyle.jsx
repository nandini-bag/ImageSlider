import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    font-size:62.5%;
}
body{
    background:#eaeaea;
}
.container{
    width:100rem;
    max-width:90%;
    height:60rem;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    box-shadow:0 3px 5px 1px rgba(0,0,0,0.2);
}
.item{
    width:20rem;
    height:30rem;
    position:absolute;
    top:50%;
    left:0;
    transform: translate(0,-50%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:inline-block;
    border-radius: 1rem;
    transition:.4s;
}
.item:nth-child(1),
.item:nth-child(2){
    width:100%;
    height:100%;
    left:0;
    top:0;
    transform:translate(0,0);
}
.item:nth-child(3){
    left:50%;
}
.item:nth-child(4){
    left:calc(50% + 15rem );
}
.item:nth-child(5){
    left:calc(50% + 30rem );
}
.item:nth-child(n + 6){
    left:calc(50% + 40rem );
    opacity:0;
}
.item-content{
    position: absolute;
    top:50%;
    left:0;
    transform:translate(0,-50%);
    text-align:center;
    width:40rem;
    max-width:50%;
    color:white;
    padding-inline:2rem;
    display:none;
}
.item:nth-child(2) .item-content{
    display:block;
}
.common-heading{
    text-transform:uppercase;
    font-size:2rem;
    animation:animate 1s ease-in-out 1 forwards;
}
p{
    font-size:1.5rem;
    padding-block:2.5rem;
    text-align:justify;
    line-height:2rem;
    animation:animate 1s ease-in-out 1 forwards;
}
.btn{
    text-transform:capitalize;
    padding: .5rem 1rem;
    cursor:pointer;
    border:none;
    outline:none;
    border-radius:.2rem;
    animation:animate 1s ease-in-out 1 forwards;
}
@keyframes animate{
    from{
        transform: translate(0,5rem);
        opacity:0;
        filter:blur(.5rem);
    }
    to{
        transform: translate(0);
        opacity:1;
        filter:blur(0);
    }
}
.slide-button{
    position:absolute;
    width:100%;
    bottom:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2rem;
}
.slide-button .btn{
    font-weight:bold;
    font-size:1.5rem;
    cursor:pointer;
}
.slide-button .btn:hover{
    color:white;
    background:#8d8d8d;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .container {
        width: 80rem;
    }
    .item {
        width: 18rem;
        height: 28rem;
    }
    .item-content {
        width: 35rem;
    }
}

@media (max-width: 768px) {
    html {
        font-size: 56.25%;
    }
    .container {
        width: 100rem;
    }
    .item {
        width: 12rem;
        height: 22rem;
    }
    .item:nth-child(3){
        left: 0;
        top: calc(50% + 17rem);       
    }
    .item:nth-child(4){
        left: 5%;
        top: calc(50% + 17rem);        
    }
    .item:nth-child(5) {
        left: 10%;
        top: calc(50% + 17rem);        
    }
    .item:nth-child(n+6) {
        left: 10%;
        top: calc(50% + 15rem);
    }
    .item-content {
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size: 1.4rem;        
    }
    p {
        font-size: 1.4rem;
    }
}
@media (max-width: 480px) {
    .item {
        width: 10rem;
        height: 20rem;
    }
    .item-content {
        top:40%;
        width: 90%;
        font-size: 1.2rem;
        padding-inline: 1rem;
    }
}
`;