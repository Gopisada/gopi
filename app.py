from flask import Flask
from flask import render_template
from flask import request
import mysql.connector
from flask_cors import CORS
import json
mysql = mysql.connector.connect(user='Gopisadasivarao', password='Gopsss@143',
  host='home.northeurope.cloudapp.azure.com',
  database='student')
if __name__ == "__main__":
 app.run(host='0.0.0.0',port='8080', ssl_context=('cert.pem', 'privkey.pem'))
