exports.handler = async (event, context) => {
    try {
      const publishers = [
        {
          "id": 1,
          "publisher": "John Wiley & Sons",
          "country": "United States",
          "founded": 1807,
          "genere": "Academic",
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
          "publisher": "Pearson Education",
          "country": "United Kingdom",
          "founded": 1844,
          "genere": "Education",
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
        body: JSON.stringify(publishers),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*', // Permitir todas las solicitudes de origen
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: 'Failed to load publishers' }),
      };
    }
  };