import ProjectCard from "./ProjectCard";
const myprojects =
    [
        {
            title: "Wav Media Player",
            tools: 
            [{
                icon: "fab fa-java",
                color: "green"
            }],
            content: "An full fledged audio player application designed to play .wav audio files with comprehensive functionality using java and java swing library. The audio player features a user-friendly interface that allows users to easily load and play .wav files. It includes standard playback controls such as play, pause, stop, previous music, next music and loop functionality.",
            gitlink: "https://github.com/Purab-Sen/AudioPlayer",
            image: "./images/audioplayer.jpeg"
        },
        {
            title: "Delivery Path Optimizer",
            tools: 
            [{
                icon: "fab fa-java",
                color: "green"
            }],
            content: "An research based application for optimizing nearest neighbour approach using KDTree and KNN algorithm in 2D space developed using java and java swing library. KDTree, Graph, Stack, ArrayList datastructures were used with the implementation KNN and Dijkstra's algorithm for shortest path evaluation. Time complexity reduction was the main goal of the project.",
            gitlink: "https://github.com/Purab-Sen/Delivery-Path-Optimizer",
            image: "./images/map.png"
        },
        {
            title:"Fundpropeller",
            tools:
            [
                {
                    icon:"fab fa-java",
                    color:"red"
                },
                {
                    icon:"fa fa-database",
                    color:"#71a5c3"
                }
            ],
            content:"A swing based application for fundraisers to get investments from investors by pitching their ideas and required funding. The project used java as the main language with mysql database to store data. Users can maintain make accounts as investors or fundraisers. Investors can view mulitple ideas and invest on the one they like. Similarly fundraisers can get investment from various investors and can accept from whom they prefer.",
            gitlink:"https://github.com/Purab-Sen/FundPropeller",
            image:"./images/fundpropeller.png"
        }
    ]
const Project = () => {

    return (
        <section className="section" id="Project">
            <div className="stick" />
            <p className="sectionHead">My Projects</p>
            {myprojects.map((project,index)=>{
                return  <ProjectCard inputs={project} key={index} />
            })}
        </section>
    )
}
export default Project;