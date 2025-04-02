"use client"
import React from "react";



const scheduleData = [
  { session: "Technical Session-1", id: 13, title: "CNN-Based Nerve Block Segmentation", presenter: "Ravi Teja Gundimeda", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: 24, title: "Design and Implementation of Carry Look-Ahead Adder using PTL with Comparative Analysis Against Transmission Gate Logic", presenter: "Chezhiyan M", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: 27, title: "Evolving Tactics in Social Engineering Attacks in the Current Era: A Multi-Platform Honeypot Approach for Awareness and Defense", presenter: "Klk Charith", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: 52, title: "Classification of Gene Expression Data Using Ensemble Learning with Effective Feature Selection and Optimization Techniques", presenter: "Sivaprakash Sriram", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: 58, title: "Comparative Analysis of Neural Network-Based Models for Sentiment Analysis on Twitter Data", presenter: "Arvind Mewada", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: 86, title: "IOT BASED VEHICLE ACCIDENT PREVENTION AND DETECTION SYSTEM USING MOBILE APPLICATION", presenter: "Madhan S", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: 95, title: "Integrating Artificial Intelligence with Virtual Reality and Augmented Reality for Enhanced Military Training and Simulations", presenter: "Amanpreet Kaur", track: "Main Track: ICCSAI2025" },
  { session: "Technical Session-1", id: 120, title: "SMART WASTE MANAGEMENT WITH AI POWERED CLASSIFICATION AND ROUTING: THE THINK ZERO WASTE APP (T2E APP)", presenter: "Brindha A", track: "Main Track: ICCSAI2025" },
  { session: "Technical Session-1", id: 126, title: "Exploring the Synergy and Challenges of Blockchain Technology in the Quantum Cryptography Era A Comprehensive Review", presenter: "Ayush Giri", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: 143, title: "Energy Management Strategies for Optimal Performance of ESS Supported Fuel Cell-Hybrid Electric Vehicles", presenter: "Billa Pardhasaradhi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 149, title: "Brain MRI Classification Using Deep Learning Algorithm", presenter: "Chitra Thinger", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 162, title: "QUANTUM TRANSFER LEARNING FOR BREAST CANCER DETECTION", presenter: "Alok Kumar Srivastava", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 163, title: "A Hybrid Classical-Quantum Model for Enhanced MRI-Based Brain Tumor Classification Using Transfer Learning and Quantum Neural Networks", presenter: "Alok Kumar Sri", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 176, title: "Metric-Scale 3D Scene Reconstruction Using Dual Images from a Calibrated Camera", presenter: "Mukesh Kumar Verma", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 210, title: "Assistive Vision: Intelligent Blind Stick", presenter: "Hitesh Guptha V", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 215, title: "Heart Attack Risk Prediction Using Retinal Fundus Images and CNN Based Deep Neural Network", presenter: "Shubhi Chandra", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 228, title: "Blockchain Enabled Approach for Secure and Transparent Courier Tracking", presenter: "Raj Kumar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 289, title: "Detecting Wildfire hazards using Convolutional Neural Networks", presenter: "Manthena Sivanuja", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 291, title: "Hybrid Deep Learning with Multi-Level Context for Pain Assessment Using Physiological Signals", presenter: "Vatsavai Harini", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: 292, title: "Predicting Public Sector Energy Efficiency with Cloud Data Centre using a Consolidation of Machine Learning", presenter: "Tiyas Sarkar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: 301, title: "Implementing a resilient and pairing-free aggregate signature scheme for healthcare internet of things networks", presenter: "M.Selvam", track: "Main Trade: ICCSAI 2025" },
  { session: "Technical Session-3", id: 302, title: "Advanced Health Care Monitoring in IoMT Systems through Integrated CNN and LSTM", presenter: "Mr J Solithan Alikhan", track: "Main Trade: ICCSAI 2025" },
  { session: "Technical Session-3", id: 303, title: "Utilising Machine Learning Techniques to Evaluate the Survival Probability of Head and Neck Cancer Patients Based on Their Smoking Habits and Medical History", presenter: "Preibhda C. Kaladeep Yalagi", track: "Main Trade: ICCSAI 2025" },
  { session: "Technical Session-3", id: 305, title: "Cooperative Intelligence Constructing an Internet of Things for Diverse Discourse", presenter: "Arun Kumar Arijeda", track: "Main Trade: ICCSAI 2025" },
  { session: "Technical Session-3", id: 306, title: "Enhanced Scheduling Adaptability in Internet of Things (IoT) Networks via Collaborative Policy Learning and Federated Reinforcement Models", presenter: "Dr R Jayanthi", track: "Main Trade: ICCSAI 2025" },
  { session: "Technical Session-3", id: 0, title: "High-Speed and Energy Efficient Universal Shift Register using Novel Hybrid CNTFET-MOSFET D Flip-Flops for Modern VLSI Systems", presenter: "Bejish S", track: "Main Trade: ICCSAI 2025" },
  { session: "Technical Session-3", id: 323, title: "A Blockchain-based IoMT Framework using cloud computing: A Comprehensive Review", presenter: "Volya Srivastava", track: "Main Track: ICGAI2025" },
  { session: "Technical Session-3", id: 329, title: "Deep Learning Applications in Natural Language Processing for Sentiment Analysis: Unlooking Consumer Behavior Trends", presenter: "Ms. Aalsantha Soy", track: "Main Track: ICGAI2025" },
  { session: "Technical Session-3", id: 330, title: "Deep Learning for Image and Video Processing in Surveillance Systems: Advancing Security with AI-Driven Insights", presenter: "I. Sudha", track: "Main Track: ICGAI2025" },
  { session: "Technical Session-3", id: 331, title: "Deep Learning in Autonomous Vehicles for Dynamic Decision-Making: Enhancing Safety and Navigation", presenter: "Anhu Nayak", track: "Main Track: ICGAI2025" },
  { session: "Technical Session-4", id: 332, title: "Predictive Maintenance in Industries Using Deep Learning Models: Reducing Downtime and Increasing Efficiency", presenter: "Thinkaran K", track: "Main Track: ICCSA/2025" },
  { session: "Technical Session-4", id: 333, title: "Improving Disease Diagnosis through Medical Data Mining and Predictive Analysis: Towards Data-Driven Healthcare", presenter: "Thinkaran K", track: "Main Track: ICCSA/2025" },
  { session: "Technical Session-4", id: 334, title: "Dynamic Resource Management in IoT Ecosystems Using Reinforcement Learning: Towards Scalable and Efficient Solutions", presenter: "F Rahman", track: "Main Track: ICCSA/2025" },
  { session: "Technical Session-4", id: 335, title: "Energy-Efficient IoT Systems for Smart Cities: Powering the Urban Transformation", presenter: "P.S.Kamesh", track: "Main Track: ICCSA/2025" },
  { session: "Technical Session-4", id: 336, title: "Geospatial Data Mining for Disaster Management: Enhancing Emergency Response Capabilities", presenter: "A.Ponmalar", track: "Main Track: ICCSA/2025" },
  { session: "Technical Session-4", id: 337, title: "Leveraging IoT for Environmental Monitoring: Real-Time Data Collection and Analysis for Sustainable Development", presenter: "Sudha Narang", track: "Main Track: ICCSA/2025" },
  { session: "Technical Session-4", id: 338, title: "Secure Data Transmission in IoT Networks Using Blockchain and Lightweight Cryptography: Safeguarding the Connected Future", presenter: "VMween", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: 339, title: "Deep Learning Advancement for Brain-Tumor Classification and Comprehensive Diagnosis", presenter: "Bedamsetty Vitali", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: 340, title: "Detection and Classification Approach of Denial of Service Attack in SDN", presenter: "Pooja Chaturvedi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: 355, title: "Analysis of the Connectivity Protocols to the Internet of Things and Impacts on Precision Agriculture Practiced in Open Spaces", presenter: "Panudapati Lakshmi Satya", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 356, title: "CAC Training - A Unified Cybersecurity Training Program for Military Staff", presenter: "Nookala Venu", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 362, title: "Assessing the Importance and Pertinence of Cybersecurity Content via Textual Similarity and a Cybersecurity Knowledge Graph", presenter: "Vivekanandan.Research@gmail.com", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 363, title: "Optimizing the Placement of Virtual Network Functions for Energy Efficiency in a Wireless Mesh Network", presenter: "Nookala Venu", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 404, title: "CROP YELLO PREDICTION FOR SMART FARMING", presenter: "Vansh Gupta , Sourabh , Veer Pratap, Ajay Kumar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 420, title: "NeuroPark Guide: Cutting-Edge AI for Parking Solutions", presenter: "Anil Balkani", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 501, title: "AI-Powered Segmentation of Tumors in Multi-Modal Medical Images* has been peer-reviewed and accepted for consideration at *2025 3rd International Conference on Communication, Security, and Artificial Intelligence", presenter: "Nilkanth Mukund Deshpande", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 502, title: "Deep Learning-Based Object Detection Across Multiple Visual Domains", presenter: "Nilkanth Mukund Deshpande", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 507, title: "Evaluating Sentiment Classification Techniques for Analyzing COVID-19 Vaccination Opinions on Twitter data", presenter: "Ashutosh Mishra", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 525, title: "Adaptive Network Security Using Machine Learning for Real-Time Threat Detection", presenter: "S.B.Prakalya", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: 526, title: "Association Rule Mining for Optimizing Inventory Management in Retail: Improving Stock Control and Reducing Costs Using ML Model", presenter: "Swathi Agarwal", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 527, title: "Data Mining Techniques for Customer Segmentation in E-Commerce Platforms: Unlocking the Power of Personalization", presenter: "B. Lakshma Reddy", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 528, title: "Developing Self-Healing Networks with Bio-inspired Algorithms: Enhancing Resilience in Modern Networks", presenter: "Thinakaran K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 529, title: "Dynamic Load Balancing in Cloud Networks Using Multi-Agent Systems: Ensuring High Availability and Efficiency", presenter: "K. Krishnakumar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 530, title: "Hybrid Routing Protocols for Efficient Data Transfer in Wireless Networks", presenter: "K. Krishnakumar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 545, title: "Design of Smart System for Mitigating Wild Animal Intrusion in Agricultural farms using IoT and Deep Learning", presenter: "A. Prasanth", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 577, title: "AI-Driven Crop Disease Diagnosis for Sustainable Agriculture Using Convolutional Neural Networks", presenter: "B.J. Job Karuna Sagar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 579, title: "Implementing Zero Trust Architecture for Securing Financial Transactions in Banking Apps Using Homomorphic Encryption and Advanced Access Control Algorithms", presenter: "R. Pradeep", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 580, title: "Personalized Learning Systems Using AI for Adaptive Educational Content Delivery Based on Reinforcement Learning Algorithms", presenter: "B. Lakshma Reddy", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 581, title: "Adaptive Quantum Computing Algorithms for Real-Time Data Processing in High-Dimensional Systems", presenter: "D. Suganthi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: 582, title: "Predictive Maintenance in Smart Factories Using IoT and Big Data Analytics Enhanced by Long Short-Term Memory Networks", presenter: "Sathiyamurthi K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 584, title: "Deep Learning-Based Drug Discovery and Molecular Analysis Accelerating the Future of Medicine", presenter: "P. Nagarajan", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 590, title: "Revolutionizing Human-Computer Interaction with Deep Learning for Speech Recognition and Voice Assistants", presenter: "Nidhi Mishra", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 593, title: "Improving Urban Traffic Management with Big Data-Driven Forecasting Models Using ARIMA and Prophet Algorithms", presenter: "Priya Vij", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 790, title: "Deep Model Exposure and Classification of Diabetic Retinopathy Using Fundus Imaging", presenter: "Ankur Kaushik", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 1056, title: "Integrated Deep Learning Framework for Precision Crop Yield Prediction Using Satellite Imagery and Real-Time Environmental Data", presenter: "Kadaveru Bhavana", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 1186, title: "Real-Time Human Intrusion Detection in Wireless Sensor Networks Using YOLOv7 for Enhanced Perimeter Security", presenter: "Thinakaran K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 1431, title: "HBSP: A Lightweight Framework for Transparent Software Protection Using Hardware Virtualization", presenter: "Niketa Penumajji", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 1513, title: "A Smarter Way to Filter Reviews and Identify Fake Reviews using Random Forest for an Improved Online Shopping Experience", presenter: "Bharath Kumar L", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 1514, title: "Enhanced Security with Deep Learning-Based Intrusion Detection", presenter: "Bharath Kumar L", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: 1651, title: "CHAOS THEORY-DRIVEN IMAGE ENCRYPTION IN IoT ECOSYSTEMS", presenter: "Rompilli Bhanuprakash", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1675, title: "Enhancing Cybersecurity Risk Assessment with Text Mining of Security Bulletins and Advisory Data", presenter: "Suresh Kumar, S", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1679, title: "Semantic Interoperability Framework for Multi-Center Healthcare Big Data Using Conceptual Modeling and SPARQL-Based Analysis", presenter: "Rohith Bhat", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1693, title: "Generating Music with Retention based Latent Transformer Models", presenter: "Viswanathan V", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1730, title: "Fusion of Cloud and Internet of Things towards sustainable Healthcare", presenter: "Arghya Pratim Ghosh", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1744, title: "Ego Vehicle Localization with GPS-IMU Fusion: A Key to Effective Scenario Generation", presenter: "Mukesh Kumar Verma", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1751, title: "Integrated Surveillance System for Real-Time Face Recognition and Image-Based Video Retrieval Using OpenCV and DeepFace", presenter: "Palivela Thanishka", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1842, title: "VITAMIN DEFICIENCY DETECTION USING CNN-BASED IMAGE ANALYSIS OF SKIN, TONGUE AND NAILS", presenter: "Kishore Kumar G", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1892, title: "Real Time Hand Gesture Detection and Recognition to Control PowerPoint Slides", presenter: "Sumita Gupta", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1896, title: "Optimized PCA-ABE with Compression for Efficiency in Edge Computing", presenter: "Sneha Arora", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: 1916, title: "Virtual Mouse Using Machine Learning", presenter: "Sathishkumar A S", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 1987, title: "The Impact of Neuromorphic Computing on Brain-Inspired Robotics: A Novel Architectural Paradigm", presenter: "Sumanshu Jindal", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 2053, title: "Enhanced Link Prediction Using Integrated Classifier", presenter: "Rahul Jaggi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 2057, title: "A Small Pentagonal Patch MIMO Antenna for 5G and WLAN Devices", presenter: "Ashish Phalswal", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 2069, title: "Fake Indian Currency Detection using Computer Vision", presenter: "Lovely", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 2071, title: "Enhanced Deep Learning Approach for Potato Leaf Disease Detection", presenter: "Sweta Kumari", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 2121, title: "Automated Trading Decisions", presenter: "Harsh Srivastava", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 43, title: "Integration of IoT & Blockchain using AI for Optimizing Multi-Echelon Inventory System", presenter: "Tanmay Sharma", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 1945, title: "Helmet Verify: AI Detection System for Safety Check", presenter: "Pratham Sherawat", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 2006, title: "Short-Term Weather Forecasting", presenter: "Pratyush Gupta", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: 2242, title: "GhostNet Model Based Brain Tumor Classification Using MRI Images", presenter: "Vishakha Yadav", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-10", id: 1584, title: "Brain Tumor Detection Using U-Net: A Deep Learning Approach", presenter: "Pratishtha Verma", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 1617, title: "AI-BASED COW DETECTION AND TRACKING TO MONITOR REAL-LIFE LIVESTOCK FARMING", presenter: "Pratishtha Verma", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 1659, title: "Optimizing Dataset Management with Blockchain Based Cryptographic Hashing and Proof-of-Work", presenter: "Kartikey Jaiswal", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 1694, title: "AgroBuddy: Empowering Indian Farmers Through Precision Farming Chatbot", presenter: "Rayaan Sheikh", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 1798, title: "Early Stage Prediction of Type 2 Diabetes Mellitus using Prominent Genemarkers", presenter: "Adithya N Reddy", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 2007, title: "XceptionSELLte: Lightweight and Efficient Network for Traffic Sign Recognition", presenter: "S. Delvanayaki", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 2045, title: "Change Detection for Land-Cover Classification Using Deep Learning", presenter: "Bishal Choudhury", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 2060, title: "GAS FEES OPTIMIZATION", presenter: "Snehlata", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 2134, title: "Attention-Driven CNN-LSTM Hybrid Models for Secure Dynamic Signature Verification", presenter: "Ms. Atiya Rafiq Kazi", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10", id: 2219, title: "Comprehensive Study on Integrating AI-Powered Threat Intelligence Using Large Language Models", presenter: "Nishith P", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-11", id: 2231, title: "Harnessing the Power of Machine Learning in Multi-Agent Systems for B2C E-Commerce Optimization", presenter: "Manoj Kumar Mishra", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-11", id: 2235, title: "Real-Time Monitoring and Ambulance Prioritization Using YOLOv9 and Deep Learning", presenter: "Gokul D", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-11", id: 1588, title: "Exploring the Implementation of Artificial Intelligence in the Indian Legal System", presenter: "Munish Kumar", track: "Track 15:Revolutionizing Connectivity: The Power of IIoT, IoT, and IMOT for a Sustainable Future" },
  { session: "Technical Session-11", id: 1637, title: "Driver Drowsiness Detection System Using Computer Vision", presenter: "Aniket Dogra", track: "Track 15:Revolutionizing Connectivity: The Power of IIoT, IoT, and IMOT for a Sustainable Future" },
  { session: "Technical Session-11", id: 1830, title: "Analysis of Efficient Task Scheduling Algorithms in Fog Computing Environment", presenter: "Prince Gupta", track: "Track 15:Revolutionizing Connectivity: The Power of IIoT, IoT, and IMOT for a Sustainable Future" },
  { session: "Technical Session-11", id: 1974, title: "ECO DYNAMIC DYGESTER: A PIONEERING APPROACH TO GENERATE CLEAN ENERGY FROM ORGANIC FOOD WASTE", presenter: "Chanapathi Yamini", track: "Track 16:Emerging Electrical and Electronic Technologies for Innovations, and Energy and Environmental Sustainability" },
  { session: "Technical Session-11", id: 78, title: "IOT-Enabled Smart Home Automation with YOLOv5 Human Detection", presenter: "Raman Sharma", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-11", id: 110, title: "MRI-Based Brain Tumor Classification Using Transfer Learning", presenter: "Soham Misal", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-11", id: 142, title: "Deep Learning Approaches for viral Infectious Disease Detection from Chest X-rays image dataset.", presenter: "Juli Kumari", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-11", id: 2064, title: "Energy-Efficient Approximate Compressor Design for Image Processing Applications", presenter: "Aluvoju Vivek", track: "Track 16: Emerging Electrical and Electronic Technologies for Innovations, and Energy and Environmental Sustainability" },
  { session: "Technical Session-12", id: 183, title: "A Machine Learning Approach to Early Detection and Classification of Kidney Disease", presenter: "Ashwani Kumar", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 249, title: "LYNX-RNA: A Scalable Nextflow Workflow for RNA-Seq Analysis with Integrated Large Language Models for comprehensive Result Interpretation", presenter: "Devanshi Sharma", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 262, title: "Evaluating Multi-Layer Perceptron and Recurrent Neural Networks for Speech Emotion Recognition", presenter: "Satyam Solanki", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 313, title: "Dynamic Traffic Optimization through Cloud Enabled Big Data Analytics and Machine Learning for Enhanced Urban Mobility", presenter: "Ettedi Anvesh", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 405, title: "A Comparative Study of Deep Learning and Fuzzy Logic in the Diagnosis of Ovarian Cancer", presenter: "Parul Parihar", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 494, title: "Optimizing Hybrid Learning Outcomes via Clustering-Guided Data Mining Techniques in Higher Education", presenter: "Brijesh Kumar Verma", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 496, title: "A Comparative Study on Denoising of MRI Images and Classification of Brain Tumor Images Using Deep Learning Techniques", presenter: "Ramshankar N", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 497, title: "Accelerating Antenna Development: The Role of Machine Learning Algorithms", presenter: "Rashmi Sachin Tikar", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 566, title: "Deep Learning-Driven System for Automated Identification of Plant Nutrient Deficiencies", presenter: "Shravya Miriyanam", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-12", id: 574, title: "Enhancing Convolutional Neural Network Performance for Image Classification: A Comparative Study", presenter: "Tasmiya Mujawar", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 656, title: "Model Outcome Comparison Analysis of Legal Text Summarization Techniques Abstractive vs Extractive Approaches", presenter: "Pranav S", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 677, title: "Lung-rethnaNet Lung Cancer Detection Using A RetinaNet With Multi-Scale Feature Fusion And Context Module", presenter: "Vachimappagari Tharum", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 728, title: "Virtual Learning Analysis using Complex Rule-based Approach in the Context of Cloud Computing", presenter: "Yadala Suchartha", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 896, title: "Sequential Story Illustration Generation with Fine-Tuned Diffusion Model for Children Stories", presenter: "Matan P", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 997, title: "Recognition and Parsing of Complex Mathematical Expressions Using CNNs", presenter: "Palak Desai", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 1110, title: "NAÏVE BAYES-BASED ANALYSIS FOR PREDICTING HEART DISEASE", presenter: "Eniyavanan A", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 1214, title: "Enhanced Rice Leaf Diseases Diagnosis Using Deep Learning Model with GAN-Based Synthetic Data Augmentation", presenter: "Shaveta Jain", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 1570, title: "Hybrid RBC Morphology analysis and Diagnostic Framework for β-Thalassemia Using SEBlock-CBAM Enhanced MobileNetV2, Tablet with Optuna Optimization and SMOTE-ENN Resampling", presenter: "Garima Shukla", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-13", id: 1657, title: "A Review on: A lightweight DCCN system for real-time surveillance that detects abandoned objects", presenter: "Neha Thotapalli", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-13", id: 1676, title: "LUNG CANCER PREDICTION USING MACHINE LEARNING", presenter: "S.Priyanka", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" }
];
const scheduleData2 = [
  { session: "Technical Session-14", id: 1708, title: "Automated Transparent Glass Detection System Using Semantic Segmentation", presenter: "Valbhav More", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-14", id: 1718, title: "From Diagnosis to Treatment: A Systematic Review of Machine Learning Technologies in Depression Care Management", presenter: "Ajay Sudhir Bale", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-14", id: 1719, title: "Deep Learning-Based Automatic Fake News Recognition on Online Social Networks", presenter: "Pragya Goswami", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-14", id: 1807, title: "Combating Cyber Abuse: A Toxic Comment Detection Model Using Deep Learning", presenter: "Sriyanshu Awasthi", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-14", id: 1837, title: "A Review On Use of Deep Learning and Hyperspectral Data Integration For Early Stage Crop Disease Detection", presenter: "Dhiraj Bhise", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-14", id: 2058, title: "An Architecture for Model Monitoring System with Automated Data Validation and Failure Handling", presenter: "Sairamakrishna Karri", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-14", id: 1499, title: "A Robust Intelligent License Plate Recognition System for Vehicle Surveillance and Security Control", presenter: "Ch Reshma", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-14", id: 2100, title: "Computer Virus Propagation Models: A Mathematical Review", presenter: "Om Prakash", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-14", id: 2156, title: "Revolutionizing Medical Diagnosis: A Deep Learning Approach for Content-Based Image Retrieval", presenter: "Anupama N", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-14", id: 2204, title: "Mindscape: an AI-powered study companion integrating Natural Language Processing Algorithms", presenter: "Riya Rajesh Sawant", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-15", id: 179, title: "Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices", presenter: "Abhijit Chandratreya", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15", id: 374, title: "AI in Education: Transforming Communication, Security, and Management in Smart EdTech Ecosystems", presenter: "Dr. Priyanka Darekar", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15", id: 417, title: "Pioneering wireless power transfer for electric vehicle charging", presenter: "B Lavanya", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15", id: 506, title: "Arc-Shaped Planar Monopole Antenna for Next-Generation 5G Communication", presenter: "Suryansh Rajawat", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15", id: 616, title: "Optimizing Cost Management and Energy Consumption in Power Plants through Predictive Modelling", presenter: "Gouri Shrivastava", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15", id: 952, title: "DESIGN AND DEVELOPMENT OF SOLAR-BASED COLD STORAGE AND DRYER SYSTEM FOR AGRI - PRODUCTS", presenter: "Nithya P", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15", id: 1841, title: "Interpretable AI for Cyber Security: Enhancing DDoS Detection with LIME and Population-Based Training Models", presenter: "K. Anji Reddy", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15", id: 2031, title: "Diagonal Based Clustering Protocol to Enhance the Lifespan of Wireless Sensor Network", presenter: "Deepak Kannaujaiya", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15", id: 250, title: "Unveiling the Bhagavad Gita: AI-Powered Sanskrit Translation and Interactive Insights", presenter: "Sayali Dadasaheb Patil", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-15", id: 968, title: "Quantum-Driven Healthcare IoT (QH-IoT)", presenter: "Ms. Shriya Kaushal", track: "Track-11: The Convergence of Generative AI and Quantum Computing: Unlocking the Next Frontier of Innovation" },
  { session: "Technical Session-16", id: 280, title: "Deep Learning-Driven COVID-19 Lesion Segmentation in CT scans with R-EDNet", presenter: "Anima Kujur", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 416, title: "Proactive Conservation: Predicting Deforestation Risks Using Machine Learning and Satellite Imagery Analysis", presenter: "Ettedi Rishwanth", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 418, title: "Novel Pothole Detection System using YOLOv8 Algorithm", presenter: "Shruti Shukla", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 458, title: "Empowering B2B Sales through AI-Driven Human Resource Strategies: Bridging Marketing and HR for Enhanced Sales Performance", presenter: "Meghasham Chaudhari", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 532, title: "Roadside Tree Image-Based Air Quality Estimation of Gurugram City, Haryana, India", presenter: "Neelam Yadav", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 630, title: "Real-Time Social Media Sentiment Analysis Using VADER and TextBlob", presenter: "Swetha C.B", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 743, title: "Precision Agriculture: Enhancing Temperature Control through Deep Learning Algorithms and Regional Environmental Parameters", presenter: "Vanshita Gupta S", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 1008, title: "Mapping Human-AI Collaboration - A Skill Framework for the Effective Use of AI", presenter: "Shenali Somaratne", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 1535, title: "Gender Segregation of Silkworm pupae using Transfer Learning", presenter: "Rahul Satish Vadhyar", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-16", id: 2012, title: "Optimizing Ethical Investment Decisions with Hybrid Heuristic", presenter: "Ashish Bhosale", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-17", id: 481, title: "A Hybrid Approach to Intrusion Detection: Autoencoders and Decision Trees for Cybersecurity", presenter: "Kriti Srivastava", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 498, title: "Object-as-a-Service (OaaS): A Mixed Method Approach to Balance Computational Overheads in Serverless Cloud Computing", presenter: "Jhanvi Mehra", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 961, title: "Enhanced Public Key Security Using Cuckoo Search Optimization and Improved AES Algorithm", presenter: "Maalavika S", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 962, title: "Stochastic Forensic Analysis for Detecting Data Theft", presenter: "Sutheekshan B", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 1069, title: "Real-Time Tweet Sentiment Analysis Using Docker Kafka and Django", presenter: "Dhara Lakshmi Kusumanchi", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 1467, title: "Comparative Analysis of Stock Price Prediction with Multiple Machine Learning Model", presenter: "Kawerinder Singh Sidhu", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 1469, title: "Handling Security Aspects in the Internet of Things: Latest Challenges and Measures to Mitigate Risks", presenter: "Kawerinder Singh Sidhu", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 1474, title: "Lightweight Deep Learning for Knee Osteoarthritis Analysis: A MobileNet Perspective", presenter: "Kapil Joshi", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 1683, title: "Identity and Proxy Orientation based Remote Data Integration Checking and Uploading in Public Clouds", presenter: "N. Sampreeth Chowdary", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future" },
  { session: "Technical Session-17", id: 2143, title: "An application-based AI Fitness Trainer integrating Multilayer Perceptron Network & Computer Vision", presenter: "Riya Rajesh Sawant", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications" },
  { session: "Technical Session-18", id: 53, title: "Blockchain-“Based Voting System”: Comprehensive Analysis and Future Prospects", presenter: "Ramanjeet Singh", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 169, title: "Intelligent Real Time Monitoring Module Designed for Helmet and Number Plate Detection", presenter: "Harendra Singh Negi", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 401, title: "A study to investigate effective tools and framework for blockchain based healthcare environment", presenter: "Kritika Sharma", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 424, title: "Deep Diving Into Blockchain Frameworks and Their Issues", presenter: "Sowmya M", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 513, title: "EcoBot: A Smart and Sustainable System for Floating Garbage Collection", presenter: "Aashna Patil", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 565, title: "Geolocation-Based Attendance Tracking System: A Comprehensive Review", presenter: "Shrey Kumar Gupta", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 761, title: "Enhancing Practical Learning Through Augmented Reality: A Case Study in Virtual Labs", presenter: "Manisha Pathania", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 763, title: "The Impact of Augmented Reality on Student Engagement and Retention in STEM Education", presenter: "Chander Partap Singh", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 1647, title: "ST VERSE: AR / VR SIMULATION EXPERIENCE", presenter: "Alkesh Benny", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18", id: 1771, title: "Comprehensive Study to Blockchain Frameworks and Performance Evaluation Tools", presenter: "Rakesh Raushan", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-19", id: 116, title: "A Comparative Analysis of Deep Learning Approaches for Email Spam Detection", presenter: "Ashwani Kumar", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19", id: 212, title: "An Adaptive Neuro Fuzzy Based Intelligent Load Frequency Control in Diverse Hybrid Power Systems", presenter: "Shasya Shukla", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19", id: 226, title: "GLOBAL RESILIENCE INITIATIVE PREVENTING ILLEGAL LOGGING AND MONITORING RESTRICTED", presenter: "Rakshitha Babu", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19", id: 373, title: "Video to Text using Google API", presenter: "Shubhang Pareek", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19", id: 463, title: "Scalable Deployment Solutions for RSUs in VANETs Using Predictive Traffic Analysis Algorithms", presenter: "R-Ezumalai", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19", id: 464, title: "Real-Time Detection of Malicious Nodes using Poplar optimized Sparsity-Aware Network for Improving VANET Security", presenter: "R-Ezumalai", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19", id: 465, title: "A Cluster-Based Routing Strategy For Extending The Lifetime Of Internet Of Things Networks Using Quantum Dilated Convolutional Neural Networks With Emperor Penguin Guidelines", presenter: "S.Jamuna Rani", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19", id: 1780, title: "Deep Learning-Based IoT Framework for Real-Time Health Monitoring", presenter: "Amit Sundas", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-19", id: 1890, title: "Campus Navigation and Augmented Reality Guided Mobile Application", presenter: "Riya Patel", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-19", id: 1926, title: "A Secure IoMT Framework for Next-Gen Healthcare Systems Using Machine Learning", presenter: "Amit Sundas", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-20", id: 466, title: "Harnessing Quantum Convolutional Neural Networks for Enhanced Coverage Hole Detection and Efficient Routing in IoT-Assisted WSNs", presenter: "S-Jamuna Rani", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 467, title: "Intrusion Node Detection And Energy-Efficient Centralized Clustering Using A Similarity-Navigated Graph Neural Network in Wireless Sensor Networks", presenter: "S.Jamuna Rani", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 470, title: "Optimizing Traffic Safety: A Dual Multi-Scale Attention Network for Anomaly Detection in VANETs", presenter: "R-Ezumalai", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 520, title: "Implementation and Optimization of a Fuzzy Rule-based Classifier for Multi-class Classification Using Horizontal Federated Learning", presenter: "Deepak Upadhyay", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 583, title: "Optimizing Bidirectional Power Flow in EV Charging Systems: Topologies and AI-Based Control for V2G/G2V and Renewable Energy Integration", presenter: "Roshan Chitranshi", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 588, title: "NOVA: Advance Virtual Assistant Empowered by Sentiment Analysis for Precision and Accuracy", presenter: "Ankur Singh", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 657, title: "Maximizing the Reliability of Machine Learning based Invasion Detection Systems on a Modern, Unbalanced Dataset", presenter: "R. Saravanakumar", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 660, title: "Machine Learning Techniques For Intrusion Detection in Malware-Infected Android Devices", presenter: "R. Saravanakumar", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 1048, title: "Dynamic Neural Network Training for Self-Driving Cars in Generative Virtual Environments", presenter: "Riya Pandey", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20", id: 1498, title: "FSS-Based Band Pass Filter Design for C-Band Satellite Downlink Interference Mitigation", presenter: "Kannappan P", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 145, title: "Edge Computing for Predictive Braking in Software-Defined Vehicles", presenter: "Nikhilesh Prafulla Sawarkar", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-21", id: 541, title: "Performance and Analysis of Solar Powered Water Trash Collector Boat", presenter: "Harsh Yadav", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 1320, title: "Performance Analysis of Different Data Embedding Techniques: Cryptography, Steganography and Watermarking", presenter: "Dr. Ashok Kumar Yadav", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 1735, title: "A Comprehensive Review of Fake News on Social Media and Its Influence on Modern Society", presenter: "Neha Tyagi", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 1911, title: "AI-Powered Energy Optimization for Carbon Emission Reduction and Sustainability", presenter: "Divya Mishra", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 1947, title: "Comparative Analysis of Different Attention Mechanisms in Hybrid Deep Learning Model for In-Vehicle Intrusion Detection Systems.", presenter: "Vismaya Kk", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 1956, title: "AI-Driven Individual Identification in Surveillance Systems: Leveraging Vision Transformers and Graph Neural Networks for Enhanced Drone Surveillance", presenter: "Brithicksha D", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 1977, title: "Leveraging Machine Learning for Early Detection and Prediction of Suicidal Tendencies in Women", presenter: "Vedatrayee Chatterjee", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 2150, title: "Simplifying Medical report: A Novel Approach to Medical Reporting using OCR technology", presenter: "Ritesh Verma", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21", id: 2210, title: "Analysis of Blocking Probability in OBS Networks using PWA Technique", presenter: "Gayatri Tiwari", track: "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-22", id: 281, title: "Marker-Based Augmented Reality in Unity: Enhancing Education through Interactive Visualization", presenter: "Neha Garg", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 282, title: "Immersive Virtual Reality: The Future Of Pain Management", presenter: "Neha Garg", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 564, title: "AgroMarket: Empowering Agriculture with smart Auction", presenter: "Salunkhe Lokesh Dattatray", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 760, title: "Evaluating the Influence of User Engagement Metrics on a Hyper-Casual Game", presenter: "Manisha Pathania", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 1210, title: "Amalgamation of cloud computing with IOT Novel Cloud Architecture.", presenter: "Neera Chaudhary", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 1523, title: "A Review of Virtual Reality-Based Technology for Treatment Upper limb Rehabilitation", presenter: "Parul Gahelot", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 1812, title: "Exploring Arduino Board Applications in Embedded Systems: The Role of AI, Cloud Computing, and Edge Computing", presenter: "Neha Garg", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 1996, title: "Authentication using Static and Continuous Keystroke Dynamics in Classical and Quantum Environments", presenter: "Namisha Bhasin", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 1997, title: "Comparative Analysis of different methods of RSA hardware implementation on FPGA", presenter: "Dr. Amanpreet Kaur", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22", id: 2066, title: "A Detailed Study of Vulnerability Detection using Common Vulnerabilities and Exposures from NVD using Machine Learning and Deep Learning Models", presenter: "Puninder Kaur", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-23", id: 284, title: "EEG-Based Real-Time Feedback for Meditation Performance Optimization", presenter: "Kishore Kanna R", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-23", id: 285, title: "Integrating Cognitive and Neuroimaging Data to Enhance Alzheimer's Disease Diagnosis", presenter: "Kishore Kanna R", track: "Track-7: Advances in Adversarial and Multi-Source Transfer learning for secure and Robust Modern Healthcare System" },
  { session: "Technical Session-23", id: 286, title: "IoT in Healthcare: Bridging Technological Innovation and Societal Impact", presenter: "Kishore Kanna", track: "Track-7: Advances in Adversarial and Multi-Source Transfer learning for secure and Robust Modern Healthcare System" },
  { session: "Technical Session-23", id: 287, title: "Edge Computing and AI powered Drone Magnometers Module Applications", presenter: "Dr Priyanka Singh", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-23", id: 495, title: "Impact of Diet, Colors and Virtual Reality on Mental Well-Being of an Individual: A Pre-Test Analysis", presenter: "Bhanu Sharma", track: "Track-7: Advances in Adversarial and Multi-Source Transfer learning for secure and Robust Modern Healthcare System" },
  { session: "Technical Session-23", id: 1195, title: "Medical Image-Based Cancer Diagnosis and Detection using Deep Learning", presenter: "K Rama Rao", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-23", id: 1487, title: "GAN AI for Predictive Threat Detection with Explainable Risk Insights", presenter: "Priyal Shilasrao Patange", track: "Track-5: Recent Trends and Innovations in Generative AI" },
  { session: "Technical Session-23", id: 1532, title: "Predicting Medical Costs Using Machine Learning: A Data-Driven Approach", presenter: "Aryan Pradhan", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-23", id: 2130, title: "Smart Living: The Role of IoT in Next Generation Home Automation System", presenter: "Harshit Gupta", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-23", id: 2131, title: "IoT-Driven Vehicle Tracking: Approach for Real-Time Navigation Management", presenter: "Raghav Goel", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-24", id: 178, title: "Sugarcane disease detection and classification using deep learning techniques", presenter: "Taranpreet", track: "Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected" },
  { session: "Technical Session-24", id: 311, title: "DEAMN: Advanced Multi-Drone Navigation and Coordination for Dynamic Environments Using ROS-Based System", presenter: "Lade Gunakar Rao", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-24", id: 372, title: "Improved methods for predicting flight delay using machine learning techniques", presenter: "Neha Goyal", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-24", id: 433, title: "Client Defection Prediction using Machine Learning Techniques with Data Analytics", presenter: "Karlyn Hannah P", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-24", id: 516, title: "Optimizing Machine Learning Models with CUDA: A Comprehensive Performance Analysis", presenter: "Niteesh L", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-24", id: 744, title: "Enhancing Oral Health Sustainability through Deep Learning: A Focus on Tooth Decay Detection and Risk Analysis", presenter: "N L Padma Swati", track: "Track-7: Advances in Adversarial and Multi-Source Transfer learning for secure and Robust Modern Healthcare System" },
  { session: "Technical Session-24", id: 1531, title: "BNS Mitra: RAG-optimized LLM based AI-powered Legal Virtual Assistant", presenter: "Bhavesh Patil", track: "Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected" },
  { session: "Technical Session-24", id: 1969, title: "Multimodal Deep Learning System for Nutritional Deficiency Assessment and Dietary Recommendation", presenter: "Gita Kolate", track: "Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected" },
  { session: "Technical Session-24", id: 2011, title: "Survey of Optimization Techniques for Phishing Website Detection", presenter: "Santosh Kumar Birthriya", track: "Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected" },
  { session: "Technical Session-24", id: 2147, title: "C^3 - Code Commit Collab - A collaborative Code Editor using Repository Level LLM", presenter: "Rohan Shirish Waghode", track: "Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected" },
  { session: "Technical Session-25", id: 538, title: "Advancements in Botnet Detection: An Extensive Analysis of Machine Learning Techniques", presenter: "Priya", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 548, title: "Predictive Maintenance for Industrial Equipment (Motar) Using IoT", presenter: "Saurabh Pandey", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 622, title: "KDD on CIFAR 10 Dataset by Deep Learning Models", presenter: "Mohan E", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 662, title: "Application of Machine Learning to Optical Network Traffic-Driven Provisioning Services", presenter: "R. Saravanakumar", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 719, title: "Natural Killer Cells in Intrusion Detection: A CIS-Based Approach for Improving Detection Accuracy", presenter: "R.Roselinkiruba", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 721, title: "CONTEXT AWARE APPROACH FOR SERVER SCENEDULING PROCESS IN MACHINE LEARNING", presenter: "Dr.R.Roselinkiruba", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 754, title: "White Light Medical Image Based Oral Cancer Diagnosis Using an Ensemble Deep Learning Model", presenter: "Kola Anantha Venkata Sai", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 1417, title: "AQUAFORECAST: PREDICTING CHENNAI'S WATER AVAILABILITY AND DEMAND", presenter: "Priyanka M", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 1522, title: "Implementation and optimization of object detection on FPGA-based CPU+NPU heterogeneous system", presenter: "Cuiping Shao", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-25", id: 1559, title: "Crop Disease Prediction using AI", presenter: "Nagaraju Bogiri", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-26", id: 700, title: "Multi-plant leaf disease detection using AlexNet and MobileNet CNN Methods", presenter: "M. Chandraprabha", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-26", id: 1451, title: "Leveraging Machine Learning for Real-Time Crowd Control and Safety at Kumbh Mela", presenter: "Augustya Shukla", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-26", id: 1575, title: "Performance Analysis of Machine Learning Models and Deep Learning Model for Credit Card Fraud Detection", presenter: "Liza Dagar", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-26", id: 1715, title: "Enhancing Protein Secondary Structure Prediction with a Bi-LSTM Model and Random Sampling Technique", presenter: "Valbhav Verma", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-26", id: 1747, title: "Sarcasm Detection in Social Media Text Using GloVe Word Embeddings in Machine Learning", presenter: "Birbal Kumar", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-26", id: 1750, title: "Comparative Study of Sarcasm Detection Using GloVe + LSTM Technique in Machine Learning", presenter: "Birbal Kumar", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-26", id: 1822, title: "Intelligent Detection of DDoS Attacks in Software Defined Networks Using Deep Learning", presenter: "Alok Kumar Ranjan", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-26", id: 1831, title: "AI-Driven Dermatological Diagnosis and Treatment System", presenter: "Kshitij Sharma", track: "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-26", id: 1863, title: "From Data to Decisions: Evaluating Deep Learning Models for Stock Price Prediction in Volatile Markets", presenter: "Dhaval Mehta", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-26", id: 2192, title: "Risk Assessment and Prediction of Floods and Droughts using Attention-LSTM", presenter: "Sonal Rajesh Sonarghare", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications" },
  { session: "Technical Session-27", id: 2139, title: "VerdictEye - Predict Court Judgements", presenter: "", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-27", id: 561, title: "Basica: A Lightweight Interpreted Language for Streamlined Mobile Development", presenter: "", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-27", id: 55, title: "Probabilistic Epileptic Seizure Onset Risk Assessment without Prior Symptoms and Seizure Type Classification", presenter: "", track: "Main Track: ICCSAI2025" },
  { session: "Technical Session-27", id: 63, title: "Artificial Intelligence and Neurological Disorders: Developments and Opportunities", presenter: "", track: "Main Track: ICCSAI2025" },
  { session: "Technical Session-27", id: 1949, title: "Study of Track Obstacles Detection System", presenter: "", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" },
  { session: "Technical Session-27", id: 1813, title: "Detection of Poly-Cystic Ovarian Syndrome (PCOS) using Image Processing Techniques", presenter: "", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-27", id: 810, title: "nsuring the Security and Privacy of Healthcare IoT Data: A System for the Safe Administration of Patient Records", presenter: "", track: "Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-27", id: 824, title: "Employing Artificial Intelligence and Machine Learning to Create Adaptive Models for Improved Predictive Accuracy in Dynamical Real-World Applications", presenter: "", track: "Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-27", id: 1624, title: "Water Quality Prediction: Machine Learning Approaches for Sustainable Resource Management", presenter: "", track: "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning" }
];
];

const scheduleData3 = [{
  session: "Technical Session-1",
  id: 1,
  title: "A Hybrid Intrusion Detection System Using Machine Learning And Deep Learning",
  presenter: "Kumar Abhinav",
  contact: "7488324615",
  email: "Kumarabhinav2640@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 15,
  title: "Credit Card Fraud Detection Using Machine Learning",
  presenter: "Sarthak Chaurasia",
  contact: "7217229094",
  email: "sarthakchaurasia34@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 16,
  title: "Text Summarization with LLMA Comparison of Transformer and non-transformer models",
  presenter: "Shivanshu Saini",
  contact: "9548928959",
  email: "shivanshu.21b0131047@abes.a.c.in",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 18,
  title: "Advancements in Brain Tumor Detection: Exploring Diverse CNN Architectures",
  presenter: "Attiuttama",
  contact: "9158386264",
  email: "attiuttama.mshra@glbitm.ac.in",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 25,
  title: "Clipify: YouTube Video Summarizer using LSA",
  presenter: "Sneha Mishra",
  contact: "9716519312",
  email: "snehariet@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 55,
  title: "Probabilistic Epileptic Seizure Onset Risk Assessment without Prior Symptoms and Seizure Type Classification",
  presenter: "Bireshwar Dass Mazumdar",
  contact: "9307977683",
  email: "bireshwardm@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 63,
  title: "Artificial Intelligence and Neurological Disorders: Developments and Opportunities",
  presenter: "Prashant K. Gupta",
  contact: "9911718900",
  email: "guptaprashant1986@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 83,
  title: "Revolutionizing Agriculture by Enhancing Supply Chain Management Through Blockchain Technology",
  presenter: "Kurnud Shukla",
  contact: "8828111286",
  email: "upadhayaykurnud@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 84,
  title: "A Hybrid Approach for Sentiment Analysis in Online Product Ranking Using CNN and LSTM with Uncertain Lexical Term",
  presenter: "Amisha Rana",
  contact: "6239040129",
  email: "rajputamisha51@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-1",
  id: 109,
  title: "Optimized Crop Selection Using AI-Driven Predictive Analytics for Enhanced Agricultural Productivity",
  presenter: "Devesh Singhal",
  contact: "8126743921",
  email: "deveshsinghal484@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-105"
},
{
  session: "Technical Session-2",
  id: 140,
  title: "AI-Augmented Cybersecurity Protocols for Secure Multi-Hop Wireless Communication in 6G Networks",
  presenter: "Renu Kumawat",
  contact: "9784584471",
  email: "renu.kumawat@jajpur.manjpal.edu",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-305"
},
{
  session: "Technical Session-2",
  id: 159,
  title: "Crop Recommendation Using Machine Learning Algorithms",
  presenter: "Ankur Sharma",
  contact: "9528367491",
  email: "ankur.21b0131038@abes.ac.in",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-305"
},
{
  session: "Technical Session-2",
  id: 171,
  title: "The Role of Convo-Neur-Net in the Assessment of Tibia and Femur Integrity: Allopathic Treatment v/s Ayurvedic Healing Practices",
  presenter: "Nikita Jain",
  contact: "9413069023",
  email: "nikita.jain@poornima.org",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-305"
},
{
  session: "Technical Session-2",
  id: 199,
  title: "Development of a Plant Disease Detection System Using Deep Learning and Organic Solutions for Sustainable Agriculture",
  presenter: "Praveen Kumar",
  contact: "9719196315",
  email: "praveen.21scse1011582@galgotiasuniversity.edu.in",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-305"
},
{
  session: "Technical Session-2",
  id: 200,
  title: "Improving Customer Churn Prediction: A Study of Counterfactual Explanations Using Wachter's Method, Growing Spheres Method, and Genetic Algorithms",
  presenter: "Akhilesh Kumar Singh",
  contact: "6395118625",
  email: "akhileshsingh@galgotiasuniversity.edu.in",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-305"
},
{
  session: "Technical Session-2",
  id: 221,
  title: "Parkinson Detection Using Machine Learning (ML) Algorithms",
  presenter: "Shreya Mishra",
  contact: "9717596210",
  email: "dalaltanya383@gmail.com",
  track: "Main Track: ICCSAI 2025",
  room: "AI&DS Block-305"
},
{
  "session": "Technical Session-2",
  "id": 224,
  "title": "Latency-Sensitive Caching-Assisted Offloading in Digital Twin-Enabled IoV Using Particle Swarm Optimization",
  "presenter": "Vina mra Oberoi",
  "track": "Main Track: ICCSA12025",
  "room": "AI&DS Block-305"
},
{
  "session": "Technical Session-2",
  "id": 263,
  "title": "IMAGE CAPTIONING ENGINE: USING DEEP LEARNING",
  "presenter": "Vasu Bhatnagar",
  "track": "Main Track: ICCSA12025",
  "room": "AI&DS Block-305"
},
{
  "session": "Technical Session-2",
  "id": 349,
  "title": "Clustering-based Anomaly Detection for Sensor Networks: A Lightweight Density-Grounded Approach",
  "presenter": "Pooja",
  "track": "Main Track: ICCSA12025",
  "room": "AI&DS Block-305"
},
{
  "session": "Technical Session-2",
  "id": 434,
  "title": "Efficient Cryptographic Configurations and Lightweight Communication Protocols for Secure Smart Home Systems",
  "presenter": "Sudhakar",
  "track": "Main Track: ICCSA12025",
  "room": "AI&DS Block-305"
},
{
  "session": "Technical Session-3",
  "id": 441,
  "title": "Optimizing Visibility in Hazel Images: A Hybrid Approach with Dark Channel Prior, Guided Filtering, and Wavelets",
  "presenter": "Harshit Garg",
  "track": "Main Track: ICGSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-3",
  "id": 447,
  "title": "Graph Convolutional Network-Driven Adaptive Learning Framework for Fraud Detection in Complex Transactional Cryptonetworks",
  "presenter": "Upendra Kumar",
  "track": "Main Track: ICGSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-3",
  "id": 448,
  "title": "Food Label Analysis and Ingredient Safety",
  "presenter": "Isha Kapoor",
  "track": "Main Track: ICGSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-3",
  "id": 450,
  "title": "Prediction of house price Using ML",
  "presenter": "Yash Upadhyay",
  "track": "Main Track: ICGSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-3",
  "id": 451,
  "title": "E-MeerutMart Application using MERN stack",
  "presenter": "Pooja Punyani",
  "track": "Main Track: ICGSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-3",
  "id": 452,
  "title": "E-Voting System Based On Blockchain",
  "presenter": "Dhruv Kumar Maurya",
  "track": "Main Track: ICGSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-3",
  "id": 476,
  "title": "Design and Development of Smart vehicle Fire safety system",
  "presenter": "Divyanshu Mishra",
  "track": "Main Track: ICGSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-3",
  "id": 646,
  "title": "Stochastic Channel Modeling for Flat Fading in Non-Terrestrial Narrowband Systems",
  "presenter": "Harshit Gupta",
  "track": "Main Track: ICGSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-3",
  "id": 898,
  "title": "Comparative Evaluation of Large Language Models for Sentiment Analysis",
  "presenter": "Shrikant Tiwari",
  "track": "Main Track: ICCSAI2025",
  "room": "AI&DS Block-317"
},
{
  "session": "Technical Session-4",
  "id": 1239,
  "title": "Image Classification & Detection of Brain Tumor",
  "presenter": "Akhil Sharma",
  "track": "Main Track: ICCSA12025",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-4",
  "id": 1263,
  "title": "Breast Cancer Prediction Using Machine Learning",
  "presenter": "Priyanshu Sharma",
  "track": "Main Track: ICCSA12025",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-4",
  "id": 1334,
  "title": "Age Estimation and Gender Identification through Advanced Deep Learning Methods",
  "presenter": "Priyanshu Maurya",
  "track": "Main Track: ICCSA12025",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-4",
  "id": 1501,
  "title": "A Comparative Review of Land Use and Land Cover (LULC) Classification in Delhi NCR Using Satellite Imagery",
  "presenter": "Yashwant Soni",
  "track": "Main Track: ICCSA12025",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-4",
  "id": 716,
  "title": "Sign Language Recognition using deep learning",
  "presenter": "Abhishek Kumar Gupta",
  "track": "Track 14: Revolutionizing Industries: Deep Learning, LUMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-4",
  "id": 885,
  "title": "Lung Disease Detection Using CNNs and Transfer Learning on Medical Imaging",
  "presenter": "Kashat Khan",
  "track": "Track 14: Revolutionizing Industries: Deep Learning, LUMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-4",
  "id": 886,
  "title": "A Hybrid Approach Combining YOLO and Deep Neural Networks for Efficient Lung Disease Detection",
  "presenter": "Kashat Khan",
  "track": "Track 14: Revolutionizing Industries: Deep Learning, LUMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-4",
  "id": 1046,
  "title": "P2P communication using Blockchain",
  "presenter": "Ramakant Sahri",
  "track": "Track 14: Revolutionizing Industries: Deep Learning, LUMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-4",
  "id": 1130,
  "title": "Resume analysis through machine learning",
  "presenter": "Nishi Kant Gupta",
  "track": "Track 14: Revolutionizing Industries: Deep Learning, LUMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-405"
},
{
  "session": "Technical Session-5",
  "id": 1619,
  "title": "A Hybrid Framework for Healthcare System Using SVM",
  "presenter": "Saurabh Kumar Sah",
  "track": "Track 1: Revolutionizing Industries: Deep Learning, LUMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-417"
},
{
  "session": "Technical Session-5",
  "id": 1861,
  "title": "Squeeze-and-Excitation Integrated MobileNetV2 for Efficient DeepFake Detection",
  "presenter": "Kajal Tulshyan",
  "track": "Track 1: Revolutionizing Industries: Deep Learning, LUMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-417"
},
{
  "session": "Technical Session-5",
  "id": 2139,
  "title": "VerdictSys - Predict Court Judgements",
  "presenter": "Abhishek Kumar Singh",
  "track": "Track 1: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-417"
},
{
  "session": "Technical Session-5",
  "id": 2227,
  "title": "Plants Disease Classification Using CNN",
  "presenter": "Ms. Akanksha Patel",
  "track": "Track 1: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-417"
},
{
  "session": "Technical Session-5",
  "id": 2229,
  "title": "Adaptive Traffic Signal Timer for Traffic Control System using Artificial Intelligence",
  "presenter": "Dipendra Singh",
  "track": "Track 1: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
  "room": "AI&DS Block-417"
},
{
  "session": "Technical Session-5",
  "id": 524,
  "title": "Assessment of Adaptive Neural-Fuzzy MPPT in Photovoltaic Grid Connected System",
  "presenter": "Saurabh Kumar",
  "track": "Track 16: Emerging Electrical and Electronic Technologies for Innovations, and Energy and Environmental Sustainability",
  "room": "AI&DS Block-417"
},
{
  "session": "Technical Session-5",
  "id": 1455,
  "title": "Smart Autonomous Vacuum Cleaner Robot: A Review",
  "presenter": "Vanshita",
  "track": "Track 15: Revolutionizing Connectivity: The Power of IloT, IoT, and IMOT for a Sustainable Future",
  "room": "AI&DS Block-417"
},
{
  "session": "Technical Session-5",
  "id": 1506,
  "title": "A survey on Bluetooth and Voice controlled Robotic Car",
  "presenter": "Asif Jamal",
  "track": "Track 15: Revolutionizing Connectivity: The Power of IloT, IoT, and IMOT for a Sustainable Future",
  "room": "AI&DS Block-417"
},
{
  "session": "Technical Session-6",
  "id": 29,
  "title": "A Review on Stock Market Trends and Stocks Price Prediction Using Sentiment Analysis and Market Data",
  "presenter": "Mohammad Amar",
  "track": "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 136,
  "title": "AI-Driven OCR for Comprehensive Medical Label Interpretation",
  "presenter": "Aditya Kushwaha",
  "track": "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 233,
  "title": "MACHINE LEARNING ALGORITHM FOR PREDICTING CRIME TYPE AND OCCURRENCE",
  "presenter": "Ashish Kumar Gupta",
  "track": "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 237,
  "title": "A Comprehensive Evaluation of Over-sampling and Under-sampling Methods for Imbalanced Data in Anomaly Detection",
  "presenter": "Pooja",
  "track": "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 2076,
  "title": "Optimizing Solar Photovoltaic Power Injection Using Machine Learning: Minimizing Harmonic Distortion Under Inertia Constraints",
  "presenter": "Anurag Kumar",
  "track": "Track 16: Emerging Electrical and Electronic Technologies for Innovations, and Energy and Environmental Sustainability",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 539,
  "title": "Enhanced Sales Forecasting Using Machine Learning: Integrating Customer Sentiment and Market Trend Analysis",
  "presenter": "Shivan101Apr@Gmail.com",
  "track": "Track-I: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 547,
  "title": "Potato disease Prediction using Deep Learning",
  "presenter": "Mala Saraswat",
  "track": "Track-I: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 1238,
  "title": "Secure Ambulance Access using Physical Unclonable Functions (PUFs)",
  "presenter": "Abhay Kumar Agrahari",
  "track": "Track-I: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 1539,
  "title": "Enhanced Machine Learning Framework for DDoS Attack Endurance in Vehicles Security for 5G Networks",
  "presenter": "Sharma Ji",
  "track": "Track-I: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-6",
  "id": 1624,
  "title": "Water Quality Prediction: Machine Learning Approaches for Sustainable Resource Management",
  "presenter": "Prajjwal Kumar Yadav",
  "track": "Track-I: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-505"
},
{
  "session": "Technical Session-7",
  "id": 640,
  "title": "Comparative Study of Waste Management to Fulfill Induced Producer Responsibility",
  "presenter": "Vishal Singh",
  "track": "Track-10: Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security AI, and Management Practices",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 735,
  "title": "Multimodal Women Safety and Analytics using OpenCV and OpenVINO",
  "presenter": "Ravinder Singh",
  "track": "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 1354,
  "title": "Sentiment Analysis of Movie Reviews using TF-IDF",
  "presenter": "Nilesh Kumar",
  "track": "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 1886,
  "title": "Development of Alen: An advanced voice assistant with comprehensive functionalities",
  "presenter": "Aditya Pundir",
  "track": "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 1933,
  "title": "Enhancing Face Detection in Low-Light Conditions: An Analysis of Noise Types and Denoising Techniques",
  "presenter": "Yashawi Shukla",
  "track": "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 2035,
  "title": "AI-Powered Social Media Marketing Analytics: A Case Study on Enhancing Customer Purchase Intentions in Quick Service Restaurants",
  "presenter": "Himanshu Sharma",
  "track": "Track-12: Transformation with AI, Deep Learning Breakthroughs and Real World Applications",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 2137,
  "title": "Performance Analysis of Optimizer for Hyperparameter Tunning in Image Captioning",
  "presenter": "Vishal Jayaswal",
  "track": "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 2206,
  "title": "Cyber-twin Empowered Unmanned Aerial Vehicle assisted Mobile Edge Computing Network: Application and Challenges",
  "presenter": "Neeraj Joshi",
  "track": "Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 304,
  "title": "AI Enabled ICDS to Combat Malnutrition: Challenges, Opportunities, and the Path Forward",
  "presenter": "Sarvesh Kumar Swarnakar",
  "track": "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-7",
  "id": 635,
  "title": "AN EFFICIENT SYSTEM TO DETECT THE FRESHNESS OF FRUITS",
  "presenter": "Bhaskar Pratap Singh Tomar",
  "track": "Track-2: Immersive Futures: Merging Realities with Intelligent Systems",
  "room": "AI&DS Block-507"
},
{
  "session": "Technical Session-8",
  "id": 81,
  "title": "Distributed Marketplace for freelancing",
  "presenter": "Saurabh Tiwari",
  "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 125,
  "title": "Feature selection using hybrid machine learning approach for wind power generation",
  "presenter": "Kunj Bihari Sharma",
  "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 449,
  "title": "Novel ML Approach for Securing Smart Home IoT Systems: Cyber Attack Detection Using ACLI of Network Traffic dataset -2023",
  "presenter": "Abhay Kumar Ray",
  "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 659,
  "title": "Optimizing Hybrid Renewable Energy Systems for Sustainable Power Generation: A Machine Learning Approach",
  "presenter": "Shivankar Pandey",
  "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 1230,
  "title": "Analysis and Design of Reliable Node Routing Mechanism for MANET using Fuzzy Logic",
  "presenter": "Akanksha",
  "track": "Track-2: Immersive Futures: Merging Realities with Intelligent Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 1709,
  "title": "Reinforcing 6G Network Security by combining AES and Polar Codes at the Physical Layer",
  "presenter": "Ravi Shankar",
  "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 2074,
  "title": "Two-Level Security System Using Barcode Scanning and Face Recognition for File and Folder Protection with Message Alert",
  "presenter": "Madarapu Rushya Shrangan",
  "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 2094,
  "title": "Real-Time Fault Localization in Underground Cables: An Arduino-Based Approach",
  "presenter": "Kartik Sharma",
  "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 2193,
  "title": "Analyzing Crop Yield with Smart Farm Monitoring Systems",
  "presenter": "Apoorv",
  "track": "Track-2: Immersive Futures: Merging Realities with Intelligent Systems",
  "room": "AI&DS Block-519"
},
{
  "session": "Technical Session-8",
  "id": 2194,
  "title": "Development of an AI-Driven Robotic Arm System for Real-Time Surgical Operations and Remote Emergency Care",
  "presenter": "Abhishek Dixit",
  "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
  "room": "AI&DS Block-519"
},

];

const scheduleData4 =[
  { 
    "session": "Technical Session-9", 
    "id": 97, 
    "title": "SecureVote: Enhancing Electoral Integrity Using AI&DS Blockchain-Based E-Voting", 
    "presenter": "Rhythm Garg", 
    "track": "Track-4: Innovative and Disruptive Technologies",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 437, 
    "title": "Pattern Matching of Gene Sequencing using LCS and String-Matching Algorithms", 
    "presenter": "Shachi Mall", 
    "track": "Track-5: Recent Trends and Innovations in Generative AI",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 510, 
    "title": "Innovative approaches of Data Extraction and Bulk messaging on WhatsApp using RPA", 
    "presenter": "Parth Pachauri", 
    "track": "Track-5: Recent Trends and Innovations in Generative AI",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 561, 
    "title": "Basics: A Lightweight Interpreted Language for Streamlined Mobile Development", 
    "presenter": "Dhruv", 
    "track": "Track-4: Innovative and Disruptive Technologies",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 1052, 
    "title": "Smart Hostel Booking System for Efficient Room Allocation and Management", 
    "presenter": "Siddharth Kumar Yadav", 
    "track": "Track-4: Innovative and Disruptive Technologies",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 1122, 
    "title": "Lung Cancer Detection with Privacy Preservation Using Federated Learning", 
    "presenter": "Jyoti Kumari", 
    "track": "Track-4: Innovative and Disruptive Technologies",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 1507, 
    "title": "SOLAR WIRELESS ELECTRIC VEHICLE CHARGING SYSTEM", 
    "presenter": "Pratibha Jha", 
    "track": "Track-4: Innovative and Disruptive Technologies",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 2217, 
    "title": "AI ENHANCED DEPRESSION DETECTION USING CHATBOT AND FACIAL DATA ANALYSIS", 
    "presenter": "Rashi Sharma", 
    "track": "Track-3: Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 1707, 
    "title": "AI based Automatic Solar Irrigation System", 
    "presenter": "Mayank Pratap Singh", 
    "track": "Track-S: Recent Trends and Innovations in Generative AI",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-9", 
    "id": 2042, 
    "title": "Comparing Generative AI on Employee Motivation and Job Satisfaction in Pre-opening vs. Established Hotels", 
    "presenter": "Rohit Jaswal", 
    "track": "Track-S: Recent Trends and Innovations in Generative AI",
    "room": "AI&DS Block-105" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 188, 
    "title": "Enhancing Autism Diagnosis Using Federated Learning and Multimodal Data Fusion", 
    "presenter": "Maia Saraswat", 
    "track": "Track-&: Federated Learning for Predictive Healthcare Paradigm",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 225, 
    "title": "Optimized Text Summarization using BART", 
    "presenter": "Kanika Sharma", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 412, 
    "title": "Fintech Dynamics: Bibliometric Perspectives on Collaboration and Trends in the Digital Economy", 
    "presenter": "Nivedita Srivastava", 
    "track": "Track-&: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 436, 
    "title": "Optimizing Building Energy Efficiency with Kolmogorov-Arnold Network (KAN) backed Regression", 
    "presenter": "Barun Kanoo", 
    "track": "Track-&: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 1215, 
    "title": "An Examination of Brain Tumor Using the ABC and ANN Algorithms", 
    "presenter": "Amar Singh", 
    "track": "Track-&: Federated Learning for Predictive Healthcare Paradigm",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 1634, 
    "title": "An Explainable AI-Centric Approach for Healthcare: A Review", 
    "presenter": "Sumit Sharma", 
    "track": "Track-&: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 2118, 
    "title": "A Lightweight Deep Learning based Image Captioning Model for Hindi Caption Generation", 
    "presenter": "Vishal Jayaswal", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 2153, 
    "title": "Integrating Explainability in AI for Retinal Imaging: Enhancing Diabetic Retinopathy Diagnosis Accuracy", 
    "presenter": "Sumit Sharma", 
    "track": "Track-&: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 283, 
    "title": "Potato Disease Detection by using Deep Learning", 
    "presenter": "Anshika Agarwal", 
    "track": "Track-9: Machine Learning and Deep Learning; Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-10", 
    "id": 704, 
    "title": "Emotion Mining: A Framework for Depression Detection", 
    "presenter": "Shruti Bharadwaj", 
    "track": "Track-9: Machine Learning and Deep Learning; Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-305" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 776, 
    "title": "Effective Scheduling Satisfying User Constraints Using Genetic Algorithm", 
    "presenter": "Tamru Joshi", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 821, 
    "title": "MLN.D.S - Minimal Instance Neural Data System", 
    "presenter": "Tanay Yadav", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 872, 
    "title": "Skin Sense AI: Detecting Cancerous Skin Diseases using CNN for multiclass classification", 
    "presenter": "Ganga Sharma", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 877, 
    "title": "Multi-Class Medicinal Plant Leaf Classification Recognition and Recommendation System Using DNN", 
    "presenter": "Abhimanyu Singh", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 1061, 
    "title": "Customer Behaviour Prediction for E-Commerce Sites using Web Mining and Machine Learning", 
    "presenter": "Dev Rathour", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 1278, 
    "title": "J48-SimpleCart-REPTree: An improved ensemble ML approach for heart disease prediction", 
    "presenter": "Shweta Pandey", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 1282, 
    "title": "Stock Price Prediction using LSTM-based DL model and its comparison with ML algorithms", 
    "presenter": "Devesh Pandey", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 1285, 
    "title": "LSTM-RNN: An ensemble machine learning approach for crop prediction based on soil and weather properties", 
    "presenter": "Aryan Prasad", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 1286, 
    "title": "Heart Disease Prediction using CNN: Performance Comparison and Analysis", 
    "presenter": "Aryan Tripathi", 
    "track": "Track-8: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-11", 
    "id": 1758, 
    "title": "The Role of Deep Learning Approaches in the Classification of Diabetic Retinopathy", 
    "presenter": "Kun Meenakshi", 
    "track": "Track-8: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-317" 
  },
  { 
    "session": "Technical Session-12", 
    "id": 137, 
    "title": "A Prescriptive Deep Leaning-based Architecture for Deepfake Detection", 
    "presenter": "Aditya Dev Mishra", 
    "track": "Main Track: ICCSA12025",
    "room": "AI&DS Block-405" 
  },
  { 
    "session": "Technical Session-12", 
    "id": 435, 
    "title": "HealthChain: Empowering Patient-Controlled Data Sharing through AI&DS Blockchain", 
    "presenter": "Dr. Amrendra Singh Yadav", 
    "track": "Main Track: ICCSA12025",
    "room": "AI&DS Block-405" 
  },
  { 
    "session": "Technical Session-12", 
    "id": 1878, 
    "title": "Optimizing Diabetes Prediction with Multi-Layer Perceptron: A Comprehensive Analysis on the Pima Indians Dataset", 
    "presenter": "Monaisha", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-405" 
  },
  { 
    "session": "Technical Session-12", 
    "id": 2203, 
    "title": "Adaptive OCR-Driven Image Encoders for Enhanced Text-Based Captioning: Achieving High-Precision Descriptions in Text-Rich Visual Contexts", 
    "presenter": "Anant Tyagi", 
    "track": "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    "room": "AI&DS Block-405" 
  },
  { 
    "session": "Technical Session-12", 
    "id": 2232, 
    "title": "Analysis of Artificial Intelligence on Environmental Sustainability", 
    "presenter": "Kuldeep Singh Kaowan", 
    "track": "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
    "room": "AI&DS Block-405" 
  },
  { 
    "session": "Technical Session-12", 
    "id": 2233, 
    "title": "Analysis of Artificial Intelligence on Economical Sustainability", 
    "presenter": "Nitin Kumar Gaur", 
    "track": "Track 14: Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
    "room": "AI&DS Block-405" 
  }
]
const Schedule = () => {
  return (
    <>
      <div className="container mx-auto p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Technical Paper Presentation Schedule</h1>
        <h2 className="text-lg text-center mb-6">Day-1 (9:30 AM - 12:30 PM), 04 April 2025 (Slot 1)</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="border p-2">Technical Session</th>
              <th className="border p-2">Paper ID</th>
              <th className="border p-2">Paper Title</th>
              <th className="border p-2">Presenter</th>
              <th className="border p-2">Track Name</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr
                key={item.id}
                className={index % 20 < 10 ? 'bg-yellow-100' : 'bg-red-100'}
              >
                <td className="border p-2 text-center">{item.session}</td>
                <td className="border p-2 text-center">{item.id}</td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-1">{item.presenter}</td>
                <td className="border p-2">{item.track}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container mx-auto p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Technical Paper Presentation Schedule</h1>
        <h2 className="text-lg text-center mb-6"> Day-1 (01:00 PM- 04.00 PM), 04 April 2025 (Slot 2)</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="border p-2">Technical Session</th>
              <th className="border p-2">Paper ID</th>
              <th className="border p-2">Paper Title</th>
              <th className="border p-2">Presenter</th>
              <th className="border p-2">Track Name</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData2.map((item, index) => (
              <tr
                key={item.id}
                className={index % 20 < 10 ? 'bg-yellow-100' : 'bg-red-100'}
              >
                <td className="border p-2 text-center">{item.session}</td>
                <td className="border p-2 text-center">{item.id}</td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-1">{item.presenter}</td>
                <td className="border p-2">{item.track}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container mx-auto p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Technical Paper Presentation Schedule</h1>
        <h2 className="text-lg text-center mb-6"> Day-1(9:00 AM- 12.30 PM), 05 April 2025 (Slot 1)</h2>
        <h2 className="text-lg text-center mb-6 bg-red-600 text-white font-extrabold uppercase px-4 py-2 rounded-lg shadow-lg animate-pulse">
          OFFLINE
        </h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="border p-2">Technical Session</th>
              <th className="border p-2">Paper ID</th>
              <th className="border p-2">Paper Title</th>
              <th className="border p-2">Presenter</th>
              <th className="border p-2">Track Name</th>
              <th className="border p-2">Room No.</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData3.map((item, index) => (
              <tr
                key={item.id}
                className={index % 20 < 10 ? 'bg-yellow-100' : 'bg-red-100'}
              >
                <td className="border p-2 text-center">{item.session}</td>
                <td className="border p-2 text-center">{item.id}</td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-1">{item.presenter}</td>
                <td className="border p-2">{item.track}</td>
                <td className="border p-2">{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container mx-auto p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Technical Paper Presentation Schedule</h1>
        <h2 className="text-lg text-center mb-6"> Day-2 (12:00 PM- 03.30 PM), 05 April 2025 (Slot 2)</h2>
        <h2 className="text-lg text-center mb-6 bg-red-600 text-white font-extrabold uppercase px-4 py-2 rounded-lg shadow-lg animate-pulse">
          OFFLINE
        </h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="border p-2">Technical Session</th>
              <th className="border p-2">Paper ID</th>
              <th className="border p-2">Paper Title</th>
              <th className="border p-2">Presenter</th>
              <th className="border p-2">Track Name</th>
              <th className="border p-2">Room No.</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData4.map((item, index) => (
              <tr
                key={item.id}
                className={index % 20 < 10 ? 'bg-yellow-100' : 'bg-red-100'}
              >
                <td className="border p-2 text-center">{item.session}</td>
                <td className="border p-2 text-center">{item.id}</td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-1">{item.presenter}</td>
                <td className="border p-2">{item.track}</td>
                <td className="border p-2">{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Schedule;
