# Use Ubuntu 24.04 as the base image
FROM ubuntu:24.04

# update package lists
RUN apt update && apt upgrade -y

# Set the working directory
WORKDIR /app

# Update and install 
RUN apt install -y \
    curl gnupg ca-certificates &&\
    rm -rf /var/lib/apt/lists/*

# Add NodeSource repository for Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

#Install Node.js 
RUN apt update &&\
    apt install -y nodejs&&\
    rm -rf /var/lib/apt/lists/*

# Set up working directory
WORKDIR /app

# # Copy package files to install dependencies
# COPY package.json package-lock.json* ./

# # Install dependencies (this installs react, react-router-dom, redux, axios, etc.)
# RUN npm install
# # Copy the rest of the application source code
# COPY . .

# Use bash as the default shell
SHELL [ "/bin/bash", "-c" ]
