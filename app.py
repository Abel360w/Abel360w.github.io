from flask import Flask, render_template, request, redirect, url_for, Response
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/proxy', methods=['POST'])
def proxy():
    url = request.form['url']
    response = requests.get(url)
    return Response(response.content, content_type=response.headers['content-type'])

if __name__ == '__main__':
    app.run(debug=True)
