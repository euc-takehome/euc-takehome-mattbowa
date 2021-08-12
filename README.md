
## Getting Started

### Requirements

- Git
- Node
- Yarn or npm

### Enviromental Variables

Setup variables from .env.example

### Running the app

```
npm i && npm run start
```

### Running the tests

```
npm i && npm run test
```

### Testing with Postman

```
localhost:7000/api/patient/1
```

### Assumption 
Handling multiple answers from the same patient for the same question on different dates 
- Will utilse something along these line

```
interface Answers{
  medications: string
  allergies: string
}

interface Patient {
  firstName: string
  lastName: string
  dob: string
  answers: Answers[]
}
```