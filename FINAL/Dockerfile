FROM postgres

RUN apt-get update
RUN apt-get install -y  vim

RUN adduser --disabled-password --gecos '' myuser

VOLUME /var/lib/postgresql/data

