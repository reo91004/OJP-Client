# Use Ubuntu 24.04 as the base image
FROM ubuntu:24.04

RUN apt clean && rm -rf /var/lib/apt/lists/*


# update package lists
RUN apt update && apt upgrade -y

# Update and install 
RUN apt install -y\
    curl\
    gnupg\
    ca-certificates \
    git &&\
    rm -rf /var/lib/apt/lists/*

# Add NodeSource repository for Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

#Install Node.js 
RUN apt update &&\
    apt install -y nodejs&&\
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Use bash as the default shell
SHELL [ "/bin/bash", "-c" ]
