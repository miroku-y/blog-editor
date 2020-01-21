FROM nginx
COPY ./build/ /usr/share/nginx/html/
COPY ./vhost.nginx.conf /etc/nginx/conf.d/blog-edit.conf
EXPOSE 80