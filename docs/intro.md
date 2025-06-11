---
title: Apache Airflow documentation
description: Get an overview of why to use Docker for Apache Airflow installation and what this guide covers.
keywords:
  - apache airflow
  - docker
  - introduction
  - guide overview
  - benefits
---


# Introduction

:::caution Disclaimer
This documentation is a personal project created for learning and exploration purposes. It is not official Airflow documentation. If you find any inaccuracies or missing information, please feel free to submit a pull request or contact me at [contact@shantanukhond.me](mailto:contact@shantanukhond.me).
:::

### What is Airflow?

Apache Airflow is an open-source platform used to build, schedule, and monitor workflows as code. By defining your data pipelines in Python, you gain the ability to create complex, dynamic, and easily maintainable automated processes.

For a more hands-on demonstration of the concepts covered here, you can follow along with the accompanying video playlist. [Getting Started With Airflow](https://youtube.com/playlist?list=PLH1gsHiD7Jxj0ZcYp5JFY0hXy-7KNFIGZ&si=XzsdfVfB3zC6WnQJ)..

### Why Use Airflow?

Airflow excels at managing workflows where tasks have multiple steps and dependencies. It's an essential tool for companies that need to reliably automate critical jobs, such as data engineering pipelines, machine learning model training, or infrastructure management. If your process involves steps that must execute in a specific order, Airflow is designed to handle that complexity.

### How Does Airflow Work?

At its core, Airflow organizes tasks using **Directed Acyclic Graphs (DAGs)**. While the name might seem complex, the concept is straightforward: it's a way to define the relationships between your tasks to ensure they run in the correct order, without creating infinite loops.

* **Tasks:** These are the individual units of work within your workflow, like downloading a file or processing data.
* **DAGs:** A DAG is the complete workflow, defining all the tasks and the dependencies between them.

The Airflow scheduler intelligently manages when and how your tasks run, while the web interface gives you a clear view to monitor their progress and troubleshoot any issues that arise.

### Key Features

* **Dynamic & Code-Based:** Since workflows are Python scripts, you can use code to create dynamic, flexible, and version-controlled pipelines.
* **Highly Extensible:** Airflow integrates seamlessly with common services like AWS, Google Cloud, and various databases. You can also write your own custom integrations.
* **Built to Scale:** It's designed to scale from simple workflows to orchestrating thousands of complex tasks across a distributed environment.
* **Comprehensive UI:** The user interface offers a detailed view of your pipelines, making it easier to track execution, manage schedules, and resolve problems.

### Common Use Cases

* **Data Engineering:** Automating ETL/ELT pipelines to move and transform data.
* **Machine Learning:** Orchestrating the steps in a model's lifecycle, from training to deployment.
* **Infrastructure Automation:** Scheduling and running operational tasks like system updates or backups.

### Getting Started

To begin using Airflow, you'll generally need:

* A **Python environment**, as Airflow is a Python framework.
* A **metadata database** (like PostgreSQL or MySQL) to store the state of your tasks and workflows.
* The **Airflow scheduler and webserver** to execute and monitor your pipelines.

### Cloud Services that uses Airflow
1. AWS: Amazon Managed Workflows for Apache Airflow (MWAA)
2. GCP: Google Cloud Composer
3. Azure: Workflow Orchestration Manager for Azure Data Factory

<!-- 
---

# Airflow Documentation Index

## 1. Core Concepts
- [DAG (Directed Acyclic Graph)](/core-concepts#1-dag-directed-acyclic-graph)
- [Tasks](/core-concepts#2-tasks)
- [Operators](/core-concepts#3-operators)
- [Scheduler](/core-concepts#4-scheduler)
- [Executor](/core-concepts#5-executor)
- [Airflow UI (Web Interface)](/core-concepts#6-airflow-ui-web-interface)
- [Sensors](/core-concepts#7-sensors)
- [Dependencies](/core-concepts#8-dependencies)
- [Hooks](/core-concepts#9-hooks)
- [Task Instances](/core-concepts#10-task-instances)

## 2. Installation
- [Using Pip](/installation/pip)
- [Using Docker](/installation/docker) -->