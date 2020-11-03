FROM nginx:1.19
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /docker-entrypoint.d/*
WORKDIR /docs
ADD deploy/nginx.conf /etc/nginx/conf.d/
ADD public /docs
