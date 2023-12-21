const app = express();

app.get('/api/остатки', async (req, res) => {
  try {
    // Отправляем запрос на другой сервер и получаем данные об остатках
    const response = await axios.get('https://www.wildberries.ru/catalog/160737571/detail.aspx?targetUrl=EX');
    
    // Парсим данные и формируем массив объектов
    const data = response.data;
    const ostatki = data.map(item => (
      {
        article: item.article,
        sizes: item.sizes
      }
    ));
    
    // Отправляем массив объектов в качестве ответа
    res.json(ostatki);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});