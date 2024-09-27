exports.handler = async (event, context) => {
    try {
      const authors = [
        {
          "id": 1,
          "author": "Abraham Silberschatz",
          "nationality": "Israelis / American",
          "birth_year": 1952,
          "fields": "Database Systems, Operating Systems",
          "books": [
            {
              "book_id": 1,
              "title": "Operating System Concepts"
            },
            {
              "book_id": 2,
              "title": "Database System Concepts"
            }
          ]
        },
        {
          "id": 2,
          "author": "Andrew S. Tanenbaum",
          "nationality": "Dutch / American",
          "birth_year": 1944,
          "fields": "Distributed computing, Operating Systems",
          "books": [
            {
              "book_id": 3,
              "title": "Computer Networks"
            },
            {
              "book_id": 4,
              "title": "Modern Operating Systems"
            }
          ]
        }
      ];
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Permitir todas las solicitudes de origen
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(authors),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*', // Permitir todas las solicitudes de origen
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Failed to load authors' }),
      };
    }
  };