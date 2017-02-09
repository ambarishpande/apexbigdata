/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = angular.module('datatorrent',['ngSanitize','ui.router','angular.filter']);
var talks;
	var data = {
  "conference": [
    {
      
      "title":"Breakfast & Registration",
      "author":"",
      "bio":"",
      "abstract":"",
      "time":"08:00 a.m. - 08:45 a.m.",
      "seq":'a',
      
      "color":"#253646"
    },
    {
      
      "title":"Welcome",
      "time":"08:45 a.m. - 09:00 a.m.",
      "seq":'b',
      
      "color":"#253646"
    },
    {
      "id":3,  
      "title":"Key note 1: Business insights on processing real time streaming data - Sudipta Ghosh",
      "author":"Sudipta Ghosh",
      "bio":"Partner, Data and Analytics Leader @PwC",
      "abstract":"The current era of Industrial Revolution 4.0 is marked by rapid growth in the field of Continuous Streaming data analytics, AI and machine learning. With the current advancement in technologies, the cost of storing data and processing it, has reduced dramatically. This development has opened avenue for even faster insights generation. The expectation is to cultivate live streams and make decisions in parallel with the occurrence of the events. Streaming or Real time Analytics is thus, a process of analysing and delivering insightful information about an event as and when they occur. Since the analysis is performed on the go with live data inflow, it mandates firms to act on these insights in the smallest possible window or else the value of information is lost over the time. The data can originate from the Internet of Things (IoT), web clickstream, sensors, and mobile devices such as hand-helds, market data, and transactions.<p>Data is fueling Industry 4.0 (which focuses on the end-to-end digitisation of all physical assets and integration into digital ecosystems with value chain partners) and successful data analytics is the prerequisite for successful implementation of digital enterprise applications. Organizations that can capitalise on processing and acting on \"real time high velocity flow of streaming data\" can benefit dramatically by improving efficiencies and become a market leaders.</p>",
      "time":"09:00 a.m. - 09:30 a.m.",
      "seq":'c',
      
      "color":"#6d7421"
    },
    {
    "id":4,  
      "title":"Key Note 2: Operability in Hadoop Ecosystem",
      "author":"Amol Kekre,",
      "bio":"Co-founder, CTO @DataTorrent",
      "abstract":"<p>Big data has come a long way since Hadoop debuted last decade. The driver was scale-out architecture built around open source software. Towards the end of last decade with stability and security HDFS became good enough for enterprises to start to migrate. Today big data spearheaded by Hadoop is disrupting all industries. Those who are not on-board, are in danger of being run over by competition.</p><p>However, the first version of Hadoop only had MapReduce. Then came Spark, which is a faster MapReduce like setup in memory. These frameworks carried a setup that was instilled at the very time Hadoop was conceived in Yahoo!. It was supposed to be an answer to Google search and was geared towards search indexing. It only allowed big files and was very hard to integrate into data pipelines. Moreover a dev-centric eco-system resulted in ops being a second class citizen. This along with MapReduce paradigm caused a lot of big data projects to fail.</p><p>It did not have to be this way. The next generation Hadoop engines like Apex were conceived with operability, total cost of ownership (TCO) and time to value (TTV) in mind. I will present why and how operability is important, and how it directly results in lower TCO and quicker TTV. These are critical needs for big data projects to succeed, and for big data to be mass market. Big data needs to be productized and operationalized.</p>",
      "time":"09:30 a.m. - 10:00 a.m.",
      
      "seq":'d',
      "color":"#91148a"
    },
    {
    "id":5,  
      "title":"Introduction to Apex",
      "author":"Pramod Immaneni",
      "bio":"Engineering @DataTorrent",
      "abstract":"The talk will start with an overview of the architecture of Apache Apex, a big data streaming analytics platform. Apex comes with a powerful stream processing engine that has built-in scalability and fault-tolerance, a rich set of functional building blocks and an easy to use API for the developer to build real-time and batch applications. Apex runs natively on Hadoop YARN and HDFS and is used in production in various industries.<p><p>The talk will then go into introducing a streaming application on Apex using ingestion ETL as an example. The application would stream data from a real-time messaging system like Kafka, process data and store the results into an external data store. During this building process, features such as scalability, fault tolerance and end-to-end exactly once will be introduced and also how they are achieved for the application will be shown.</p><p>The talk will end with showcasing some use cases where Apex is being used in production today. These include diverse areas such as IoT, financial fraud detection and advertising analytics.</p>",
      "time":"10:00 a.m. - 10:30 a.m.",
      "seq":'e',
      
      "color":"#60778C"
    },
    {
    "id":6,  
      "title":"Interfacing with Apex",
      "author":"Chinmay Kolhatkar",
      "bio":"Engineering @DataTorrent",
      "abstract":"Apache Apex is an in-memory stream processing platform that runs natively on Hadoop. Users create applications by putting together different operators, each of which implements a piece of the application functionality. Apex runs these operators in a distributed fashion on the Hadoop cluster in a scalable and fault tolerant manner and the data flow is directly between the operators over the network without the need to touch the disk. For stitching these operators, apex provides a bunch of APIs which user can use as per their need or use cases. This talk will cover various different APIs that can be used to stitch the DAG for developing a Streaming Application. The APIs include: Compositional Declarative SQL Beam SAMOA.",
      "time":"10:30 a.m. - 11:10 a.m.",
      "seq":'f',
      "track":"Platform Track",
      "color":"#216F1A"
    },
    {
    "id":7,  
      "title":"Building your own operator from scratch",
      "author":"Vikram Patil",
      "bio":"Engineering @DataTorrent",
      "abstract":"Today almost every company is creating huge amounts of data every second while a significant portion of this data needs to be processed in next few seconds. Sometimes this processing is very crucial such as fraud detection during payment transactions, sms delivery of payments or to raise alerts for encountered issues in data. None the less sometimes we need to store data to persistent store either in structured or unstructured format. Apache Apex is a unified big data in motion processing platform which can help you develop such custom applications with few steps. Apache Apex is supported by Apache Malhar which consists of many out-of-the-box input and output operators. You can build you own real-time data processing logic using Apex Framework and provided operators. This processing logic can be as simple as just transform data to structured format and store it for post-processing or take immediate action as described.This talk will demo how easy it is to build Apex operator from scratch for your own business logic. Focus will be on basic concepts for operator development and how to develop & deploy an application using Apex CLI.",
      "time":"11:10 a.m. - 11:50 a.m.",
      "seq":'g',
      "track":"Platform Track",
      "color":"#216F1A"
    },
    {
    "id":8,  
      "title":"Emerging Data Architecture",
      "author":"Dr. Milind Bhandarkar",
      "bio":"Founder, CEO @Ampool",
      "abstract":"Relational database management systems have been the workhorse of the industry for data processing workloads for several decades. Web 2.0 companies, dealing with clickstreams, and semistructured logs, found RDBMS to be inadequate for their needs, and the past few years have seen an explosion of purpose-built platforms to handle the volume, variety, and velocity of data, often referred to as Big Data. Operational complexity of these platforms, as well as newer use cases, have prompted a re-architecture of these new data platforms. A unified data architecture is emerging that takes advantage of the modern commodity hardware platforms. In this talk, we describe such a modern unified data architecture, Butterfly Architecture, suitable for emerging data processing workloads. We will discuss various data abstractions supported by this architecture, with a concrete implementation of the unified storage platform by Ampool. The Ampool memory-centric active data store modularly separates query processing & allows multiple data access patterns that occur in streaming, batch, and interactive analytical workloads.",
      "time":"11:50 a.m. - 12:30 p.m.",
      "seq":'h',
      "track":"Platform Track",
      "color":"#216F1A"
    },
    {
    "id":9,  
      "title":"Security in a distributed streaming platform - A case study with Apache Apex",
      "author":"Pramod Immaneni",
      "bio":"Engineering @DataTorrent",
      "abstract":"<p>A Hadoop cluster is a distributed environment, where applications launched by users run along with and the various Hadoop services on the different nodes in the cluster. There are continuous interactions taking place between these for everything to function smoothly. There are interactions within the Hadoop services, between user applications and Hadoop services and within the components of an application. In a secure cluster with Kerberos authentication enabled, all these interactions have to be secured. When running in secure Hadoop, applications should be able to authenticate with Hadoop whenever making any requests to Hadoop services such as YARN or HDFS. Furthermore, in a distributed streaming application, there are multiple components in an application and these components could be running on different nodes. Any interaction between these components should also be secured and not allowed without proper authentication. Apart from the software level interactions between applications and services, there are user application interactions that need to be secured as well. When launching an application, for example, Kerberos tokens are needed when communicating with YARN and HDFS. An application may also allow users to interact with it, while running, by allowing web service requests to the application's Application Master (AM) process. In a secure environment, these web services would need to be secured as well. Apache Apex is an in-memory stream processing platform that runs natively on Hadoop. Users create applications by putting together different operators, each of which implements a piece of the application functionality. Apex runs these operators in a distributed fashion on the Hadoop cluster in a scalable and fault tolerant manner and the data flow is directly between the operators over the network without the need to touch the disk. This talk will cover how security works for an application built on Apex covering launch, runtime and user interactions. We will specifically look at the following aspects as they relate to security</p> - Application launch process - Anatomy of an application at runtime covering the different interactions Interactions with Hadoop- Communication between the different application components- Data flow between components - Web services security for user interaction - Security for long running applications",
      "time":"12:30 p.m. - 01:10 p.m.",
      "seq":'i',
      "track":"Platform Track",
      "color":"#216F1A"
    },
    {
    "id":10,  
      "title":"GE IOT Predix Time Series & Data Ingestion Service using Apache Apex",
      "author":"Pramod Immaneni",
      "bio":"Engineering @DataTorrent",
      "abstract":"<p>A Hadoop cluster is a distributed environment, where applications launched by users run along with and the various Hadoop services on the different nodes in the cluster. There are continuous interactions taking place between these for everything to function smoothly. There are interactions within the Hadoop services, between user applications and Hadoop services and within the components of an application. In a secure cluster with Kerberos authentication enabled, all these interactions have to be secured.</p><p>When running in secure Hadoop, applications should be able to authenticate with Hadoop whenever making any requests to Hadoop services such as YARN or HDFS. Furthermore, in a distributed streaming application, there are multiple components in an application and these components could be running on different nodes. Any interaction between these components should also be secured and not allowed without proper authentication.</p><p>Apart from the software level interactions between applications and services, there are user application interactions that need to be secured as well. When launching an application, for example, Kerberos tokens are needed when communicating with YARN and HDFS. An application may also allow users to interact with it, while running, by allowing web service requests to the application’s Application Master (AM) process. In a secure environment, these web services would need to be secured as well.</p><p>Apache Apex is an in-memory stream processing platform that runs natively on Hadoop. Users create applications by putting together different operators, each of which implements a piece of the application functionality. Apex runs these operators in a distributed fashion on the Hadoop cluster in a scalable and fault tolerant manner and the data flow is directly between the operators over the network without the need to touch the disk. This talk will cover how security works for an application built on Apex covering launch, runtime and user interactions.</p><p>We will specifically look at the following aspects as they relate to security, application launch process, anatomy of an application at runtime covering the different interactions - interactions with Hadoop, communication between the different application components, data flow between components, web services security for user interaction, security for long running applications.</p>",
      "time":"10:30 a.m. - 11:10 a.m.",
      "seq":'f',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":11,  
      "title":"Real time Supply Chain Monitoring",
      "author":"Kanad Dixit",
      "bio":"Head of IoT, Data Science, MindStix Labs",
      "abstract":"Use case -  Large retailers with hundreds of store locations, distributed across geographic regions, find it very difficult to get a single pane view of their sales and inventory. With Apex, we can provide the capability of having a real-time single pane view of Goods outflow rate from stores Inventories managed in warehouses near store Inventory managed in large warehouses in remote location Issues faced by retailers today:- Slow warehouse management solutions: No real-time updates on warehouse inventory status- Inventory Monitoring: Manually monitoring of inventory levels and tracking multiple shipments- Not tracking operations or stock. According to study, 40% of companies identify visibility issues as a pain point. Often, this is because products in the process of being returned or replaced take a while to appear on some inventory systems. This means delays in being registered on stock tallies and can cause skewed data in reporting and delays in being able to reuse the stock.Where Apex can help - Real time inventory tracking  - One pane dashboard which can show outflow rate of inventory, existing supplies, availability in the nearest warehouse.  - Apex reduces your total cost of ownership - 20% business logic, 80% operability.- Ability to maintain just enough inventory in an expensive warehouse close by. Ship just when required from cheaper warehouse located far off. e.g. Maintaining inventory in Texas and getting it to the Bay area looking at real time Thanksgiving / Christmas shopping patterns. Saves cost of storing goods in California-based warehouse. Benefits:- Significant revenue saving and improve customer satisfaction by accurately predicting their inventory needs.- Precisely determining when it is time to reorder, and knowing when a shortage might occur.- Real time monitoring of supply chain processes so as to quickly detect shortages, overages, or missed shipments, especially when dealing with priority orders- Ultimately reduce customer dissatisfaction and revenue loss.",
      "time":"11:10 a.m. - 11:50 a.m.",
      "seq":'g',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":12,  
      "title":"Visualizing Big Data Applications in Real Time",
      "author":"Sasha Perfanov",
      "bio":"Engineering @DataTorrent",
      "abstract":"A behind the scenes look at how Apache Apex applications data can be visualized in real time. We will explore features available in DataTorrent RTS Community and Enterprise editions to visualize data as it flows through Apache Apex applications. Topics covered will include RTS Gateway REST services, App Data Framework, Widgets, Dashboards, and Dashboard Packaging and Import.",
      "time":"11:50 a.m. - 12:30 p.m.",
      "seq":'h',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":13,  
      "title":"Real-time analytics for actionable insights",
      "author":"Swapnil Chougule",
      "bio":"Senior BigData Engineer @Pubmatic",
      "abstract":" In this session, I would cover a real world use-case where Apache Apex is used to deliver actionable insights. The reference domain would be ad-tech and how Apex is helping reduce the turnaround time for business decisions by providing KPI's within seconds. This talk will also cover design and implementation of a streaming system that processes over 25 Bn events/day. We will touch base on some operational aspects and challenges of running a 24 x 7 streaming data pipeline.",
      "time":"12:30 p.m. - 01:10 p.m.",
      "seq":'i',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":14,  
      "title":"1. Install and manage Apache Apex using BigTop and Ambari.",
      "title2":"2. Machine Learning using SAMOA",
      "author":"Priyanka Gugale Shah",
      "author2":"Bhupesh Chawda",
      "bio":"Engineering @DataTorrent",
      "bio2":"Engineering @DataTorrent", 
      "abstract":"Apache Apex is a Hadoop YARN native platform that unifies stream and batch processing. It processes big data-in-motion in a way that is highly scalable, highly performant, fault-tolerant, stateful, secure, distributed, and easily operable. And DataTorrent-RTS is wrapper around Apache Apex, which provides user interface and many other monitoring and diagnosis capabilities. DataTorrent-RTS also has a community edition which is free to use. With increasing adoption of the Apex and DataTorrent-RTS platforms, we need easy ways to deploy and manage Apache Apex and DataTorrent RTS. Bigtop packages Hadoop RPMs and DEBs to manage and maintain Hadoop cluster. We would like to present the integration of Apache Apex with Bigtop. Also, Apache Ambari is widely used for provisioning, managing, and monitoring Apache Hadoop clusters. We will present how to install and manage DataTorrent-RTS using Apache Ambari. The session will also cover technical details of integrations.",
      "abstract2":"This talk will be about the integration of Apache Samoa, a distributed streaming machine learning framework (https://samoa.incubator.apache.org) with Apache Apex, a distributed, scalable and fault-tolerant stream processing engine (https://apex.apache.org). Apache Samoa is a kind of WORA (write-once-run-anywhere) framework where algorithms developed on Samoa can be run on other distributed stream processing engines like Storm, Samza and Flink. This talk will introduce the integration story with Apache Apex and outline the process and the challenges therein. In addition, the talk will also dwell upon a case study using one of the algorithms to detail the dual architecture of next gen machine learning algorithms with both training and scoring in the same pipeline.",
      "time":"10:30 a.m. - 11:10 a.m.",
      "seq":'f',
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
    "id":15,  
      "title":"1. Apex runner for Apache Beam",
      "title2":"2. SQL on Apache Apex",
      "author":"Sandeep Deshmukh",
      "author2":"Chinmay Kolhatkar",
      "bio":"Engineering @DataTorrent",
      "abstract2":"<p>Big data has an interesting history. In past few years, massive amounts of data have been generated for processing and analytics, and enterprises started using Big Data Ecosystem like Hadoop, YARN to scale out. At the same time, the traditional SQL based database processing paradigm was still being widely used for various data processing, aggregation and analytics needs; so SQL was a very popular skill-set. And that is the genesis of notions such as SQL-on-Hadoop and related projects such as Apache Hive, Apache Drill and Apache Ignite.</p><p>Recently it has become apparent that in spite of ever increasing data, users are expecting to see quick results to help them make quick and accurate decisions. Usefulness of results starts to decrease as processing takes longer and longer, which is where one begins to see the value of real-time processing and analytics. Enter streaming technologies such as Apache Apex which is an enterprise-grade streaming technology which processes data at a very high throughput with low latency in a fault tolerant way while providing processing guarantees like exactly-once. In all this change in processing requirement, the requirement related to SQL still remained constant. We took this as an opportunity and integrated Apache Apex with Apache Calcite to allow SQL-lovers and experts to work with SQL for their data analytics but now on data-in-motion. This talk covers how SQL can be used to represent simple workflows in the streaming technology of Apache Apex. We will cover the SQL APIs of Apache Apex that can be used to launch a streaming Apex DAG.</p>",
      "abstract":" Apache Beam provides an advanced unified programming model, allowing you to implement batch and streaming data processing jobs that can run on any execution engine - called a runner. The Apex Runner executes Apache Beam pipelines using Apache Apex as an underlying engine. The runner has broad support for the Beam model and supports streaming and batch pipelines. In this talk, we would demonstrate use of Apex runner to execute a Beam pipeline.",
      "time":"11:10 a.m. - 11:50 a.m.",
      "seq":'g',
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
    "id":16,  
      "title":"1. Complex Event Processing with Apache Apex and Drools",
      "title2":"2. Integration of DeepLearning4j Library with Apache Apex",
      "author":"Priyanka Gugale Shah",
      "bio":"Engineering @DataTorrent",
      "abstract":"<p>Big data has an interesting history. In past few years, massive amounts of data have been generated for processing and analytics, and enterprises started using Big Data Ecosystem like Hadoop, YARN to scale out. At the same time, the traditional SQL based database processing paradigm was still being widely used for various data processing, aggregation and analytics needs; so SQL was a very popular skill-set. And that is the genesis of notions such as SQL-on-Hadoop and related projects such as Apache Hive, Apache Drill and Apache Ignite.</p><p>Recently it has become apparent that in spite of ever increasing data, users are expecting to see quick results to help them make quick and accurate decisions. Usefulness of results starts to decrease as processing takes longer and longer, which is where one begins to see the value of real-time processing and analytics. Enter streaming technologies such as Apache Apex which is an enterprise-grade streaming technology which processes data at a very high throughput with low latency in a fault tolerant way while providing processing guarantees like exactly-once. In all this change in processing requirement, the requirement related to SQL still remained constant. We took this as an opportunity and integrated Apache Apex with Apache Calcite to allow SQL-lovers and experts to work with SQL for their data analytics but now on data-in-motion. This talk covers how SQL can be used to represent simple workflows in the streaming technology of Apache Apex. We will cover the SQL APIs of Apache Apex that can be used to launch a streaming Apex DAG.</p>",
      "abstract2":"Neural nets are modeled after human brain and are designed to recognize patterns. Deeplearning4j supports many of deep learning algorithms. The library includes distributed parallel versions of all supported algorithms. This is important, as deep learning are compute intensive and when working with big data it's even more challenging to calculate results in business time. The library already has integrations with Hadoop and Spark. Apache Apex is a Hadoop YARN native platform used for real-time computations on big data. We aim to integrate Deeplearning4j with Apache Apex which will enhance the implementation of deep learning models in distributed and stream processing environments.",
      "time":"11:50 a.m. - 12:30 p.m.",
      "seq":'h',
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
    "id":17,  
      "title":" 1. Running Spark Libraries on Apache Apex",
      "title2":"2. Migrating Applications from Storm to Apex",
      "author":"Bhupesh Chawda",
      "author2":"Tushar Gosavi",
      "bio":"Engineering @DataTorrent",
      "abstract":"<p>This talk will be about an adapter that we are working on which allows us to run Apache Spark code on Apache Apex. Apache Apex is well known for its stream processing capabilities like scalability, fault-tolerance and stateful guarantees. Additionally, it stands out due to its highly operable nature and ease of use. Apache Spark has a rich set of libraries including Spark MLLib, GraphX etc. Although Spark specializes in a lot of useful libraries, it is often the second choice to Apex where high speed, low latency, fault tolerant processing is the requirement.</p><p>Therefore, that we started working on getting Spark's libraries to run on Apex's platform. Resilient Distributed Dataset (RDD) is the fundamental abstraction for data in Spark and this is the center of our focus. We plan to model the capabilities of the Spark RDD by wrapping the functionalities into Apex operators and connecting them to form a Directed Acyclic Graph (DAG). This is done with minimal code change on part of the user while still allowing the same functionality on an easy and operable platform. Furthermore, we take advantage of the lazy evaluation of RDD and run the DAG for each sub-operation only when the value is actually needed. This way we get the advantage of Sparkâ€TMs libraries on Apache Apex. This will help the Apex users to run Spark code on Apache Apex platform. Our current work focuses on Spark's MLLib algorithms.</p>",
      "abstract2":" Storm is an early stream processing framework which made streaming analytic available for masses. It introduced some interesting concept and made lambda architecture popular. Lately organisations using strom at high scale have started noticing limitation of the platform and looking for alternatives. Apache Apex is latest generation of enterprise grade stream processing platform, which overcomes many of the Apache Storm limitations. In this talk we will explain similarities and difference between the two platforms and how Apex can help to overcome the limitations of Storm.",
      "time":"12:30 p.m. - 01:10 p.m.",
      "seq":'i',
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
      "title":"Lunch",
      "time":"1:10 p.m. - 2:00 p.m.",
      "color":"#009688",
      "seq":'j'
    },
    {
    "id":19,  
      "title":"Thinking in Streaming",
      "author":"Chinmay Kolhatkar",
      "author2":"Dr. Sandeep Deshmukh",
      "bio":"Engineering @DataTorrent",
      "abstract":"The programming models have matured from single threaded to multi-threaded to distributed computations. In distributed computing space, one of the pioneer developments was the introduction of MapReduce programming paradigm (introduced by Apache Hadoop) which claimed how to efficiently do batch processing where data is processed as a dataset using commodity hardware with good ROI. The batch processing paradigm supported by MapReduce quickly got into adoption and became popular. This solved majority of the software industry problems until recently it became apparent that even though large amounts of data could be processed, the results were only available after the entire processing was done which delayed decision making. This brought in the concept of real-time and stream processing. In this approach, an attempt was made to process the incoming data as soon as it arrived while giving the results early enough for decision making. While some brilliant streaming engines are being developed, it's equally important to emphasize on how to develop apps in a streaming way. This is a paradigm shift in thought process for application developers from batch processing to stream processing. This talk covers the journey of computation from batch to stream processing and the change in thought process involved for designing application starting from the problem statement. The talk is specifically targeted towards designing of streaming applications as compared to batch applications using various use cases allowing users to consider the streaming way for existing batch problems / solutions.",
      "time":"02:00 p.m. - 02:30 p.m.",
      "seq":'k',
      "track":"Platform Track",
      "color":"#216F1A"
    },
    {
    "id":20,  
      "title":"Deduplication at scale",
      "author":"Francis Fernandes",
      "author2":"Bhupesh Chawda",
      "bio":"Engineering @DataTorrent",
      "abstract":"Duplicates occur frequently across a large variety of data sets. Duplicate removal often termed \"duplication\" is a very common processing step in most of the ETL scenarios. De-duplication in real-time requires that the latency of the application stay within defined bounds. Additionally, data arriving at high speeds poses new challenges in guaranteeing these latency bounds. In this talk, we'll present a system to de-duplicate data at scale in real time using Apache Apex. We'll talk about use cases for removal of duplicates in a streaming setting and introduce the concept of expiry often used in streaming use cases. Stream processing applications built on Apache Apex typically deal with a large volume of data and hence, it is not practical to store this in memory. Any in-memory technique would fail in this scenario and would need more sophisticated techniques. To address this issue, Apex Malhar (library of operators for Apache Apex project) provides a utility called Managed State which helps us to persist large amount of data on HDFS while allowing for asynchronous and cached IO. This makes it a very good candidate for streaming use cases; which is demonstrated by the de-duplication operator (also available in Apex Malhar library). The talk will introduce the techniques like large state persistence (using managed state) and asynchronous processing that go into guaranteeing low latency scalable processing for huge incoming data.",
      "time":"02:30 p.m. - 03:00 p.m.",
      "seq":'l',
      "track":"Platform Track",
      "color":"#216F1A"
    },
    {
    "id":21,  
      "title":"A special case in streaming",
      "author":"Bhupesh Chawda",
      "bio":"Engineering @DataTorrent",
      "abstract":"<p>Batch use cases have dominated most of the big data world. Stream processing is becoming more and more popular given its huge potential. However, with the advent of stream processing, there are certain misconceptions introduced regarding processing batch use cases in a stream processing system.</p><p>This talk will be about executing batch use cases using a stream processing system like Apache Apex. It would be more about how a batch is a special case of streaming and is but natural, to process batches of data using a stream processor. We would dwell on some of the misconceptions in stream processing systems and give details on how batch processing on Apache Apex would look like to the user.</p>",
      "time":"03:00 p.m. - 03:30 p.m.",
      "seq":'m',
      "track":"Platform Track",
      "color":"#216F1A"
    },
     {
    "id":22,  
      "title":"Smart Partitioning in Apex",
      "author":"Tushar Gosavi",
      "bio":"Engineering @DataTorrent",
      "abstract":" Stream processing is becoming increasingly popular because of speed at which results are available for consumption by the organisations. Typical scenarios include consuming data from message queue and performing transformation and extracting important attributes from the data, which are later saved to external store or files. These applications keep running for months without taking any downtime. These applications have different resource requirement during peak hours and off-peak hours. Such application can make use of dynamic scalability feature of Apache Apex to optimally manage cluster under varying load. In this talk will dwell upon how to achieve smart partitioning under varying load in Apache Apex.",
      "time":"03:30 p.m. - 04:00 p.m.",
      "seq":'n',
      "track":"Platform Track",
      "color":"#216F1A"
    },
    {
    "id":23,  
      "title":"Comparison of Apex and Spark Streaming",
      "author":"Bhupesh Chawda",
      "bio":"Engineering @DataTorrent",
      "abstract":"Apache Apex is a native stream processing platform offering high throughput and low latency. It has become a popular choice for most big data use cases (stream processing as well as batch) and is well known for its operability and time to market advantages.Spark streaming is another processing engine based on micro-batching which offers high throughput and a high level API for development of big data applications. In this talk, we would give a quick overview and walk through the differences between these systems. We would cover fault tolerance, low latency, connectors to sources/destinations, partitioning, processing guarantees, computation and scheduling model, state management and dynamic changes. We will also discuss how these features affect time to market and total cost of ownership.",
      "time":"04:00 p.m. - 04:30 p.m.",
      "seq":'o',
      "track":"Platform Track",
      "color":"#216F1A"
    },
    {
    "id":24,  
      "title":"Leveraging Apex as a Data Streaming option in Kogni",
      "author":"Vijay Datla",
      "author2":"Shantanu Mirajkar",
      "bio":"Lead - Big Data Practice @Clairvoyant India Pvt Ltd",
      "bio2":"Managing Director @Clairvoyant India Pvt Ltd",
      "abstract":"About Kogni:&nbsp;Kogni is a suite of end-to-end tools and solutions for your Data Lake, designed to help data&nbsp;scientists, engineers, and business users unlock the value of data at every stage of the data&nbsp;journey, from data federation to decision making.<br>Below are few capabilities that help accelerate your Data Lake Implementations in a fast, secured and governed manner.<br>&nbsp; &nbsp; &nbsp; &nbsp; a. Ingesting/Processing data into the data lake in batches and real-time<br>&nbsp; &nbsp; &nbsp; &nbsp; b. Inspecting the data pre-post ingestion<br>&nbsp; &nbsp; &nbsp; &nbsp; c. Securing the data in Data Lake</p><p>&nbsp; &nbsp;Kogni removes the grunt work associated with building out a Data Lake and the masking,&nbsp;tokenization and anonymization capabilities of the platform helps the customers focus on building&nbsp;secure Data Lakes right from day one.&nbsp;</p><p>Integration with Apex: &nbsp;We are working on utilising Apache Apex as one of the options in the platform for Data Ingestion and processing in Realtime. This is to facilitate the client to configure the data&nbsp;ingestion/processing settings for Apex in case they prefer to use Apex over other similar technologies like Apache Spark.</p>",
      "time":"02:00 p.m. - 02:30 p.m.",
      "seq":'k',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":25,  
      "title":"Streaming Monitored – Digital Marketing Campaigns",
      "author":"Nilesh Padbidri",
      "bio":"CEO @Genius Minds",
      "abstract":"Digital Marketing Campaigns when monitored near real-time, guarantee both – the Ad Network and Advertiser, better visibility of the marketing campaign performance. This visibility translates into instant notification mechanism and course correction, meaning enhanced ROI for Advertisers and redeemed credibility for Ad Networks. Come to understand, how Ad Tech companies leverage and benefit from Streaming Data.",
      "time":"02:30 p.m. - 03:00 p.m.",
      "seq":'l',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":26,  
      "title":"Hadoop Ingestion made easy",
      "author":"Devendra Vyavahare",
      "bio":"Engineering @DataTorrent",
      "abstract":" In today’s era, data has become the most valuable commodity. Organizations are capturing data from various channels to gain insights about their business. Data driven solutions help organizations to reduce the operational costs by optimizing their processes. It can also help in up-selling their business by providing value additions in their offerings. Data engineering teams in these organizations are building pipelines using hadoop big data eco-system for collecting large volume data. It allows them to build cost-effective solution based on open source scale-out architecture. Thus avoiding higher entry-cost, vendor lock-ins. Building such pipelines for data ingestion needs design considerations not just for functional requirements but also for operational requirements. Handling operational challenges like scalability, fault-tolerance, high availability, SLA requirements, security certifications, monitoring application state, performance tuning etc. consumes more than 80% of the efforts from data engineering teams. Apache Apex is built for addressing these operational challenges. Ingestion pipelines built on top of Apache Apex drastically reduces burden on the data engineering teams to handle these issues. In this talk, we will discuss about how use of Apache Apex eases the process of building data ingestion pipelines.",
      "time":"03:00 p.m. - 03:30 p.m.",
      "seq":'m',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":27,  
      "title":"AppHub - Collection of ready to use customizable big data applications",
      "author":"Devendra Vyavahare",
      "bio":"Engineering @DataTorrent",
      "abstract":" Enterprises are now looking at big data technologies as cost-effective solutions to handle data at scale using technology stack based on open source scale-out architectures. Engineers from these organizations evaluate different technologies as proof-of-concept (POC) to solve their use-case. Very small fraction of these POC projects actually reach to the production deployment. Main challenges faced by the engineers lies in the operational aspects such as scalability, fault-tolerance, SLA requirements for latency, throughput, fine-tuning the performance, debugging. Datatorrent offers AppHub : a repository of app-templates which are ready to use, customizable, open-sourced applications built on top of Apache Apex for the commonly observed use-cases. These app-templates serve as an accelerator for the application developers because they take care of the operational challenges. Application developer can focus on the core business logic in the application and rely on the Apache Apex platform to handle the nitty-gritty about operability. This significantly reduces the time to market for the application. AppHub comes with rich set of features for monitoring, debugging the applications. It also offers visualization to monitor key metrics such as latency, throughput, resource usages etc. This talk is a walkthrough about Why? What? How? for the AppHub with live demo.",
      "time":"03:30 p.m. - 04:00 p.m.",
      "seq":'n',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":28,  
      "title":"Data Framework with DataTorrent (powered by Apache Apex)",
      "author":"Manjul Bhatt",
      "bio":"Tech Lead @Tech Mahindra ",
      "author2":"Aniket Yeole",
      "bio2":"Solution Designer @Tech Mahindra",
      "abstract":" As the Data Technology & Engineering group at Tech Mahindra starts implementing its Data Movement framework, there is a need to find a new solution for Data Processing that is cost efficient, cloud computing ready, and supports the client's Target State Architecture. The goal is to have a Unified BATCH and NRT Data Processing Platform, which is Enterprise Ready. Batch Data Processing Platform: We want to be able to use DataTorrent (powered by Apache Apex) capabilities to develop a Typical Batch file data processing solution, such as to process Full Refresh set of files and compare recent set to previous set to generate Delta files with CDC (Change Data Capture) Insert/Update/Delete indicators per Delta record in target set of Delta output files. We must be able to read/write to Hadoop File System and/or HTTPS GET and POST integration for the input and output files respectively. NRT Data Processing Platform: We want to be able to use DataTorrent (powered by Apache Apex) capabilities to develop a Typical Near-Real-Time data processing solution such as to subscribe to Golden Gate CDC messages via JMS or Kafka, parse message content, store message content to Relational DB, transform message with enrichment/lookup from DB, and be able to convert to JMS and publish to JMS Broker. We have checked for the feasibility of the proposed solution to the above scenarios, using DataTorrent (powered by Apache Apex). We've found that DataTorrent (powered by Apache Apex) has been compatible with our Target State Architecture and Platform roadmap for our problem scenarios.",
      "time":"04:00 p.m. - 04:30 p.m.",
      "seq":'o',
      "track":"Application Track",
      "color":"#5145D2"
    },
    {
    "id":29,  
      "title":"Business Insights using Social Media",
      "author":"Abhijat Shukla",
      "bio":"Founder, CEO @ThinkBumblebee",
      "abstract":" Business Challenge -&nbsp;A CPG brand wants to run a new version of their flagship campaign. They want new ways to<br>understand how their audience is currently engaging with the campaign and its theme. Using social&nbsp;media data the client wants to provide insights to its marketing team.<br>&nbsp; &nbsp;The task at hand is to identify stories from consumer generated content by category, geography&nbsp;and multiple different filters. The data sources that need to be tapped into are Facebook, Instagram,&nbsp;Twitter and industry specific blogs and forms.&nbsp;The Task for Data Scientists -&nbsp;The client wants to identify<br>&nbsp; &nbsp; • The levels of engagement around various themes<br>&nbsp; &nbsp; • The type of consumer generated content shared around specific themes<br>&nbsp; &nbsp; • Key phrases that the audience resonates with<br>&nbsp; &nbsp; • Probable new phrases which should resonate with their target audience</p><p>Dataset – Unstructured text and image data from Facebook, Instagram, Twitter<br>Frequency – Historical Data for 3 months + Real Time<br>Type of analytics – Topic modelling, photo clustering</p><p></p>",
      "time":"02:00 p.m. - 02:30 p.m.",
      "seq":'k',
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
    "id":30,  
      "title":"End-to-end Exactly-Once with Apache Apex",
      "author":"Hitesh Kapoor",
      "bio":"Engineering@Datatorrent",
      "author2":"Priyanka Gugale Shah",
      "bio2":"Engineering@Datatorrent",
      "abstract":"Apache Apex unifies batch and stream processing, while also offering distinct advantages for streaming application development. There are some unique features provided by Apache Apex- low-latency processing, scalability, high availability, fault tolerance, operability etc. One of the key elements of Apex, which makes it robust and reliable, is fault tolerance. Apex guarantees no loss of data and computational state and also provides capabilities to the application to possess event processing guarantee like 'exactly-once'. Exactly once is an enhancement to the 'fault tolerant' feature that ensures that the state in stateful operators is correctly restored after a failure. This makes sure that the final output of DAG will be produced exactly once, irrespective of any type of failure of any operator in the DAG, and this refers to end-to-end exactly once. Hence, End to end - \"exactly once\" is the combination of at-least-once semantics, idempotent processing, and state checkpointing, where idempotent behavior will be provided by operator and state checkpointing will (should) be done by platform. Automatic recovery in Apex, in the event of failure, ensures that processing will resume from where it left off hence the state of the operator is restored. In stream processing systems processing guarantees are compared frequently. The cardinal focus is on the platform in isolation which does not take into account interaction with external systems. Although the platform should provide guarantees for data reliability, it cannot by itself provide a guarantee like exactly-once when external systems are involved. However, the stream processing platform is seldom used in isolation. Apex can deliver exactly-once semantics through the connectors, working in conjunction with the engine. In this presentation, we will give a brief idea about exactly once semantic and demonstrate, using a simple word count example, how Apex delivers exactly once.",
      "time":"02:30 p.m. - 03:00 p.m.",
      "seq":'l',
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
    "id":31,  
      "title":"Runtime Optimization of Join Location in Parallel Data Management Systems",
      "author":"Bikash Chandra",
      "bio":"PhD student, IIT Bombay",
      "abstract":" Applications running on parallel systems often need to join a streaming relation or a stored relation with data indexed in a parallel data storage system. Some applications also compute UDFs on the joined tuples. The join can be done at the data storage nodes, corresponding to reduce side joins, or by fetching data from the storage system, corresponding to map side join. Both may be suboptimal: reduce side joins may cause skew, while map side joins may lead to a lot of data being transferred and replicated. We present techniques to make runtime decisions between the two options on a per key basis, in order to improve the throughput of the join, accounting for UDF computation if any. Our techniques are based on an extended ski-rental algorithm and provide worst-case performance guarantees with respect to the optimal point in the space considered by us. Our techniques use load balancing taking into account the CPU, network and I/O costs as well as the load at clients and servers. We have implemented our techniques on Hadoop and the Muppet stream processing engine. Our experiments show that our optimization techniques provide significant improvement in throughput over existing techniques.",
      "time":"03:00 p.m. - 03:30 p.m.",
      "seq":'m',
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
    "id":32,  
      "title":"1. Real-time streaming of events to predict noise",
      "title2":"2. Building Stream-Analytic Ecosystems for Enterprises",
      "author":"Mataprasad Agrawal",
      "bio":"Sr. Architect, Analytics @Persistent Systems Ltd",
      "author2":"Raman Ganesh",
      "seq":'n',
       "bio2":"Senior Data Engineer @The Data Team",
      "abstract":"<p>As part of Data Strategy Consulting, at The Data Team, we've helped Enterprises build Big Data Analytic capabilities and Stream analytic products/services.</p> From experience, we've seen needs for a complete ecosystem covering different tools, processes and skills towards agile streaming analytics. Agile analytics with streaming capabilities requires different teams to coordinate and execute across a range of tools and platforms. Building a process that facilitates iterative execution with increasing productivity under such environments requires, not only a guiding process but a platform to facilitate the same. The Hadoop ecosystem with streaming analytic engines such as Apache Apex, empowers enterprises build sophisticated data pipelines. When augmented with an agile analytics process, it facilitates the Enterprise towards a complete ecosystem. One such platform capability, facilitating process, is via Metaprogramming.<p>Metaprogramming is a programming technique in which computer programs can treat programs as their data. It means that a program could be designed to read, generate, analyse or transform other programs, and even modify itself while running. Building domain driven Domain Specific Language , converging productivity benefits of stock language platforms(like Java) for analytics, covering different stages right from ideation to Realization for analytic stream processing needs, enabling formal systems to verify via domainâ€TMs characteristics to verify the data-pipeline even before materializing, helping manage the usual iterative productivity requirements of multi-versioned pipelines, security, facilitating domains to refactor pipeline itself with possible autosuggestion ,deriving domain driven type-systems for pre-materialization verification and finally bringing all the usual engineering features of a programming language ecosystem , directly to the domain , in its own friendly language. We will look at the capabilities such platforms can bring on top of Apache Apex, as well as an iterative way to quickly prototype and build such platforms. In an interactive demo, we shall showcase a Domain Specific Language platform built on top of Apache Apex and a quick demo on how more capabilities can be added to the same. The demo shall also include a brief introduction to Meta-programming and meta-programming systems.</p>",
      "time":"03:30 p.m. - 04:00 p.m.",
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
    "id":33,  
      "title":"1. Unified ETL connector",
      "title2":"2. Comparative Effectiveness using Big Data Paradigm in Health Care Industry",
      "author2":"Madhavi Thikhe",
      "bio2":"Senior Data Engineer @The Data Team",
      "abstract":"Big data begets variety, velocity and volume. There is a growing stream of new ETL tools getting adopted with each one claiming having its own distinct advantage. Organizations have to rely on more than one tool, and each one of them demands a robust architecture to seamlessly connect to source systems, securely store and transfer to target systems, etc. The ETL tools have to support very high throughput that demands a big data intermittent clusters. Apache Apex enables customers with many ETL adoptions for log processing, billing, big data ingestion and movement, fast real-time streaming analytics, fast batch, database off-load, alerts/monitoring, machine scoring models, and real-time dashboarding. Apache Apex is being used for both streaming as well as batch use cases. Aaum takes great pride in showcasing Unified ETL connector based of Apache Apex that is used widely for solving its business problems.",
      "abstract2":"<p>Comparative Effectiveness Analysis is designed for health-care service providers to help informed decisions by providing evidence for effectiveness, pros & cons of different services. Healthcare service providers, over the years, has gathered a humongous amount of data for patients, treatments, tests, procedures, drugs, costs of services, surveys etc. If the service providers do not extract the best possible information by analyzing this data, then it is just lying almost dead in their data warehouses for years. Health service providers deserve to know the most appropriate and objective information and trends for treatments, drugs and most importantly the patient's feedback about their services.</p><p>This heath care data comes true on all big data characteristics. It has larger than large historical data, lots of data sources are available (ranging from big hospital chains to small clinics), these data sources are always live and the data is very much dynamic. To analyze this data and extract the trends/ information requires a strong technical foundation and analytical capabilities. Right from Data Acquisition phase to Business Intel, big data technology stack offers a variety of solutions to handle the health care analysis problems. Apex like solutions can come to rescue when this data analysis requires streaming.</p>",
      "time":"04:00 p.m. - 04:30 p.m.",
      "seq":'o',
      "track":"Lightning Talks and Integrations",
      "color":"#BF1A25"
    },
    {
      "title":"Tea and networking",
      "time":"04:30 p.m. - 05:00 p.m.",
      "color":"#009688",
      "seq":'p'
    },
    {
      "title":"Panel Discussion - \"Real time in real world\"",
      "time":"05:00 p.m. - 06:00 p.m.",
      "color":"#253646",
      "seq":'q'
    }

  ],

  "workshop":[
    {
    "id":36,  
    "title" : "Setup/Verification of dev setup and cluster setup",
    "time" : "09:00 a.m. - 10:00 a.m.",
    "color" : "#9E4B45"
    },
    {
    "id":37,  
    "title" : "Interfacing with Apex",
    "time" : "10:00 a.m. - 11:00 a.m.",
    "color" : "#5992BF"
    },
    {
    "id":38,  
    "title" : "Develop and Launch First Application",
    "time" : "11:00 a.m. - 11:30 a.m.",
    "color" : "#E6618F"
    },
    {
    "id":39,  
    "title" : "Developing De-duplication Operator",
    "time" : "11:30 a.m. - 1:00 p.m.",
    "color" : "#C7281D"
    },
    {
    "id":40,  
    "title" : "Break for Lunch and Networking",
    "time" : "1:00 p.m. - 2:00 p.m.",
    "color" : "#009688"
    },
    {
    "id":41,  
    "title" : "Static Partitioning of Dedup operator",
    "time" : "02:00 p.m. - 4:00 p.m.",
    "color" : "#3F51B5"
    },
    {
    "id":42,  
    "title" : "Demo on Dynamic Partitioning of Dedup Operator",
    "time" : "04:00 p.m. - 5:00 p.m.",
    "color" : "#E28C0D"
    }

  ]
};



app.controller('agendaController', ['$scope','$http', function($scope,$http){
   
$scope.talks = data.conference;
$scope.workshop = data.workshop;
}]);
app.controller('detailsController', ['$scope','$stateParams', function($scope,$stateParams){
				
	window.scrollTo(0,0);
	var talk_id = $stateParams.id;
	var tal; 
	angular.forEach(data.conference, function(talk){
		if (talk.id == talk_id) {
			tal = talk;
			return;
		}
	});

	$scope.talk =  tal;
	
}]);


app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/agenda');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        
        .state('agenda', {
            url: '/agenda',
            templateUrl: 'partial-agenda.html',
            controller:'agendaController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('details', {
        	url:'/:id',
        	templateUrl:'partial-details.html',
        	controller:'detailsController'
            // we'll get to this in a bit       
        });
        
});



// app.initialize();