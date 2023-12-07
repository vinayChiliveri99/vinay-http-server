# vinay-http-server

This project is a simple Node.js HTTP server that serves specific operations based on the requested endpoints. 
The server responds to various **HTTP GET requests** with different content types, including **HTML, JSON, UUID, specific status codes, and delayed responses**.

## Instructions

1. **Clone this repository:**

   ```bash
   git clone https://github.com/vinayChiliveri99/vinay-http-server
   

2. Navigate to the project directory:

   ``` bash
   cd vinay-http-server
   

3. Install the required dependencies:

   ``` bash
   npm install
   

4. Run the server:

    ```bash
    node index.js
    

5. Access the server endpoints:

- http://localhost:8080/html - Returns an HTML page.
- http://localhost:8080/json - Returns a JSON string.
- http://localhost:8080/uuid - Returns a UUID (UUID4).
- http://localhost:8080/status/{status_code} - Returns a response with the specified status code.
    - Example: http://localhost:8080/status/200 - Returns a response with a 200 status code.
- http://localhost:8080/delay/{delay_in_seconds} - Returns a success response after the specified delay.
    - Example: http://localhost:8080/delay/3 - Delays for 3 seconds before sending a response.


## Endpoints
- **/html**: Returns an HTML page.
- **/json**: Returns a JSON string.
- **/uuid**: Returns a UUID (UUID4).
- **/status/{status_code}**: Returns a response with the specified status code.
- **/delay/{delay_in_seconds}**: Returns a success response after the specified delay.


  
