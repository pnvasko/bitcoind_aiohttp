# Simple project integration bitcoin rpc to Aiohttp based site.

API build by Python 3.7 + Aiohttp
UI build by Vue2 + Quasar  + vue-native-websocket

## Getting Started

Make sure your pip and python versions match the above recommendations.
Open a new terminal.
Install virtualenv: 
```
python3 -m env
```
Next activate it:
``` 
source ./env/bin/activate
```
Clone the repo, create and activate your virtualenv. Install the requirements to the virtualenv
``` 
pip install -r requirements.txt
``` 
Next you must change `config.yml`. The file should look something like:
``` 
customer_records:
- product_name: bitcoin
  bitcoin_rpc_address: localhost:18332 
  bitcoin_rpc_username: testuser012
  bitcoin_rpc_password: testuser012
``` 
Where are bitcoin_rpc_address - address you `bitcoind`  daemon, bitcoin_rpc_username and bitcoin_rpc_password - username and pasword for it.

After can start scripts:
``` 
python main.py
``` 
Can open Aiohttp web server http://localhost:8080 

### Testing scripts
Testing on Python 3.7, Linux 