+++ 
archetype = "default" 
title = "Docker installation" 
weight = 2
keywords     = "Apache Superset documentation, Apache Superset, Superset, Open source reporting, Shantanu Khond, At wish, Apache kafka installation"
+++


#### Installation of Apache Airflow using Docker
In this tutorial you will find steps to install apache airflow using docker. You can follow the document and watch video which provides more details on the installation. 

###### Video To Follow
{{< youtube "https://youtu.be/AQuYwu2WolQ" >}}


###### Docker Installation


* Create a directory where you want to put airflow docker files along with dags. You can keep them in different directory but for this demo I will keep them in same directory 


* Create app directory for superset and dependencies

    ```bash
    sudo mkdir -p /app/airflow/docker
    sudo chown -R user:user /app
    ```

* now lets download the docker compose file with wget you can specify the version i am currently using latest i.e. `2.10.4`

    ```bash
    wget https://airflow.apache.org/docs/apache-airflow/2.10.4/docker-compose.yaml 
    ```


* Couple of things i would recommend to update in docker-compose.yml file are
    1. Change postgres version 13 to 16
    



* create directories
    ```bash
    mkdir -p ./dags ./logs ./plugins ./config
    ```

* Docker user needs a consistent user id for avoiding the permission issue hence we are create .env with userid of current user
    ```bash
    echo -e "AIRFLOW_UID=$(id -u)" > .env

    ```

* optionally you can edit default username password with following command

    ```bash
    echo -e "_AIRFLOW_WWW_USER_USERNAME=admin" >> .env
    echo -e "_AIRFLOW_WWW_USER_PASSWORD=admin" >> .env
    ```

       
* you can also set `AIRFLOW__CORE__LOAD_EXAMPLES` to `'false'`


*   To initialize everything

    ```bash
    docker compose up airflow-init
    ```

* To run airflow
    ```bash
    docker compose up
    ```


##### Building docker image with custom providers

###### Video To Follow
{{< youtube "https://youtu.be/mgVB1qKuMLY" >}}



* Create a dockerfile in the directory where you want all the files to be placed if you have followed we will stick with `\app\airflow\docker`

    ```bash
    cd \app\airflow\docker
    nano Dockerfile
    ```

* Inside this dockerfile copy following code 

    ```bash
    FROM apache/airflow:2.10.5
    USER root
    RUN apt-get update \
    && apt-get install -y --no-install-recommends \
            vim \
    && apt-get autoremove -yqq --purge \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
    USER airflow


    ```

* Lets build the image from dockerfile using `docker build -f dockerfile -t custom-airflow .`

* Now replace the `custom-airflow` airflow in `docker-compose.yml` and start server again with following command

    ```bash
    docker compose up -d
    ```