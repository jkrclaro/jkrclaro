#!/bin/bash

mv conf/bitnami.conf /opt/bitnami/apache2/conf/bitnami/bitnami.conf
/opt/bitnami/ctlscript.sh restart apache
