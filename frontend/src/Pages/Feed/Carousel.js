import React, { Component } from "react";
import { Carousel } from "antd";
import 'antd/dist/antd.css';
import CircularProgressWithLabel from "./progress"

export default class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            course:props.courses
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
    }
    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }

    render() {
        const {course}=this.state
        const props = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const contentStyle = {
            height: '100px',
            width: "100%",
            color: 'black',
            textAlign: 'center',
            background: '#F5F5F7',
            display:"flex",
            justifyContent:"space-around",            
            borderRadius:"15px",
            alignItems:"center"
        };
        return (
            <div style={{display:"flex",width:"100%"}}>
                <div style={{width:"80%"}}>
                <Carousel ref={node => (this.carousel = node)} {...props}>
                   {course.map((item)=>(
                       <div style={{height:"100px"}} key={item._id}>
                       <div  style={contentStyle}>
                           <div>{item.name}</div>
                           <CircularProgressWithLabel value={80} />
                           <button style={{ borderRadius: "5px", fontWeight: "600", fontSize: "smaller", height: "40px",width:"100px", background:"black",color:"white" }}>Continue</button>
                       </div></div>
                   ))}
                </Carousel></div>
                <div style={{width:"20%", margin:"auto", marginLeft:"5%",display:"flex"}}>
                <button style={{width:"40px",height:"40px", borderRadius:"20px", border:"1px solid black",fontSize:"large",marginRight:"5px"}} type="left-circle" onClick={this.previous} >←</button>
                <button style={{width:"40px",height:"40px", borderRadius:"20px", border:"1px solid black",fontSize:"large"}} type="right-circle" onClick={this.next} >→</button></div>
            </div>
        );
    }
}