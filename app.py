from flask import Flask
from flask import render_template
from flask import request
import mysql.connector
from flask_cors import CORS
import json
mysql = mysql.connector.connect(user='Gopisadasivarao', password='Gopsss@143',
  host='74.234.2.104',
  database='student')
