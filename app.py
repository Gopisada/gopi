from flask import Flask
from flask import render_template
from flask import request
import mysql.connector
from flask_cors import CORS
import json
mysql = mysql.connector.connect(user='Gopisadasivarao', password='Gopsss@123',
  host='home.northeurope.cloudapp.azure.com',
  database='student')
