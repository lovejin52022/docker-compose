FROM python:3.7-slim
MAINTAINER jzeng <330913734@qq.com>

COPY ./requirements.txt /data/
COPY ./SpiderKeeper /data/SpiderKeeper
WORKDIR /data/

RUN \
  apt-get update && apt-get install -y --no-install-recommends --no-install-suggests \
      build-essential libffi-dev cl-cffi gcc curl libcurl4-openssl-dev libssl-dev wget vim \
      supervisor \
  && rm -rf /var/lib/apt/lists/* \
  && pip3 install -r requirements.txt

WORKDIR /data/SpiderKeeper/
RUN python3 setup.py install

RUN apt-get install -y tzdata  &&\
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime &&\
    echo "Asia/Shanghai" > /etc/timezone

COPY ./scrapyd.conf /etc/scrapyd/
VOLUME /etc/scrapyd/ /var/lib/scrapyd/
WORKDIR /var/lib/scrapyd/
EXPOSE 6800 5000