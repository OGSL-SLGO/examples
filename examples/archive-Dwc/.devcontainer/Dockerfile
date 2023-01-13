FROM ghcr.io/rocker-org/devcontainer/r-ver:4

ENV NB_USER=rstudio

RUN /rocker_scripts/install_jupyter.sh


# RUN apt-get update && \
#     apt-get -y install python3-venv python3-dev && \
#     apt-get purge && \
#     apt-get clean && \
#     rm -rf /var/lib/apt/lists/*


# RUN pip3 install --no-cache-dir jupyter-rsession-proxy

# RUN R --quiet -e "devtools::install_github('IRkernel/IRkernel')" && 
#     R --quiet -e "IRkernel::installspec()"