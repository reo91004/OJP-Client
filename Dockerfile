# Use Ubuntu 24.04 as the base image
FROM ubuntu:24.04

# update package lists
RUN apt update && apt upgrade -y

# Set the working directory
WORKDIR /app

# Update and install 
RUN apt install -y \
    software-properties-common\
    curl\
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
    vim

# Install Node.js and npm using NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt install -y nodejs

# Set up working directory
WORKDIR /app

# Use bash as the default shell
SHELL [ "/bin/bash", "-c" ]
