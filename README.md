
# Amazon Cypress Automation

This project contains Cypress automation tests for Amazon's website without login.

## Features

 5 automated tests develpoed in Cypress + TypeScript  using age Object Model (POM) structure and Dockerized execution  covering:

- Search for a product and verify details  
- Add product to cart  
- Category navigation flow  
- Dynamic recommendations in Today’s Deals  
- General flow without login  


---

## How to Run

### Clone the repository  
```bash
git clone https://github.com/Yaronmd/amazon_automation.git
cd amazon_automation
```

### Running tests with Docker

This project includes a Dockerfile based on `cypress/browsers:node16.16.0-chrome107-ff107`.  
Tests run in **Electron** headless mode inside the Docker container.

To build and run the tests:
```bash
chmod +x run_tests.sh
./run_tests.sh
```
---

**Command executed:**  
```bash
npx cypress run --browser chrome
```

---

## Notes

- The tests handle cross-border popups automatically.  
- Retry mechanism is applied where needed.  
- You can modify `cypress.config.ts` for changing baseUrl, retries, timeout.  
