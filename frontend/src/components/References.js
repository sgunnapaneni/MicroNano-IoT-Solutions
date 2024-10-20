<<<<<<< HEAD:frontend/src/components/References.js
import React from 'react';
import './Style.css';
function References() {
  return (
    <section>
=======
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Microservice & Nanoservice Solutions for IoT, Edge, and Cloud</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Microservice & Nanoservice Solutions</h1>
        <h2>IoT, Edge, and Cloud Computing</h2>
        <nav>
            <a href="#" id="home">Home</a>
            <a href="#" id="content">Content</a>
            <a href="#" id="taxonomy">Taxonomy</a>
            <a href="#" id="teampage">Team Page</a>
            <a href="#" id="references">References</a>
        </nav>
    </header>

    <main id="content">
        <!-- Content will change dynamically -->
        <section id="home-content" class="page">
            <h3>PAPER 9: Microservice Security Agent Based On API Gateway in Edge Computing</h3>
            <p>Rongxu Xu 1 , Wenquan Jin 2 and Dohyeun Kim 1,*</p>
            <p>1 Department of Computer Engineering, Jeju National University, Jeju 63243, Korea; rongxu@jejunu.ac.kr</p>
            <p>2 Bigdata Research Center, Jeju National University, Jeju 63243, Korea; wenquan.jin@jejunu.ac.kr</p>
            <p>* Correspondence: kimdh@jejunu.ac.kr</p>
            <p>The challenges of scalability, security, and efficient resource management facing IoT systems are all the more true regarding the heterogeneous nature of connected devices and often their limited computational power. Large-scale IoT systems will need to scale up by improving resource allocation and security. Traditional architectures hardly scale up to meet the growing number of devices or their needs for dynamic security policies against a wide range of IoT environments prone to vulnerabilities.</p>
            <p>It proposes a hybrid architecture through the merge of microservices and serverless computing. The microservices ensure modularity and scalability, while serverless computing scales up or down dynamically to follow demand variability. API gateways increase the security level by providing authentication, encryption, and access-control features that protect communications among devices. This provides a good trade-off among resource optimization, scalability, and security by offering scalable deployment of microservices depending on workload requirements.</p>
            <p>The authors have evaluated the performance of the hybrid architecture using a case study on the IoT system that was developed with different types of devices, and different communication patterns were demonstrated. They model the system for a range of variable loads, measured scalability, latency, and security performance. The authors integrated security policies, including OAuth and TLS protocols in the system to ensure integrity in communication using API gateways. Further, this was tested on the cloud environment to simulate real-world use cases of IoT, focusing on resource allocation under different levels of demand.</p>
            <p>The proposed hybrid architecture offers more scalability and security than previously traditional models in IoT. Dynamic scaling of the system, depending on traffic demand, will be guaranteed by the serverless component. This reduces costs considerably that would have been associated with over-provisioning resources. Microservices support modular development and deployment. Therefore, updates and security patches are seamlessly adopted. The security was furthered by the presence of an API gateway, which eased the implementation of strict security policies. In a nutshell, microservices applied together with serverless computing proved to be a very effective architecture for IoT systems, offering flexibility and improvement of performance without compromising security.</p>
    
            <h3>PAPER 10: Energy- and Resource-Aware Graph-Based Microservices Placement in the Cloud-Fog-Edge Continuum</h3>
            <p>Imane Taleb 1 , Jean-Loup Guillaume 1 , and Benjamin Duthil 2</p>
            <p>1 L3i, La Rochelle University, La Rochelle, France</p>
            <p>2 EIGSI, La Rochelle, France {imane.taleb, jean-loup.guillaume}@univ-lr.fr</p>
            <p>The cloud-fog-edge continuum presents new challenges for resource allocation and energy efficiency at the heterogeneous resources available in cloud, fog, and edge layers. Because of this fact, an efficient approach toward the placement of microservices will be necessary with the aim of optimizing the usage of resources and reducing energy consumption in IoT environments. Applications of non-intelligent placement strategies lead to energy inefficiencies and waste of resources that may undermine system performance and raise operational costs.</p>
            <p>It also proposes a graph-based model for the optimal placement of microservices across the cloud-edge continuum, considering energy consumption and resource availability for microservice placement at each layer. The authors propose an optimization strategy that will jointly consider resources and energy to minimize operational costs while meeting performance constraints related to latency and bandwidth.</p>
            <p>The authors have proposed a graph-based optimization algorithm, modeling both energy and resource requirements for the microservices deployed across the continuum. The authors implemented the algorithm on the cloud simulation platform integrated with data from IoT devices and computing nodes in the cloud, fog, and Edge environments. Several energy-efficient deployment strategies were tested, and the performance is measured against energy savings, resource utilization, and latency. Real-world scenarios, such as IoT device communication patterns and cloud server capacities, were used in validating the model by simulation.</p>
            <p>The graph-based model proposed here achieved large improvements in energy efficiency and resource utilization. It allowed the system to optimize the placement of microservices such that overall energy consumption was reduced while meeting performance requirements at latency and throughput. This approach proved efficient for the facilitation of problems created by microservices deployment in multilayered IoT environments in terms of cost efficiency and sustainability. It has shown high potential for large-scale utilization in IoT contexts where energy efficiency is considered the main concern.</p>
    
            <h3>PAPER 11: Microservice Security Agent Based on API Gateway in Edge Computing</h3>
            <p>Rongxu Xu (rongxu@jejunu.ac.kr), Wenquan Jin (wenquan.jin@jejunu.ac.kr), Dohyeun Kim (kimdh@jejunu.ac.kr)</p>
            <p>1 Department of Computer Engineering, Jeju National University, Jeju 63243, Korea</p>
            <p>2 Bigdata Research Center, Jeju National University, Jeju 63243, Korea</p>
            <p>Many edge computing environments are vulnerable to security threats because of their normally distributed nature, which comes with various resource constraints. Traditional intrusion detection systems and firewalls are not easy to deploy on any edge environment due to limited computational power and memory. For that reason, this leaves microservices in the edge environment exposed to a variety of cyber-attacks, such as data breach, DDoS, and unauthorized access.</p>
            <p>The paper introduces a lightweight security agent integrated into the API gateway at the edge computing environment. It will monitor the traffic between microservices, enforcing some security policies including authentication, encryption, and access control. The agent must have been lightweight and efficient to optimize resource usage, quite critical in edge environments with limiting computational power.</p>
            <p>The authors have implemented a security agent that can be deployed within an API gateway to allow for real-time monitoring and security enforcement in the context of edge computing. In this regard, they developed a simulated edge network consisting of several IoT devices and microservices interacting with cloud servers to test the system. In this respect, the security agent resorted to lightweight cryptographic methods and mechanisms of policy enforcement, including token-based authentication and TLS encryption. In other words, the effectiveness of the agent was in identifying and deflection of security threats without significantly hindering such performance factors as latency or time to process.</p>
            <p>The effective integration of a security agent into an API gateway was thus very helpful in shrinking the attack surface area and improving edge computing security. Furthermore, its lightweight design means that security can be enforced without performance deterioration of a system. This approach proved helpful in protecting microservices within resource-constrained environments, whereby traditional security methods might turn out to be resource-intensive. The paper states that using a security agent at an API gateway provides a scalable and efficient solution for the protection of microservices in edge computing environments.</p>
    
            <h3>PAPER 12: StatuScale: Status-aware and Elastic Scaling Strategy for Microservice Applications</h3>
            <p>LINFENG WEN, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences; University of Chinese Academy of Sciences, China</p>
            <p>MINXIAN XU, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, China</p>
            <p>SUKHPAL SINGH GILL, Queen Mary University of London, UK</p>
            <p>MUHAMMAD HAFIZHUDDIN HILMAN, Universitas Indonesia, Indonesia</p>
            <p>SATISH NARAYANA SRIRAMA, University of Hyderabad, India</p>
            <p>KEJIANG YE, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, China</p>
            <p>CHENGZHONG XU, State Key Lab of IOTSC, University of Macau, China</p>
            <p>Microservice applications experience resource underprovisioning or overprovisioning with workloads that are usually unpredictable. The result is poor performance, with inefficient usage of resources, thereby increasing operational costs. Traditional scaling methods based on fixed thresholds do not adapt to fluctuating demands. This inevitably results in wasted resources during periods of low load and increased latency when at peak demands.</p>
            <p>It proposes StatuScale-a novel elastic scaling strategy for microservice applications. This approach is based on the real-time monitoring of the status and load associated with each service, while continuously assessing a service's health and workload in a dynamic and automatic manner to adjust the amount of allocated resources for an optimal balance between performance and cost efficiency.</p>
            <p>This paper is proposing a new status-aware scaling algorithm using control theory and predictive analytics. The system follows a feedback loop that gathers real-time metrics on CPU usage, memory consumption, and response times at an individual service level. The algorithm takes these metrics for workload predictions, considering the current status and predicted demand in order to take scaling decisions. The proposed method has been tested within diverse cloud environments for scalability in various real-world scenarios.</p>
            <p>StatuScale provides a much more effective elastic scaling method for microservice-based applications than previous scaling models. Through real-time tracking and predictive analytics, the approach has reduced waste of resources by providing timely scaling. Moreover, the approach has shown improvements in both service availability and system resilience. The proposed method is a promising strategy for elastic resource management in microservice architectures, particularly for environments with highly variable workloads.</p>
        </section>
    </main>
    

        <section id="taxonomy-content" class="page hidden">
            <h3>Taxonomy</h3>
            
            <table>
                <thead>
                    <tr>
                        <th>Paper Citation</th>
                        <th>Problem Domain</th>
                        <th>Solution Approach</th>
                        <th>Web Arch. Type</th>
                        <th>Evaluation Methodology</th>
                        <th>Application Domain</th>
                        <th>Security Mechanism</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Author1 et al. (2021)</td>
                        <td>Resource Allocation</td>
                        <td>Optimization Theory</td>
                        <td>Distributed Edge-Cloud</td>
                        <td>Simulation and Theoretical Analysis</td>
                        <td>IoT and Smart Cities</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Author2 et al. (2022)</td>
                        <td>Real-Time Monitoring</td>
                        <td>Reinforcement Learning</td>
                        <td>Centralized Cloud</td>
                        <td>Real-World Prototyping</td>
                        <td>Healthcare Monitoring</td>
                        <td>Secure Communication Protocols</td>
                    </tr>
                    <tr>
                        <td>Author3 et al. (2023)</td>
                        <td>Data Privacy</td>
                        <td>Differential Privacy</td>
                        <td>Decentralized Blockchain</td>
                        <td>Empirical Analysis</td>
                        <td>N/A</td>
                        <td>Homomorphic Encryption</td>
                    </tr>
                    <tr>
                        <td>Author4 et al. (2020)</td>
                        <td>Network Traffic Management</td>
                        <td>Heuristic Algorithms</td>
                        <td>Hybrid (Edge and Cloud)</td>
                        <td>Simulation Study</td>
                        <td>Autonomous Vehicles</td>
                        <td>Anomaly Detection</td>
                    </tr>
                    <tr>
                        <td>Author5 et al. (2021)</td>
                        <td>Intelligent Decision Making</td>
                        <td>Supervised Learning</td>
                        <td>Cloud-Only</td>
                        <td>Real-World Deployment</td>
                        <td>Smart Manufacturing</td>
                        <td>Federated Identity Management</td>
                    </tr>
                </tbody>
            </table>
        </section>
        

        <section id="content-content" class="page hidden">
            <h3>Content</h3>
            <ul>
                <li>Microservice Solutions for IoT Devices</li>
                <li>Nanoservice Architecture for Edge Computing</li>
                <li>Cloud-Based System Integration</li>
            </ul>
        </section>

        <section id="teampage-content" class="page hidden">
            <h3>Team Page</h3>
            <div class="team-container">
                <div class="team-member">
                    <img src="images/venkat.jpeg" alt="Sai Venkat Kumar Gunnapaneni" class="team-photo">
                    <h4>Sai Venkat Kumar Gunnapaneni</h4>
                    <p>Website Developer</p>
                    <br>
                    <p>As a Master's student in Computer Science at Saint Louis University, I am passionate about creating efficient, visually appealing web solutions. With a solid foundation in web development and experience in full-stack technologies, I have honed my skills in designing and developing user-friendly websites.</p> 
                </div>

                <div class="team-member">
                    <img src="images/Alex.png" alt="ALEX CHILAKA" class="team-photo">
                    <h4>ALEX CHILAKA</h4>
                    <p>Lead Architect</p>
                    <br>
                    <p>I'm currently pursuing a Master's degree in Computer Science at Saint Louis University. My goal is to become a full-stack developer, and courses like Web Technologies are helping me build a solid foundation in core topics essential for this path.</p>
                </div>

                <div class="team-member">
                    <img src="images/rakesh.jpg" alt="Rakesh Reddy Dodda" class="team-photo">
                    <h4>Rakesh Reddy Dodda</h4>
                    <p>Website Developer</p>
                    <br>
                    <p> I am a graduate student doing computer science in Saint Louis University. I am interested in cloud computing and i want to build my carrer towards that. This course web technologys helps me to gain the basic knowledge of building the website it will be helpful for me in my career growth.
                    </p>
                </div>

                <div class="team-member">
                    <img src="images/param.png" alt="Member 5" class="team-photo">
                    <h4>Param Sangani</h4>
                    <p>Reporting and Delivery Lead</p>
                    <br>
                    <p>I am a PhD student in Computer Science at Saint Louis University. I love hardware and software engineering for drones and robots. My interest for web development and research started when I built my first website and it continues to grow everyday.</p>
                </div>

                <div class="team-member">
                    <img src="images/ramya.jpg" alt="Sai Ramya Valleru" class="team-photo">
                    <h4>Sai Ramya Valleru</h4>
                    <p>Edge Computing Specialist</p>
                    <br>
                    <p>I am a master’s student who enjoys taking on different kinds of work and challenges. I have strong skills in Computer Science and love learning new things.</p>
                </div>
            </div>
        </section>
        <section id="references-content" class="page hidden">
>>>>>>> e229ffb28b903111d3252deeaeeb0b1140d3dade:index.html
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>References</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            K. Alanezi and S. Mishra, 
                            "<a href="https://ieeexplore.ieee.org/abstract/document/9864183" target="_blank">Utilizing Microservices Architecture for Enhanced Service Sharing in IoT Edge Environments</a>,"
                            in <i>IEEE Access</i>, vol. 10, pp. 90034-90044, 2022, 
                            doi: <a href="https://doi.org/10.1109/ACCESS.2022.3200666" target="_blank">10.1109/ACCESS.2022.3200666</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            E. Harjula, A. Artemenko, and S. Forsström, 
                            "<a href="https://doi.org/10.1007/978-3-030-51473-0_12" target="_blank">Edge Computing for Industrial IoT: Challenges and Solutions</a>,"
                            in N.H. Mahmood, N. Marchenko, M. Gidlund, and P. Popovski (eds) 
                            <i>Wireless Networks and Industrial IoT</i>, Springer, Cham, 2021, 
                            doi: <a href="https://doi.org/10.1007/978-3-030-51473-0_12" target="_blank">10.1007/978-3-030-51473-0_12</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            S. Hamdan, M. Ayyash, and S. Almajali, 
                            "<a href="https://doi.org/10.3390/s20226441" target="_blank">Edge-Computing Architectures for Internet of Things Applications: A Survey</a>,"
                            in <i>Sensors</i>, vol. 20, no. 22, article 6441, 2020, 
                            doi: <a href="https://doi.org/10.3390/s20226441" target="_blank">10.3390/s20226441</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            J. Zaki, S. M. R. Islam, N. S. Alghamdi, M. Abdullah-Al-Wadud, and K.-S. Kwak, 
                            "<a href="https://doi.org/10.1109/ACCESS.2022.3161455" target="_blank">Introducing Cloud-Assisted Micro-Service-Based Software Development Framework for Healthcare Systems</a>,"
                            in <i>IEEE Access</i>, vol. 10, pp. 33332-33348, 2022, 
                            doi: <a href="https://doi.org/10.1109/ACCESS.2022.3161455" target="_blank">10.1109/ACCESS.2022.3161455</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            L. Souza de Castro and S. Rigo, 
                            "<a href="https://doi.org/10.48550/arXiv.2301.07803" target="_blank">Relating Edge Computing and Microservices by means of Architecture Approaches and Features, Orchestration, Choreography, and Offloading: A Systematic Literature Review</a>,"
                            2023, doi: <a href="https://doi.org/10.48550/arXiv.2301.07803" target="_blank">10.48550/arXiv.2301.07803</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>
                            Q. Qu, R. Xu, S. Y. Nikouei, and Y. Chen, 
                            "<a href="https://doi.org/10.1109/INFOCOMWKSHPS50562.2020.9163068" target="_blank">An Experimental Study on Microservices based Edge Computing Platforms</a>,"
                            in <i>IEEE INFOCOM 2020 - IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS)</i>, 
                            Toronto, ON, Canada, 2020, pp. 836-841, 
                            doi: <a href="https://doi.org/10.1109/INFOCOMWKSHPS50562.2020.9163068" target="_blank">10.1109/INFOCOMWKSHPS50562.2020.9163068</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>
                            E. Harjula <i>et al.</i>, 
                            "<a href="https://doi.org/10.1109/ACCESS.2019.2936714" target="_blank">Decentralized IoT Edge Nanoservice Architecture for Future Gadget-Free Computing</a>,"
                            in <i>IEEE Access</i>, vol. 7, pp. 119856-119872, 2019, 
                            doi: <a href="https://doi.org/10.1109/ACCESS.2019.2936714" target="_blank">10.1109/ACCESS.2019.2936714</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>
                            J. Islam, E. Harjula, T. Kumar, P. Karhula, and M. Ylianttila, 
                            "<a href="https://doi.org/10.1109/CSCN.2019.8931321" target="_blank">Docker Enabled Virtualized Nanoservices for Local IoT Edge Networks</a>,"
                            in <i>2019 IEEE Conference on Standards for Communications and Networking (CSCN)</i>, 
                            Granada, Spain, 2019, pp. 1-7, 
                            doi: <a href="https://doi.org/10.1109/CSCN.2019.8931321" target="_blank">10.1109/CSCN.2019.8931321</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>
                            R. Ouyang, J. Wang, H. Xu, S. Chen, X. Xiong, A. Tolba, and X. Zhang, 
                            "<a href="https://doi.org/10.3390/s23104868" target="_blank">A Microservice and Serverless Architecture for Secure IoT System</a>,"
                            in <i>Sensors (Basel)</i>, vol. 23, no. 10, article 4868, May 2023, 
                            doi: <a href="https://doi.org/10.3390/s23104868" target="_blank">10.3390/s23104868</a>, 
                            PMID: 37430781, PMCID: PMC10220873.
                        </td>
                    </tr>
                    <tr>
                    <td>10</td>
                    <td>
                        I. Taleb, J. L. Guillaume, and B. Duthil, 
                        "<a href="https://doi.org/10.1007/978-3-031-63749-0_17" target="_blank">Energy- and Resource-Aware Graph-Based Microservices Placement in the Cloud-Fog-Edge Continuum</a>,"
                        in L. Franco, C. de Mulatier, M. Paszynski, V. V. Krzhizhanovskaya, J. J. Dongarra, and P. M. A. Sloot (eds), 
                        <i>Computational Science – ICCS 2024. Lecture Notes in Computer Science, vol 14832</i>, Springer, Cham, 2024, 
                        doi: <a href="https://doi.org/10.1007/978-3-031-63749-0_17" target="_blank">10.1007/978-3-031-63749-0_17</a>.
                    </td>
                    </tr>
                    <tr>
                    <td>11</td>
                    <td>
                        D. D. Sánchez-Gallegos <i>et al.</i>, 
                        "<a href="https://doi.org/10.1109/ACCESS.2020.3006037" target="_blank">On the Continuous Processing of Health Data in Edge-Fog-Cloud Computing by Using Micro/Nanoservice Composition</a>,"
                        in <i>IEEE Access</i>, vol. 8, pp. 120255-120281, 2020, 
                        doi: <a href="https://doi.org/10.1109/ACCESS.2020.3006037" target="_blank">10.1109/ACCESS.2020.3006037</a>.
                    </td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>
                            J. Islam, T. Kumar, I. Kovacevic, and E. Harjula, 
                            "<a href="https://doi.org/10.1109/ACCESS.2021.3102867" target="_blank">Resource-Aware Dynamic Service Deployment for Local IoT Edge Computing: Healthcare Use Case</a>,"
                            in <i>IEEE Access</i>, vol. 9, pp. 115868-115884, 2021, 
                            doi: <a href="https://doi.org/10.1109/ACCESS.2021.3102867" target="_blank">10.1109/ACCESS.2021.3102867</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>
                            E. Harjula, P. Karhula, J. Islam, T. Leppänen, A. Manzoor, M. Liyanage, C. Jagmohan, T. Kumar, I. Ahmad, and M. Ylianttila, 
                            "<a href="https://doi.org/10.1109/ACCESS.2019.2936714" target="_blank">Decentralized IoT Edge Nanoservice Architecture for Future Gadget-Free Computing</a>,"
                            in <i>IEEE Access</i>, vol. PP, 2019, 
                            doi: <a href="https://doi.org/10.1109/ACCESS.2019.2936714" target="_blank">10.1109/ACCESS.2019.2936714</a>.
                        </td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>
                            P. Gkonis, A. Giannopoulos, P. Trakadas, X. Masip-Bruin, and F. D'Andria, 
                            "<a href="https://doi.org/10.3390/fi15120383" target="_blank">A Survey on IoT-Edge-Cloud Continuum Systems: Status, Challenges, Use Cases, and Open Issues</a>,"
                            in <i>Future Internet</i>, vol. 15, article 383, 2023, 
                            doi: <a href="https://doi.org/10.3390/fi15120383" target="_blank">10.3390/fi15120383</a>.
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
  );
}

export default References;