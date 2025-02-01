# Use Ubuntu 24.04 as the base image
FROM ubuntu:24.04

# update package lists
RUN apt update && apt upgrade -y

# Update and install 
RUN apt install -y \
    curl\
    gnupg\
    ca-certificates \
    software-properties-common\
    wget\
    gnupg\
    git\
    bash\
    bash-completion\
    build-essential\
    gcc\
    g++\
    python3\
    python3-pip\
    python3-venv\
    vim &&\ 
    rm -rf /var/lib/apt/lists/*

# Add NodeSource repository for Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

#Install Node.js 
RUN apt update &&\
    apt install -y nodejs&&\
    rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
# WORKDIR /app/OJP-Client

# # Copy only the client directory into the container
# COPY ./OJP-Client .

# Set the working directory
WORKDIR /app

# Use bash as the default shell
SHELL [ "/bin/bash", "-c" ]
