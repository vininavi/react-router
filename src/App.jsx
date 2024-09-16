import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./TopNav";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardMap from "./CardMap";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  const data = [
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      description:
        "When you’re hiring a full-stack developer, what are the most important things you look for?",
      date: "15 November 2023",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      date: "16 February 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      description:
        "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      date: "10 November 2023",
      content: "Full Stack Development",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      description:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "28 November 2023",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      description:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "15 November 2023 ",
      content: "Data Science",
    },
    
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title: "7 Best Full-Stack Development Online Courses [2024]",
      description:
        "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      date: "31 August 2023",
      content: "Full Stack Development",
    },
    
  
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp",
      title: "Best Ways to Learn Full Stack Development in 2024",
      description:
        "Full stack development is and will be a promising and in-demand career in the upcoming",
      date: "4 August 2023",
      content: "Full Stack Development",
    },
  
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn in 2024",
      description:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      date: "26 October 2023",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      date: "5 October 2023",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
      date: "1 March 2021",
      content: "Cyber Security",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
      title: "Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
      description:
        "The current technological era is full of competition and those who have profound skillset are",
      date: "23 November 2023",
      content: "Career",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
      title: "Top 13 Product Based Companies for AI Freshers",
      description:
        "Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at",
      date: "10 November 2023",
      content: "Career",
    },];

  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedData(sortedData);
  }, []);

  return (
    <>
      <TopNav />
      <Nav />
      <div className="card-container main-card mt-3 pt-3 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {sortedData.map((ele) => (
                    <Card key={ele.id} data={ele} />
                  ))}
                </>
              }
            ></Route>
            <Route
              path="/FullStackDevelopment"
              element={
                <CardMap data={sortedData} val={"Full Stack Development"} />
              }
            ></Route>
            <Route
              path="/DataScience"
              element={<CardMap data={sortedData} val={"Data Science"} />}
            ></Route>
            <Route
              path="/CyberSecurity"
              element={<CardMap data={sortedData} val={"Cyber Security"} />}
            ></Route>
            <Route
              path="/Career"
              element={<CardMap data={sortedData} val={"Career"} />}
            ></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;