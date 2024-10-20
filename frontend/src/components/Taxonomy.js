import React from 'react';
import '../App.css';
function Taxonomy() {
  return (
    <section>
      <h3>Taxonomy</h3>
          <table>
              <thead>
                  <tr>
                      <th>Category Name</th>
                      <th>Papers Citations</th>
                      <th>Problem Domain</th>
                      <th>Solution Approach</th>
                      <th>Web Arch Type</th>
                      <th>Evaluation Methodology</th>
                      <th>Application Domain</th>
                      <th>Security Mechanism</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Architectures for Microservices and Nanoservices</td>
                      <td>Alanezi & Mishra (Paper 1), Zaki et al., Pallewatta et al. (Paper 10)</td>
                      <td>Service Delivery in Resource-Constrained Environments</td>
                      <td>Microservices Architecture Design</td>
                      <td>Microservices, Nanoservices</td>
                      <td>Taxonomy Development</td>
                      <td>IoT Edge Environments</td>
                      <td>None</td>
                  </tr>
                  <tr>
                      <td>Edge and Cloud Deployment and Placement Strategies</td>
                      <td>Pallewatta et al. (Paper 10), Taleb et al. (Paper 21), Islam et al. (Paper 15)</td>
                      <td>Efficient Resource Usage in Distributed Systems</td>
                      <td>Placement Algorithms</td>
                      <td>Edge and Cloud</td>
                      <td>Case Studies, Performance Metrics</td>
                      <td>Healthcare, IoT</td>
                      <td>None</td>
                  </tr>
                  <tr>
                      <td>Cloud, Edge, and IoT Resource Management and Optimization</td>
                      <td>Harjula et al. (Paper 9), Gkonis et al. (Paper 18), Sánchez-Gallegos et al. (Paper 16)</td>
                      <td>Task Allocation and Resource Optimization</td>
                      <td>Resource Management Strategies</td>
                      <td>Cloud, Edge, IoT</td>
                      <td>Optimization Models, Simulation</td>
                      <td>Industrial IoT, Healthcare</td>
                      <td>None</td>
                  </tr>
                  <tr>
                      <td>Service-Oriented Architectures' Scalability and Performance</td>
                      <td>Namasudra et al. (Paper 11), Gkonis et al. (Paper 18), Wen et al. (Paper 22)</td>
                      <td>Scalability and Performance in Service-Oriented Systems</td>
                      <td>Performance Metrics and Scaling Techniques</td>
                      <td>Microservices</td>
                      <td>Performance Evaluation, Benchmarking</td>
                      <td>Healthcare, IoT</td>
                      <td>Blockchain, Performance Monitoring</td>
                  </tr>
                  <tr>
                      <td>Security and Privacy in Architectures of Microservices and Nanoservices</td>
                      <td>Dhasarathan et al. (Paper 13), Chen et al. (Paper 14), Xu et al. (Paper 20)</td>
                      <td>Security and Privacy Issues in Service Architectures</td>
                      <td>Federated Learning, Neural Networks, API Gateways</td>
                      <td>Microservices</td>
                      <td>Security Analysis, Risk Assessment</td>
                      <td>Healthcare, IoT</td>
                      <td>Federated Learning, API Gateway Security</td>
                  </tr>
                  <tr>
                      <td>IoT and Edge Computing Applications in Healthcare</td>
                      <td>Abdullayeva (Paper 12), Sánchez-Gallegos et al. (Paper 16), Harjula et al. (Paper 17)</td>
                      <td>Effective Service Delivery in Healthcare</td>
                      <td>Decentralized Nanoservice Architectures</td>
                      <td>IoT, Edge</td>
                      <td>Case Studies, Real-time Data Management</td>
                      <td>Healthcare</td>
                      <td>None</td>
                  </tr>
                  <tr>
                      <td>Research and Simulations in Theory</td>
                      <td>Kim et al., Harjula et al. (Paper 9), Taleb et al. (Paper 21)</td>
                      <td>Theoretical Foundations of Service Architectures</td>
                      <td>Control Theory, Graph-Based Frameworks</td>
                      <td>Theoretical Models</td>
                      <td>Simulation, Theoretical Analysis</td>
                      <td>Industrial IoT</td>
                      <td>None</td>
                  </tr>
              </tbody>
          </table>
        </section>
  );
}

export default Taxonomy;