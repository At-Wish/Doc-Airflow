+++ 
archetype = "default" 
title = "PiPy installation" 
weight = 1
keywords     = "Apache Superset documentation, Apache Superset, Superset, Open source reporting, Shantanu Khond, At wish, Apache kafka installation"
+++


#### Installation of Apache Airflow on Python Virtual Environment

In this tutorial you will find steps to install apache airflow on python virtual environment. You can follow the document and watch video which provides more details on the installation. 

###### Video To Follow
{{< youtube "https://youtu.be/o__aG-oVvUw" >}}

###### Steps To Install

* Update Ubuntu/Debian

    ```bash

    sudo apt update -y & sudo apt upgrade -y

    ```


* Create app directory for superset and dependencies

    ```bash
    sudo mkdir /app
    sudo chown user /app
    cd /app
    ```

* Create python environment

    ```bash
    mkdir airflow
    cd airflow
    python3 -m venv airflow_env
    . airflow_env/bin/activate
    pip install --upgrade setuptools pip
    ```

* Install *Apache Airflow*

    ```bash
    pip install apache-airflow apache-airflow-providers-google
    ```


* Setup environment variable 

    ```bash
    export AIRFLOW_HOME=/app/airflow
    ```

* Create Airflow Configuration file

    ```bash
    airflow config list --defaults > "${AIRFLOW_HOME}/airflow.cfg"
    ```

* Configure Airflow configuration file if needed such as Airflow metadata db if you want to use any other database than
    sqlite. If you use other db then you can also change executor to `LocalExecutor` in config file. In the config file this will be commented you can uncomment this and use `LocalExecutor` as default executor is sequentialExecutor which does not support parallelism because of sqlite.  

    For postgresql add
    `sql_alchemy_conn = postgresql://postgres:postgres@home.local:54321/airflow_meta?sslmode=require`



* Run following to setup airflow

    ```bash
    airflow db migrate

    airflow users create \
        --username admin \
        --firstname Shantanu \
        --lastname Khond \
        --role Admin \
        --email contact@shantanukhond.me
    
    
    airflow webserver --port 8080

    ```


* Now your airflow webserver should be running and accessible on port 8080 Lets create service to run both web server and scheduler (For executor I will write another page to use executors)

* Lets create Airflow and scheduler run script 
    1. Create Airflow webserver run script using `nano run_airflow.sh`
    Add following code in this
        ```bash
        #bash
        . airflow_env/bin/activate
        export AIRFLOW_HOME=/app/airflow/
        airflow webserver
        ``` 

    2. Create Airflow scheduler run script using `nano run_scheduler.sh`
    Add following code in this
        ```bash
        #bash
        . airflow_env/bin/activate
        export AIRFLOW_HOME=/app/airflow/
        airflow scheduler
        ``` 
    
    Add execute permission
    ```
    chmod +x run_airflow.sh
    chmod +x run_scheduler.sh
    
    ``` 

* Finally create services 
    1. First create airflow web service using following command
        `sudo nano /etc/systemd/system/airflow-webserver.service`
        And add following code in it
        ```bash
        [Unit]
        Description = Apache Airflow Webserver Daemon
        After = network.target

        [Service]
        PIDFile = /app/airflow/airflow-webserver.PIDFile
        Environment=SUPERSET_HOME=/app/airflow
        Environment=PYTHONPATH=/app/airflow
        WorkingDirectory = /app/airflow
        ExecStart = sh /app/airflow/run_airflow.sh
        ExecStop = /bin/kill -s TERM $MAINPID


        [Install]
        WantedBy=multi-user.target
        ```

    2. First create airflow web service using following command
       `sudo nano /etc/systemd/system/airflow-scheduler.service`
       Add following code in it
       ```bash
        [Unit]
        Description = Apache Airflow scheduler Daemon
        After = network.target

        [Service]
        PIDFile = /app/airflow/airflow-scheduler.PIDFile
        Environment=SUPERSET_HOME=/app/airflow
        Environment=PYTHONPATH=/app/airflow
        WorkingDirectory = /app/airflow
        ExecStart = sh /app/airflow/run_scheduler.sh
        ExecStop = /bin/kill -s TERM $MAINPID


        [Install]
        WantedBy=multi-user.target

       ```

* Finally lets enable and start service
    
    ```bash
    sudo systemctl daemon-reload
    sudo systemctl enable airflow-webserver.service
    sudo systemctl enable airflow-scheduler.service
    sudo systemctl start airflow-webserver.service
    sudo systemctl start airflow-scheduler.service
    ```