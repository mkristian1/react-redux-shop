export default class BookstoreService {
    data = [{
        id: 1,
        title: "Выйти из зоны комфорта",
        author: "Брайан Трейси",
        imgUrl: 'https://i4.mybook.io/p/512x852/book_covers/70/62/7062203d-7955-4db8-a5c7-dd713fc3a213.jpe?v2',
        price: 6000
    },
    {
        id: 2,
        title: "7 навыков высокоэффиктивных людей",
        author: "Стивен Кови",
        imgUrl: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img337_40.jpg',
        price: 4500
    }]
    getBooks() {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
       }, 700);
       })
    }
}